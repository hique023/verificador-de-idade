function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtAno').value
    let res = document.querySelector('div#res')

    if (fano.length == 0 || fano > ano) {
        alert("Dados incorretos!")
    } else {
        let sex = document.getElementsByName('txtSex')
        let idade = ano - fano
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'homem'
            if (idade < 10) {
                img.setAttribute('src', 'images/bebe-homem.jpg')
            } else if (idade < 28) {
                img.setAttribute('src', 'images/jovem-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'images/idoso-homem.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'mulher'
            if (idade < 10) {
                img.setAttribute('src', 'images/bebe-mulher.jpg')
            } else if (idade < 28) {
                img.setAttribute('src', 'images/jovem-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'images/idoso-mulher.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}