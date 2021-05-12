function test_string(input_str)
{
    var is_lower_case = function(symbol) {

        if ('a' <= symbol && symbol <= 'z' ) {
            return true;
        } 
        return false;
    }
    var is_upper_case = function(symbol) {
        if ('A' <= symbol && symbol <= 'Z') {
          return true;
        }
        return false;
      }

      var is_first_char_lower = is_lower_case(input_str[0]), 
          is_first_char_upper = is_upper_case(input_str[0]);

      if ( ! (is_first_char_lower || is_first_char_upper)) {
          return false;
      } 
      
      for (var i = 1; i < input_str.length; i++) {
          if (i % 2) {
              if (is_lower_case(input_str[i]) === is_first_char_lower || 
              is_upper_case(input_str[i]) === is_first_char_upper) {
                  return false;
              }
          } else {
            if (is_lower_case(input_str[i]) !== is_first_char_lower || 
            is_upper_case(input_str[i]) !== is_first_char_upper) {
                return false;
            } 
          }
      }
      return true;
}
console.log(test_string('xYr'));
console.log(test_string('xYz'));

//ex-101 finished

function number_of_InversionsNaive(arr) {
    var ctr = 0;
    for (var i = 0; i< arr.length; i++) {
        for (var j = i + 1; j< arr.length; j++) {
            if (arr[i] > arr[j])
            ctr++;
        }
    }
    return ctr;

}
console.log(number_of_InversionsNaive([0,3,2,5,9]));
console.log(number_of_InversionsNaive([1,5,4,3]));
console.log(number_of_InversionsNaive([10, 30, 20, -10]));

//ex-102 finished

function digit_delete(num) {
    var result = 0,
        num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (var index_num = 0; index_num < num_digits.length; index_num++) {
        var n = 0;
        for (var i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245));

//ex-103 finished


function digit_to_one(num)
{
    var digitSum = function(num) {

        var digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num/10);
        }
        return digit_sum;
    };
    var result = 0;
    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }
    return result;
}
console.log(digit_to_one(123))
console.log(digit_to_one(156))
console.log(digit_to_one(15688))

//ex-105 finished

function divide_digit(num,d) {
    if (d == 1)
    return num;
    else
    {
        while (num % d === 0) {
            num /= d;
        }
        return num;
    }
}
console.log(divide_digit(-12,2))
console.log(divide_digit(13,2))
console.log(divide_digit(13,1))

//ex-106 finished

function arr_pairs(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = i + 1; j < arr.length; j++)
        {
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
            {
                result++;

            }
        }
        return result;

    }
}
console.log(arr_pairs([1,2,3]))
console.log(arr_pairs([2,4,6]))
console.log(arr_pairs([2,4,16]))

//ex-107 finished

function dot_product(vector1,vector2) {
    var result = 0;
    for (var i = 0; i < 3; i++) {
        result += vector1[i] * vector2[i];

    }
    return result;
}
console.log(dot_product([1,2,3], [1,2,3]))
console.log(dot_product([2,4,6], [2,4,6]))
console.log(dot_product([1,1,1], [0,1,-1]))

//ex-108 finished 1*1 + 2*2 + 3*3 =14


function sort_prime(num) {

    var prime_num1 = [];
        prime_num2 = [];
        for (var i = 0; i <= num; i++) {
            prime_num2.push(true);
          }
    for ( var i = 2; i <= num; i++) {
        if (prime_num2[i]) {
            prime_num1.push(i);
            for ( var j = 1; i * j <= num; j++) {
                prime_num2[i * j] = false;
            }
        }
    } 
    return prime_num1; 
}
console.log(sort_prime(5))
console.log(sort_prime(11))
console.log(sort_prime(47))

//ex-109 finished 1-5 prime num = 2,3,5 && 11 p.n = 2, 3, 5, 7, 11


function find_numbers(arr_num, num) {
    var result = 0;
    for (var i = 0; i < arr_num.length;i++)
    {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
            result++;
        }
        if (arr_num[i] === num)
        {
            return result;

        }
    }
    return -1;

}
console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
console.log(find_numbers([1,3,5,6,7,8], 6))

//ex-110 finished 

