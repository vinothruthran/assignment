function remove_character(str, char_pos)
{
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos +1,str.length);
    return (part1+part2);

} 
console.log(remove_character ("python",0) );
console.log(remove_character ("python",1) );
console.log(remove_character ("python",2) );
console.log(remove_character ("python",3) );
//ex-22 finished

function string_check(str1){
    if (str1===null || str1===undefined || str1.substring(0,2) === 'py')
    {
        return str1;

    }
    return "py"+str1;

}
console.log(string_check("python"));
console.log(string_check("thon"));
//ex-21 finished

function first_last(str1)
{
    if (str1.length<= 1)
    {
        return str1;

    }
    mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));
//ex-23  finished

function front_back(str)
{
    first = str.substring(0,1);
    return first + str +first;

}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));
//ex-24 finished

function test37(x)
{
    if (x%3 == 0 || x %7 == 0)
    {
        return true;

    }  
    else{
        return false;
    }

}
console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));

//ex-25 finished

function front_back3(str)
{
    if (str.length>=3)
    {
        str_len = 3;
        back = str.substring(str.length-3);
        return back+ str + back;

    }
    else
    {
        return false;
    }
}
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));
console.log(front_back3("abcde"));

//ex-26 finished

function start_spec_str(str)
{
    if (str.length<4)
    {
        return false;
    }
    front = str.substring(0,4);
    if (front=='Java')
    {
        return true;
    }
    else
    {
       return false; 
    }
}
console.log(start_spec_str("Javascript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));
//ex-27 finished

function check_numbers(x,y)
{
    if ((x>=50 && y<= 99) || (x>= 10 && y<= 99))
    {
        return true;
    }
    else
    {
        return false ;
    }
}
console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));

//ex-28 finished

 
function check_three_nums(x,y,z)
{

  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}
console.log(check_three_nums(50, 90, 99));
console.log(check_three_nums(5, 9, 199));
console.log(check_three_nums(65, 89, 199));
console.log(check_three_nums(65, 9, 199));

//ex-29
function check_script(str)
{
  if (str.length < 6) {
    return str;
  }
  let result_str = str;
    
  if (str.substring(10, 4) == 'Script') 
    {
    
    result_str = str.substring(0, 4) + str.substring(10,str.length);
      
  }
  return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));


//ex-30

function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));

//ex-31

function near_100(x, y) {
    if (x != y)
    {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);
  
    if (x1 < y1)
    {
      return x;
    }
    if (y1 < x1)
    {
      return y;
    }
    return 0;
    }
    else
      return false;
  }
  
  console.log(near_100(90, 89));
  console.log(near_100(-90, -89));
  console.log(near_100(90, 90));

  //ex-32

  function numbers_ranges(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
        || 
        (x >= 70 && x <= 100 && y >= 70 && y <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbers_ranges(44, 56));
  console.log(numbers_ranges(70, 95));
  console.log(numbers_ranges(50, 89));

  //ex-33

  function max_townums_range(x, y){	
    if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
    if(x === y){
    return "Numbers are the same";
    }else if (x > y){
    return x;
    }else{
    return y;
    }
    }else{
    return "Numbers don't fit in range";
    }
    }
    
    console.log(max_townums_range(45, 60));
    console.log(max_townums_range(25, 60));
    console.log(max_townums_range(45, 80));

    //ex34

    function check_char(str1, char)
 {
  ctr = 0;
  for (let i = 0; i < str1.length; i++)
  {
    if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
    {
        ctr=1;
        break;
    }
   }
   if (ctr==1) return true;
   return false;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));

//ex-35 finished


var s1 = "JavaScript is very ersay to learn";
var s2 = /a/g;
console.log(s1.match(s2));