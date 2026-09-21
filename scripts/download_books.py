"""Download only the open publisher PDFs listed in the local catalogue."""
import hashlib
import json
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "library" / "open"
MANIFEST = ROOT / "library" / "DOWNLOADS.json"
MAX_BYTES = 75 * 1024 * 1024


def main():
    sources = json.loads((ROOT / "library" / "SOURCES.json").read_text(encoding="utf-8"))
    records = json.loads(MANIFEST.read_text(encoding="utf-8")) if MANIFEST.exists() else {}
    DEST.mkdir(parents=True, exist_ok=True)
    failed = False
    for source in sources:
        target = (DEST / source["file"]).resolve()
        if target.parent != DEST.resolve() or target.suffix != ".pdf":
            raise ValueError("Unsafe catalogue filename")
        previous = records.get(source["id"])
        if target.exists():
            digest = hashlib.sha256(target.read_bytes()).hexdigest()
            if previous and previous["sha256"] == digest:
                print(f"Verified existing: {target.name}")
                continue
            raise ValueError(f"Existing file differs or lacks provenance: {target.name}; inspect it before replacing")
        try:
            request = urllib.request.Request(source["download"], headers={"User-Agent": "EnglishTraining/1.0 (educational personal library)"})
            with urllib.request.urlopen(request, timeout=60) as response:
                payload = response.read(MAX_BYTES + 1)
                final_url = response.url
            if len(payload) > MAX_BYTES or not payload.startswith(b"%PDF-"):
                raise ValueError("Response is not an acceptable PDF")
            # Exclusive creation never overwrites an existing learner file.
            with target.open("xb") as file:
                file.write(payload)
            records[source["id"]] = {
                "file": f"library/open/{target.name}", "bytes": len(payload),
                "sha256": hashlib.sha256(payload).hexdigest(), "source": source["download"],
                "resolvedUrl": final_url, "retrievedAt": datetime.now(timezone.utc).isoformat(),
                "license": source["license"], "modified": False
            }
            MANIFEST.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"Downloaded: {target.name} ({len(payload):,} bytes)")
        except (OSError, ValueError) as error:
            failed = True
            print(f"FAILED {source['id']}: {error}", file=sys.stderr)
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
