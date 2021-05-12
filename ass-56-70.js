
 n1 = 80;
 n2 = 6;
 var div = Math.round(n1/n2).toString(), result_array = div.split("");
 if (div >= 1000)
 {
   for (var i = div.length - 3; i > 0; i -= 3) 
   {
       result_array.splice(i,0,",");
   }
   result_array;
 }
 console.log(result_array);

 //ex-56finish


function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));

//ex-57finish

function newstring(str)
{
    if (str.length >= 3){
        result_str = str.substring(str.length - 3);
        return result_str + result_str + result_str + result_str;

    }
    else
      return false;

}
console.log(newstring("python 4.0"));
console.log(newstring("js"));
console.log(newstring("JavaScript"));

//ex-58finish

function first_half (str) {
    if (str.length % 2 == 0) {
      return str.slice(0, str.length / 2);
    }
    return str;
  }
  console.log(first_half("Python"));  
  console.log(first_half("JavaScript")); 
  console.log(first_half("PHP"));
  //EX-59FINISHED

  function without_first_end(str)
  {
      return str.substring(1,str.length - 1);

  }
  console.log(without_first_end("JavaScript"));
  console.log(without_first_end("vinoth"));
  console.log(without_first_end("ruthran"));

  //EX-60FINISHED

function concatenate(str1,str2){
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
}
console.log(concatenate("OHP","JS"));
console.log(concatenate("VINO","IV"));
console.log(concatenate("ABC","ABD"));
//ex-61 finished

function right_three(str) {
    if(str.length > 1)
    {
        return str.slice(-3) + str.slice(0,-3);
    }
    return str;
}
console.log(right_three("python"));
console.log(right_three("JavaScript"));
console.log(right_three("the"));

//ex-62finished

function middle_three(str)
{
    if (str.length % 2!= 0)
    {
        mid = (str.length + 1)/2;
        return str.slice(mid - 2,mid + 1);

    }
    return str;
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));

//ex-63finished

function str_con_cat(str1, str2)
{
    const m = Math.min(str1.length, str2.length);
    return str1.substring(str1.length-m) + str2.substring(str2.length-m);

}
console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));
console.log(str_con_cat("ab", "cdef"));
//ex-64finished

function end_script(str) {
    if (str.substring(str.length - 6, str.length) == 'Script') 
    {
      return true;
    } 
    else 
    {
      return false;
    }
  }
  console.log(end_script("JavaScript"));
  console.log(end_script("Java Script"));
  console.log(end_script("Java Scripts"));

  //ex-65finished

  function city_name(str)
  {
      if (str.length >=3 &&  ((str.substring(0,3) == 'Los') || (str.substring(0,3) == 'New')))
      {
          return str;

      }
      return '';
  }
  console.log(city_name("New Yore"));
  console.log(city_name("Los Angeles"));
  console.log(city_name("London"));

  //ex-66 finished

  function nop(str) {
    let start_pos = 0;
    let end_pos = str.length;
  
    if (str.length > 0 && str.charAt(0) == 'P') 
      { 
        start_pos = 1; 
      }
  
    if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
    {
      end_pos--;
    }
  
    return str.substring(start_pos, end_pos);
  }
  
  console.log(nop("PythonP"));
  console.log(nop("Python"));
  console.log(nop("JavaScript"));
  

  //ex-67 finished

  function two_string(str, n)
  {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
 }

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));

//ex-68 finished

function sum_three(nums)
{
    return nums[0] + nums[1] + nums[2];
}
console.log(sum_three([10,20,33]));
console.log(sum_three([44,22,55]));
console.log(sum_three([0,8,-11]));

//ex-69finished

function rorate_elements_left(array)
{
    return [array[1],array[2],array[0]];


}
console.log(rorate_elements_left([3,4,5]));
console.log(rorate_elements_left([0,-1,2]));
console.log(rorate_elements_left([7,6,5]));

//ex-70 finished
