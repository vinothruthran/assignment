
function lower_triangular_matrix(user_matrix) {
    for (var i = 0; i< user_matrix.length; i++) 
    {
        for (var j = 0; j< user_matrix[0].length; j++)  
        {if ( j > i && user_matrix[i][j] !== 0)
        return false;
    }
    }
    return true;
}
console.log(lower_triangular_matrix([[1,0,0],[2,0,0],[0,3,3]]));
console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));
console.log(lower_triangular_matrix([[1,0,0],[2,0,0],[0,4,4]]));

//ex-121 finished


function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[ i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(is_monotonous([1,2,33]));
console.log(is_monotonous([1,2,2]));
console.log(is_monotonous([-3,-2,-1]));

//ex-122 finished

function is_permutation(input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) < 0) 
          return false;
    }
    return true;
}
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));
console.log(is_permutation([1, 2, 3, 4,5,6], 6));


// ex-123 finished 

function test_logical_Nor(a,b) {
    return (!a && !b)

}
console.log(test_logical_Nor(true,false));
console.log(test_logical_Nor(false,false));
console.log(test_logical_Nor(true,true));

//ex-124 finished

function longest_str_in_array(arra) 
{
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 0; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["ab","a","abcd"]));
console.log(longest_str_in_array(["ab","ab","ab"]));

//ex-125 finished

function max_even(arra) 
{
    arra.sort((x,y) => y-x);
    for (var i = 0; i < arra.length; i++) {
        if (arra[i] % 2 == 0)
        return arra[i]; 
    }
}
console.log(max_even([20,40,200]));
console.log(max_even([20,40,301]));
console.log(max_even([20,40,200,4000]));

//ex-126 finished olnly even number big output

function mirror_bits(n) {
    return parseInt(n.toString(2).split("").reverse().join(""), 2);
  }
  
  console.log(mirror_bits(56));
  console.log(mirror_bits(234));

  //ex-127 finished 

  function nearest_round_number(num) {
      while (num % 10) {
          num++;
      }
      return num;
  }
  console.log(nearest_round_number(56));
  console.log(nearest_round_number(987));

  //ex-128 finished (near valve)

  function next_Prime_num(num) {
    for (var i = num + 1;; i++) {
        var isPrime = true;
        for (var d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}

console.log(next_Prime_num(3));
console.log(next_Prime_num(17));

//ex-129 finished (odd number)

function even_digits(num)
{
    var ctr = 0;
    while (num) {
        ctr += num % 2 ===0;
        num = Math.floor(num/10);

    }
    return ctr;
}
console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(124444));

//ex-130 finished  (even number digit) 
