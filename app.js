var indexValue = 0;
function Slideshow(){
    setTimeout(Slideshow, 2500);
    var x;
     const img = document.querySelectorAll
    ("img");
    for(x = 0; x < img.length; x++){
        img[x].style.display = "none";
    }
indexValue++;
if(indexValue > img.length){indexValue = 
1}
img[indexValue -1].style.display =
"block";
}
Slideshow();