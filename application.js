$(document).ready(function(){
    var move = 0;
    var board = new Board();

    // var makeMove = function(letter, element, player){
    //         element.innerHTML = letter;
    //         $('.move').text("Player " + player + "Move");
    //         board.setSquare(location[0], location[1], letter);
    //         if(board.winner()) {
    //             $('.gameover').text(board.winner() === "X" ? "Player A wins" : "Player B wins");
    //             $('.gameover').show();
    //         }
    // }; refactoring, ran out of time

    $('td').on('click', function(){
        var element = this;
        var location = this.id[1] + this.id[2];
        if (move % 2 === 0) {
            this.innerHTML = "X";
            $('.move').text("Player B's Move");
            board.setSquare(location[0], location[1], "X");
            if(board.winner()) {
                $('.gameover').text(board.winner() === "X" ? "Player A wins" : "Player B wins");
                $('.gameover').show();
                $('.move').hide();
                $('.reset').show();
            }
        }
        else{
            this.innerHTML = "O";
            $('.move').text("Player A's Move");
            board.setSquare(location[0], location[1], "O");
            if(board.winner()){
                $('.gameover').text(board.winner() === "X" ? "Player A wins" : "Player B wins");
                $('.gameover').show();
                $('.move').hide();
                $('.reset').show();
            }
        }
        // move += 1;
        if (move === 8 && board.winner() === null ){
          $('.gameover').text("Draw!");
          $('.gameover').show();
          $('.reset').show();
          }
    });

  $('.reset').on('click', function(){
    location.reload();
  });

});





