"use strict";
document.addEventListener('DOMContentLoaded', ()=>{
    const $saveBtn = document.querySelector('.save-btn');
    let pixels = drawingSection.children.length;
    $saveBtn.addEventListener('click', ()=>{
        colorsSidebar.style.display = 'none';
        pixelsSidebar.style.display = 'none';
        const $elementoParaConvertir = document.body;
        html2pdf()
        .set({
            margin: 1.6,
            filename: 'mydraw.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98,
            },
            html2canvas: {
                scale: 3,
                letterRendering: true,
            },
            jsPDF: {
                unit: 'in',
                format: 'a3',
                orientation: 'portrait',
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err));
        alert('Ha sido guardado');
        setTimeout(()=>{
            colorsSidebar.style.display = 'block';
            pixelsSidebar.style.display = 'block';
        }, 150)
    });
});