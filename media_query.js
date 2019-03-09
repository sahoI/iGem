if (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPod") > 0 || (navigator.userAgent.indexOf("Android") > 0 && navigator.userAgent.indexOf("Mobile") > 0 )) {
    document.getElementById("media").innerHTML = "スマートフォンからアクセス";
} else {
    document.getElementById("media").innerHTML = "PCからアクセス";
}