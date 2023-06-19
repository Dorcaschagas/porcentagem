let num1 = document.getElementById('text1')
let num2 = document.getElementById('text2')
const resultado = document.getElementById('msg')

document.getElementById('botao').addEventListener('click', () =>{
    let resultado = (parseInt(num1.value) * parseInt(num2.value)) / 100
    msg.innerHTML = `${num1.value} % de ${num2.value} é: ${resultado}` 
})