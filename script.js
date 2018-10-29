

let send=document.querySelector('.send');
let clear=document.querySelector('.clear');

send.addEventListener('click',function(){
    console.log('test');
    let name=document.getElementById('.name');
    if(typeof name ==='number') {
        document.querySelector('.info').innerHTML="Imie nie moze byc liczba";
    }
    else{
        document.querySelector('.info').innerHTML="prawidlowo wprowadzone dane";

    }
});




clear.addEventListener('click',function(){


   console.log('Przycisk został naciśnięty');

});
