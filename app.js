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
    const emptyArray = Array(width*width - bombAmount).fill('valid')
    const gameArray = emptyArray.concat(bombsArray)

})