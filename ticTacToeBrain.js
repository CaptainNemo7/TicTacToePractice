// three by three game board
// five columns
// five rows

class Board {
  constructor(rows, countOfTurn) {
  this.rows = {
    1: ['  ', ' |', '  ', '  |', '  '],
    2: ['---', '|', '---', ' |', '---'],
    3: ['  ', ' |', '  ', '  |', '  '],
    4: ['---', '|', '---', ' |', '---'],
    5: ['  ', ' |', '  ', '  |', '  ']
  },
  this.countOfTurn = 1;
}

showCurrentBoard() {
console.log(this.rows)
}

checkBoardForXWin() {
//horizontal row win
if ( this.rows[1][0] === ' X' && this.rows[1][2] === ' X' && this.rows[1][4] === ' X') {
console.log('X wins!')
}

if ( this.rows[3][0] === ' X' && this.rows[3][2] === ' X' && this.rows[3][4] === ' X') {
console.log('X wins!')
}

if ( this.rows[5][0] === ' X' && this.rows[5][2] === ' X' && this.rows[5][4] === ' X') {
console.log('X wins!')
}

//Vertical column win
if ( this.rows[1][0] === ' X' && this.rows[3][0] === ' X' && this.rows[5][0] === ' X') {
console.log('X wins!')
}

if ( this.rows[1][2] === ' X' && this.rows[3][2] === ' X' && this.rows[5][2] === ' X') {
console.log('X wins!')
}

if ( this.rows[1][4] === ' X' && this.rows[3][4] === ' X' && this.rows[5][4] === ' X') {
console.log('X wins!')
}

//Diagnol win
if ( this.rows[1][0] === ' X' && this.rows[3][2] === ' X' && this.rows[5][4] === ' X') {
console.log('X wins!')
}

if ( this.rows[1][4] === ' X' && this.rows[3][2] === ' X' && this.rows[5][0] === ' X') {
console.log('X wins!')
}

}

checkBoardForOWin() {
//horizontal row win
if ( this.rows[1][0] === ' O' && this.rows[1][2] === ' O' && this.rows[1][4] === ' O') {
console.log('O wins!')
}

if ( this.rows[3][0] === ' O' && this.rows[3][2] === ' O' && this.rows[3][4] === ' O') {
console.log('O wins!')
}

if ( this.rows[5][0] === ' O' && this.rows[5][2] === ' O' && this.rows[5][4] === ' O') {
console.log('O wins!')
}

//Vertical column win
if ( this.rows[1][0] === ' O' && this.rows[3][0] === ' O' && this.rows[5][0] === ' O') {
console.log('O wins!')
}

if ( this.rows[1][2] === ' O' && this.rows[3][2] === ' O' && this.rows[5][2] === ' O') {
console.log('O wins!')
}

if ( this.rows[1][4] === ' O' && this.rows[3][4] === ' O' && this.rows[5][4] === ' O') {
console.log('O wins!')
}

//Diagnol win
if ( this.rows[1][0] === ' O' && this.rows[3][2] === ' O' && this.rows[5][4] === ' O') {
console.log('O wins!')
}

if ( this.rows[1][4] === ' O' && this.rows[3][2] === ' O' && this.rows[5][0] === ' O') {
console.log('O wins!')
}

}

move(row, column) {
if ( row === 2 || row === 4 || column === 1 || column === 3 ) {
console.log(`
oooooooooo                     oooo          oooo     oooo                                           ooooooooooo                        
 888    888   ooooooo     ooooo888            8888o   888    ooooooo   oooo   oooo  ooooooooo8       88  888  88 oo oooooo   oooo   oooo
 888oooo88    ooooo888  888    888            88 888o8 88  888     888  888   888  888oooooo8            888      888    888  888   888 
 888    888 888    888  888    888            88  888  88  888     888   888 888   888                   888      888          888 888  
o888ooo888   88ooo88 8o   88ooo888o          o88o  8  o88o   88ooo88       888       88oooo888          o888o    o888o           8888   
                                                                                                                              o8o888    
     o                               o88                                                                                                
    888       oooooooo8   ooooooo    oooo  oo oooooo                                                                                    
   8  88    888    88o    ooooo888    888   888   888                                                                                   
  8oooo88    888oo888o  888    888    888   888   888                                                                                   
o88o  o888o 888     888  88ooo88 8o  o888o o888o o888o                                                                                  
             888ooo888                                               
`)
return
}

if ( this.rows[row][column] !== '  ') {
console.log('someone is already there, try again')
return;
}
if ( this.countOfTurn % 2 === 0 ) {
this.rows[row][column] = ' O'
this.countOfTurn += 1;
this.showCurrentBoard()
this.checkBoardForOWin()

} else {
this.rows[row][column] = ' X'
this.countOfTurn += 1;
this.showCurrentBoard()
this.checkBoardForXWin()
}
}
}

let x = new Board();
// x.showCurrentBoard()
x.move(3, 4); // x
x.move(3, 4); 
// x.move(1, 2); // x
// x.move(5, 0);
// x.move(3, 2); // x
// x.move(3, 0);


