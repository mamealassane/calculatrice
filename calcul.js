

    let ecran = document.querySelector('.ecran')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.getElementById('clear')
    let egal = document.getElementById('egal')
    let signe = document.getElementById('signe')
    let percent = document.getElementById('percent')

    buttons.forEach(function(button){
        button.addEventListener('click', (e) => {
            let value = e.target.value ;
            ecran.value += value ;
        });
    });

    egal.addEventListener('click',(e) => {
        if(ecran.value== ''){
            ecran.value = ""
        } 
        else {
            let answer = eval(ecran.value)
            ecran.value= answer ;
        }
    })

    clear.addEventListener('click',(e) => {
        ecran.value = '';
        
    })

    signe.addEventListener('click', (e) => {
        if(ecran.value>0){
            ecran.value = -ecran.value ;
        }
    })

    percent.addEventListener('click', (e) =>{
        ecran.value = ecran.value /100 ;
    })

