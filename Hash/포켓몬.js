// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const max = nums.length/2
    const set = new Set(nums)
    const all = set.size

    return all > max ? max : all
}