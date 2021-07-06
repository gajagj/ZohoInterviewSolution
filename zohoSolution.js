function solution(word) {
    let wordlen = word.length;
    for (let j = 0; j < word.length; j++) {
        let answer = "";
            answer += " ".repeat(word.length - j - 1)
        for (let i = 0; i < j + 1; i++) {
            answer += word[(parseInt(wordlen / 2 + i) % wordlen)];
        }
        console.log(answer)
    }
}

solution("WELCOME")
solution("WATER")
