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

## Совместная работа (Git + GitHub)

### Первая настройка (один раз)

1. Создайте репозиторий на GitHub: https://github.com/new  
   - Имя: например `frkk`  
   - Не добавляйте README, .gitignore, license — они уже есть в проекте.

2. Подключите удалённый репозиторий и отправьте код:
```bash
git remote add origin https://github.com/ВАШ_ЛОГИН/frkk.git
git push -u origin main
```

3. Коллега клонирует репозиторий:
```bash
git clone https://github.com/ВАШ_ЛОГИН/frkk.git
cd frkk
npm install
npm run dev
```

### Ежедневный workflow

- **Получить изменения:** `git pull`
- **Сохранить изменения:** `git add .` → `git commit -m "описание"` → `git push`
- **Создать ветку для фичи:** `git checkout -b feature/название` → работа → `git push -u origin feature/название`, затем Pull Request на GitHub
