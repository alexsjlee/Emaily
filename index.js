const express = require('express');
const PORT = process.env.PORT || 9000;
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

app.listen(PORT, () => {
    console.log('Server is listening on', PORT);
});