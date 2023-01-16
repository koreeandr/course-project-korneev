
// Калькулятор
function plus(){
  var num1, num2, result;
  num1=document.getElementById('n1').value;
  num1=parseInt(num1);
  num2=document.getElementById('n2').value;
  num2=parseInt(num2);
  result=num1+num2;
  document.getElementById('out').innerHTML=result;
}

function minus(){
  var num1, num2, result;
  num1=document.getElementById('n1').value;
  num1=parseInt(num1);
  num2=document.getElementById('n2').value;
  num2=parseInt(num2);
  result=num1-num2;
  document.getElementById('out').innerHTML=result;
}

function multi(){
  var num1, num2, result;
  num1=document.getElementById('n1').value;
  num1=parseInt(num1);
  num2=document.getElementById('n2').value;
  num2=parseInt(num2);
  result=num1*num2;
  document.getElementById('out').innerHTML=result;
}

function division(){
  var num1, num2, result;
  num1=document.getElementById('n1').value;
  num1=parseInt(num1);
  num2=document.getElementById('n2').value;
  num2=parseInt(num2);
  result=num1/num2;
  document.getElementById('out').innerHTML=result;
}

//Каталог
const a20 = document.getElementById('a20');
const a40 = document.getElementById('a40');
const a60 = document.getElementById('a60');
const a80 = document.getElementById('a80');

function age20(){
  a20.style.display="flex";
  a40.style.display="none";
  a60.style.display="none";
  a80.style.display="none";
}

function age40(){
  a20.style.display="none";
  a40.style.display="flex";
  a60.style.display="none";
  a80.style.display="none";
}

function age60(){
  a20.style.display="none";
  a40.style.display="none";
  a60.style.display="flex";
  a80.style.display="none";
}

function age80(){
  a20.style.display="none";
  a40.style.display="none";
  a60.style.display="none";
  a80.style.display="flex";
}
