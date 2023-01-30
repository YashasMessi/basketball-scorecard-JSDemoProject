
let hscr = document.getElementById('home1');
let gscr = document.getElementById('guest1');
let home= parseInt(hscr.children.item('p').textContent);
let guest= parseInt(gscr.children.item('p').textContent);
function hp1(){
    home+=1;
    hscr.children.item('p').textContent = home;
}
function hp2(){
    home+=2;
    hscr.children.item('p').textContent = home;
}
function hp3(){
    home+=3;
    hscr.children.item('p').textContent = home;
}
function gp1(){
    guest+=1
    gscr.children.item('p').textContent = guest;
}
function gp2(){
    guest+=2
    gscr.children.item('p').textContent = guest;
}
function gp3(){
    guest+=3;
    gscr.children.item('p').textContent = guest;
}

function reset(){
    home=0;
    guest=0;
    hscr.children.item('p').textContent =home;
    gscr.children.item('p').textContent = guest;
    document.getElementById('home').style['background']='transparent';
    document.getElementById('guest').style['background']='transparent';
}
function calculate(){
    if (home>guest){
        document.getElementById('home').style['background']='#059669';
        document.getElementById('guest').style['background']='#E11D48';
    }
    else{
        document.getElementById('guest').style['background']='#059669';
        document.getElementById('home').style['background']='#E11D48';
    }
}