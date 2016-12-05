var prompt = require('prompt');
prompt.start();

// console.log('\033[2J');

var TicTacToe = function(n) {
  n = n || 3;
  var numSquares = n * n;
  var remSquares = numSquares;
  var playerOne = true;

  this.board = [];
  
  // Create a board
  for (var i = 0; i < n; i++) {
    this.board.push(new Array(n));
  }

  var horizontalWin = function(row) {
    for (var i = 0; i < board[row].length; i ++) {
      if (board[row][i] === '') {
        return false;
      }
      if (board[row][i] !== board[row][i + 1] && board[row][i + 1] !== undefined) {
        return false;
      }        
    }
    return true;
  }


  this.generateBoard = function() {
    // Draw board on screen
    var row = '';
    for (var i = 1; i <= numSquares; i++) {
      row += '|' + i + '|' + (i % n === 0 ? '\n' : '');
    }
    console.log(row);
    console.log('Player 1 = X || Player 2 = O');
    var squares = 0;
    (remSquares < numSquares ? squares = remSquares : squares = numSquares)
    this.startRound(squares);
  }

  this.startRound = function(left) {
    if (left === 0) {
      return console.log('No winner!');
    }
    console.log('Player ' + (playerOne ? '1' : '2') + ', make your move.\n');
    prompt.get('move', function(err, result) {
      var row = Math.floor(result.move / n);
      var col = result.move % n;
      this.board[row][col] = (playerOne ? 'X' : 'O');
    });
    // this.generateBoard();
    // if ()
    playerOne = !playerOne;
    remSquares--;
    this.startRound(remSquares);
  }
}

var test = new TicTacToe();
test.generateBoard();
