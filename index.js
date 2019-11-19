const express = require('express');
const app = express();

const scrabblify = (scrabbleWord) => {
    return Array.from(scrabbleWord).map((scrabbleWordPiece) => {
        scrabbleWordPiece = scrabbleWordPiece === ' ' ? 'blank' : scrabbleWordPiece;
        return `:${scrabbleWordPiece.toLowerCase()}_scrabble:`
    }).join(' ');
}

app.get('/', (req, res) => {
    console.log(req);
    res.send({
        text: scrabblify('Dit is een test')
    });
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
