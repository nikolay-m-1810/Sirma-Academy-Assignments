function sithCodeCipher(s, n) {
    
    let result = '';
    let char = 0;
    
    for (let i = 0; i < s.length; i++) {
        char = (s[i].charCodeAt()) + n;
        result += String.fromCharCode(char);
    }

    console.log(result);
}

sithCodeCipher("Uifsf jt b tdifsu", 1);
sithCodeCipher("Dagobah", 3);
sithCodeCipher("R2-D2", 5);