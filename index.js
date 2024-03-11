const express = require('express');
const app = express();
const PORT = 5050;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Racecade Users in the Test!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));