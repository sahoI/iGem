function footer(){
    $.ajax({
        url: "footer.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}