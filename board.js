var Board = function() {
  var sideLength = 3;
  var boardArray = []; // initialze tic tac toe array with empty strings
    for (var i = 0; i < sideLength; i++){
        tempArray = [];
    for (var j = 0; j < sideLength; j++){
        tempArray.push("");
    }
    boardArray.push(tempArray);
    }
     this.boardArray = boardArray; // set boardArray attribute to newly created n x n array
     this.sideLength = sideLength; // set length
};

Board.prototype.setSquare = function(row, col, X_or_O) {
  this.boardArray[row][col] = X_or_O;
};

Board.prototype.getSquare = function(row, col) {
  return this.boardArray[row][col];
};

Board.prototype.winner = function() {
  var xWins = /XXX/;
  var oWins = /OOO/;
  var columnArray = [];
  var boardArray = this.boardArray;
    //check horizontal rows for any three X's or O's in a row
  for (var i = 0; i < this.sideLength; i++){
    // join the array into a string
    var joinedRowArray = boardArray[i].join("");
    //regex to see if there are any three X's or O's in a row
    if(xWins.exec(joinedRowArray)){
      return "X";
    }
    if(oWins.exec(joinedRowArray)){
      return "O";
    }
  }
  //check vertical columns for any three X's or O's in a row
  for (var j = 0; j < this.sideLength; j++){
    for (var k = 0; k < this.sideLength; k++) {
      columnArray.push(boardArray[k][j]);
    }
    var joinedColumnArray = columnArray.join("");
      if(xWins.exec(joinedColumnArray)){
        return "X";
      }
      if(oWins.exec(joinedColumnArray)){
        return "O";
      }
    columnArray = [];
  }
    //check diagnals for wins
  var diagnal1 = [boardArray[0][0], boardArray[1][1], boardArray[2][2]].join("");
  var diagnal2 = [boardArray[0][2], boardArray[1][1], boardArray[2][0]].join("");
  var diagnals = [];
  diagnals.push(diagnal1);
  diagnals.push(diagnal2);

  for (var l = 0; l < diagnals.length; l++) {
    if(xWins.exec(diagnals[l])){
      return "X";
    }
    if(oWins.exec(diagnals[l])){
      return "O";
    }
  }
  return false; //returns false if no matches are found
};
