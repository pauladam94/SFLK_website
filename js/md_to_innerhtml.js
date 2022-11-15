const main = document.querySelector("main")
fetch("https://github.com/sflk-lang/sflk/blob/main/README.md")
// .then(res=>res.text())
.then(data => {
    console.log(data);
    main.innerHTML=data
})