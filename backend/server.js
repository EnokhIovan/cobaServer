const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use('/pages', express.static(path.join(__dirname, '../frontend/pages')));
app.use('/scripts', express.static(path.join(__dirname, '../frontend/scripts')));
app.use('/styles', express.static(path.join(__dirname, '../frontend/styles')));

app.get('/', (req, res) => {
    res.redirect('/login');
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/login.html"));
})

app.get('/tugas', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/tugas.html"));
})

app.listen(PORT, () => {
    console.log(`Server dibuka pada http://localhost:${PORT}`);
})