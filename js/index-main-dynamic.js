/*
"#" so "h1" are deleted because they are considered already present on the header of the website

Images are not yed supported because they don't have the right link
*/
function delete_h1(html) {
    console.log(html)
    in_h1 = false
    result = ""
    for (i in html) {
        if (in_h1 && html.startsWith("</h1>", i)){
            console.log("i = ", i, "out",html[i],html[i+1],html[i+2])
            in_h1 = false
        };
        if (html.startsWith("<h1", i)){
            console.log("i = ", i, "in",html[i],html[i+1],html[i+2])
            in_h1 = true
        };
        if (!in_h1) {
            result += html[i];
        };
    }
    return result
}

function delete_image(html) {
    in_image = false;
    result = "";
    for (i in html) {
        if (in_image && html.startsWith(">", i)){
            console.log("i = ", i, "out",html[i],html[i+1],html[i+2])
            in_image = false
        }
        if (html.startsWith("<img", i)){
            console.log("i = ", i, "in",html[i],html[i+1],html[i+2])
            in_image = true;
        }
        if (!in_image) {
            result += html[i]
        }
    }
    return result
}

const main = document.querySelector("main")
fetch('https://raw.githubusercontent.com/sflk-lang/sflk/main/README.md')
.then(response => response.text())
.then(markdown => (new Showdown.converter()).makeHtml(markdown))
.then(html => delete_h1(html))
.then(html => delete_image(html))
.then(html => main.innerHTML = html)