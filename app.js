let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let msgcont=document.querySelector(".msgcont")
let newbtn=document.querySelector(".newbtn")
let MSG=document.querySelector("#MSG")
let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetgame = () =>{
    turn0=true;
    enableboxes();
    msgcont.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText="o";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled =true;
       let iswinner= checkwinner();
    });
});
 const disableboxes=()=>{
    for (let box of boxes){
        box.disabled = true;
    }
 }
 const enableboxes=()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
 }
const showwinner=(winner)=>{
 msg.innerText=`congratulation, ${winner}`;
 msgcont.classList.remove("hide");
 disableboxes();
}
const checkwinner=()=>{
    for ( let pattern of winpatterns){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if (pos1!="" && pos2!=""&& pos3!=""){
                if (pos1==pos2 && pos2==pos3){
                    console.log("winner",pos1)
                    showwinner(pos1);

                }
            }
        
    }
}
const resetgame=()=>{
    turn0=true;
    enableboxes();
    winner.classList.add("hide");
}
newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);