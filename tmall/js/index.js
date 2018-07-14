
var aSP = document.querySelectorAll(".slider-panner");
var index = 0;
setInterval(function(){
    aSP[index].classList.remove("active");
    if(index==5){
        index = -1;
    }
    aSP[++index].classList.add("active");

},2000);
