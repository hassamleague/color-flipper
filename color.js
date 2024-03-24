let div = document.getElementById('div')
let btn = document.getElementById('btn')


btn.addEventListener('click',()=>{

   let random= Math.floor(Math.random()*989898)

let random1 ="#" + random

console.log(div.style.backgroundColor=random1)

})