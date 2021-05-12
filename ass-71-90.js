function first_last_1(nums)
{
    var end_pos = nums.length - 1;
    return nums[0] == 1 || nums[end_pos] == 1;
}
console.log(first_last_1([1,3,5]));
console.log(first_last_1([1,3,5,1]));
console.log(first_last_1([2,4,6]));
console.log(first_last_1([1,3,5,7,11,13]));
//ex-71finished

function first_last_same(nums)
{
    var end = nums.length -1;
    if(nums.length >= 1)
    {
        return nums[0] == nums[end];
    }
    else{
        return false;
    }
}
console.log(first_last_same([10,20,10]));
console.log(first_last_same([10,20,30,10]));
console.log(first_last_same([20,20,20]));

//ex-72finshed

function reverse3(array) {
    return array.map((element, idx, arr)=> arr[(arr.length - 1) - idx]);
}
console.log(reverse3([5,4,3]));
console.log(reverse3([1,0,-1]));
console.log(reverse3([2,3,1]));

//ex-73finished

function all_max(nums)
{
    var max_val = nums[0] > nums[2] ? nums[0]: nums[2];


    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;
    
    return nums;



}
console.log(all_max([20,30,20]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));

//ex-74finished

function middle_elements(a,b)
{
    var new_array = []
    new_array.push(a[1],b[1]);

    return new_array;

}
console.log(middle_elements([1,2,3], [1,5,6]));
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5])); 

//ex-75 finished

function started(nums)
{
    var array1 = [];
    array1.push(nums[0], nums[nums.length - 1]);

    return array1;


}
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78])); 

//ex-76finished

function started(nums)
 {
     var array1 = [];
     array1.push(nums[0], nums[nums.length - 1]);
     return array1;
 }
 console.log(started([20,20,30]));
 console.log(started([5, 2, 7, 8]));
 console.log(started([17, 12, 34, 78]));

 //ex-77 finished

 function is13(nums) {
     if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1) {
         return true;
         
     }
     else
     {
         return false;
     }
 }
 console.log(is13([7,8]));
 console.log(is13([3, 2]));
 console.log(is13([0, 1]));

 //ex-78 finished


function twice3040(array1)
{
    let a = array1[0];
        b = array1[1];
        return( a === 30 && b === 30 ) || ( a === 40 && b === 40);

}
console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));

//ex-79 finished

function swap(arra)
{
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1] , arra[0]];
    return arra;

}
console.log(swap([1,2,3,4]));
console.log(swap([0,1,2]));
console.log(swap([3]));

//ex-80finished

function add_two_digits(n)
{
    return n % 10 + Math.floor(n/10);

}
console.log(add_two_digits(25));
console.log(add_two_digits(50));

//ex-81finished
 function add_two_int_without_carrying(n1,n2)
 {
     var result = 0,
    
     x = 1;
     while (n1 > 0 && n2 > 0) {
         result += x * ((n1 + n2) % 10);
         n1 = Math.floor(n1 / 10);
         n2 = Math.floor(n2 / 10);
         x*= 10;
     }
     return result;
 }
 console.log(add_two_int_without_carrying(222, 911))
 console.log(add_two_int_without_carrying(200, 900))
 
 
 //ex-82finished

 function longest_string(str_ara)
 {
     var max = str_ara[0].length;
     str_ara.map(v =>max = Math.max(max,v.length));
     result = str_ara.filter(v=> v.length == max);
     return result;
 }
 console.log(longest_string(['a','aa','aaa','aaaaa','aaaa']))


 //ex-83finished

 function alphabet_char_Shift(str) {
    var all_chars = str.split("");
    for(var i = 0; i < all_chars.length; i++) {
      var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
      n = (n + 1) % 26; 
      all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return all_chars.join("");
  }
  
  console.log(alphabet_char_Shift("abcdxyz"))
  
  //ex-84 finished
  
 function alternate_sums(arr)
 {
     var result = [0,0];
     for (var i = 0; i < arr.length; i++ )
     {
         if(i % 2) result[1] += arr[i];
         else
         result[0] += arr[i];

     }
     return result;
 }
 console.log(alternate_sums([1, 3, 6, 2, 5, 10]))

 //ex-85finished (1+6+5),(3+2+10)

 function angle_type(angle)
 {
     if(angle < 90){
         return "Acute angle.";
     }
     if(angle === 90){
        return " Right angle.";
    }
    if(angle < 180){
        return "Obtuse angle.";
    }
    return "Straight angle.";

 }
 console.log(angle_type(47));
 console.log(angle_type(90));
 console.log(angle_type(145));
 console.log(angle_type(180));
 
 //ex-86finished

 function array_checking(arra1, arra2) {

    for(var i = 0; i < arra1.length; i++) {
      for(var j = i; j < arra1.length; j++) {
        var result = true,
          temp = arra1[i];
        arra1[i] = arra1[j];
        arra1[j] = temp;
        for(var k = 0; k < arra1.length; k++) {
          if(arra1[k] !== arra2[k]) {
            result = false;
            break;
          }
        }
        if(result) {
          return true;
        }
        arra1[j] = arra1[i];
        arra1[i] = temp;
      }
    }
    return false;
  }
  
  console.log(array_checking([10,20,30], [10,20,30]))
  console.log(array_checking([10,20,30], [30,10,20]))
  console.log(array_checking([10,20,30,40], [10,30,20,40]))

  //ex-87finished
  

 function checking_numbers(x,y, divisor )
 {
     if(x % divisor === 0 && y % divisor === 0  || x % divisor !== 0 && y % divisor !== 0  )
     {
         return true;
     }
     return false;
 }
 console.log(checking_numbers(10,25,5))
 console.log(checking_numbers(10,20,5))
 console.log(checking_numbers(10,20,4))

 //ex-88 finished (10/5=2),(25/5=5) 

 function check_arthmetic_Expression(x,y,z)
 {
     return x + y == z || x * y == z || x / y == z || x - y == z;

 }
 console.log(check_arthmetic_Expression(10,25,35))
 console.log(check_arthmetic_Expression(10,25,250))
 console.log(check_arthmetic_Expression(30, 25, 5))
 console.log(check_arthmetic_Expression(100, 25, 4.0))
 console.log(check_arthmetic_Expression(100,25,35))

 //ex-89 finished (10+25=35) 

 function Kth_greatest_in_array(arr, k) {

    for (var i = 0; i < k; i++) {
      var max_index = i,
        tmp = arr[i];
  
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max_index]) {
          max_index = j;
        }
      }
  
      arr[i] = arr[max_index];
      arr[max_index] = tmp;
    }
  
    return arr[k - 1];
  }
  
  console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
  console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))

  //ex-90 finished

 