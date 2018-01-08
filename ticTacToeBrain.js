// three by three game board
// five columns
// five rows

class Board {
	constructor() {
		this.row1 = [0, '    |', 0, '    |', 0]
		this.row2 =['---', '|', '---', '|', '---']
		this.row3 = [0, '    |', 0, '    |', 0]
		this.row4 = ['---', '|', '---', '|', '---']
		this.row5 =[0, '    |', 0, '    |', 0]
	}

	showCurrentBoard() {
		console.log(this.row1)
		console.log(this.row2)
		console.log(this.row3)
		console.log(this.row4)
		console.log(this.row5)
	}
}

let x = new Board;
x.showCurrentBoard();