function wompRats(n, m, h) {

    let result = 0;

    for (let i = 0; i < h; i++) {
        result += n;
        n +=m;
    }

    console.log(result);
    
}

wompRats(5, 2, 3);
wompRats(7, 1, 2);
wompRats(10, -1, 1);
wompRats(8, -2, 3);

