let current="X";

let count=0;
 let button=document.querySelectorAll(".inner");
 console.log(button);//retruns the array of button.
let message=document.querySelector("#myparagraph");
let newgame=document.querySelector("#restart");
let reset=document.querySelector("#reset");
 const winpattern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
 ]
 function change(temp)
 {
    if (temp=="X")
    {
        temp="O"
        return temp;
    }    
else
{
    temp="X"
    return temp;
}
 }
 button.forEach((val)=>{
    val.addEventListener("click",()=>{
        count++;
       if(current==="X")
       {
        val.classList.remove("Oturn");
        val.classList.add("Xturn");
       }
       else{
        val.classList.remove("Xturn");
        val.classList.add("Oturn");
       }
        console.log(count);
        console.log(`button was clicked.`);
        val.textContent=`${current}`;
         current=change(current);
         val.disabled=true; //button will be disabled so that it value will not toggle between X and O.
    checkwinner();
    
        })
 })
 const showwinner=(win)=>{
    message.classList.remove("hidden");
    message.textContent=`the winner is ${win}`;
buttondisabled();
 }
const checkwinner=()=>{
  for(let pattern of winpattern)
  {
     let first=button[pattern[0]].textContent;
     let second=button[pattern[1]].textContent;
     let third=button[pattern[2]].textContent;

    // console.log(pattern);
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(first);
    // console.log(second);
    // console.log(third);
  
    if (first!="" && second!="" && third!="")
    {
        if(first==second && second==third)
        {
          
            console.log(`winner is ${first}`);
          showwinner(first);
        }
     
        else{
            if( first!=second && count===9 )
                {
                    showtie();
                }  
            }
        }
}
  }
newgame.addEventListener("click",()=>{
    count=0;
    message.classList.add("hidden");
buttonenabled();
})

reset.addEventListener("click",()=>{
    count=0;
    message.classList.add("hidden");
   buttonenabled();
    }
    )


const buttondisabled=()=>{
    for(let val of button)
    {
       val.disabled=true;
    }
}

const buttonenabled=()=>{
    button.forEach((val)=>{
    {
       val.disabled=false;
       val.textContent="";
    }
})}

const showtie=()=>{
    message.classList.remove("hidden");
    message.textContent=`the game is tie`;
}