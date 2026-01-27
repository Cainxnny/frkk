const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

// Настройка multer для сохранения файлов.
// Важно: клиент должен слать поля type и id ПЕРЕД полем file в FormData, иначе req.body в destination пустой.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadType = (req.body && req.body.type) === 'icon' ? 'icon' : 'card';
    const uploadDir = path.join(__dirname, 'public', 'uploads', uploadType === 'card' ? 'cards' : 'icons');
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const id = (req.body && req.body.id) ? String(req.body.id) : `file-${Date.now()}`;
    const ext = path.extname(file.originalname) || '.svg';
    const safeId = id.replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-');
    cb(null, `${safeId}${ext}`);
  }
});

const upload = multer({ storage });

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.static('public'));

// Endpoint для загрузки файла
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  const uploadType = (req.body && req.body.type) === 'icon' ? 'icons' : 'cards';
  res.json({ 
    success: true, 
    path: `/uploads/${uploadType}/${req.file.filename}`,
    id: (req.body && req.body.id) || req.file.filename
  });
});

// Endpoint для получения списка загруженных файлов
app.get('/api/uploads/:type', (req, res) => {
  const type = req.params.type; // 'cards' или 'icons'
  const uploadDir = path.join(__dirname, 'public', 'uploads', type);
  
  if (!fs.existsSync(uploadDir)) {
    return res.json({ files: {} });
  }
  
  const files = {};
  const fileList = fs.readdirSync(uploadDir);
  
  fileList.forEach(file => {
    const id = path.parse(file).name; // Используем ID из имени файла
    const filePath = path.join(uploadDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    files[id] = content;
  });
  
  res.json({ files });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Upload server running on http://0.0.0.0:${PORT}`);
});
