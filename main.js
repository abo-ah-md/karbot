
const list_cards= document.querySelectorAll('.main-container-list');
const main_container= document.querySelector('.main-1-container');
const opnion=document.querySelectorAll('#main-container-opnion');


//moving animation event
main_container.addEventListener("mousemove", (e)=> {
let xAxis = (window.innerWidth/ 2-e.pageX)/35;
let yAxis = (window.innerHeight/2-e.pageY)/500;
list_cards[0].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
list_cards[1].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
list_cards[2].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
list_cards[3].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

main_container.addEventListener('moseenter',(e)=>
{
    list_cards[1].style.transition='none';
    list_cards[0].style.transition='none';
    list_cards[2].style.transition='none';
    list_cards[3].style.transition='none';
});

main_container.addEventListener("mouseleave",(e)=>
{
    list_cards[1].style.transition='all 0.5 ease';
    list_cards[0].style.transition='all 0.5 ease';
    list_cards[2].style.transition='all 0.5 ease';
    list_cards[3].style.transition='all 0.5 ease';

    list_cards[0].style.transform=`rotateY(0deg) rotateX(0deg)`;
    list_cards[1].style.transform=`rotateY(0deg) rotateX(0deg)`;
    list_cards[2].style.transform=`rotateY(0deg) rotateX(0deg)`;
    list_cards[3].style.transform=`rotateY(0deg) rotateX(0deg)`;
}

);

/* this is for humburger menu */

var logo = document.querySelector('.menue-log-container');
var menu= document.querySelector('.nav-container');
var menu_items=document.querySelector('.nav-list');

logo.addEventListener('click',function(){
    menu.classList.toggle('show-menue');});


    menu_items.addEventListener('click',function()
{
    menu.classList.replace('show-menue','hide-menue',);
} 
);

logo.addEventListener('click',function(){
    menu.classList.replace('hide-menue','show-menue');});
