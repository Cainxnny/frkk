# Загрузка изображений в папку проекта

Теперь загруженные SVG изображения сохраняются в папку проекта вместо localStorage.

## Структура папок

```
public/
  uploads/
    cards/    # Изображения для карточек (0.svg, 1.svg, ...)
    icons/    # Иконки для навигации (0.svg, 1.svg, ...)
```

## Запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите оба сервера (Vite dev server и Express upload server):
```bash
npm run dev:all
```

Или запустите отдельно:
- Vite dev server: `npm run dev` (порт 3000)
- Upload server: `npm run server` (порт 3001)

## API Endpoints

- `POST /api/upload` - Загрузка файла
  - Body: FormData с полями:
    - `file`: SVG файл
    - `index`: индекс карточки/иконки
    - `type`: 'card' или 'icon'

- `GET /api/uploads/cards` - Получить все загруженные изображения карточек
- `GET /api/uploads/icons` - Получить все загруженные иконки

## Docker

При использовании Docker оба сервера запускаются автоматически через `npm run dev:all`.
