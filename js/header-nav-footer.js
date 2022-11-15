const header = document.querySelector("header")
fetch("./header-nav-footer/header.html")
.then(res=>res.text())
.then(data=> {
    header.innerHTML=data
})

const nav = document.querySelector("nav")
fetch("./header-nav-footer/nav.html")
.then(res=>res.text())
.then(data=> {
    nav.innerHTML=data
})

const footer = document.querySelector("footer")
fetch("./header-nav-footer/footer.html")
.then(res=>res.text())
.then(data=> {
    footer.innerHTML=data
})