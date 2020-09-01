function getSum (nums: number[]): number {
  let sum: number = 0
  for(let i: number = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  // console.log(sum)
  return sum
}
let number: number = getSum([1,3,5]) + getSum([2,4,6])
console.log(number)