 let boxes=document.querySelectorAll(".box");
 let resetsbtn=document.querySelector("#reset-btn");
 let newGameBtn=document.querySelector("#new-btn");
 let messageContainer=document.querySelector(".msg-container");
 let message=document.querySelector("#msg");

 let turnO=true;
 let count=0;

 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    messageContainer.classList.add("hide");
 };

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let iswinner=checkWinner();

        if (count === 9 && !iswinner){
            gamedraw();
        }
    });
 });
 const gamedraw=()=>{
    message.innerText=`game was draw.`;
    messageContainer.classList.remove("hide");
    disableboxes();
 };

 const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 };

 const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };
 const showWinner=(winner)=>{
    message.innerText=`congratulations, winner is${winner}`;
    messageContainer.classList.remove("hide");
    disableboxes();

 };
 const checkWinner=()=>{
    for(let patterns of winPatterns){
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;
        
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
 }
 newGameBtn.addEventListener("click",resetGame);
 resetsbtn.addEventListener("click",resetGame);