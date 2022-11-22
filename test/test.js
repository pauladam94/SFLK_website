CodeMirror.fromTextArea(document.getElementById("myDiv"), {
    lineNumbers: true,
    mode: "htmlmixed"
  });



  /*
    (function(){
        [].forEach.call( document.querySelectorAll('[data-markdown]'), function fn(elem){
            elem.innerHTML = (new Showdown.converter()).makeHtml(unescapeHTML(elem.innerHTML));
        });
    }()); */

    function unescapeHTML( text ) {
      return text.replace( /&amp;/g, "&" )
                 .replace( /&lt;/g, "<" )
                 .replace( /&gt;/g, ">" )
                 .replace( /&quot;/g, "\"" )
                 .replace( /&#39;/g, "'" );
      }