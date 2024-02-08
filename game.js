document.addEventListener('DOMContentLoaded', ()=>{
   const cells = document.querySelectorAll('.cell');
   const winnerAdvice = document.querySelector('.winner-advice');

   let currentPlayer = "0";
   let gameOver = false

   const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
        [0, 4, 8], [2, 4, 6] //diagonales
   ]

   //quitar hover cuando hago click (css)
   cells.forEach(cell =>{
        cell.addEventListener('click', ()=>{
            if(cell !==""){
                cell.classList.add('clicked')
            }else{
                return
            }
        })
   })

   //comprobar quien gano (chat gpt me salvo porque no tenia idea de como hacer esa parte XD)

   function winCheak() {
    // Itera sobre las combinaciones ganadoras
    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        // Verifica si las celdas en la combinación son iguales y no están vacías
        if (cells[a].textContent !== "" && 
            cells[a].textContent === cells[b].textContent && 
            cells[a].textContent === cells[c].textContent) {
            // Hay una combinación ganadora
            gameOver = true;

            console.log(`¡El jugador ${currentPlayer} ha ganado!`);
            winnerAdvice.textContent = `The winner is player: ${currentPlayer}`
            break; // Sal del bucle una vez que encuentres una combinación ganadora
        }
    }
}


   //función principal, supongo
   cells.forEach(function(cell, index){
        cell.addEventListener('click', ()=>{
            console.log(`La celda es ${cell} y el indice es ${index}`)
           
            ChangePlayer()

            if (currentPlayer === "X"){
                cell.textContent = 'X';
            } else{
                cell.textContent = '0';
            }

            winCheak()
    })
   })

   //cambiar el jugador
   function ChangePlayer(){
        if(currentPlayer !== "X"){
            currentPlayer = "X"
        } else{
            currentPlayer = "0"
        }
        console.log(`El jugador actual es ${currentPlayer}`);
   }

})

//bueno este es mi humilde juego. Nada mal para un principiante supongo