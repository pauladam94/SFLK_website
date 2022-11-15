function getFileFromServer(url, doneCallback) {
    var xhr;

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = handleStateChange;
    xhr.open("GET", url, true);
    xhr.send();

    function handleStateChange() {
        if (xhr.readyState === 4) {
            doneCallback(xhr.status == 200 ? xhr.responseText : null);
        }
    }
}
//You'd call that like this:
/*
getFileFromServer("path/to/file", function(text) {
    if (text === null) {
        // An error occurred
    }
    else {
        // `text` is the file text
    }
});
*/

function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function loadFile(url) {
    
    file = httpGet(url);

    console.log("file is type : ");
            console.log(typeof file);

            // debug print    
            // console.log(file.text());
            console.log("stop buffer \n")
            
            const main = document.querySelector("main")
            file.open("r");
            while (!file.eof) {
                // read each line of text
                main.innerHTML = file.readln() + "\n";
            }
            file.close();  

    /*
    // we get the markdown_file
    getFileFromServer(file_path, function(file) {
        if (file === null) {
            // An error occurred
            console.log("error to open the file")
        }
        else {
            // `file` is the file text
        
            
    
            console.log("file is type : ");
            console.log(typeof file);

            // debug print    
            // console.log(file.text());
            console.log("stop buffer \n")
            
            const main = document.querySelector("main")
            // file.open("r"); // open file with read access
            //while (!file.eof) {
                // read each line of text
            //    main.innerHTML = file.readln() + "\n";
            //}
            // file.close();  
        } });  
    */
    
}

loadFile("https://github.com/sflk-lang/sflk/README.md")