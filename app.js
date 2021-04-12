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








    }
}
    
