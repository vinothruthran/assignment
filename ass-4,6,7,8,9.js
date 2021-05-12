
// EX-4 staring 
var side1 = 5;
var side2 = 6;
var side3 = 7;
var perimeter = (side1 + side2 + side3)/2;
var area = Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);



// ex-6 starting
function leapyear(year)
{
    return(year % 100 ===0) ? (year % 400 ===0) :(year % 4 ===0);

}
console.log(leapyear(2016));
console.log(leapyear(2020));
console.log(leapyear(1700));
console.log(leapyear(1999));
console.log(leapyear(1000));


//ex-7-starting
console.log('------------');
for (var year = 2014; year <= 2050; year++)
{
    var d = new Date(year,0,1);
    if (d.getDay() ===0 )
    console.log ("1st Janury is being a Sunday" +year );

}
console.log('-----------');

console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');


//EX-8-starting

const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);



//EX-9-starting
today=new Date();
var cmas= new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

