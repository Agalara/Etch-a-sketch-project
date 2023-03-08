
let size =4;

function getRandomIntInclusive(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor( Math.random()*(max - min + 1) + min);
}

function createCanvas (size){

    for(let i=0;i<size;i++){
        
        const div= document.createElement('div');
        div.classList.add(`row`);
        document.querySelector('.canvas').appendChild(div);

        for(let j=0;j<size;j++){

            const div= document.createElement('div');
            div.classList.add('pixel');
            div.classList.add('visible');

            //This is the no painted class
            div.classList.add('no-paint');
            const row=document.querySelector('.canvas');
            const lastRow=row.lastElementChild.appendChild(div);
        }
    }       
}

function paint(){
    const paintPixel = document.querySelectorAll('.pixel');
    paintPixel.forEach((pixel) =>{
        pixel.addEventListener('mouseover',function (e) {
    
            
            if(pixel.classList.contains('no-paint')){

                e.target.style.background = `rgb(${getRandomIntInclusive(0,255)},${getRandomIntInclusive(0,255)},${getRandomIntInclusive(0,255)})`;
                pixel.classList.toggle('no-paint');
                console.log(e.target);
            }
            else{

                //Take its background color and make it
                //darker

            }
            //Remove no painted class so it
            //makes the color a 10% darker?
            //rgb(R-0.1*R,G-0.1*G,B-0.1*B)
        })
    }) 
}

function resetCanvas(){

    const canvas = document.querySelector('.canvas');
    while(canvas.firstChild){
        canvas.removeChild(canvas.lastChild);
    };

}

function resetButton(){

    const reset = document.querySelector('#reset');
    reset.addEventListener('click',function (e){
    
    resetCanvas();
    createCanvas(size);
    paint();    
    // console.log(e);
    });
}

function gridButton(){

    const grid = document.querySelector('#grid');
    grid.addEventListener('click',function (e){

        const canvas =document.querySelectorAll('.pixel');
        canvas.forEach((pixel) => {
            pixel.classList.toggle('visible');
        
        });
    });
}

gridButton();
resetButton();
createCanvas(size);
paint();



// btn.addEventListener('click', function (e) {
//     console.log(e);
// });

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
// });

//  btn.addEventListener('click', function (e) {
//      e.target.style.background = 'blue';
//  });


// // buttons is a node list. It looks
// // and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to 
// //iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click'
//   // listener
//   button.addEventListener('click', () => {
//     alert(button.id);
//   });
// });