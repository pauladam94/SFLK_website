const main = document.querySelector("main")
fetch("./data/README.html")
.then(res=>res.text())
.then(data=> {
    main.innerHTML=data
})