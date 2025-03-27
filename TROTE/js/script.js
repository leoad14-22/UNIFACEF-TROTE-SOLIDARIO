function calcular(){
    //criar variaveis
    let mascote, homenagem
    mascote = document.getElementById("mascote").value
    
    homenagem = document.getElementById("homenagem").value
   
    let soma = Number(mascote) + Number(homenagem)
    
    document.getElementById("soma").innerHTML = `a soma é ${soma}`
}