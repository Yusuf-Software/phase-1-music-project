const msgArea = document.querySelector('#comment textarea');
const recieved = document.querySelector('#recieved');
const submitButton = document.querySelector('#submit'); 
const myButtons = document.querySelectorAll('.fixed');


const cstmBtn= document.querySelector('#cstm');
let donatedAmn = document.querySelector('#donated-amn');
let sumAmn=0;

submitButton.addEventListener('click', () => {
    recieved.innerHTML += '<li>' + msgArea.value + '</li>';
    msgArea.value = '';
});


myButtons.forEach(element => {
    element.addEventListener('click', () => {
        if(cstmBtn.value != ''){
            cstmBtn.value = '';
        }
        sumAmn += parseInt(element.value);
        donatedAmn.textContent = sumAmn;
    })
});

cstmBtn.addEventListener('blur', (evt) => {
    if(cstmBtn.value > 0){
        sumAmn += parseInt(cstmBtn.value);
        console.log(sumAmn);
        donatedAmn.textContent = sumAmn;
    }
})

// myButtons.map.addEventListener('click', (e) => {
    //     e.
    // })
    
    
    // fstBtn.addEventListener('click', () => {
        //     sumAmn+=1;
        //     donatedAmn.textContent=sumAmn;
        // });
        
        // scdBtn.addEventListener('click', () => {
            //     sumAmn+=2;
            //     donatedAmn.textContent=sumAmn;
            // });
            
            // thdBtn.addEventListener('click', () => {
                //     sumAmn+=5;
                //     donatedAmn.textContent=sumAmn;
                // });
                
                // frthBtn.addEventListener('click', () => {
//     sumAmn+=10;
//     donatedAmn.textContent=sumAmn;
// });

// fthBtn.addEventListener('click', () => {
    //     sumAmn+=50;
    //     donatedAmn.textContent=sumAmn;
    // });
    
    // const fstBtn = document.querySelector('.fst');
    // const scdBtn = document.querySelector('.scd');
    // const thdBtn =  document.querySelector('.thd');
    // const frthBtn = document.querySelector('.frth');
    // const fthBtn = document.querySelector('.fth');