let nums =5;
function fact(nums) {
     if(nums==0)
     return 1;
     else
    return nums*fact(nums-1);
}
let result = fact(nums);
console.log(result);