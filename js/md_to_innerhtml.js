

// return the index of the first term which is true
// if none is true it returns true
function first_true (list_bool){
    for (i in list_bool) {
        if (list_bool[i]) {
            return i
        }
    }
    return None
}

function inline_treatment(line) {
    result = new String;
    state = {
    code : {bool : false, md : "`", html : "br"},
    bold : {bool : false, md : "**", html : "br"},
    italics : {bool : false, md : "*", html : "em"},
    bold_italics : {bool : false, md : "***", html : " "},
    }

    for (i in line){
        switch (first_true(in_code, in_bold, in_italics, in_bold_italics)) {
        case 0 :

        case 1 :
        
        case 2 :
        
        case 3 :
        
        case 4 :

    } 
        if (line[i] == '*'){
            if (in_bold){
                in_bold = false
                result += "</em>"
            } else {
                in_bold = true
                result += "<em>"
            }
        } else {
            result += line[i]
        }
    }
    return result
}

function markdown_to_html(line) {
    line = inline_treatment(line)
    if (line.startsWith("```")){
        main.innerHTML += '<p>' + line.slice(0) + '</p>'
        return 1
    }
    if (line.startsWith('#####')){
        main.innerHTML += '<h5>' + line.slice(5) + '</h5>'
        return 1
    }
    if (line.startsWith('####')){
        main.innerHTML += '<h4>' + line.slice(4) + '</h4>'
        return 1
    }
    if (line.startsWith('###')){
        main.innerHTML += '<h3>' + line.slice(3) + '</h3>'
        return 1
    }
    if (line.startsWith('##')){
        main.innerHTML += '<h2>' + line.slice(2) + '</h2>'
        return 1
    }
    if (line.startsWith('#')){
        // nothing because it is redundant
        // main.innerHTML += '<h1>' + line.slice(1) + '</h1>'
        return 1
    }
    if (line.startsWith('---')){
        main.innerHTML += '<hr>'
        return 1
    }
    
    main.innerHTML += '<p>' + line + '</p>'
    return 1
}

function space_into_tab(line){
    result = new String;
    for (let i in line) {
        if(line[i] == ' ') {
            result += "_"
        } else {
            result += line[i]
        }
    }
    return result
}

const main = document.querySelector("main")
fetch('https://raw.githubusercontent.com/sflk-lang/sflk/main/README.md')
.then(response => response.text())
// .then(text => text.split('\n'))
// .then(document => {for (let i in document) {document[i] = document[i].trim()} document; return document}) //
// .then(document => document.filter(line => !(line == '')))
.then(document => {
    state = {
        h5 : {in : false, md : "#####", html : "h5", break_line : true},
        h4 : {in : false, md : "####", html : "h4",  break_line : true},
        h3 : {in : false, md : "###", html : "h3",  break_line : true},
        h2 : {in : false, md : "##", html : "h2",  break_line : true},
        h1 : {in : false, md : "#", html : "h1",  break_line : true},

        code : {in : false, md : "```", html : None,  break_line : false},
        inline_code : {in : false, md : "`", html : None, break_line : true},
        bold_italics : {in : false, md : "***", html : None,  break_line : true},
        bold : {in : false, md : "**", html : "strong",  break_line : true},
        italics : {in : false, md : "*", html : "em",  break_line : true},

        array : {in : false, md : "*", htm : None,  break_line : false},
        list : {in: false, md :["+", "-", ""]}

    }
    for (i in document){
        


    }

    /*
    for (line of document) {
        if (!line.includes("<img")){
            
            if (!markdown_to_html(line) == 1) {
                console.log("error on the line")
            }
            line = space_into_tab(line)
            console.log(line.slice(2))
        }
    }
    */
})




















