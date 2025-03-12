var arr=[0,1,0,3,12];
var newarr=[];
var len=arr.length;
for(var i=len-1;i>=0;i--)
{
    if(arr[i]==0)
    {
       newarr.push(arr[i]);
       continue;
    }
    newarr.unshift(arr[i]);
}
console.log(newarr);