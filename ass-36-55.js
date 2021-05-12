function last_digit(x,y,z)
{
    if ((x > 0) && y > 0 && z > 0)  

{
    return (x% 10 == y % 10 && y% 10 ==z % 10 && x % 10 == z % 10 );
}
else
return false;

}
console.log(last_digit(20,30,400));
console.log(last_digit(-20,30,400));
console.log(last_digit(20,-30,400));
console.log(last_digit(20,30,-400));
//EX-36 FINIS
 
function upper_lower(str)
{
    if (str.length<=3)
    {
        return str.toUpperCase();

    }
    front_part = (str.substring(0,3)).toLowerCase();
    back_part = (str.substring(3,str.length));
    return front_part + back_part;

   
}
console.log(upper_lower("PYThon"));
console.log(upper_lower("PY"));
console.log(upper_lower("JAVAScript"));
//EX-37FINISH


function exam_status(totmarks,is_exam)
  {
  if (is_exam) {
    return totmarks >= 90;
  }
 return (totmarks >= 89 && totmarks <= 100);
 }

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));

//EX-38FINISH

function sortaSum(x,y)
{
    const sum_nums = x+y;
    if (sum_nums >= 50 && sum_nums <= 80)
    {
        return 65;
    }
    return 80;
}
console.log(sortaSum(30,20));
console.log(sortaSum(90,80));

//EX-39FINISH

function check8(x,y)
{
    if (x == 8 || y == 8 ){
        return true;
    }
    if (x+y == 8 || Math.abs(x-y) == 8)
    {
        return true;
    }
    return false;
}
console.log(check8(7,8));
console.log(check8(16,8));
console.log(check8(24, 32));
console.log(check8(17,18));

//EX-40FINISH

function three_numbers(x,y,z)
{
    if (x == y && y == z)
    {
        return 30;
    }
    if ( x == y || y == z || z == x)
    {
        return 40;
    }
    return 20;
}
console.log(three_numbers(8,8,8));
console.log(three_numbers(8,8,18));
console.log(three_numbers(8,7,18));

//EX-41FINISH

function number_order(x,y,z)
{
    if (y > x && z > y )
    {
        return "strict mode";  
    }
    else if (z>y)
    return "Soft mode";
    else 
    return "Undefinded";
    
}
console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));


//EX-42FINISH

function same_last_digit(p,q,r)
{
    return ( p % 10 == q % 10) ||
           ( p % 10 == r % 10) || 
           ( q % 10 == r % 10);

}
console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,302,2));
console.log(same_last_digit(22,326,429));

//EX-43FINISH

function lessby20_others(x, y, z) 
{
return (x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x));
}

console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));

//EX-44FINISHED

function test_number(x,y){
    return (x === 15 || y === 15 || x + y === 15  ||Math.abs(x - y) === 15);
}
console.log(test_number(15, 9));
console.log(test_number(25, 15));
console.log(test_number(7, 8));
console.log(test_number(25, 10));
console.log(test_number(5, 9));
console.log(test_number(7, 9));
console.log(test_number(9, 25));

//EX-45FINISHED

function valCheck (a, b) {
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    }
    else
    return false;
    }
    console.log(valCheck(14, 21));
    console.log(valCheck(14, 20));
    console.log(valCheck(16, 20));

    //EX-46FINISHED

function test_digit(x,y,n)
{
    if ( n < 40 || n > 10000)
    return false;
    else 
    if ( n >= x && n <= y )
    return true;
    else
    return false;
}
console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));

//EX-47FINISHED

function string_reverse(str)
{
    return str.split("").reverse().join("");
}
console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));

//EX-48FINISHED

function capital_letter(str)
{
     str = str.split(" ");
     for (var i = 0, x = str.length; i < x; i++) {
         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
     }
 return str.join("");
}
console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."))

//EX-49FINISHED

function LetterChanges(text) {
    //https://goo.gl/R8gn7u
      var s = text.split('');
      for (var i = 0; i < s.length; i++) {
          // Caesar cipher
          switch(s[i]) {
            case ' ':
              break;
            case 'z':
              s[i] = 'a';
              break;
            case 'Z':     
              s[i] = 'A';
              break;
            default:
              s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
          }
  
          // Upper-case vowels
          switch(s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
              s[i] = s[i].toUpperCase();
          }
      }
      return s.join('');
  }
  console.log(LetterChanges("PYTHON"));
  console.log(LetterChanges("W3R"));
  console.log(LetterChanges("php"));

  //finished//

  function time_convert(num)
  {
      var hours = Math.floor(num/60);
      var minutes = num % 60;
      return hours +"." + minutes;
  }
  console.log(time_convert(77));
  console.log(time_convert(355));
  console.log(time_convert(444));

  //EX-51 finish

  function alphabet_soup(str)
  {
      return str.split("").sort().join("");

  }
  console.log(alphabet_soup("Python"));
  console.log(alphabet_soup("Python"));
  
  //EX-52 finish

  function ab_Check(str)
  {
      return (/a...b/).test(str) || (/b...a/).test(str);

  }
console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));

//EX-53 FINISH

function vowel_Count(str)
{
    return str.replace(/[^aeiou]/g, "").length;

}
console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));

//EX-54FINISHED
function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
         
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));