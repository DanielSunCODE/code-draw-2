"use strict";

const drawingSection = document.querySelector('.drawing-section');
const colorOptions = document.querySelectorAll('.color-option');
const pixelOptions = document.querySelectorAll('.pixel-option');
const eraser = document.getElementById('eraser');
const eraserBtn = document.querySelector('.eraser-btn-fixed');
const deleteAllBtn = document.querySelector('.delete-all')
const defaultNum = 100;
let color =  '#000';
let eraserOnUse = false;

for(let colorOption of colorOptions){
    let colorOptionValue = colorOption.value;
    colorOption.addEventListener('click', ()=>{
        let colorOptionValueString = colorOptionValue.toString()
        eraserOnUse = false;
        color = colorOptionValueString;
    }) 
}

eraser.addEventListener('click', ()=>{
    eraser.classList.toggle('true');
    eraserBtn.classList.toggle('green')
    if(eraserOnUse === false){
        eraserOnUse = true;
    }else if(eraserOnUse === true){
        eraserOnUse = false;
    }
})

eraserBtn.addEventListener('click', ()=>{
    eraserBtn.classList.toggle('green');
    if(eraserOnUse === false){
        eraserOnUse = true;
    }else if(eraserOnUse === true){
        eraserOnUse = false;
    }
})

deleteAllBtn.addEventListener('click', ()=>{
    let pixels = drawingSection.children;
    for(let pixel of pixels){
        pixel.style.background = '#fff'
    }
})

const createGrid = (pixels) =>{
    let pixelsFragment = document.createDocumentFragment();
    for(let i = 0; i < pixels; i++){
        let pixel = document.createElement('div');
        pixel.classList = 'pixel';
        pixelsFragment.appendChild(pixel);
        pixel.addEventListener('click', ()=>{
            pixel.style.background = color;
            if(eraserOnUse){
                pixel.style.background = '#fff';
            }
        })
    }

    if(pixels == drawingSection.children.length){
        return
    }else if(!drawingSection.hasChildNodes()){
        if(innerWidth > 700){
            drawingSection.style = `grid-template-columns: repeat(10, 1fr); grid-template-rows: repeat(10, 1fr);`
        }else if(innerWidth < 700){
            drawingSection.style = `grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(20, 1fr);`
        }
    }else{
        let confirmPixelChange = confirm('Cambiar de cuadricula borrara el dibujo, estas seguro de continuar');
        if(confirmPixelChange){
            if(pixels == 100){
                if(innerWidth > 700){
                    drawingSection.style = `grid-template-columns: repeat(10, 1fr); grid-template-rows: repeat(10, 1fr);`
                }else if(innerWidth < 700){
                    drawingSection.style = `grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(20, 1fr);`
                }
            }else if(pixels == 200){
                if(innerWidth > 700){
                    drawingSection.style = `grid-template-columns: repeat(20, 1fr); grid-template-rows: repeat(10, 1fr);`
                }else if(innerWidth < 700){
                    drawingSection.style = `grid-template-columns: repeat(10, 1fr); grid-template-rows: repeat(20, 1fr);`
                }
            }else if(pixels == 400){
                if(innerWidth > 700){
                    drawingSection.style = `grid-template-columns: repeat(25, 1fr); grid-template-rows: repeat(16, 1fr);`
                }else if(innerWidth < 700){
                    drawingSection.style = `grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(25, 1fr);`
                }
            }else if(pixels == 800){
                if(innerWidth < 500){
                    drawingSection.style = `grid-template-columns: repeat(25, 1fr); grid-template-rows: repeat(32, 1fr);`
                }else{
                    drawingSection.style = `grid-template-columns: repeat(32, 1fr); grid-template-rows: repeat(25, 1fr);`
                }
            }
        }else{
            return
        }
        
    }
    
    
    if(!drawingSection.hasChildNodes()){
        drawingSection.appendChild(pixelsFragment);
    }else if(drawingSection.hasChildNodes()){
        drawingSection.innerHTML = '';
        drawingSection.appendChild(pixelsFragment);
    }


}

for(let pixelOption of pixelOptions){
    let pixelOptionValue = parseInt(pixelOption.innerText)
    pixelOption.addEventListener('click', ()=>{
        createGrid(pixelOptionValue);
    })
}

if(!drawingSection.hasChildNodes()) createGrid(defaultNum);