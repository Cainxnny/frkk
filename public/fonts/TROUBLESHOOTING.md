# Решение проблемы с загрузкой шрифтов

Если вы видите ошибку "Failed to decode downloaded font" или "OTS parsing error", это означает, что файлы шрифтов повреждены или имеют неправильный формат.

## Решение:

### Вариант 1: Использовать TTF формат

Если у вас есть TTF файлы, используйте их вместо WOFF:

1. Поместите файлы `VTBGroupUI-*.ttf` в папку `public/fonts/`
2. Обновите `src/index.css`:
   ```css
   src: url('/fonts/VTBGroupUI-Regular.ttf') format('truetype');
   ```

### Вариант 2: Переконвертировать WOFF файлы

Используйте валидный конвертер:
- https://cloudconvert.com/woff-to-woff2
- https://convertio.co/woff-woff2/

### Вариант 3: Проверить файлы

Убедитесь, что файлы не повреждены:
```bash
file public/fonts/VTBGroupUI-Regular.woff
# Должно быть: "Web Open Font Format"
```

### Вариант 4: Использовать другой формат

Если есть исходные файлы в формате TTF или OTF, конвертируйте их в WOFF2 используя надежный инструмент.
