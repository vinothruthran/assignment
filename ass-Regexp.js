var s1 = "JavaScript is very ersay to learn";
var s2 = /a/g;
console.log(s1.match(s2));
// g //

var s1 = "JavaScript is very Easy to learn";
var s2 = /a/i;
console.log(s1.match(s2));
//i//

var s1 = "JavaScript is very Easy to learn";
var s2 = /a/ig;
console.log(s1.match(s2));

//ig//


var s1 = "JavaScript is very Easy to learn";
var s2 = /is/ig;
console.log(s1.search(s2));
//ig-serch//

var s1 = "JavaScript is very Easy to learn";
var s2 = new RegExp("a","g");
console.log(s1.match(s2));

// REGEX //
var a = " Esay JavaScript is very Easy to learn";
var b = /[^e]/g;
console.log(a.match(b));
//
var a = " Esay JavaScript is very Easy to learn 8080";
var b = /[^8]/g;
console.log(a.match(b));
//^g//

//metta//
var a = "% $ ? Esay JavaScript is very Easy to learn 8080";
var b = /\w/g;
console.log(a.match(b));

var a = "% $ ? Esay JavaScript is very Easy to learn 8080";
var b = /\W/g;
console.log(a.match(b));
//d//
var a = "% $ ? Esay JavaScript is very Easy to learn 8080";
var b = /\d/g;
console.log(a.match(b));

var a = "% $ ? Esay JavaScript is very Easy to learn 8080";
var b = /\D/g;
console.log(a.match(b));
//D -without number //


var a = "% $ ? Esay JavaScript is very Easy to learn 8080";
var b = /\s/g;
console.log(a.match(b));

var a = "% $ ? Esay JavaScript is very Easy to learn 8080";
var b = /\S/g;
console.log(a.match(b));
//
var a = "% $ ? Esay JavaScript is very Easy to learn 8080";
var b = /\bEs/g;
console.log(a.match(b));

var a = "% $ ? Esay JavaScript is very Easy to learn 8080";
var b = /ry\b/g;
console.log(a.match(b));
//

var s1 = " JavaScript 300 1000 20000 is very Easy to learn j";
var s2 = /\d(3,3)/gi;
console.log(s1.match(s2));

var s1 = "JavaScript 300 1000 20000 is very Easy to learn";
var s2 = /\d(3,3)/gi;
console.log(s1.match(s2));
