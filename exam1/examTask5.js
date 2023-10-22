function lightsaberDuel(str) {

    let strike = 0;
    let powerStrike = 0;
    let force = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            strike++;
        } else if (str[i] === ")") {
            strike--;
        } else if (str[i] === "{") {
            force++;
        } else if (str[i] === "}") {
            force--;
        } else if (str[i] === "!") {
            powerStrike++;
        }
    }

    if (strike <= 0 && force <= 0 && powerStrike % 2 == 0) {
        console.log("Legendary");
    } else {
        console.log("Not legendary");
    }
}


lightsaberDuel("()()(()())");
lightsaberDuel("((!!)(({!!})))");
lightsaberDuel("((())");
lightsaberDuel("{!}!");
lightsaberDuel("({(!!}))")
