// Import stylesheets
//import './style.css';

// function EvenOdd()
// {
 
//        var no1=document.getElementById('no').value;

//        if(no1%2==0)
//        {
//           document.getElementById('result').innerHTML=`The number ${no1} is even.`;
//        }
//        else
//        {
//           document.getElementById('result').innerHTML=`The number ${no1} is odd.`
//        }
// }

// const butts=document.querySelector('#button');

// butts.addEventListener('click',EvenOdd);

function even() 
{
   var no1=document.getElementById('no').value;

  let odd=evenodd(no1);

   console.log(odd);
  
}

function evenodd(no1)
{
     if(no1%2==0)
       {
        return  document.getElementById('result').innerHTML=`The number ${no1} is even.`;
       }
       else
       {
         return document.getElementById('result').innerHTML=`The number ${no1} is odd.`;
       }
}

const butts=document.querySelector('#button');

 butts.addEventListener('click',even);


