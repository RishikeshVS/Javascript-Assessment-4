var str1="heart";
var str2="earth";

var str1=str1.split("").sort().join("");
var str2=str2.split("").sort().join("");

if(str1==str2)
    console.log("Anagrams");
else
    console.log("Not anagrams");