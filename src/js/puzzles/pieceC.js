const PieceSimple = require('./PieceSimple.js');

class PieceC {    

    constructor(game, spriteName, position) {
        this.piece = new PieceSimple(game, spriteName, {x: position.x, y: position.y});
        let pieceLength = this.piece.getLength();

        let piece2 = new PieceSimple(game, spriteName, {x: pieceLength, y: 0}),
            piece3 = new PieceSimple(game, spriteName, {x: pieceLength, y: pieceLength}),
            piece4 = new PieceSimple(game, spriteName, {x: pieceLength, y: 2 * pieceLength}),
            piece5 = new PieceSimple(game, spriteName, {x: 0, y: 2 * pieceLength});

        this.piece.addChildren([piece2, piece3, piece4, piece5]);
    }

    getSprite() {
        return this.piece.sprite;
    }

    resetPosition() {
        this.piece.resetPosition();
    }
};

module.exports = PieceC;