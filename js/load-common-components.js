function header(){
    $.ajax({
        url: "/common/header.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}

function indexheader(){
    $.ajax({
        url: "/common/indexheader.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}

function footer(){
    $.ajax({
        url: "/common/footer.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}