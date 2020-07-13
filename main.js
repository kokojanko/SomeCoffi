var images = [
    {
    src: "./png/main button play.png",
    link: "./main/main.html"
    },
    { 
    src: "./png/main button discord.png",
    link: "https://discord.gg/gYPmWaR"
    },
    {
    src: "./png/main button server.png",
    link: "./choise/choise.html"
    },
];
var num = 0;
function next(){
    var hrefimg = document.getElementById("hrefimg");
    var  slider = document.getElementById("slider");
    num--;
    if(num < 0 ){
        num = images.length-1;
    }
    var item = images[num];
    slider.src = item.src;
    hrefimg.href = item.link;
    console.log(item)
}
