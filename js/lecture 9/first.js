let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msgPara = document.querySelector("#result-msg");
let newGameBtn = document.querySelector("#newgame-btn")
let turn0 = true ;
let count = 0 ;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const  resetGame = () => {
   turn0 = true ;
   enableBoxes();
   msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(turn0 === true){
            box.innerText = "0";
            turn0 = false ;
        }
        else{
            box.innerText = "X";
            turn0  = true ;
        }
        box.disabled  = true;
        count++
        checkWinner();

        let champ = checkWinner();
        if(count === 9 && !champ){
            drawGame();
        }

        // const countBtn = () =>{
        //     if(winPatterns !== "" && pos1val !== pos2val){
        //         drawGame();                
        //     }        
        // }
    
    })        
    });
        const disabledBoxes = ()=>{
            for (let box of boxes){
               box.disabled = true ;
            }
        };

        const enableBoxes = ()=>{
            for (let box of boxes){
                box.disabled = false;
                box.innerText = "";
            }
        };

    const showWinner = (winner) => {
        msgPara.innerText = `Congratulations,Player ${winner} won the game `;
        msgContainer.classList.remove("hide");
        disabledBoxes();
       } 

       const drawGame = () => {
        msgPara.innerText = `The game has been draw start a new game `;
        msgContainer.classList.remove("hide");
        disabledBoxes();
       }

    const checkWinner = () =>{
        for(let pattern of winPatterns){

            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val){                    
                    showWinner(pos1val);  
                }                
            }
        }        
    }  
     newGameBtn.addEventListener('click', resetGame);
    resetBtn.addEventListener('click', resetGame);
       
    
   