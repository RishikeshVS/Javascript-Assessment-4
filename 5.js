var str="welcome to team india and hello world";
var res="";
for(var i=0;i<str.length;i++)
{
    if(str[i]!=" ")
        res+=str[i];
}
console.log("The string without white spaces is:",res);