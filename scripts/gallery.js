let img = document.getElementsByClassName('gallery-thumb')
let view = document.getElementById('gallery-view')

for(let i = 0; i < img.length; i++){
    img[i].onclick = () => {
        let url = img[i].style.backgroundImage
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        img[i].className += " active";
        view.style.backgroundImage = url;
    }
}


