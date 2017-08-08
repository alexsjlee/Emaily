const express = require('express');
const PORT = process.env.PORT || 9000;
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(PORT, () => {
    console.log('Server is listening on', PORT);
});