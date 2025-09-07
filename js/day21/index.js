
let turn = 'O'
let total_turn = 0

let winner = [[0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]]

const board = document.querySelector('.board');

let board_array = new Array(9).fill("E");
// 0. 1. 2. 3. 4. 5. 6. 7. 8.
// ["E" , "E" , "E" , "E" , "E" , "E" , "E" , "E" , "E"]

// console.log(board_array);

function checkWinner() {

    for (let val of winner) {
        if (board_array[val[0]] == board_array[val[1]] && board_array[val[1]] == board_array[val[2]] && board_array[val[0]] != "E") {
            return 1;
        }      
    }
    return 0;
    
}
let val = document.getElementsByName('')

// board.removeEventListener('click' , callbackfunction);

const printer = (event) => {
    const cell = event.target;
    // console.log(cell.id);
    // event.preventDefault();

    if (board_array[cell.id] == 'E') {
        total_turn++;

    if (turn=='O') {
        cell.innerHTML = "O";
        board_array[cell.id] = 'O';
        if(checkWinner()){
            document.getElementById("winningMessage").innerHTML = "O Wins";
            // return;
            board.removeEventListener('click' , printer);
            return;
        }
        turn = 'X'; 
    } else {
        cell.innerHTML = "X";
        board_array[cell.id] = 'X';
        if(checkWinner()){
            document.getElementById("winningMessage").innerHTML = "X Wins";
            // return;
            board.removeEventListener('click' , printer);
            return;
        }
        turn = 'O';
    }

    if (total_turn == 9) {
        document.getElementById("winningMessage").innerHTML = "Draw";
        // return;
        // board.removeEventListener('click' , printer);
    }
}
}



board.addEventListener('click', printer);

const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click' , ()=>{
    const cell = document.querySelectorAll('.cell');
    Array.from(cell).forEach((cell)=>{
        cell.innerHTML = '';
       
    })
    turn = 'O';
    total_turn = 0;
    board_array = new Array(9).fill("E");
    document.getElementById("winningMessage").innerHTML = ''; 
    board.addEventListener('click' , printer);
})