const main = document.querySelector('main')

// Membro 1
{   
    // DIV Col
    const divCol = document.createElement("div")
    divCol.setAttribute('class', 'col')

    // DIV Card
    const divCard = document.createElement("div")
    divCard.setAttribute('class', 'card h-100')

    divCol.appendChild(divCard)

    // DIV Img
    const divImg = document.createElement("div")

    divCard.appendChild(divImg)

    // IMG element
    const img = document.createElement('img')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', 'imgs/img_leonardo.jpg')

    divImg.appendChild(img)

    // DIV NOME
    const divNome = document.createElement("div")

    divCard.appendChild(divNome)

    // DIV h4
    const h4 = document.createElement('h4')
    h4.innerHTML = "Leonardo Santino"

    divNome.appendChild(h4)

    // Div Descrição
    const divDesc = document.createElement("div")

    divCard.appendChild(divDesc)

    // P element
    const p = document.createElement('p')
    p.innerHTML = 'Mentor e programador chefe da equipe, responsável pelo atual funcionamento do site.'

    divDesc.appendChild(p)

    // main append divCol
    main.appendChild(divCol)
}
// Membro 2
{
    const divCol = document.createElement("div")
    divCol.setAttribute('class', 'col')

    // DIV Card
    const divCard = document.createElement("div")
    divCard.setAttribute('class', 'card h-100')

    divCol.appendChild(divCard)

    // DIV Img
    const divImg = document.createElement("div")

    divCard.appendChild(divImg)

    const img = document.createElement('img')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', 'imgs/img_eduardo.jpg')

    divImg.appendChild(img)

    // DIV NOME
    const divNome = document.createElement("div")

    divCard.appendChild(divNome)

    // DIV h4
    const h4 = document.createElement('h4')
    h4.innerHTML = "Eduardo Marcondes"

    divNome.appendChild(h4)

    // Div Descrição
    const divDesc = document.createElement("div")

    divCard.appendChild(divDesc)

    const p = document.createElement('p')
    p.innerHTML = 'Líder de conteúdo e da empresa. Por isso seu nome compõe a logo...'

    divDesc.appendChild(p)

    main.appendChild(divCol)
}
// Membro 3
{
    const divCol = document.createElement("div")
    divCol.setAttribute('class', 'col')

    // DIV Card
    const divCard = document.createElement("div")
    divCard.setAttribute('class', 'card h-100')

    divCol.appendChild(divCard)

    // DIV Img
    const divImg = document.createElement("div")

    divCard.appendChild(divImg)

    const img = document.createElement('img')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', 'imgs/img_murilo.jpg')

    divImg.appendChild(img)

    // DIV NOME
    const divNome = document.createElement("div")

    divCard.appendChild(divNome)

    // DIV h4
    const h4 = document.createElement('h4')
    h4.innerHTML = "Murilo Muca"

    divNome.appendChild(h4)

    // Div Descrição
    const divDesc = document.createElement("div")

    divCard.appendChild(divDesc)

    const p = document.createElement('p')
    p.innerHTML = 'Head de marketing, nos fez chegar até você.'

    divDesc.appendChild(p)

    main.appendChild(divCol)
}
// Membro 4
{
    const divCol = document.createElement("div")
    divCol.setAttribute('class', 'col')

    // DIV Card
    const divCard = document.createElement("div")
    divCard.setAttribute('class', 'card h-100')

    divCol.appendChild(divCard)

    // DIV Img
    const divImg = document.createElement("div")

    divCard.appendChild(divImg)

    const img = document.createElement('img')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', 'imgs/img_felipe.jpg')

    divImg.appendChild(img)

    // DIV NOME
    const divNome = document.createElement("div")

    divCard.appendChild(divNome)

    // DIV h4
    const h4 = document.createElement('h4')
    h4.innerHTML = "Felipe Reusch"

    divNome.appendChild(h4)

    // Div Descrição
    const divDesc = document.createElement("div")

    divCard.appendChild(divDesc)

    const p = document.createElement('p')
    p.innerHTML = 'Consultor financeiro da equipe, evitou que falíssemos no caminho.'

    divDesc.appendChild(p)

    main.appendChild(divCol)
}