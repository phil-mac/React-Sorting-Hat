export const Sort = (questionList) => {
    const answerArray = questionList.map(q => q.answer);

    return Mode(answerArray);
}

const Mode = array => {
    const answerMap = {};
    let mode = array[0];
    let modeCount = 1;
    
    array.forEach(answer => {
        if(answerMap[answer] == null){
            answerMap[answer] = 1;
        } else{
            answerMap[answer]++;
        }
        if (answerMap[answer] > modeCount){
            mode = answer;
            modeCount = answerMap[answer]
        }
    })
    console.log(answerMap);
    return mode;
}