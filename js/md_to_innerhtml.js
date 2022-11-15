const main = document.querySelector("main")
fetch("https://github.com/sflk-lang/sflk/README.md")
.then(res=>res.text())
.then(data=> {
    main.innerHTML=data
})