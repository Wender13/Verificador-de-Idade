function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <15) {
                //criança
                img.setAttribute('src', 'criança-menino.png')
            } else if (idade >= 15 && idade < 24) {
                //adolescente
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <15) {
                //criança
                img.setAttribute('src', 'criança-menina.png')
            } else if (idade >= 15 && idade < 24) {
                //adolescente
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'adulta-mulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}