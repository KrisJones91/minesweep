document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const flagsLeft = document.querySelector('#flags-left')
    const result = document.querySelector('#result')
    let width = 10
    let bombAmount = 10
    let flags = 0
    let squares = []
    let isGameOver = false

    //create Board
    function createBoard() {
        // @ts-ignore
        flagsLeft.innerHTML = bombAmount
      
        //get shuffled game array with random bombs
        const bombsArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width * width - bombAmount).fill('valid')
        const gameArray = emptyArray.concat(bombsArray)
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)
      
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            // @ts-ignore
            square.setAttribute('id', i)
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)


            //normal click
            square.addEventListener('click', function (e) {
                //need function --
                click(square)
            })

            //cntrl and left click
            square.oncontextmenu = function (e) {
                e.preventDefault()
                //need function -- 
                addFlag(square)
            }
        }

        //add numbers
        for (let i = 0; i < squares.length; i++) {
            let total = 0
            const isLeftEdge = (i % width === 0)
            const isRightEdge = (i % width === width - 1)

            if (squares[i].classList.contains('valid')) {
                if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total++
                if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total++
                if (i > 10 && squares[i - width].classList.contains('bomb')) total++
                if (i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total++
                if (i < 98 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total++
                if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total++
                if (i < 88 && !isRightEdge && squares[i + 1 + width].classList.contains('bomb')) total++
                if (i < 89 && squares[i + width].classList.contains('bomb')) total++
                squares[i].setAttribute('data', total)
            }
        }
    }
    createBoard()
    //add Flag with right click
    function addFlag(square) {
        if (isGameOver) return
        if (!square.classList.contains('checked') && (flags < bombAmount)) {
            if (!square.classList.contains('flag')) {
                square.classList.add('flag')
                square.innerHTML = ' 🚩'
                flags++
                flagsLeft.innerHTML = bombAmount - flags
                checkForWin()
            } else {

            }
        }
    }
    
    
    
}