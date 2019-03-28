document.getElementById( "panel-btn" ).addEventListener( "click", function(){
    console.log(document.getElementById( "panel-btn-icon" ).classList.contains( "close" ));
    // パネルを閉じる
    if ( document.getElementById( "panel-btn-icon" ).classList.contains( "close" ) ){
        document.getElementById( "g-navi" ).style.right = "100%";
        document.getElementById( "panel-btn-icon" ).classList.remove( "close" );
        // パネルを開く
    } else {
        document.getElementById( "g-navi" ).style.right = 0;
        document.getElementById( "panel-btn-icon" ).classList.add( "close" );
    }
} );