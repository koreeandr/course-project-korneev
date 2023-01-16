let stickers = ['pic/constructor/20.png','pic/constructor/21.png','pic/constructor/22.png','pic/constructor/23.png',
'pic/constructor/40.png','pic/constructor/41.png','pic/constructor/42.png','pic/constructor/43.png',
'pic/constructor/60.png','pic/constructor/61.png','pic/constructor/62.png','pic/constructor/63.png',
'pic/constructor/80.png','pic/constructor/81.png','pic/constructor/82.png','pic/constructor/83.png',];
var age = 2;
var emoji = 3;
const ce0 = document.getElementById('fury');
const ce1 = document.getElementById('cry');
const ce2 = document.getElementById('fear');
const ce3 = document.getElementById('haha');
const ca20 = document.getElementById('ca20');
const ca40 = document.getElementById('ca40');
const ca60 = document.getElementById('ca60');
const ca80 = document.getElementById('ca80');
ca20.classList.add("choose-age");

let pictureContainer = document.getElementById("avatar");
let img = document.createElement('img');
function fury0(){
    emoji = 0;
    img.src = 'pic/constructor/'+ age + emoji +'.png';
    pictureContainer.append(img);
    ce0.classList.add("choose-emoji");
    ce1.classList.remove("choose-emoji");
    ce2.classList.remove("choose-emoji");
    ce3.classList.remove("choose-emoji");
}
function cry1(){
    emoji = 1;
    img.src = 'pic/constructor/'+ age + emoji +'.png';
    pictureContainer.append(img);
    ce1.classList.add("choose-emoji");
    ce0.classList.remove("choose-emoji");
    ce2.classList.remove("choose-emoji");
    ce3.classList.remove("choose-emoji");
}
function fear2(){
    emoji = 2;
    img.src = 'pic/constructor/'+ age + emoji +'.png';
    pictureContainer.append(img);}
    ce2.classList.add("choose-emoji");
    ce1.classList.remove("choose-emoji");
    ce0.classList.remove("choose-emoji");
    ce3.classList.remove("choose-emoji");
function haha3(){
    emoji = 3;
    img.src = 'pic/constructor/'+ age + emoji +'.png';
    pictureContainer.append(img);
    ce3.classList.add("choose-emoji");
    ce1.classList.remove("choose-emoji");
    ce2.classList.remove("choose-emoji");
    ce0.classList.remove("choose-emoji");
}
function a20(){
    age = 2;
    img.src = 'pic/constructor/'+ age + emoji +'.png';
    pictureContainer.append(img);
    ca20.classList.add("choose-age");
    ca40.classList.remove("choose-age");
    ca60.classList.remove("choose-age");
    ca80.classList.remove("choose-age");
}
function a40(){
    age = 4;
    img.src = 'pic/constructor/'+ age + emoji +'.png';
    pictureContainer.append(img);
    ca40.classList.add("choose-age");
    ca20.classList.remove("choose-age");
    ca60.classList.remove("choose-age");
    ca80.classList.remove("choose-age");
}
function a60(){
    age = 6;
    img.src = 'pic/constructor/'+ age + emoji +'.png';
    pictureContainer.append(img);
    ca60.classList.add("choose-age");
    ca40.classList.remove("choose-age");
    ca20.classList.remove("choose-age");
    ca80.classList.remove("choose-age");
}
function a80(){
    age = 8;
    img.src = 'pic/constructor/'+ age + emoji +'.png';
    pictureContainer.append(img);
    ca80.classList.add("choose-age");
    ca40.classList.remove("choose-age");
    ca60.classList.remove("choose-age");
    ca20.classList.remove("choose-age");
}
  