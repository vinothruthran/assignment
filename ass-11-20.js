function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}   
cToF(60);
fToC(45);


//EX12
console.log(document.URL);


//EX-13

var var_name = 'abcd';
var n = 550;
this[var_name] = n;
console.log(this[var_name])


//EX-14

filename = "system.php"
console.log(filename.split('.').pop());
filename = "vino.js"
console.log(filename.split('.').pop());


//EX-15
function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))


//ES16
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(40, 30));
  console.log(sumTriple(40, 40));


  //EX17

  function diff_num(n){
      if (n<=33){
          return(33-n);
      }
      else {
          return(n-13);

      }
  }
  console.log(diff_num(12));
  console.log(diff_num(33));
  console.log(diff_num(36));

  //EX18
  function test60(x,y)
  {
      return((x==60 || y==60)||(x+y==60));


  }
  console.log(test60(60,60))
  console.log(test60(20,60))
  console.log(test60(20,20))
  console.log(test60(30,30))

  //EX19

  function testhundred(x){
    return ((Math.abs(100 - x) <= 20) ||
    (Math.abs(400 - x) <= 20));

  }
  console.log(testhundred(10));
  console.log(testhundred(90));
  console.log(testhundred(99));
  console.log(testhundred(199));
  console.log(testhundred(200));


  //EX-20

  function positive_negative(x,y)
  {
      if ((x<0 && y>0)|| (x>0 && y<0))
      {
          return true;

      }
      else{
          return false;
      }
  }
  console.log(positive_negative(2,2));
  console.log(positive_negative(-2,2));
  console.log(positive_negative(2,-2));
  console.log(positive_negative(-2,-2));
  console.log(positive_negative(2,0));