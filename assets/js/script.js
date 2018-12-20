window.addEventListener("scroll",function(){
    let target = document.getElementById('author-name');
    if (window.pageYOffset > 150){
    target.style.display = "block"; 
    }
    else if (window.pageYOffset < 150 || window.pageXOffset < 996){
    target.style.display = "none";
    }
},false);