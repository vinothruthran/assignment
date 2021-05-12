function prefix_sums(arr) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
      new_arr[i] = 0;
      for (var j = 0; j < i + 1; j++) {
        new_arr[i] += arr[j];
      }
    }
    return new_arr;
  }
  
  console.log(prefix_sums([1, 2, 3, 4, 5]));
  
  console.log(prefix_sums([1, 2, -3, 4, 5]));
  

  //ex-131 finished

  function prime_factors(num) {
    function is_prime(num) {
      for (var i = 2; i <= Math.sqrt(num); i++)
      {
        if (num % i === 0) return false;
      }
      return true;
    }
    var result = [];
    for (var i = 2; i <= num; i++)
    {
      while (is_prime(i) && num % i === 0)
      {
        if (result.indexOf(i) == -1)
        result.push(i);
        num /= i;
      }
    }
    return result;
  }
  console.log(prime_factors(100));
  console.log(prime_factors(101));
  console.log(prime_factors(103));
  console.log(prime_factors(104));
  console.log(prime_factors(105));

  // ex-132 finished (2*5 * 2*5 = 100)

  function proper_improper_test(num) {
    return Math.abs(num[0] / num[1]) < 1
     ? "Proper fraction."
     : "Improper fraction." ;
  }
  console.log(proper_improper_test([12,120]));
  console.log(proper_improper_test([2,8]));
  console.log(proper_improper_test([120,12]));
  console.log(proper_improper_test([12,1]));
  console.log(proper_improper_test([120,250]));
  
  //ex-133 finished (x<y)
  

  function change_char(str1) {
    var result = [];
    for (var i = 0; i < str1.length; i++)
      {
      var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
        change_char = 25 - char_order + 'a'.charCodeAt(0);
      result.push(String.fromCharCode(change_char));
    }
    return result.join("");
  }
  console.log(change_char("abcxyz"));
  console.log(change_char("python"));
  
//ex-134 finished (a=z,b=y)

function remove_duplicate_cchars(str) {
  var arr_char = str.split("");
  var result_arr = [];
  
  for (var i = 0; i < arr_char.length; i++)
  {
    if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
    result_arr.push(arr_char[i]);

  }
  return result_arr.join("");
}

console.log(remove_duplicate_cchars("abcdabc"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1356451"));

//ex-135 finished (equal teams )


function replace_first_digit(input_str) {
  return input_str.replace(/[0-9]/,'$');

}
console.log(replace_first_digit("abc1dabc"));
console.log(replace_first_digit("p3ython"));
console.log(replace_first_digit("ab1cdabc"));

//ex-136 finished (number=$)

function test_fifteen(num) {
  while(num<15) {
     num++;
  }
  return num;
}
console.log(test_fifteen("150"));
console.log(test_fifteen("10"));
console.log(test_fifteen("8"));
console.log(test_fifteen("14"));
console.log(test_fifteen("15"));

//ex-137 finished n <15 


function sixteen_bits_reverse(num) {
  var result = 0;
  for ( var i = 0; i < 16; i++) 
  {
    result = result * 2 + (num % 2);
    num = Math.floor(num / 2);
  }
  return result;

}
console.log(sixteen_bits_reverse(12345));
console.log(sixteen_bits_reverse(10));
console.log(sixteen_bits_reverse(5));

//ex-138 finished 


function find_right_most_round_number(input_arr) {
  var result = 0;
  for (var i = 0; i < input_arr.length; i++) 
  {
    if (input_arr[i] % 10 === 0) {
      result = i;
    }
  }
  return result;
}
console.log(find_right_most_round_number([1,22,33,40,55]));
console.log(find_right_most_round_number([1,22,33,46,55]));
console.log(find_right_most_round_number([1,22,33,48,55,60]));

//ex-139 finished (40=3)

function test_sum_digit(num) {
  var first = num % 10;
  while (num) {
    if (num % 10 !== first) return false; 
    num = Math.floor(num/ 10);
  }
  return true;
}
console.log(test_sum_digit(1234));
console.log(test_sum_digit(11111));
console.log(test_sum_digit(333333));

//ex-140 finished (1=1 1=1)

