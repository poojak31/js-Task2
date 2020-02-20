// Import stylesheets
//import './style.css';


function even() 
{
   var no1=document.getElementById('no').value;

  let evodd=evenodd(no1);

   console.log(evodd);

    if(evodd!=0)
     {
       document.getElementById('result').innerHTML=`The number ${no1} is even.`;
     }
   else
    {
      document.getElementById('result').innerHTML=`The number ${no1} is odd.`;
    }
}

function evenodd(no1)
{
     return no1%2==0;   
}

const butts=document.querySelector('#button');

 butts.addEventListener('click',even);

