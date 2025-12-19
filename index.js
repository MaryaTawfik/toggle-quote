
const heading=document.getElementById("toggleText");
const btn=document.getElementById("toggleBtn");
let isGet_Inspired=false;
btn.addEventListener("click",()=>{
    if(isGet_Inspired){
        heading.textContent="Take a pause, breathe, and get inspired ";
        btn.textContent="Get_inspired"
       isGet_Inspired=false;
    }
    else{
        heading.textContent="Every bug you fix is a step closer to mastery, and every project you build is a story of growth."
        btn.textContent="I ’ve  got this!"
        isGet_Inspired=true;
    }
})