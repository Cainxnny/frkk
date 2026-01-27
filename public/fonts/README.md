# Шрифты VTBGroupUI

В этой папке должны находиться файлы шрифта VTBGroupUI в формате WOFF2:

- `VTBGroupUI-Regular.woff2` (font-weight: 400)
- `VTBGroupUI-Medium.woff2` (font-weight: 500)
- `VTBGroupUI-SemiBold.woff2` (font-weight: 600)
- `VTBGroupUI-Bold.woff2` (font-weight: 700)

## Важно!

Если вы видите ошибку "Failed to decode downloaded font" или "OTS parsing error", это означает, что файлы шрифтов повреждены или имеют неправильный формат.

### Решение проблемы:

1. **Проверьте файлы** - убедитесь, что файлы не повреждены
2. **Переконвертируйте шрифты** - используйте валидный конвертер WOFF2
3. **Проверьте формат** - файлы должны быть валидными WOFF2 файлами

### Онлайн конвертеры:

- https://cloudconvert.com/ttf-to-woff2
- https://convertio.co/ttf-woff2/

### Проверка файлов:

```bash
# Проверка типа файла
file public/fonts/VTBGroupUI-Regular.woff2

# Должно быть: "Web Open Font Format (Version 2)"
```

Если файлы повреждены, замените их на валидные WOFF2 файлы.
