function galacticSenator(arr) {

    let yesCount = 0;
    let noCount = 0;

    let abstain = 0;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Yes") {
            yesCount++;
        } else if (arr[i] === "No") {
            noCount++;
        } else if (arr[i] === "Abstain") {
            abstain++;
        }
    }

    if (yesCount > noCount) {
        console.log("Yes");
    } else if (noCount > yesCount) {
        console.log("No");
    } else if (yesCount == noCount) {
        
    }
        

}


galacticSenator(["Yes", "No", "Yes", "Abstain", "Yes"]);
galacticSenator(["No", "No", "Abstain", "Abstain"]);
galacticSenator(["Yes", "No"]);
galacticSenator(["Abstain"]);
galacticSenator(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]);


