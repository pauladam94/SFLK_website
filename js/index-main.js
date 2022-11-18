// le fichier html obtenu par conversion du REAMDE.md -> README.html
// Version du README du 17 Novembre 2022
// via this site : https://markdowntohtml.com/

const main = document.querySelector("main")
fetch("./README/README.html")
.then(res=>res.text())
.then(data=> {
    main.innerHTML=data
})