function find_third_number(x, y, z) {
    if((x!==y) && (x!==z) && (y!==z))
     return "Three numbers are unequal.";
     if(x==y) return z;
     if(x==z) return y;
     return x;
 }
 
 console.log(find_third_number(1,2,2))
 console.log(find_third_number(1,1,2))
 console.log(find_third_number(1,2,3))

 //ex-111 finished 

 function trailing_zeros_factorial(n) {
     var result = 0;
     for (var i = 5; i <=n; i +=5) {
         var num = i;
         while (num % 5 ===0) {
              num /= 5;
              result++;
         }
     }
     return result;
 }
 console.log(trailing_zeros_factorial(8))
 console.log(trailing_zeros_factorial(9))
 console.log(trailing_zeros_factorial(10))
 console.log(trailing_zeros_factorial(7))

 //ex-112 finished 8! = 8*7*6*5*4*3*2*1 = 40320-- 0=1

 function int_sum(num)
 {
     var s_sum = 0;
     while (num > 0) {
         s_sum += num;
         num = Math.floor(num/2);
     }
     return s_sum;
 }
 console.log(int_sum(8))
 console.log(int_sum(9))
 console.log(int_sum(26))

 //ex-113 finished n+n/2+n/4+n/8 =8+4+2+1 = 15

 function is_correct_sentence_(input_str) {
     var first_char = input_str[0];
     var last_char = input_str[input_str.length-1];
     return /[A-Z]/.test(first_char) && last_char == "." 
 
 }
 console.log(is_correct_sentence_("This tool will help you write better English and efficiently corrects texts."));
 console.log(is_correct_sentence_("This tool will help you write better English and efficiently corrects texts"));
 console.log(is_correct_sentence_("this tool will help you write better English and efficiently corrects texts."));

 //ex-114 finished first letter captial last . varanum

 function is_diagonal_matrix(user_matrix) {
     for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0)
            return false;
        } 
     }
     return true;
 }
 console.log(is_diagonal_matrix([[1,0,0],[0,2,0],[0,0,3]]));
 console.log(is_diagonal_matrix([[1,0,0],[0,2,3],[0,2,3]]));
 console.log(is_diagonal_matrix([[1,0,0],[0,2,3],[0,0,3]]));

 //ex-115 finished 1,2,3\

 function is_divisible_by3(mask_str) {

    var digitSum = 0,
      left = '0'.charCodeAt(),
      right = '9'.charCodeAt(),
      result = [],
      mask_data = mask_str.split(''),
      hash_pos = -1;
  
    for (var i = 0; i < mask_data.length; i++) {
        if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right)
      {
        
        digitSum += mask_data[i].charCodeAt() - left;
      } 

     else

      {
        hash_pos = i;
      }
    }
  
    for (var i = 0; i < 10; i++) {
      if ((digitSum + i) % 3 === 0) {
        mask_data[hash_pos] = String.fromCharCode(left + i);
        result.push(mask_data.join(''));
      }
    }
  
    return result;
  }
  
  console.log(is_divisible_by3("2#0"))
  console.log(is_divisible_by3("4#2"))

  //ex-116 finished (first2 and last 0 then divise  3 )

  function is_identity_Matrix(matrix_data) {
    for (var i = 0; i < matrix_data.length; i++) 
     {
      for (var j = 0; j < matrix_data.length; j++)
       {
        if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
        {
          return false;
        }
      }
    }
    return true;
  }
  
  console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
  console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]]))
//ex-117 finished (1st 1 ,2nd 1, 3d 1)

function is_inrange(x,y,z)
{
    return y>=x && y<=z;

}
console.log(is_inrange(1,2,3));
console.log(is_inrange(1,2,-3));
console.log(is_inrange(1,1,1,2,1,3));

//ex-118 finished (1<=2 && 3>=2)

function is_increasing_digits_Sequence(num) {

    var arr_num = ('' + num).split('');
  
    for (var i = 0; i < arr_num.length - 1; i++) {
      if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
        return false;
      }
    return true;
  }
  
  console.log(is_increasing_digits_Sequence(123));
  console.log(is_increasing_digits_Sequence(1223));
  console.log(is_increasing_digits_Sequence(456789));

  // ex-119 finished (1<2 2<3 )

  function check_a_point(a,b,x,y,r) {
      var dist_point = (a-x) * (a-x) + (b-y) * (b-y);
      r *=r;
      if (dist_point < r) {
          return true;
      }
      return false;
  }
  console.log(check_a_point(0,0,2,4,6));
  console.log(check_a_point(0,0,2,4,6,8));
  //ex-120 finished

  