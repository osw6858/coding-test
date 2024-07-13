// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    const answer = []
    for(let i = 0; i < commands.length; i++) {
        const startIndex = commands[i][0] -1
        const lastIndex = commands[i][1]
        const k = commands[i][2] - 1
        const sortedArray = array.slice(startIndex, lastIndex).sort((a,b) => a-b)

        answer.push(sortedArray[k])
    }

    return answer
}