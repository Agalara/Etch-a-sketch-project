
let size = 8;

function createCanvas (size){

    for(let i=0;i<size;i++){
        
        const div= document.createElement('div');
        div.classList.add(`row`);
        document.querySelector('.canvas').appendChild(div);

        for(let j=0;j<size;j++){

            const div= document.createElement('div');
            div.classList.add('pixel');
            div.textContent=`A`;
            const row=document.querySelector('.canvas');
            const lastRow=row.lastElementChild;
            lastRow.appendChild(div);

        }
    }
    // const pixel=document.querySelectorAll('.pixel');
    // pixel.forEach((pixel)=>{
    //     pixel.height=

    // })        
}


createCanvas(size);

