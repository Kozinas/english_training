# T01-documentation · Читать документацию: условия, версии, параметры и пути

[Топик T01](../modules/T01.md). Сгенерировано из data/*.mjs.

Предпосылки: [T01-interface](T01-interface.md).

## Цели контроля

- Объяснять функцию и требование грамматически точно
- Находить нужный раздел и подтверждать пересказ
- Сохранять условия, версии, единицы и границы
- Различать буквальное имя, placeholder и символы пути
- Понимать устный разбор документа и поправки
- Писать summary, запрос и исправленный отчёт
- Уточнять документ и проверять понимание в разговоре

## Механизм

### Чтение начинается с вопроса, а не перевода каждого слова

Документацию часто читают ради конкретного решения: подходит ли версия, какой файл нужен, что означает параметр. Сначала сформулируй вопрос: What does this tool do? What is required before export? Затем найди раздел, прочитай предложение вместе с условием и проверь, действительно ли оно отвечает на вопрос. Неизвестное слово не всегда останавливает чтение: иногда его роль видна из заголовка и примера. Но непонятное отрицание, число, имя параметра или предупреждение нельзя пропускать ради общего смысла. В этой подтеме Maple, Fern, Cedar и Birch — вымышленные инструменты: мы читаем и пишем, не устанавливаем ПО и не запускаем команды.

### Карта документа: что искать в каждом разделе

Overview обычно объясняет назначение; Before you begin/Prerequisites — подготовку; Reference/Options — точные параметры; Examples — конкретные иллюстрации; Troubleshooting — помощь при затруднении. README может объединять эти функции или ссылаться на другие страницы. Заголовок помогает искать, но не гарантирует полноту раздела и не доказывает правильность найденного ответа. Tutorial ведёт через учебный пример, reference перечисляет значения и ограничения; пример не обязательно покрывает все случаи. Сохрани название раздела и версию рядом со своим выводом: According to the Reference section, the default is ten records. Не выдавай общий обзор за проверенный ответ об одной опции.

### Назначение: supports, allows и lets

The tool supports text files — поддерживает тип файлов, а не уже обработал каждый файл. This option allows you to limit the preview строится allow + object + to-infinitive. This option lets you limit the preview использует let + object + base, без to. У singular tool/option в Present Simple появляются supports/allows/lets; после does в вопросе снова base: Does this version support it? Не смешивай This tool is supports и allows you limit. В более простом пересказе можно сказать You can limit the preview. Возможность функции, право пользователя и фактическое выполнение — разные сведения; can само не подтверждает, что действие произошло.

### Требование: requires и is required

The export requires a path — полное предложение с действующим subject export и смысловым requires. A path is required for export — другая модель: subject path, be и required. Нельзя удалить is из полного A path required или вставить его в The export is requires. В таблице краткая подпись Path required допустима как интерфейсный фрагмент, но в своём связном summary строй полные предложения. For export ограничивает требование задачей экспорта: оно не обязательно относится к просмотру. You need write permission to create a file называет требуемое условие, а не подтверждает, что разрешение получено.

### Управление и сокращение фразы без потери смысла

Refer to the reference и depend on the working directory — полезные сочетания с определёнными предлогами. Русский вопрос «чего?» не выбирает of автоматически: the meaning of the option, but the result depends on the option. Without changing the file использует without + -ing, не without to change. The tool reads notes without changing the source связывает отсутствие изменения именно с описанным действием этого инструмента. В вопросе Could you explain where the reference is? внутри сохраняется subject + verb; не where is the reference. Для A2 достаточно точно собрать эти распространённые модели и перенести их в свой запрос, а не запомнить один текст целиком.

### Required внутри optional: читать область условия

Запись An output file is optional. If you use --output, a path is required не противоречива. Можно пропустить всю функцию экспорта; если её выбрать, значение пути необходимо. You do not have to export не означает You must not export. Do not export unless you have permission в данном контексте равно запрету без разрешения; разрешение само не обязывает экспортировать и не гарантирует успех. Only if вводит необходимое условие, не всегда полный список условий. Не переворачивай Only export if the directory is writable в If it is writable, export will definitely succeed. Сначала обозначь задачу и область каждого требования.

### Рекомендация, возможность и фактический результат

The guide recommends a separate copy — совет, а не запись о созданной копии. You should check the version рекомендует проверку, не сообщает, что она сделана. This may happen if the directory is missing описывает возможную связь: нельзя пересказывать как The directory was deleted. В правилах отдельных стандартов MUST/SHOULD могут иметь формальные определения; не переноси их на любой README только из-за заглавных букв. Слова required/recommended/optional нужно читать вместе с определениями конкретного документа. В учебном отчёте разделяй The guide says…, We checked… и We still need to check…; последнюю фразу не заменяй вымышленным успехом.

### Версия страницы и установленная версия

This page describes version 2.4 указывает область страницы. We have version 2.3 сообщает отдельный факт о среде. Introduced in 2.4 означает появление функции в этой версии по данному справочнику, а не автоматическое обновление компьютера. Найди matching reference или уточни фактически установленную версию; не рекомендуй upgrade как обязательное учебное действие. Номера версий обычно не десятичные дроби: в схеме с числовыми компонентами 2.10 идёт после 2.9. Однако схемы различаются, а короткое 2.4 не обещает SemVer. Major/minor/patch имеют специальные правила только там, где проект действительно принял такую систему.

### Параметр, аргумент и placeholder

В нашей легенде maple-view INPUT_FILE [--output OUTPUT_FILE] содержит буквальное имя инструмента, обязательное заменяемое значение INPUT_FILE и необязательную группу. --output — имя опции: его не переводят как --вывод. OUTPUT_FILE — место для значения пути, не название реально существующего файла. В других документах placeholders могут выделяться иначе; не делай вывод лишь по большим буквам. Термины parameter/argument в текстах употребляются с разной строгостью, поэтому сначала выясни практическую роль: имя настройки или передаваемое значение. Сохраняй точное написание literal-токена даже в русском объяснении. Чтение синтаксиса не разрешает запускать незнакомую команду.

### Скобки и другие обозначения: сначала легенда

В этой подтеме квадратные скобки вокруг группы означают, что её можно пропустить; сами скобки не печатают. Если optional-группа включена, её обязательные части не исчезают. В некоторых справочниках фигурные скобки с вертикальной чертой обозначают выбор, многоточие — повтор; в других языках те же знаки являются буквальной частью выражения. Это разные грамматики записи, не универсальные команды shell. Не преобразуй схему из справочника в готовую команду, если не понял обозначения. Когда показывается prompt вроде $, он тоже может быть приглашением оболочки, не частью ввода; решает пояснение конкретного источника.

### Default, пример, единица и область действия

Default limit: 10 означает значение при пропуске настройки по правилам документа; example --limit 5 выбирает пять только в одном примере. Число без единицы неполно: ten records, ten words, ten files и ten seconds различаются. В Maple параметр ограничивает displayed notes, но экспорт содержит all notes; нельзя сократить исходный смысл до limit everything. В другом продукте правила могут отличаться. Задавай два вопроса: What does this number count? Which operation does the option affect? Образец ожидаемого output в документации не доказательство твоего собственного запуска. We read an example и We created a file — разные отчёты.

### Пути, имена и точные символы

Relative path вроде data/sample_notes.json требует базы: в учебном кейсе это working directory practice. Без базы нельзя восстановить абсолютное расположение. Slash разделяет указанные сегменты, underscore находится внутри sample_notes, dot отделяет расширение json. Backslash — другой символ; Windows-путь может показывать его, но это не основание менять разделитель во всех инструментах. Hyphen в sample-notes и underscore в sample_notes образуют разные строки. Регистр может иметь значение в конкретной системе; не делай универсального вывода о case sensitivity. Для пути с пробелами найди правило именно нужной оболочки/инструмента, а не придумывай кавычки по одному знакомому примеру.

### Диктовка и пересказ для коллеги

При передаче имени скажи sample underscore notes dot json; при неоднозначном dash уточни количество и символ. Затем попроси read-back: Could you read the path back to me? Сверяй не только звук, но и роль: это source или destination, relative или absolute, option или value? Партнёр должен дать реальный ответ и иногда реальную поправку, чтобы ты отреагировал; чтение обеих ролей не показывает взаимодействие. Проговаривай отрицание в does not change, контраст default/example и исправление version two point four, not two point three. Допустим понятный UK/US акцент. Без звука произношение и oral fluency неизвестны; ASR не определяет качество фонетики.

### Сводка, исправление и границы освоения

Хорошая короткая сводка отвечает на цель коллеги: назначение, нужная версия, входные данные, условие, результат по документу и ещё неизвестное. Не копируй все заголовки без связи. После отзыва сохрани полный исходник и полную редакцию отдельно; изменение утверждения должно опираться на текст, не на желание выглядеть уверенно. Проверяй себя на новом документе и снова через семь дней, а не только перечитывай удачный ответ. Эта подтема учит понимать документацию; полная разработка процедур с ветвлениями, предупреждениями и восстановлением — следующая линия T01. Количество заполненных полей не заменяет ручную оценку, реальный обмен и отложенный перенос.

## Примеры с разбором

- **This guide describes a local viewer.** — Это руководство описывает локальный просмотрщик. Singular guide → describes.
- **The tool supports text input.** — Инструмент поддерживает текстовый ввод. Supports обозначает возможность, не уже выполненную работу.
- **This option allows you to choose a destination.** — Эта опция позволяет выбрать место назначения. Allow + object + to-infinitive.
- **This option lets you choose a destination.** — Эта опция позволяет выбрать место назначения. Let + object + base, без to.
- **Does this version support the option?** — Эта версия поддерживает опцию? Does возвращает support в base form.
- **The export requires a path.** — Для экспорта нужен путь. Requires — смысловой глагол.
- **A path is required for export.** — Для экспорта требуется путь. Be + required в полном предложении.
- **You need permission to write there.** — Нужно разрешение на запись туда. Need + noun + цель через to.
- **You do not have to create a report.** — Ты не обязан создавать отчёт. Отсутствие необходимости, не запрет.
- **If you select the report option, provide a path.** — Если выберешь опцию отчёта, укажи путь. Условная обязательность значения.
- **Do not continue unless you have permission.** — Не продолжай без разрешения. Условие допуска, не гарантия результата.
- **Only export if the destination is writable.** — Экспортируй только при доступности места для записи. Не утверждается, что это единственное условие успеха.
- **The guide recommends a separate copy.** — Руководство рекомендует отдельную копию. Совет не выполненное резервирование.
- **Refer to the version note.** — Обратись к примечанию о версии. Refer to.
- **The result depends on the chosen mode.** — Результат зависит от выбранного режима. Depend on.
- **Read the notes without changing the source.** — Прочитай заметки без изменения источника. Without + -ing.
- **This page describes version 2.4.** — Страница описывает версию 2.4. Область документа.
- **Our setup still uses version 2.3.** — В нашей среде ещё версия 2.3. Отдельный факт, не обновление.
- **The option was introduced in version 2.4.** — Опция появилась в версии 2.4. Появление функции по справочнику.
- **We still need the matching reference.** — Нам ещё нужен подходящий справочник. Проверка не завершена.
- **Replace INPUT_FILE with the source path.** — Замени INPUT_FILE путём источника. Placeholder не literal filename.
- **Do not translate the option name.** — Не переводи имя опции. Точный literal остаётся неизменным.
- **The group is optional, but its value is required when used.** — Группа необязательна, но при использовании значение нужно. Область условия снимает кажущееся противоречие.
- **The default is ten records; the example uses five.** — По умолчанию десять записей, в примере пять. Две роли чисел, одна единица.
- **The limit affects the display, not the export.** — Лимит относится к отображению, не экспорту. Контраст области применения.
- **The example does not show a completed operation.** — Пример не показывает выполненную нами операцию. Модель результата не свидетельство запуска.
- **The relative path starts from the working directory.** — Относительный путь отсчитывается от рабочей папки. Нужна база, заданная в этом кейсе.
- **Did you say an underscore or a hyphen?** — Ты сказал нижнее подчёркивание или дефис? Уточнение символа.
- **Read sample underscore notes dot json.** — Прочитай sample, нижнее подчёркивание, notes, точка, json. Диктовка имени по частям.
- **The folder must already exist.** — Папка должна уже существовать. Условие не подтверждение наличия.
- **The message lists two possible causes.** — Сообщение перечисляет две возможные причины. Possible не confirmed.
- **We have not checked either cause yet.** — Мы ещё не проверили ни одну причину. Честное состояние проверки.
- **Could you explain what this option means?** — Можешь объяснить значение этой опции? Embedded question без does внутри.
- **Where can I find the reference for our version?** — Где найти справочник для нашей версии? Вопрос по конкретному пробелу.
- **I said hyphen, but the filename contains an underscore.** — Я сказал дефис, но в имени нижнее подчёркивание. Явное исправление исходного ответа.
- **Although the page shows the new option, our installed version is older, so support remains unconfirmed.** — Хотя на странице есть новая опция, установленная версия старее, поэтому поддержка не подтверждена. Сложный пример: источник, контраст и предел вывода.

## Функция, требование и вопрос

1. **Краткий ответ:** This tool ___ text files. (support/supports)
2. **Краткий ответ:** The guide allows you ___ a path. (to choose/choose)
3. **Краткий ответ:** The viewer lets you ___ notes. (read/to read)
4. **Краткий ответ:** The export ___ a destination. (requires/require)
5. **Краткий ответ:** A destination ___ required. (is/does)
6. **Краткий ответ:** ___ this version support the format? (Does/Is)
7. **Краткий ответ:** Read without ___ the source. (editing/edit)
8. **Краткий ответ:** Refer ___ the matching manual. (to/of)
9. **Краткий ответ:** The meaning depends ___ the context. (on/of)
10. **Развёрнутый ответ:** Исправь The guide is explains the option.
11. **Развёрнутый ответ:** Перепиши The tool requires a readable file, начав A readable file…
12. **Развёрнутый ответ:** Переделай What does the option mean? после Could you explain…
13. **Развёрнутый ответ:** Напиши две равнозначные фразы с allows и lets об одной вымышленной функции.
14. **Устная работа:** Произнеси This option requires a path / A path is required и отрицание It does not change the source; партнёр пересказывает смысл.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: supports. Singular tool требует -s.
2. Ключ: to choose. Allow + object + to-infinitive.
3. Ключ: read. Let + object + base.
4. Ключ: requires. Singular export и смысловой глагол.
5. Ключ: is. Полное предложение с be.
6. Ключ: Does. Вопрос с смысловым support.
7. Ключ: editing. Without как предлог принимает -ing.
8. Ключ: to. Устойчивое управление refer to.
9. Ключ: on. Depend on, не of по русскому вопросу.
10. Возможный образец (не единственный ответ): The guide explains the option.. Present Simple без лишнего is.
11. Возможный образец (не единственный ответ): A readable file is required by the tool.. Сохранить значение и полноценную форму с be.
12. Возможный образец (не единственный ответ): Could you explain what the option means?. Внутреннее subject + verb, -s возвращается к means.
13. Возможный образец (не единственный ответ): The viewer allows you to read a sample. The viewer lets you read a sample.. Свой объект/функция допустимы, управление различается.
14. Возможный образец (не единственный ответ): Слышимость форм и отрицания по реальному аудио.. Транскрипт не оценка фонетики.

</details>

## Найти ответ и его основание

1. **Краткий ответ:** Вопрос What is this tool for?: начни с Overview или Troubleshooting?
2. **Краткий ответ:** Точное значение --limit: Reference или Credits?
3. **Краткий ответ:** Что нужно before use: Prerequisites или Changelog?
4. **Краткий ответ:** Сообщение Input not found: Examples или Troubleshooting — основной раздел помощи?
5. **Развёрнутый ответ:** У раздела заголовок Quick start, но версия не указана. Какие два вопроса задашь до рекомендации конкретной опции?
6. **Развёрнутый ответ:** В overview сказано reads files, в reference сказано UTF-8 JSON only. Как уточнить слишком широкий пересказ reads any file?
7. **Развёрнутый ответ:** Что отличается: According to the guide… / We tested… / We still need to test…?
8. **Развёрнутый ответ:** Сформулируй три вопроса к незнакомому viewer и укажи раздел для каждого.
9. **Развёрнутый ответ:** Коллега нашёл слово output, но пропустил соседнее if. Почему поиск слова ещё не ответ?
10. **Развёрнутый ответ:** Сделай мини-карту: назначение, вход, опции, ошибки; придумай ясные английские заголовки.
11. **Развёрнутый ответ:** Напиши запрос: справочник ссылается на missing section, проверить правило кавычек пока не удалось.
12. **Устная работа:** Партнёр задаёт вопрос по карте разделов, затем уточняет цель. Объясни, куда смотреть и какой факт ещё нужен.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: Overview. Обзор объясняет назначение.
2. Ключ: Reference. Нужен справочник параметров.
3. Ключ: Prerequisites. Раздел предварительных условий.
4. Ключ: Troubleshooting. Раздел затруднений, не доказанная причина.
5. Возможный образец (не единственный ответ): Which version does this page describe? Does our installed version support the option?. Заголовок не гарантирует применимость.
6. Возможный образец (не единственный ответ): The guide describes reading UTF-8 JSON files, not every file type.. Сохранить сужающее условие.
7. Возможный образец (не единственный ответ): Источник утверждения, реально выполненная проверка и незавершённый следующий шаг.. Не фабриковать тестирование.
8. Возможный образец (не единственный ответ): Назначение/Overview, требуемый источник/Prerequisites, точное значение опции/Reference.. Допустимы другие обоснованные пары.
9. Возможный образец (не единственный ответ): Нужны полное условие, объект, версия и область утверждения.. Не отрывать найденное слово от предложения.
10. Возможный образец (не единственный ответ): Overview, Input requirements, Options, Troubleshooting.. Заголовки помогают навигации, не заменяют содержание.
11. Возможный образец (не единственный ответ): Could you point me to the section on paths with spaces? I could not find it in this guide.. Не объявлять правило отсутствующим во всех документах.
12. Возможный образец (не единственный ответ): Фактический вопрос/уточнение и адресный ответ.. Не монолог с заранее выдуманными ответами.

</details>

## Условия, версии и область параметра

1. **Краткий ответ:** Default 10 records, example 5 records. Какой default?
2. **Краткий ответ:** Ten records означает ten words? yes/no.
3. **Краткий ответ:** Optional report означает report запрещён? yes/no.
4. **Краткий ответ:** Группа --output PATH optional; при выборе --output PATH required. Можно оставить выбранную опцию без PATH? yes/no.
5. **Краткий ответ:** Новая страница версии 2.4 доказывает upgrade установленной 2.3? yes/no.
6. **Краткий ответ:** Separate copy recommended доказывает, что copy уже создана? yes/no.
7. **Развёрнутый ответ:** Перефразируй Do not export unless you have write permission без unless.
8. **Развёрнутый ответ:** Что не доказано из Only export if the folder exists и факта folder exists?
9. **Развёрнутый ответ:** В схеме с числовыми компонентами сравни версии 2.9 и 2.10; почему это не дроби?
10. **Развёрнутый ответ:** Page 2.4 говорит introduced in 2.4, setup 2.3. Напиши осторожную рекомендацию без команды обновить рабочую среду.
11. **Развёрнутый ответ:** Пример показывает output Success. Можно ли писать Our operation succeeded?
12. **Развёрнутый ответ:** В новом fictional guide limit controls displayed rows, export includes all rows. Исправь Smaller limit means smaller export.
13. **Развёрнутый ответ:** Документ говорит may happen if folder missing. Сравни с folder was deleted.
14. **Устная работа:** Партнёр путает should с already done. Покажи различие на новом собственном примере и попроси пересказ.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 10. Частный пример не меняет справочник.
2. Ключ: no. Единицы различаются.
3. Ключ: no. Опциональность не запрет.
4. Ключ: no. Условная обязательность аргумента.
5. Ключ: no. Версия страницы не действие в среде.
6. Ключ: no. Рекомендация не результат.
7. Возможный образец (не единственный ответ): Do not export if you do not have write permission.. Смысл запрета без условия, не обязанность экспорта при наличии.
8. Возможный образец (не единственный ответ): Не доказаны выполненный экспорт или достаточность всех остальных условий.. Не обращать необходимое условие.
9. Возможный образец (не единственный ответ): Компонент 10 больше 9, поэтому 2.10 позже; это метки версии, не десятичное 2.1.. Не приписывать эту схему любому проекту без легенды.
10. Возможный образец (не единственный ответ): Check the reference for version 2.3 before relying on this option.. Применимость ещё нужно проверить.
11. Возможный образец (не единственный ответ): Нет: без собственного выполнения это только пример ожидаемого вывода.. Не выдавать чтение за эксперимент.
12. Возможный образец (не единственный ответ): The limit changes the displayed rows, not the documented export content.. Точное ограничение этого guide, не всех инструментов.
13. Возможный образец (не единственный ответ): Первая фраза описывает возможную причину; вторая утверждает событие и требует отдельного доказательства.. Не приписывать пользователю удаление.
14. Возможный образец (не единственный ответ): Реальный пример/ответ и проверка понимания.. Наличие совета не подтверждает действие.

</details>

## Пути, символы и условные обозначения

Это чтение условных обозначений, а не работа в терминале. Слова, регистр, число дефисов и разделители сохраняйте точно; правило конкретной легенды не распространяется автоматически на все программы.

1. **Краткий ответ:** sample_notes: знак между словами underscore/hyphen?
2. **Краткий ответ:** sample-notes: знак между словами underscore/hyphen?
3. **Краткий ответ:** data/sample.json: разделитель между data и sample — slash/backslash?
4. **Краткий ответ:** C:\Practice\sample.txt: разделитель после Practice — slash/backslash?
5. **Краткий ответ:** В sample.txt между sample и txt находится dot/colon?
6. **Краткий ответ:** В C: после буквы стоит colon/underscore?
7. **Развёрнутый ответ:** Легенда: INPUT_FILE заменяется путём. Нужно ли буквально вводить INPUT_FILE? Объясни.
8. **Развёрнутый ответ:** Объясни [--output OUTPUT_FILE] по легенде optional groups; можно ли написать только --output?
9. **Развёрнутый ответ:** Раздели в --limit 5 имя опции и значение; что нельзя переводить?
10. **Развёрнутый ответ:** Путь data/sample_notes.json relative к practice. Назови базу и части, не выдумывая диск.
11. **Развёрнутый ответ:** Напиши словами, как продиктовать exports/first_read.txt; затем попроси read-back.
12. **Развёрнутый ответ:** Путь содержит пробелы, а в guide только примеры без пробелов. Что нужно спросить вместо выдуманного правила?
13. **Развёрнутый ответ:** Почему нельзя всегда менять slash на backslash по названию ОС?
14. **Устная работа:** Партнёр диктует новый учебный filename с hyphen/underscore. Повтори и уточни неоднозначность, затем сравните запись.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: underscore. Нижнее подчёркивание, не дефис.
2. Ключ: hyphen. Дефис, другое имя файла.
3. Ключ: slash. Косая черта / в данном пути.
4. Ключ: backslash. Обратная косая черта в показанном Windows-пути.
5. Ключ: dot. Точка, здесь разделяет имя и расширение.
6. Ключ: colon. Двоеточие, не подчёркивание.
7. Возможный образец (не единственный ответ): Нет: это placeholder, требующий значения по условию.. Не все заглавные слова универсально placeholders.
8. Возможный образец (не единственный ответ): Группу можно пропустить; при её выборе нужно значение OUTPUT_FILE, скобки не вводятся.. Optional относится к группе, не всем частям отдельно.
9. Возможный образец (не единственный ответ): --limit — точное имя, 5 — значение; имя опции сохраняется буквально.. Не заменить --limit на русское слово.
10. Возможный образец (не единственный ответ): База practice, затем data и sample_notes.json.. Без дополнительных данных нет абсолютного расположения.
11. Возможный образец (не единственный ответ): exports slash first underscore read dot txt. Could you read that back?. Сохранить каждый символ; допустима ясная spelling-альтернатива.
12. Возможный образец (не единственный ответ): How does this tool handle paths with spaces? Which quoting rules apply here?. Синтаксис зависит от инструмента/оболочки.
13. Возможный образец (не единственный ответ): Нужно правило конкретного инструмента/формата; визуальное сходство пути недостаточно.. Не универсальная инструкция для реального запуска.
14. Возможный образец (не единственный ответ): Реальный слуховой ответ до показа текста.. Без аудио pronunciation неизвестно, ASR может ошибиться.

</details>

## Чтение: справочник Maple

Maple Notes Reader: a documentation reading pack

Overview — version 2.4
Maple Notes Reader is a fictional command-line tool used only in this language exercise. It displays notes from a local JSON file. It does not edit the source file or upload its contents. These statements describe this imaginary tool, not every reader or the English Training app. Do not install anything or run the examples. Your task is to read, explain and ask useful questions.

Before you begin
You need a readable UTF-8 JSON file. To create an exported text file, you also need permission to write to the destination directory. Write permission is not listed as a requirement for simply viewing notes. The guide recommends making a separate copy before practising with important material. That is advice, not evidence that a copy already exists. For this exercise, use only the fictional sample named sample_notes.json.

Reference — how to read the syntax
The guide shows: maple-view INPUT_FILE [--output OUTPUT_FILE] [--limit NUMBER]. INPUT_FILE is a required placeholder: replace it with a file path. The square brackets mark optional groups in this guide; do not type the brackets. If you include --output, you must also provide OUTPUT_FILE. If you omit that option, the tool only displays notes and creates no exported file. NUMBER must be a positive whole number. The default limit is 10. It limits the number of notes displayed, not the size of each note or the number of source files. The documented export contains all notes, even when the display limit is smaller.

Paths and examples
This exercise uses the folder practice as the working directory. The relative path data/sample_notes.json starts from that folder. The example output path is exports/first_read.txt. The directory exports must already exist. The tool does not create missing directories. The example is not an instruction to create that directory now. A filename can contain an underscore; a slash separates parts of the path shown here. The guide has not explained how this fictional command handles spaces, so do not invent a quoting rule from this example alone.

Version note
The --plain option was added in version 2.4. It removes decorative formatting from the display. It does not change the source file or the export format. Kim's installed version is 2.3, so this page is not sufficient evidence that Kim can use --plain. The team should read the matching 2.3 reference or confirm an upgrade. A newer documentation page does not prove that an upgrade has happened.

Troubleshooting and a support exchange
The message Input not found asks the reader to check the path and working directory. It does not establish that someone deleted the file. Destination exists means that an export would use a name that is already present. This version refuses to overwrite that destination; choose another name if an export is needed. Do not remove an existing file just to complete this exercise.

Kim asks, 'Does --limit 5 export only five notes?' Rowan points to the reference: the limit affects the display, not the export. Kim then asks whether the example proves that an export has already been created. Rowan says no. They have read an example, not run the tool. Their last open question concerns paths containing spaces. They record that gap instead of pretending the guide answered it.

1. **Краткий ответ:** Для какой версии написана страница?
2. **Краткий ответ:** Какая версия установлена у Kim?
3. **Краткий ответ:** Каков default --limit?
4. **Краткий ответ:** Какая папка задана как working directory?
5. **Развёрнутый ответ:** Назови назначение инструмента и два действия, которые он не делает по overview.
6. **Развёрнутый ответ:** Для какой задачи требуется write permission, а для какой оно не перечислено как prerequisite?
7. **Развёрнутый ответ:** Какой placeholder обязателен всегда и какой нужен при --output?
8. **Развёрнутый ответ:** Что ограничивает --limit и почему вопрос Kim об экспорте пяти notes требует исправления?
9. **Развёрнутый ответ:** Какое ограничение относится к exports directory и что не подтверждает пример?
10. **Развёрнутый ответ:** Что делает --plain по 2.4 guide и чего не меняет?
11. **Развёрнутый ответ:** Input not found доказывает удаление файла? Какой раздел и какие проверки названы?
12. **Развёрнутый ответ:** Что значит Destination exists в этом кейсе и безопасно ли удалять старый файл ради упражнения?
13. **Развёрнутый ответ:** Какой вопрос остался без ответа после обсуждения Kim/Rowan?
14. **Развёрнутый ответ:** Напиши 5–7 предложений для Kim: версия, default, область лимита, export и оставшийся вопрос.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 2.4. Версия документа, не установленной среды.
2. Ключ: 2.3. Факт setup не меняется от чтения новой страницы.
3. Ключ: 10. Считаются displayed notes.
4. Ключ: practice. База относительного пути в кейсе.
5. Возможный образец (не единственный ответ): Показывает local JSON notes; не меняет источник и не загружает содержимое в сеть.. Только описание вымышленного продукта.
6. Возможный образец (не единственный ответ): Для создания export; не перечислено для простого просмотра.. Не додумывать права реальной файловой системы.
7. Возможный образец (не единственный ответ): INPUT_FILE всегда; OUTPUT_FILE при выбранной опции.. Не буквальные имена существующих файлов.
8. Возможный образец (не единственный ответ): Число displayed notes, не содержимое экспорта; export содержит all notes.. Не размер записи/число источников.
9. Возможный образец (не единственный ответ): Папка должна существовать; пример не доказывает, что её создали или выполнили export.. Чтение не выполнение.
10. Возможный образец (не единственный ответ): Убирает декоративное форматирование display; не source и не export format.. Не обещать поддержку в Kim 2.3.
11. Возможный образец (не единственный ответ): Нет; Troubleshooting предлагает path/working directory.. Возможная причина не доказанное событие.
12. Возможный образец (не единственный ответ): Имя назначения уже занято, версия отказывается перезаписывать; для упражнения удалять нельзя.. Можно обсудить новое учебное имя, не реальное удаление.
13. Возможный образец (не единственный ответ): Как этот инструмент обрабатывает paths with spaces.. Пробел честно отмечен, правило не выдумано.
14. Возможный образец (не единственный ответ): Связный пересказ с точными границами и без фиктивного запуска.. Можно использовать другие верные формулировки.

</details>

## Аудирование: разбор Fern

<details><summary>Транскрипт — только после прослушивания и попытки</summary>

Fern Preview: a fictional documentation conversation described by one narrator.

Nia and Eli are reading a guide for Fern Preview, an imaginary tool for viewing short text records. They are not using a real customer system. Nia first says that the guide is for version 1.6, then corrects herself: the heading says 1.7. Eli reads the version in their fictional setup: it is still 1.6. Neither person says that an upgrade has been completed.

They want to understand the word limit in the reference. The option --rows controls the number of records shown on the screen. Its default is eight. It does not count words in each record. Nia reads an example with --rows 3. Eli asks whether three is now the default. She says no: it is a value chosen for that example. A different example would not change the default either.

The guide says that --report is optional. If that option is included, a report path is required. If it is omitted, no report file is written. The report contains all records, not only the rows visible in the preview. Eli notices a recommendation to save a separate copy before trying unfamiliar settings. They agree that it is sensible advice. They do not say that such a copy has already been made.

The sample source is data/meeting_notes.txt. Nia first reads meeting-notes with a hyphen, then notices the underscore and corrects her reading to meeting underscore notes dot txt. Eli repeats the corrected filename. Their working directory is demo, so the relative source path starts from demo. The guide does not name an absolute directory on anyone's computer. Their sample report path is reports/session_two.txt. The folder reports must already exist.

Nia finds a note that says the --brief option was introduced in version 1.7. It shortens headings in the displayed preview. Eli asks whether their version 1.6 can use it. They cannot conclude that from the 1.7 guide. Nia agrees to find the reference for their installed version. She has not found it yet. This is a next step, not a completed compatibility check.

At the end, they read a troubleshooting message: Report path unavailable. The guide lists a missing destination folder and missing write permission as two possible causes. It does not say which cause occurred in their situation. Eli asks for a precise report. Nia says that they know the message and the documented possibilities, but they have not checked either cause. They have also not created a report. Eli agrees with that limited summary, not with a claim that the tool is broken or that a fix has worked.

</details>

1. **Краткий ответ:** Какую версию guide Nia назвала после поправки?
2. **Краткий ответ:** Какая версия остаётся в setup?
3. **Краткий ответ:** Какой default --rows?
4. **Краткий ответ:** Какое значение выбрано в example?
5. **Развёрнутый ответ:** Что именно считает --rows и чего не считает?
6. **Развёрнутый ответ:** Когда report path обязателен и что происходит при пропуске --report?
7. **Развёрнутый ответ:** Как Nia исправила имя source и как Eli проверил понимание?
8. **Развёрнутый ответ:** Назови базу source path и условие папки report.
9. **Развёрнутый ответ:** Для какой версии введена --brief и что Nia только обещала сделать?
10. **Развёрнутый ответ:** Какие две возможные причины Report path unavailable перечислены и какая подтверждена?
11. **Развёрнутый ответ:** Что известно о separate copy и созданном report?
12. **Развёрнутый ответ:** С чем Eli согласился в конце и какие сильные выводы он не подтвердил?

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: 1.7. Первоначальное 1.6 было исправлено.
2. Ключ: 1.6. Обновление не подтверждено.
3. Ключ: 8 / eight. Число records в preview.
4. Ключ: 3 / three. Не новый default.
5. Возможный образец (не единственный ответ): Records shown, не words внутри записи.. Единицу нельзя потерять.
6. Возможный образец (не единственный ответ): Путь нужен при опции; без неё report file не пишется.. Опциональность всей функции.
7. Возможный образец (не единственный ответ): Hyphen заменён underscore в meeting_notes.txt; Eli повторил исправленное имя.. Не выдумывать фактическое произношение ученика.
8. Возможный образец (не единственный ответ): Working directory demo; reports должна уже существовать.. Абсолютный путь компьютера не сообщён.
9. Возможный образец (не единственный ответ): 1.7; найти reference для установленной 1.6, ещё не нашла.. Обещание не compatibility check.
10. Возможный образец (не единственный ответ): Missing folder / missing write permission; ни одна ещё не проверена.. Не объявлять две причины действительными.
11. Возможный образец (не единственный ответ): Copy рекомендована, не подтверждена; report не создан в рассказе.. Рекомендация и результат раздельны.
12. Возможный образец (не единственный ответ): С ограниченным summary; не с broken tool или успешным fix.. Согласие относится к фактической реплике.

</details>

## Письмо: summary, запрос и редактура

Maple — во вкладке «Чтение», Fern — в «Аудировании», Moss полностью задан в упражнении. Все продукты вымышлены: команды не запускать, реальные файлы не открывать/удалять. Исходный и переработанный тексты сохраняются отдельно.

1. **Развёрнутый ответ:** Напиши 110–150 слов summary Maple для коллеги: цель, источник, output, default, версия и unknown. Досье во вкладке «Чтение».
2. **Развёрнутый ответ:** Напиши 110–150 слов запроса по Maple: несовпадение версий и правило paths with spaces.
3. **Развёрнутый ответ:** По аудио объясни default/example и page/setup в 110–150 словах.
4. **Развёрнутый ответ:** Напиши handoff Fern в 100–140 словах: две поправки, параметры, путь, причина unknown и следующий шаг.
5. **Развёрнутый ответ:** Исправь неверный отчёт об export пяти notes в 80–110 словах, если реально только прочитан пример Maple.
6. **Развёрнутый ответ:** Напиши 80–110 слов рефлексии: какие проверки чтения используешь и на чём проверишь перенос.
7. **Развёрнутый ответ:** Новый Moss Viewer guide: version 5.2, setup 5.1; --max limits preview cards, default 9; example 2; optional --copy PATH creates all-card copy; parent folder required. Напиши 120–160 слов summary и один вопрос о совместимости.
8. **Развёрнутый ответ:** По Moss напиши 5 предложений с requires/is required/allows/lets/without, не утверждая реальный запуск.
9. **Развёрнутый ответ:** Исправь памятку: Optional means forbidden. The example proves success. New docs update our setup.
10. **Развёрнутый ответ:** Составь 4–6 предложений запроса: непонятны единица параметра, relative path base и quoting. Не используй личный путь.
11. **Развёрнутый ответ:** После фактического отзыва полностью перепиши summary Moss из задания 7 в 120–160 словах; сохрани обе версии.
12. **Развёрнутый ответ:** Сделай таблицу 2–3 реальных ошибок: исходная фраза, правка, причина, новый пример. Если проверки ещё нет, сформулируй запрос на неё.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): The Maple Notes Reader page is for version 2.4. It describes a fictional tool that displays notes from a local JSON file. The input file is required, but an output file is optional. If we include the output option, we must provide a destination path. The default display limit is ten notes. This limit does not reduce the exported content. The source file stays unchanged in this case. Before writing an export, we need a destination directory that already exists and permission to write there. Kim has version 2.3, so we still need the matching reference before using the new plain option. Reading the example has not created any file.. Полная связная сводка, не список переведённых заголовков.
2. Возможный образец (не единственный ответ): Could you help me check two points in the Maple guide? I am carefully reading the page for version 2.4, but our practice setup still has version 2.3. I can see that the plain option was added in 2.4. Where can I find the reference for our installed version? I also need to understand paths that contain spaces. The example uses a path without spaces, and I cannot find a quoting rule on this page. Please point me to the relevant section instead of assuming that another tool uses the same syntax. We have only read the example so far. We have not changed the setup or created an export.. Точные вопросы и известные условия, без выдуманной проверки.
3. Возможный образец (не единственный ответ): The documented default and the example value are different kinds of information. In Fern Preview, the rows option has a default of eight. The example chooses three, but this does not change the default for other uses. Both values count records shown in the preview, not words in a record. The optional report contains all records according to this fictional guide. Therefore, a preview with three rows does not prove that a report contains only three records. We also need to distinguish the installed version from the documentation version. Our setup says 1.6, while the page says 1.7. We need the matching reference before relying on the new brief option.. Сохранить units и разную роль чисел.
4. Возможный образец (не единственный ответ): We discussed the fictional Fern Preview guide, not a live customer system. Nia corrected the guide version from 1.6 to 1.7, while our setup remained at 1.6. She also corrected the sample filename: it contains an underscore, not a hyphen. The relative source path starts from demo. The default preview size is eight records, and three is only the example value. The report option needs a path when it is used. The troubleshooting message lists two possible causes, but we have not confirmed either one. Nia will look for the matching reference. That search, the compatibility check and any report creation are still outstanding.. Не превращать обещанный поиск в найденную reference.
5. Возможный образец (не единственный ответ): I need to correct my earlier explanation. I said that the example exported only five notes, but the Maple reference says the limit controls the display. The documented export contains all notes. We have not run the example, so I should not describe any export as completed. I also cannot promise that the plain option works in Kim's version 2.3. The page describes its introduction in 2.4. I will separate the rule, the example and the observed result in my next summary.. Признать обе ошибки: область limit и отсутствие запуска.
6. Возможный образец (не единственный ответ): My main reading check is to find the exact scope of a rule. Required may describe a value only when an optional feature is used. I should also ask what a number counts before repeating it. A default is not the same as a value in one example. When a path is unclear, I can spell the separator and ask for a read-back. Next, I will use a different fictional guide and record which questions it answers and which points still need clarification.. Конкретные механизмы и новая задача, не выдуманный успех.
7. Возможный образец (не единственный ответ): Новый полный текст: 9 default/2 example, preview не copy, путь нужен при --copy, версия применимости ещё проверяется.. Не копия Maple с одним новым именем.
8. Возможный образец (не единственный ответ): Грамматически связные верные утверждения о данном fictional guide.. Открытая продукция не сравнивается с единственной строкой.
9. Возможный образец (не единственный ответ): Optional allows omission. The example does not prove our success. Reading newer docs does not update our setup.. Смысл и отрицания, не механическое исправление орфографии.
10. Возможный образец (не единственный ответ): Три точных вопроса с конкретными терминами и честным отсутствием ответа.. Не присылать токены, secrets или рабочие данные.
11. Возможный образец (не единственный ответ): Полная редактура с сохранением исходника и объяснением существенных изменений.. Не выдумывать отзыв, журнал не заменяет текст.
12. Возможный образец (не единственный ответ): Действительные ответы и адресная практика либо честный pending.. Не приписывать ученику несуществующие ошибки/оценки.

</details>

## Речь: найти, уточнить и пересказать

1. **Устная работа:** Партнёр выбирает вопрос к Maple и не сообщает его заранее. Найди раздел, ответь и назови предел своего вывода.
2. **Устная работа:** Объясни разницу overview/reference новичку; он просит значение --limit. Помоги выбрать раздел.
3. **Устная работа:** Партнёр говорит optional means forbidden. Объясни и попроси привести допустимый пример.
4. **Устная работа:** Коллега читает guide 2.4 при setup 2.3. Выясни цель и объясни следующий шаг без реальной установки.
5. **Устная работа:** Продиктуй новый вымышленный relative path; партнёр записывает и задаёт вопрос про один символ.
6. **Устная работа:** Партнёр произносит dash неоднозначно. Выясни один/два дефиса или underscore и повтори точное имя.
7. **Устная работа:** Сопоставь The option lets you read / The guide allows you to read; выдели does NOT change the file в новом предложении.
8. **Устная работа:** Объясни числовой пример: default 11 rows, example 4, export all rows. Партнёр спрашивает о words.
9. **Устная работа:** Партнёр считает error message доказательством deletion. Попроси данные и назови документированную возможность, не обвинение.
10. **Устная работа:** Перескажи Moss из письма неспециалисту; партнёр объясняет default и отличие copy от preview своими словами.
11. **Развёрнутый ответ:** После разговора запиши исходное уточнение, твою реакцию и оставшийся unknown.
12. **Устная работа:** Партнёр меняет цель с export на read-only preview. Пересмотри, какие требования теперь относятся к задаче.

<details><summary>Ключи и критерии после попытки</summary>

1. Возможный образец (не единственный ответ): Реальный вопрос/ответ и связь с конкретным текстом.. Монолог по списку вопросов не тот же навык.
2. Возможный образец (не единственный ответ): Понятная смена общего обзора на точный факт.. Не предполагать, что новичок понял без проверки.
3. Возможный образец (не единственный ответ): Реальная реакция на типичную ошибку.. Оценивается услышанный ответ, не один подготовленный текст.
4. Возможный образец (не единственный ответ): Адресный обмен, matching reference пока pending.. Не требовать менять рабочую среду ради языка.
5. Возможный образец (не единственный ответ): Реальная диктовка/read-back и поправка при необходимости.. Использовать только придуманные безопасные имена.
6. Возможный образец (не единственный ответ): Согласованный символ, не угадывание по контексту.. ASR не оценивает акцент.
7. Возможный образец (не единственный ответ): Понятные формы, отрицание и связная фраза по реальному звуку.. Не оценивать pronunciation по письменному ответу.
8. Возможный образец (не единственный ответ): Новые числа/единицы и адресное исправление.. Не повторить чужой неверный вопрос как факт.
9. Возможный образец (не единственный ответ): Реальный обмен о границе причины.. Не выдумывать доступ к его файловой системе.
10. Возможный образец (не единственный ответ): Проверенное понимание, не вежливое yes.. Текст за обе роли не настоящее взаимодействие.
11. Возможный образец (не единственный ответ): Краткий фактический протокол.. Транскрипт не подтверждает oral fluency.
12. Возможный образец (не единственный ответ): Изменение рекомендаций по новой цели, реальный ответ партнёра.. Не переносить write permission на чтение без основания.

</details>

## Повторение и новый документ

1. **Краткий ответ:** The manual ___ you to choose a mode. (allows/lets — с to)
2. **Краткий ответ:** View without ___ a copy. (creating/create)
3. **Краткий ответ:** log_file.txt содержит underscore между log и file? yes/no.
4. **Краткий ответ:** Сказано default 15 records, example 7. Чему равен default?
5. **Развёрнутый ответ:** Новый guide говорит only CSV in Requirements, а overview просто files. Напиши точную сводку ограничения.
6. **Развёрнутый ответ:** Почему условие folder exists не доказывает successful export?
7. **Развёрнутый ответ:** Придумай два разных имени, различающихся только hyphen/underscore, и продиктуй их текстом.
8. **Развёрнутый ответ:** Новый guide: 6.1 page, 6.0 setup; default 4 files, example 1; mode affects preview only. Напиши 6–8 предложений summary и вопрос, не домысливая export.
9. **Развёрнутый ответ:** Через 7 дней возьми ещё не разобранный учебный документ и напиши 120–160 слов с тремя проверенными условиями и unknown.
10. **Устная работа:** Через 7 дней партнёр задаёт неожиданный вопрос по новому документу. Найди основание, уточни и проверь пересказ.
11. **Развёрнутый ответ:** Раздели в своём последнем ответе факты guide, выводы, реальные проверки и ещё неизвестное.
12. **Развёрнутый ответ:** Выбери по фактическому разбору один повторяющийся пробел и напиши адресный план практики/нового контроля.

<details><summary>Ключи и критерии после попытки</summary>

1. Ключ: allows. В этой форме нужен allows, не lets to.
2. Ключ: creating. После without используется -ing.
3. Ключ: yes. Не заменить его дефисом.
4. Ключ: 15. Роль значения не меняется от примера.
5. Возможный образец (не единственный ответ): The tool reads CSV files according to the Requirements section.. Не any file по одному обзору.
6. Возможный образец (не единственный ответ): Это один prerequisite, не выполнение и не полный набор достаточных условий.. Проверять область и другие ограничения.
7. Возможный образец (не единственный ответ): Например draft-one.txt / draft_one.txt с точными названиями символов.. Здесь письменная подготовка, не проверка произношения.
8. Возможный образец (не единственный ответ): Новые версии/единица/ограничение, неизвестное про export обозначено.. Сведения из Maple/Fern не автоматически правила нового продукта.
9. Возможный образец (не единственный ответ): Реальная новая работа/дата/отзыв либо pending до выполнения.. Переименование старого текста не перенос.
10. Возможный образец (не единственный ответ): Фактическая новая реакция и оценка по звуку.. Будущий результат не записывать заранее.
11. Возможный образец (не единственный ответ): Честная разметка исходного текста по четырём типам.. Не приписывать себе запуск или проверку доступа.
12. Возможный образец (не единственный ответ): Конкретные реальные ошибки и новые примеры либо запрос проверки.. Количество заполненных полей не подтверждает mastery.

</details>

## Обязательный итоговый тест

Не подменять тренировочными задачами. Ученик может вводить целые предложения и тексты, сохранять черновик и продолжать позже. Ключи открывать после отправки всей попытки. Открытые задания оцениваются по смыслу и критериям; устные требуют слышимого аудио. Записать исходные ответы и отдельный разбор по целям, назначить практику по пробелам.

### Вариант A

1. **Краткий ответ:** A destination path ___ required for a report. (is/does)
2. **Краткий ответ:** The viewer lets you ___ a record. (inspect/to inspect)
3. **Краткий ответ:** Read without ___ the original. (changing/change)
4. **Краткий ответ:** The result depends ___ the selected mode. (on/of)
5. **Краткий ответ:** Где искать точное значение --count: Overview или Reference?
6. **Краткий ответ:** Новый текст: Default count 12. Example count 4. Какой default?
7. **Краткий ответ:** В report_final знак между словами называется underscore или hyphen?
8. **Краткий ответ:** Документация 4.2, установленная версия 4.1. Сам текст страницы доказывает upgrade? yes/no.
9. **Развёрнутый ответ:** Новый Cedar List guide 4.2: Overview — read local lists; Requirements — readable text source; Reference — --count sets displayed rows, default 12; Reports — optional --report PATH creates all-row report, parent folder must exist. Составь карту из четырёх вопросов и нужных разделов.
10. **Развёрнутый ответ:** Cedar: --plain introduced in 4.2, setup 4.1. Что нужно выяснить до рекомендации этой опции?
11. **Развёрнутый ответ:** Cedar легенда: cedar-list SOURCE [--report PATH]. Назови обязательное, optional-группу, буквальное и placeholders; ничего не запускай.
12. **Развёрнутый ответ:** По Cedar из задания 9 напиши 120–160 слов summary: назначение, требования, значение/default, report, версия setup 4.1 и неизвестное. Пример --count 4 не был выполнен.
13. **Развёрнутый ответ:** Исправь отчёт We exported four rows, using 80–110 English words. Известно лишь: прочитан пример --count 4, guide описывает all-row report, запуска не было.
14. **Развёрнутый ответ:** Исправь The guide allow you use it. Could you explain where is the reference?
15. **Устная работа:** Партнёр просит рекомендовать Cedar --plain по новой странице, но сообщает старую версию. Уточни и предложи проверяемый следующий шаг.
16. **Устная работа:** Партнёр диктует НОВЫЙ вымышленный путь с underscore и slash, не показывает запись. Повтори и попроси проверить точные символы.
17. **Развёрнутый ответ:** Партнёр готовит новое скрытое сообщение Cedar: page/setup versions, default и другую example value. После прослушивания запиши четыре значения с ролями.
18. **Развёрнутый ответ:** Партнёр устно исправляет ОДНО значение предыдущего сообщения. Запиши прежнее/новое и что не меняется.
19. **Развёрнутый ответ:** Only export if the destination is writable. Доказывает ли writable, что export выполнен или обязательно успешен?
20. **Развёрнутый ответ:** Документ называет Path missing и No write access как две possible causes. Напиши вопрос, который поможет проверить причину, а не обвинить пользователя.
21. **Развёрнутый ответ:** Путь logs/run_one.txt назван relative, но working directory не сообщён. Что известно и что нужно спросить?
22. **Развёрнутый ответ:** После реального отзыва полностью перепиши summary задания 12 в 120–160 словах; сохрани исходник и причины существенных правок.
23. **Устная работа:** Партнёр оспаривает один вывод summary неожиданным вопросом. Покажи основание в Cedar guide и обозначь пробел, если основания нет.
24. **Развёрнутый ответ:** Через 7 дней используй другой ещё не разобранный учебный документ: summary 120–160 слов и три проверенных условия; запиши фактическую дату/ответ.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: is. Required здесь состояние с be.
2. Ключ: inspect. Let + object + base.
3. Ключ: changing. Предлог without принимает -ing.
4. Ключ: on. Сочетание depend on, не универсальное of.
5. Ключ: Reference. Справочник параметров, не общий обзор.
6. Ключ: 12. Пример не меняет документированное значение.
7. Ключ: underscore. Подчёркивание отличается от дефиса.
8. Ключ: no. Версия страницы не факт изменения программы.
9. Возможный образец (не единственный ответ): Цель → Overview; источник → Requirements; default/unit → Reference; файл/папка → Reports.. Раздел и точный факт, без выдуманного запуска.
10. Возможный образец (не единственный ответ): Нужна matching reference/подтверждение совместимости или фактического upgrade.. Не считать функцию доступной по новой странице.
11. Возможный образец (не единственный ответ): SOURCE обязателен; группа optional; cedar-list/--report буквальные; SOURCE/PATH заменяются, PATH требуется при опции.. Скобки не вводятся по данной легенде, не по универсальному закону CLI.
12. Возможный образец (не единственный ответ): Полный самостоятельный текст с источником каждого ключевого условия и без фиктивного результата.. Сохранить 12 default, 4 example, rows/display и all-row report; не переносить Maple.
13. Возможный образец (не единственный ответ): Прямое исправление факта и области count, исходник не стирать.. Не утверждать наличие report/backup.
14. Возможный образец (не единственный ответ): The guide allows you to use it. Could you explain where the reference is?. Согласование, allow + object + to, внутренний порядок слов.
15. Возможный образец (не единственный ответ): Реальный обмен и ответ на версию партнёра.. Не выдумать найденный matching guide или выполненный upgrade.
16. Возможный образец (не единственный ответ): Реальное аудио и read-back, исправления сохранены.. Не использовать секреты/рабочие пути; ASR не оценка фонетики.
17. Возможный образец (не единственный ответ): Фактически услышанные значения, сверенные после исходного ответа.. Без партнёра pending; заранее прочитанное помечается text-supported.
18. Возможный образец (не единственный ответ): Реальная поправка и сохранённые условия.. Не имитация слушания по своему тексту за обе роли.
19. Возможный образец (не единственный ответ): Нет: необходимое условие не выполненное действие и не достаточность всех условий.. Другие причины могут остаться неизвестными.
20. Возможный образец (не единственный ответ): Which message and path do you see? Has the destination folder been checked?. Реальные данные ещё нужно получить, не утверждать удаление.
21. Возможный образец (не единственный ответ): Символы и сегменты известны; абсолютное расположение неизвестно, нужна база.. Не угадать компьютер или реальное имя пользователя.
22. Возможный образец (не единственный ответ): Полная редакция и действительный отзыв либо pending.. Журнал без исправленного текста не редактура.
23. Возможный образец (не единственный ответ): Фактический вопрос, адресный ответ и проверка понимания.. Текст не подтверждает pronunciation/oral fluency.
24. Возможный образец (не единственный ответ): Новое отложенное применение, не новое имя прежнего кейса.. До реального выполнения pending; количество ответов не mastery.

</details>

### Вариант B

1. **Краткий ответ:** This reference ___ two output modes. (describe/describes)
2. **Краткий ответ:** The guide allows you ___ the format. (to choose/choose)
3. **Краткий ответ:** For the exact syntax, refer ___ the appendix. (to/of)
4. **Краткий ответ:** Without ___ a report, you can view a sample. (creating/create)
5. **Краткий ответ:** Где искать помощь по сообщению ошибки: Troubleshooting или Overview?
6. **Краткий ответ:** Новый guide: Default 6 records, example 2 records. Сколько records по умолчанию?
7. **Краткий ответ:** Знак между sample и run в sample-run — hyphen или underscore?
8. **Краткий ответ:** Optional --save PATH при использовании требует PATH. Optional значит, что PATH можно пропустить после --save? yes/no.
9. **Развёрнутый ответ:** Новый Birch Preview manual 3.5: Overview — displays local records; Before use — readable source; Options — --items controls displayed records, default 6; Save — optional --save PATH saves all records, existing destination refused. Построй четыре пары вопрос/раздел.
10. **Развёрнутый ответ:** В Birch --compact introduced in 3.5, installed 3.4. Друг говорит newer docs means we upgraded. Исправь.
11. **Развёрнутый ответ:** Легенда Birch: birch-read FILE [--save PATH]. Объясни буквально читаемые части и заменяемые значения; выбрана --save.
12. **Развёрнутый ответ:** По Birch из задания 9 напиши 120–160 слов для коллеги: назначение, источник, default/example --items 2, save и existing destination; setup 3.4, запуска не было.
13. **Развёрнутый ответ:** Исправь в 80–110 словах отчёт We saved two records and overwrote the old file: известен только пример --items 2, all-record save, existing destination refused, запуска нет.
14. **Развёрнутый ответ:** Исправь This version let you to preview it. Can you tell me what does the option mean?
15. **Устная работа:** Партнёр предлагает удалить existing destination, чтобы пример сработал. Уточни цель и объясни документированное ограничение без реальных удалений.
16. **Устная работа:** Партнёр диктует другой новый учебный путь с hyphen, underscore и dot; сделай read-back, затем он исправляет один символ.
17. **Развёрнутый ответ:** Партнёр составляет новое устное сообщение Birch: installed/page versions и две разные величины default/example. До ответа текст скрыт. Запиши роли и числа.
18. **Развёрнутый ответ:** Партнёр устно добавляет ограничение области параметра и меняет одну прежнюю величину. Запиши точный итог.
19. **Развёрнутый ответ:** Do not save unless you have write permission. При permission нужно ли обязательно save? Перефразируй.
20. **Развёрнутый ответ:** Guide говорит This may happen if the folder is missing. Друг пишет The folder was deleted. Оцени и попроси сведения.
21. **Развёрнутый ответ:** Путь reports/final-copy.txt relative к practice. Назови базу, два сегмента и разделители словами; не меняй имя.
22. **Развёрнутый ответ:** По фактическому отзыву перепиши весь summary задания 12 в 120–160 словах, сохранив отдельный исходник.
23. **Устная работа:** Партнёр задаёт неожиданный вопрос о значении или неизвестной совместимости Birch. Ответь, опираясь на текст, и проверь его пересказ.
24. **Развёрнутый ответ:** Через 7 дней прочитай другой новый учебный документ и напиши 120–160 слов с условиями/областью и одним честным unknown.

<details><summary>Разбор — только после отправки попытки</summary>

1. Ключ: describes. Singular subject в Present Simple.
2. Ключ: to choose. Allow + object + to-infinitive.
3. Ключ: to. Управление refer to в новом указании.
4. Ключ: creating. Without + -ing, не инфинитив.
5. Ключ: Troubleshooting. Раздел диагностики, не доказательство конкретной причины.
6. Ключ: 6. Частный пример не новый default.
7. Ключ: hyphen. Дефис, не нижнее подчёркивание.
8. Ключ: no. Опциональность всей группы не отменяет аргумент выбранной опции.
9. Возможный образец (не единственный ответ): Назначение/Overview, источник/Before use, default/Options, сохранение/Save.. Не читать пример как результат действия.
10. Возможный образец (не единственный ответ): Страница не меняет установленную версию; нужна matching reference/проверка фактического upgrade.. Не утверждать поддержку новой опции старой версией.
11. Возможный образец (не единственный ответ): FILE/PATH placeholders; birch-read/--save literals; PATH теперь необходим, скобки не вводятся по легенде.. Читаем синтаксис, не выполняем программу.
12. Возможный образец (не единственный ответ): Полный новый summary, шесть default/два example, display не save, matching version ещё нужна.. Не переписать Cedar с другим именем.
13. Возможный образец (не единственный ответ): Признать оба необоснованных вывода и назвать фактически прочитанные условия.. Не рекомендовать удаление для обхода ошибки.
14. Возможный образец (не единственный ответ): This version lets you preview it. Can you tell me what the option means?. Let + base, согласование и embedded question.
15. Возможный образец (не единственный ответ): Реальный обмен: остановка догадки, другой безопасный учебный путь/вопрос.. Не выдумывать команды или разрешение удалить рабочие файлы.
16. Возможный образец (не единственный ответ): Фактическая слуховая проверка и исправленный вариант.. Не фонетическая оценка по ASR или написанию.
17. Возможный образец (не единственный ответ): Самостоятельное понимание нового сообщения и последующая сверка.. Без реального звука pending, с предварительным текстом text-supported.
18. Возможный образец (не единственный ответ): Реально услышанные ограничение и поправка.. Не использовать Fern или сообщение A повторно как новый тест.
19. Возможный образец (не единственный ответ): Без write permission не сохранять; его наличие не обязывает действовать и не гарантирует успех.. Не превратить unless в автоматический запуск.
20. Возможный образец (не единственный ответ): May/if обозначают возможность; нужны проверка пути/папки, не обвинение в удалении.. Причина ещё неизвестна.
21. Возможный образец (не единственный ответ): База practice, reports затем final-copy.txt; slash, hyphen, dot.. Не подставить underscore или выдумать абсолютный диск.
22. Возможный образец (не единственный ответ): Полный пересмотр содержания, не только список правок.. Отзыв не фабриковать, до него pending.
23. Возможный образец (не единственный ответ): Реакция на реальный вопрос, разделение описанного/неизвестного.. Подготовленный монолог не взаимодействие.
24. Возможный образец (не единственный ответ): Фактическая новая самостоятельная работа и разбор.. Отложенный результат не записывается заранее.

</details>

## Повторение и ограничения

При пробелах вернитесь к соответствующей практике; затем используйте следующий вариант. Повтор уже знакомого варианта не доказывает перенос. После использования обоих вариантов требуется новый независимый контроль с преподавателем. Через 7 дней — применение в новой ситуации; до него первичная успешная проверка не означает окончательное освоение. [Критерии](../TEACHING.md).

## Приложения

- [Чтение документации: условия, версии, параметры и пути](../appendices/documentation-language.md)
- [Язык интерфейса: элементы, действия и статусы](../appendices/interface-language.md)
- [Правила, советы и условия: карта A203](../appendices/rules-conditions.md)
- [Глагольные модели: -ing, to и изменение смысла](../appendices/verb-patterns.md)

## Источники для сверки

Объяснения и упражнения авторские.

- [GitHub: purpose and navigation of a README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- [Google style guide: placeholders](https://developers.google.com/style/placeholders)
- [Google style guide: command-line syntax conventions](https://developers.google.com/style/code-syntax)
- [Cambridge English Grammar Today: unless](https://dictionary.cambridge.org/grammar/british-grammar/unless)
- [Semantic Versioning: explicitly adopted version schemes](https://semver.org/)
