function calcular(){
    //criar variaveis
    let mascote, homenagem
    mascote = document.getElementById("mascote").value
    alert(mascote)
    homenagem = document.getElementById("homenagem").value
    alert(homenagem)
    let soma = Number(mascote) + Number(homenagem)
    alert(soma)
}