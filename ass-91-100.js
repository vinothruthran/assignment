
function array_max_consecutive_sum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
      temp_sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) {
        result = temp_sum;
      }
      temp_sum -= nums[i - k + 1];
    }
    return result;
  }
  
  console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
  console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
  console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))

  //ex-91 finished

  function max_difference(arr) {
      var max = -1;
      var temp;
      for (var i = 0; i < arr.length - 1; i++)
      {
          temp = Math.abs(arr[i] - arr[i + 1]);
          max = Math.max(max,temp);
      }
      return max;

  }
  console.log(max_difference([1,2,3,8,9]))
  console.log(max_difference([1,2,3,18,9]))
  console.log(max_difference([13,2,3,8,9]))

  //ex-92finished

  function array_max_diff(arr) {
      var max_result = 0;
      for (var i = 0; i < arr.length;i++)
      {
          for (var k = 0; k!=i && k < arr.length;k++)
          {
              var diff = Math.abs(arr[i] - arr[k]);
              max_result = Math.max(max_result,diff);
          }
      }
      return max_result;
  }
  console.log(array_max_diff([1,2,3,8,9]))
  console.log(array_max_diff([1,2,3,18,9]))
  console.log(array_max_diff([13,2,3,8,9]))
  
  //ex-93finished

  function array_element_mode(arr) {
    var ctr = [],
      ans = 0;
  
    for(var i = 0; i < 10; i++) {
      ctr.push(0);
    }
    for(var i = 0; i < arr.length; i++) {
      ctr[arr[i] - 1]++;
      if(ctr[arr[i] - 1] > ctr[ans]) {
        ans = arr[i] - 1;
      }
    }
    return ans + 1;  
  }
  console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))
  
//ex-94 finished

function array_element_replace(arr,old_valvue,new_valvue)
{
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] === old_valvue) {
            arr[i] = new_valvue;
        }
    }
    return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: "+num )
console.log(array_element_replace(num,2,5));

//ex-95 finished 2=5

function sum_adjacent_difference(arr) {
	var result = 0;
	for (var i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));

//ex-96 finished

function change_case(new_str) {
    var x = 0;
    var y = 0;
  
    for (var i = 0; i < new_str.length; i++) {
      if (/[A-Z]/.test(new_str[i])) {
        x++;
      } else y++;
    }
  
    if (y > x) return new_str.toLowerCase();
    return new_str.toUpperCase();
  }
  
  console.log(change_case("Write"))
  console.log(change_case("PHp"))

  function bulid_Palindrome(new_str) {
    let flag;
    for (let i = new_str.length;; i++) {
        flag = true;
        for (var j = 0; j < i - j - 1; j++ ) {
            if (i - j - 1 <  new_str.length && new_str[j] != new_str[i - j - 1]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            for (var j = new_str.length; j < i; j++) {
                new_str += new_str[i - j - 1];
            }
            return new_str;
        }
    }
}
console.log(bulid_Palindrome("abcddc"))
console.log(bulid_Palindrome("122"))

//ex-97 finished


  //ex-98 finished

  function rearrangement_characters(str1,str2) {

    var first_set = str1.split(''),
       second_set = str2.split(''),
       result = true;

       first_set.sort();
       second_set.sort();

       for (var i = 0; i < Math.max(first_set.length,second_set.length);i++) {
           if (first_set[i] !== second_set[i]) {
               result = false;
           }
       }

       return result;
  }
  console.log(rearrangement_characters("XYZ","ZYX"))
  console.log(rearrangement_characters("XYZ","ZYP"))

  //ex-99 finished

  function check_common_element(arra1,arra2) {
      for (var i = 0; i < arra1.length; i++)
      {
        if (arra2.indexOf(arra1[i]) != -1) 
          return true;
      }
      return false;
  }
  console.log(check_common_element([1,2,3],[3,4,5]));
  console.log(check_common_element([1,2,3],[5,6,7]));

  //ex-100 finished

 