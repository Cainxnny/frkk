# Используем официальный образ Node.js
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта
COPY . .

# Открываем порты для Vite dev server и Express upload server
EXPOSE 3000 3001

# Запускаем оба сервера
CMD ["npm", "run", "dev:all"]
