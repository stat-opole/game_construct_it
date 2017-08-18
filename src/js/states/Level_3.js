const PieceLittleL = require('../puzzles/PieceLittleL.js'),
      PieceLeftDownL = require('../puzzles/PieceLeftDownL.js'),
      PieceLeftUpL = require('../puzzles/PieceLeftUpL.js'),
      PieceTetrisRight = require('../puzzles/PieceTetrisRight.js'),
      PieceTetrisLeft = require('../puzzles/PieceTetrisLeft.js'),
      PieceLittleI = require('../puzzles/PieceLittleI.js'),
      enableDragging = require('../utils/dragging.js'),
      StepsCounter = require('../utils/StepsCounter.js'),
      CommonLevel = require('../utils/commonLevel.js'),
      BoardBuilder = require('../board/boardBuilder.js');

const LevelNumber = 3; 

class Level_3 {

    create() {
        StepsCounter.reset();

        this.game.add.sprite(0, 0, 'levelBg');
        
        CommonLevel.displayLevel(this.game, "Level 3");
        this.stepsCounter = CommonLevel.displaySteps(this.game, StepsCounter.getCounter());
        CommonLevel.displayMenuButton(this.game, this, this.menu);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        let boardBuilder = new BoardBuilder(this.game, "blockGrey", {x: 440, y: 320});
        let board = boardBuilder
            .addDownLeftPiece()
            .addRightPiece()
            .addRightPiece()
            .addDownRightPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addDownLeftPiece()
            .addRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addDownLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addDownRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addDownLeftPiece()
            .build();

        let piece1 = new PieceLittleL(this.game, "blockRed", {x: 120, y: 160});
        enableDragging(this.game, LevelNumber, piece1, board); 

        let piece2 = new PieceLeftDownL(this.game, "blockBlue", {x: 120, y: 280});
        enableDragging(this.game, LevelNumber, piece2, board); 

        let piece3 = new PieceLeftUpL(this.game, "blockGreen", {x: 320, y: 160});
        enableDragging(this.game, LevelNumber, piece3, board); 

        let piece4 = new PieceTetrisRight(this.game, "blockOrange", {x: 440, y: 160});
        enableDragging(this.game, LevelNumber, piece4, board); 

        let piece5 = new PieceTetrisRight(this.game, "blockYellow", {x: 560, y: 160});
        enableDragging(this.game, LevelNumber, piece5, board); 

        let piece6 = new PieceTetrisLeft(this.game, "blockWhite", {x: 720, y: 160});
        enableDragging(this.game, LevelNumber, piece6, board); 

        let piece7 = new PieceLittleI(this.game, "blockWhite", {x: 240, y: 160});
        enableDragging(this.game, LevelNumber, piece7, board);    

        let pieces = [piece1, piece2, piece3, piece4, piece5, piece6, piece7];
        this.game.physics.enable(board.getBoardElements().concat(pieces), Phaser.Physics.ARCADE);
    }

    menu() {
        this.game.state.start('menu');
    }

    update() {
        this.stepsCounter.destroy();
        this.stepsCounter = CommonLevel.displaySteps(this.game, StepsCounter.getCounter());
    }

};

module.exports = Level_3;