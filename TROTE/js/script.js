function calcular(){
    //criar variaveis
    let mascote, homenagem, leite
    mascote = document.getElementById("mascote").value
    
    homenagem = document.getElementById("homenagem").value
   
    let soma = Number(mascote) + Number(homenagem)
    
    leite = document.getElementById("leite").value

    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite))

    document.getElementById("soma").innerHTML = `a soma é ${soma}`
}0