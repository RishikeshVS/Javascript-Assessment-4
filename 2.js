var nums1=[[1,2],[3,4]];
var nums2=[[23,98],[42,70]];
function fun1(nums2,operation)
{
    var sum=0;
    if(operation=="add")
    {
        for(var i=0;i<nums1.length;i++)
        {
            for(var j=0;j<nums1[0].length;j++)
            {
                sum+=nums1[i][j];
            }
        }
        console.log("The result for the operation Add is:");
        console.log(sum);
    }
    if(operation=="string")
    {
        var res=nums2.flat();
        console.log("The result for the operation String is:");
        console.log(res);
    }
}

fun1(nums1,"add");
fun1(nums2,"string");