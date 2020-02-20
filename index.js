// Import stylesheets
//import './style.css';

function EvenOdd()
{
 
       var no1=document.getElementById('no').value;

       if(no1%2==0)
       {
          document.getElementById('result').innerHTML=`The number ${no1} is even.`;
       }
       else
       {
          document.getElementById('result').innerHTML=`The number ${no1} is odd.`
       }
}

const butts=document.querySelector('#button');

butts.addEventListener('click',EvenOdd);

