"use strict";

const colorsSidebar = document.querySelector('.colors-pallete-sidebar');
const pixelsSidebar = document.querySelector('.pixels-sidebar')
const colorsBtn = document.querySelector('.colors-menu');
const pixelsBtn = document.querySelector('.pixels-menu');


colorsBtn.addEventListener('click', ()=>{
    let classPixels = pixelsSidebar.classList.value;
    
    if(window.innerWidth < 700){
        if(classPixels.indexOf('show') > 0){
            pixelsSidebar.classList.toggle('show');
            colorsSidebar.classList.toggle('show');
        }else{
            colorsSidebar.classList.toggle('show');
        }
    }else{
        colorsSidebar.classList.toggle('show');
    }  
})

for(let colorOption of colorOptions){
    colorOption.addEventListener('click', ()=>{
        colorsSidebar.classList.toggle('show');
        eraser.classList.remove('true');
        eraserBtn.classList.remove('green');
    })
}
eraser.addEventListener('click', ()=>{
    colorsSidebar.classList.toggle('show');
})

pixelsBtn.addEventListener('click', ()=>{
    let classColors = colorsSidebar.classList.value;
    
    if(window.innerWidth < 700){
        if(classColors.indexOf('show') > 0){
            colorsSidebar.classList.toggle('show');
            pixelsSidebar.classList.toggle('show');
        }else{
            pixelsSidebar.classList.toggle('show');
        }
    }else{
        pixelsSidebar.classList.toggle('show')
    }
})

for(let pixelOption of pixelOptions){
    pixelOption.addEventListener('click', ()=>{
        pixelsSidebar.classList.toggle('show');
    })
}

deleteAllBtn.addEventListener('click', ()=>{
    colorsSidebar.classList.toggle('show');
})