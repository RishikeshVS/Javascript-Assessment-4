var input=[5,10,20,2,0,33,100,90];
var result=[];
for(var i=0;i<input.length;i+=2)
{
    result.push(input[i]);
    if(i+1<input.length)
    {
        result.push(input[i+1]);
    }
    if(i+1<input.length)
    {
        result.push(input[i]+input[i+1]);
    }
}
console.log(result);