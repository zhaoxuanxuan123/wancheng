function fn(){
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW/7.5 + "px";
}
fn();
window.onresize = fn;