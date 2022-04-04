
let change = document.querySelector(".change");
let colors = ["red","green","blue"];

change.addEventListener("click",function(){

for(let i = 0; i < colors.length;i++){
  
  document.body.style.backgroundColor = colors[i];
}

})




