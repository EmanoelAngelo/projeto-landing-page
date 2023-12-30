
var setadireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarparadireita()
{
    leonardo.style = "display:none"
    samantha.style=" display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:55px"
}

function rolarparaesquerda()
{
    leonardo.style = "display:flex"
    samantha.style=" display:none"
    setadireita.style = "display:flex; margin-top:55px"
    setaesquerda.style = "display:none"
}
