

var today = new day ()
var day = today.getDay();
var daylist = ["Sunday","Monday","Tusday","Wednesday","Thusday","Friday","Sturday"];
console.log("Today is : " + daylist[Day]+ ".");
var hours = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  {
      if (minute=== 0 && second=== 0)
      {
          hour = 12;
          prepand = 'Noon';

      } 
      else
      {
          prepand = 'PM';

      }
  }
  if (hour ===0 && prepand ===' AM ')

  {
      if (minute=== 0 && second=== 0)
      {
          hour = 12;
          prepand =' Midnight';

      } 
      else
      {
          prepand =' AM';

      }
  }
  console.log("current Time :"+hour + prepand +":" + minute +":" + second);




//EX-1
  