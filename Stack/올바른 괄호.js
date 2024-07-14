//https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
    const stack = []

    if(!s.includes('(')){
        return false
    }

    for(let i=0; i<s.length; i++) {
        if(s[i] === "(") {
            stack.push(s[i])
        }else if(stack[stack.length-1] && s[i] === ')') {
            stack.pop()
        }else{
            return false
        }
    }

    return stack.length == 0 ? true : false
}