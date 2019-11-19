const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const scrabblify = (scrabbleWord) => {
    return Array.from(scrabbleWord).map((scrabbleWordPiece) => {
        scrabbleWordPiece = scrabbleWordPiece === ' ' ? 'blank' : scrabbleWordPiece;
        return `:${scrabbleWordPiece.toLowerCase()}_scrabble:`
    }).join(' ');
}

app.post('/', (req, res) => {
    console.log(req.body);
    res.send({
        color: 'danger',
        response_type: "in_channel",
        text: scrabblify(req.body.text || ''),
        mrkdwn_in: ['text']
      });
});

app.listen(process.env.PORT || 1337, () => console.log('Gator app listening on port 3000!'));

