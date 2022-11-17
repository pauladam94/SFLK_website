// le fichier html obtenu par conersion markdown -> html
// via this site : https://markdowntohtml.com/

const main = document.querySelector("main")
fetch("./README/README.html")
.then(res=>res.text())
.then(data=> {
    main.innerHTML=data
})