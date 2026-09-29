export const documentationSources=[
 ['GitHub: purpose and navigation of a README','https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes'],
 ['Google style guide: placeholders','https://developers.google.com/style/placeholders'],
 ['Google style guide: command-line syntax conventions','https://developers.google.com/style/code-syntax'],
 ['Cambridge English Grammar Today: unless','https://dictionary.cambridge.org/grammar/british-grammar/unless'],
 ['Semantic Versioning: explicitly adopted version schemes','https://semver.org/']
];
const rows=s=>s.trim().split('\n').map(l=>l.split('~'));
export const documentationPatterns=rows(String.raw`overview~The tool displays local notes.~Назначение и предел продукта.~Не руководство по каждой операции.
prerequisites~A readable source file is required.~Предварительное условие.~Required не значит already available.
reference~The default limit is ten records.~Точное значение параметра.~Default не значение каждого примера.
troubleshooting~Check the working directory.~Подсказка при затруднении.~Возможная причина не уже найденная причина.
version scope~This page describes version 2.4.~Область применимости страницы.~Не факт обновления установленной версии.
introduced in~The option was introduced in 2.4.~Появление функции в версии.~Не обещание поддержки во всех старых версиях.
requires / is required~Export requires a path. A path is required.~Две грамматические модели.~Не Export is require a path.
allows~The tool allows you to preview notes.~Allow + object + to-infinitive.~Возможность не выполненный preview.
lets~The tool lets you view a sample.~Let + object + base.~Не lets you to view.
supports~This version supports text output.~Поддержка функции/формата.~Не установленная отдельная программа.
without~View the file without changing it.~Without + -ing.~Не without to change.
refer to~Refer to the matching reference.~Refer to + object.~Не refer the reference в этой модели.
depend on~The path depends on the working directory.~Depend on + object.~Предлог задаётся сочетанием, не русским вопросом.
optional group~[--output OUTPUT_FILE]~В этом синтаксисе группа необязательна.~Если опция выбрана, её значение необходимо.
placeholder~INPUT_FILE → data/sample_notes.json~Заменяемое место, не буквальный текст.~Не все заглавные имена являются placeholders.
literal option~--limit~Имя опции из данного справочника.~Не переводить и не менять дефисы.
default and example~Default: 10; example: 5.~Общее значение при пропуске и частный выбор.~Числа сами не обозначают минуты/байты.
only if~Export only if the directory is writable.~Необходимое условие.~Не гарантия успеха при его выполнении.
unless~Do not continue unless you have permission.~Не продолжать без разрешения.~Разрешение не приказ обязательно продолжить.
recommendation~A separate copy is recommended.~Совет в этом тексте.~Не подтверждённый backup или универсальный запрет.
source and result~The example shows an output path.~Пример, не фактический результат запуска.~Не писать We created a file без выполнения.
relative path~data/sample_notes.json~Относительно указанной рабочей папки.~Без базовой папки абсолютное место неизвестно.
slash~data/sample.txt: slash between directory and file.~Символ / в данном пути.~Не backslash.
backslash~C:\Training\sample.txt: backslash after Training.~Символ обратной косой черты в примере Windows-пути.~Не инструкция заменить все разделители в любом инструменте.
underscore~sample_notes: sample underscore notes.~Символ _ внутри имени.~Не дефис sample-notes.
hyphen~--limit: two hyphens followed by limit.~Символ -; dash встречается при диктовке.~Количество и точный символ надо уточнять.
dot~sample.txt: sample dot txt.~Точка между именем и расширением.~Не decimal point по смыслу имени файла.
colon~C: begins with a letter and a colon.~Символ :; здесь часть пути.~Не универсальное описание любого URI/пути.
brackets~Square brackets mark optional groups here.~Имена символов и легенда документа.~В другой грамматике скобки могут быть буквальными.
quotes and spaces~How does this tool handle a path with spaces?~Запрос правила конкретного инструмента/оболочки.~Не копировать чужую quoting-модель без проверки.
read-back~Did you say an underscore or a hyphen?~Уточнение и обратное чтение.~Текст/ASR не доказательство произношения.
unconfirmed cause~The guide lists two possible causes.~Гипотезы в справочнике.~Не We confirmed both causes.`);
export const documentationReference={id:'documentation-language',title:'Чтение документации: условия, версии, параметры и пути',intro:[
 '32 авторские модели и 16 задач. Карта частых ситуаций A2, не весь синтаксис CLI, все символы программирования или руководство по оболочкам. Условные Maple/Fern здесь не реальное ПО; команды читать и объяснять, не запускать.',
 'Формат placeholders и скобок зависит от легенды документа. Google/GitHub — первичные ориентиры оформления, не авторы учебных кейсов. SemVer применим только к проектам, которые приняли эту схему; два числа в учебной версии сами по себе не обещают полную SemVer-совместимость.',
 'Не путай описание результата и реально выполненное действие. Личные пути, токены и содержимое рабочих файлов не нужны. Для внешних ссылок требуется интернет; материалы не скопированы и не выполняются автоматически.'
],headers:['Элемент','Авторский пример','Как читать','Граница вывода'],rows:documentationPatterns,sources:documentationSources,practice:rows(String.raw`Где искать общую цель инструмента?~Начать с overview/README, затем найти точный раздел для своей задачи.
Исправь This tool require a path.~This tool requires a path: singular subject в Present Simple.
Исправь A path required.~A path is required: для состояния в полной фразе нужно is.
Allows you view / lets you to view: исправь обе модели.~Allows you to view; lets you view.
Without to edit: исправь.~Without editing: после предлога -ing.
Что означает [--report REPORT_FILE] при объявленной optional-группе?~Группу можно пропустить, но при выборе --report нужно значение REPORT_FILE.
Как отличить INPUT_FILE от --output?~По легенде первое заменяется путём, второе буквальное имя опции; не только по виду шрифта.
Default 12, example 4: какой default?~12; пример выбирает другое значение, не меняет справочное значение по умолчанию.
Почему ten records не ten words?~Это разные единицы; нужно сохранять существительное при числе.
Page 3.2, installed 3.1: что проверить?~Применимость раздела и справочник для установленной версии; не выдумывать upgrade.
Do not export unless the destination is writable означает обязанность export при writable?~Нет: это условие разрешённого действия, не приказ действовать или гарантия успеха.
sample_notes / sample-notes: что изменилось?~Underscore заменён hyphen; это может быть другое имя, не косметическая правка.
В data/read.txt какая база?~Из одной относительной строки база неизвестна; нужен working directory или другое правило документа.
Что делать с незнакомым правилом кавычек?~Найти документацию конкретного инструмента/оболочки или спросить, не выдумывать универсальный синтаксис.
Input not found доказывает deletion?~Нет: сообщение само не устанавливает причину; проверить описанные условия.
Как проверить диктовку пути?~Попросить повторить символы и сделать read-back; без аудио не оценивать произношение.`)};
