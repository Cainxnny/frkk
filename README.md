# FRKK React App

React приложение для разработки и изменения дизайна интерфейса.

## Требования

- Docker и Docker Compose установлены на вашем компьютере

## Быстрый старт

### Запуск с Docker Compose (рекомендуется)

1. Запустите приложение:
```bash
docker-compose up --build
```

2. Откройте браузер и перейдите по адресу:
```
http://localhost:3000
```

3. Для остановки приложения нажмите `Ctrl+C` или выполните:
```bash
docker-compose down
```

### Запуск без Docker (локально)

Если у вас установлен Node.js локально:

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev server:
```bash
npm run dev
```

3. Откройте браузер по адресу `http://localhost:3000`

## Разработка

### Hot Reload

При использовании Docker Compose, все изменения в файлах в папке `src/` автоматически применяются благодаря volume монтированию. Просто сохраните файл, и изменения отобразятся в браузере.

### Структура проекта

```
frkk/
├── src/
│   ├── App.jsx          # Главный компонент приложения
│   ├── main.jsx         # Точка входа
│   └── index.css        # Глобальные стили
├── index.html           # HTML шаблон
├── package.json         # Зависимости проекта
├── vite.config.js       # Конфигурация Vite
├── Dockerfile          # Docker образ для разработки
└── docker-compose.yml  # Docker Compose конфигурация
```

### Изменение дизайна

Основной компонент находится в `src/App.jsx`. Вы можете редактировать:
- Стили (inline styles в компоненте)
- Структуру компонентов
- Данные (tabs, cards, navMenuItems)

Все изменения применяются автоматически благодаря hot-reload.

## Команды

- `npm run dev` - запуск dev server
- `npm run build` - сборка для production
- `npm run preview` - предпросмотр production сборки

## Порты

- **3000** - основной порт для разработки (Vite dev server)
