// Import stylesheets
//import './style.css';


let odd = () =>
{
  let no1=0;
  
    no1=document.getElementById('no').value;

     let evodd=evenodd(no1);

       console.log(evodd);

    document.getElementById('result').innerHTML=`The number ${no1} is ${evodd}.`;

}
function evenodd(no1)
{
     if( no1%2==0)
     {
       return "even";
     }
     else
     {
       return "odd";
     }   
}

const butts=document.querySelector('#button');

 butts.addEventListener('click',odd);

