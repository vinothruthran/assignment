/*for(let i = 0; i <5; i++){
    console.log("Number #", i);
}*/
for(let i = 1; i <=5; i++){
    console.log("Number #", i);
}
for(let i = 1; i <=50; i++){
    console.log("Number #", i);
}
for(let i = 1; i <=50; i--){
   if(i%2 !==0){
       console.log("Even Number #" + i);
   }
}
var num = [1,2,3,4,5,6,7,8,9,10];
num.forEach(value=>{if (value %2 ==0){
    console.log(value);
}
});

function print_current_page()
{
window.print();
}
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);



var n1=(5+2);
console.log(typeof n1);

var x=[(5 + null) + "<br>"  +
("5" + null) + "<br>" +
("5" + 2) + "<br>" +
("5" - 2) + "<br>" +
("5" * "2") + "<br>" +
("5" / "2") + "<br>"];
console.log(typeof x);