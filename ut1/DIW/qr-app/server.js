// server.js
const express = require('express');
const QRCode = require('qrcode');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/qr', async (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: 'Falta el parámetro ?url' });

    try {
        const u = new URL(url);
        if (!['http:', 'https:'].includes(u.protocol)) {
            throw new Error('Solo se permite http(s)');
        }

        const png = await QRCode.toBuffer(u.href, { type: 'png', width: 400, margin: 1 });
        res.set('Content-Type', 'image/png');
        res.send(png);
    } catch (err) {
        res.status(400).json({ error: 'URL inválida', detail: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});