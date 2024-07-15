// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    let answer = [];
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            let asc = arr[i][0].charCodeAt();
            if ((asc >= 48 && asc <= 57) || asc === 32) {
                answer.push(arr[i].toLowerCase());
            } else {
                let remain = arr[i].substring(1, arr[i].length).toLowerCase();
                let upper = arr[i][0].toUpperCase();
                answer.push(upper + remain);
            }
        } else {
            answer.push("");
        }
    }
    return answer.join(" ");
}