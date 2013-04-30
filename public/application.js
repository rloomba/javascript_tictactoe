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
        if (!board.winner() && move === 9 ){
         $('.gameover').text("Draw!");
         $('.gameover').show();
        }
        var location = this.id[1] + this.id[2];
        if (move % 2 === 0) {
            this.innerHTML = "X";
            $('.move').text("Player B's Move");
            board.setSquare(location[0], location[1], "X");
            if(board.winner()) {
                $('.gameover').text(board.winner() === "X" ? "Player A wins" : "Player B wins");
                $('.gameover').show();
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
                $('.reset').show();
            }
        }
        move += 1;
    });

  $('.reset').on('click', function(){
    location.reload();
  });

});





