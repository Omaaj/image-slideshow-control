const img = document.querySelectorAll('img');
const slider = document.querySelectorAll('.btm-sliders span');

let indexValue = 1;

function showImg(e) {
    if(e > img.length) {
        indexValue = 1
    }
    if(e < 1) {
        indexValue = img.length;
    }
    for(let i = 0; i < img.length; i++) {
        img[i].style.display = 'none'
    }
    for(let i = 0; i < slider.length; i++) {
        slider[i].style.background = 'rgba(255, 255, 255, 0.1)'
    }
    img[indexValue - 1].style.display = 'block'
    slider[indexValue - 1].style.background = 'white';
}

showImg(indexValue);

function btm_slide(e) {
    showImg(indexValue = e);
}

function side_slide(e) {
    showImg(indexValue += e)
}
