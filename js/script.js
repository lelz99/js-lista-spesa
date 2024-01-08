const div = document.querySelector('.lista-spesa')
const list = ['uova', 'latte', 'pane', 'carne', 'verdura', 'frutta', 'acqua', 'pesce']
// console.log(list)

let i = 0;
let listItems = '<ul>'

while(i < list.length){
    listItems += `<li>${list[i]}</li>`
    i++
}

listItems += '</ul>'
div.innerHTML = listItems


//////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////


// Soluzione For
/* let listItems = '<ul>'

for(let i = 0; i < list.length; i++){
    listItems += `<li>${list[i]}</li>`
}
listItems += '</ul>'
body.innerHTML = listItems */