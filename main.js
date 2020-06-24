var images = [
    "./png/main button play.png",
    "./png/main button discord.png",
    "./png/main button server.png"
];
var num = 0;
function next(){
    var  slider = document.getElementById("slider");
    num--;
    if(num < 0 ){
        num = images.length-1;
    }
    slider.src = images[num];
}