function test_same_elements_both_arrays(arra1,arra2) {
    let result = 0;
    for (var i = 0; i < arra1.length; i++) {
        for (var j = 0; j < arra2.length; j++) {
            if (arra1[i] == arra2[j])
            {
                result++;
            }
        }
    }
    return result;
}
console.log(test_same_elements_both_arrays([1,2,3,4],[1,2,3,4]));
console.log(test_same_elements_both_arrays([1,2,3,4],[1,2,3,5]));
console.log(test_same_elements_both_arrays([1,2,3,4],[11,12,13,14]));

//ex-141 finished (arra1=arra2 = length 4,3,0)


function simplify_path(main_path) {
    var parts = main_path.split('/'),
    new_path = [],
    length = 0;
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (part === '.' || part === '' || part === '..') {

            if (part === '..' && length > 0) {
                length--;

            }
            continue;
        }
        new_path[length++] = part;

    }
     if (length === 0) {
         return '/';
     }
     var result = '';
     for (var i = 0; i < length; i++) {
         result += '/' +new_path[i];
     }
     return result;
}
console.log(simplify_path("/home/var/./www/../html//sql/"));

//ex-142 finished 



function sort_by_string_length(arra) {
	for (var i = 0; i < arra.length; i++) {
		for (var j = i + 1; j < arra.length; j++) {
			if (arra[i].length > arra[j].length) {
				var m = arra[i];
				arra[i] = arra[j];
				arra[j] = m;
			}
		}
	}
	return arra;
}
var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: "+ arra+"\n");
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));


//ex-143 finished (sort to length) a,b,aa,bb,..



function break_address(url_add) {
    var data = url_add.split("://")
    var portocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");

    if(data[1]) {
          return [portocol,domain,data[1]]
    }
    return [protocol,domain]
}
var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log("Original address: "+url_add)
console.log(break_address(url_add))

//ex-144 finished 

function sum(val) {
    var sn = 0;
    var i = 0;
    while(sn <= val) {
        sn += i++;

    }
    return i - 2;
}
console.log(sum(11))
console.log(sum(15))

//ex-145 finished 

function sum_Of_Cubes(n) {
    var sumn = 0;
    for (var i = 0; i <= n; i++) {
        sumn += Math.pow(i,3);

    }
    return sumn;
}
console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));

// ex-146 finshed 

function sum_digits_from_string(dstr) {
    var dsum = 0;

    for (var i = 0; i < dstr.length; i++)
    {
        if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
    }
    return dsum;
}
 console.log(sum_digits_from_string("abcd12efg9"))
 console.log(sum_digits_from_string("w3resource5")) 

 //ex-147 finished (only num add 1+2+9=12)

 function halv_array_swap(iarra) {
    if (((iarra.length)%2)!=0)
      {
      return false;
      }
  
    for (var i = 0; i < iarra.length / 2; i++) {
      var tmp = iarra[i];
      iarra[i] = iarra[i + iarra.length / 2];
      iarra[i + iarra.length / 2] = tmp;
    }
    return iarra;
  }
  
  console.log(halv_array_swap([1,2,3,4,5,6]))
  console.log(halv_array_swap([1,2,3,4,5,6,7]))

  // ex-148 finished  (1,2,3,4,5,6 = 4,5,6,1,2,3)

  function change_case(txt) {
      var str1 = "";
      for (var i = 0; i < txt.length; i++) {
          if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
          else str1 += txt[i].toUpperCase(); 
      }
      return str1;
  }
  console.log(change_case("w3resource"));
  console.log(change_case("Germany"));
  console.log(change_case("VINO"));
  console.log(change_case("prabharan"));

  //ex-149 finished (lower to upper case vino = VINO)


  function swap_adjacent_digits(n) {
      if (n.toString().length % 2 != 0) {
          return false;
      }
      var result = 0,
             x = 1;
        while (n != 0) {
            var dg1 = n % 10,
            dg2 = (n - dg1) / 10 % 10;
          result += x * (10 * dg1 + dg2);
          n = Math.floor(n / 100);
          x *= 100;

        }   
        return result;  
  }
  console.log(swap_adjacent_digits(15));
  console.log(swap_adjacent_digits(1543));
  console.log(swap_adjacent_digits(12345));
  console.log(swap_adjacent_digits(123456));
  console.log(swap_adjacent_digits(12345678));

  // ex-150 finished (15=51 opp to equal valve)


  