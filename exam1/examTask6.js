function starfighterFormation(arr, ...args) {

    for (let i = 0; i < args[0].length; i++) {
        
        let action = args[0][i].split(' ')[0];
        let indexes = args[0][i].split(' ').slice(1, args[0][i].length);


        if (action === "destroy") {
            arr.splice(parseInt(indexes), 1)
            console.log(arr.join(' '));

        } else if (action === "swap") {
            
            if (indexes[0] < arr.length && indexes[1] < arr.length) {
                let temp = arr[indexes[0]];
                arr[indexes[0]] = arr[indexes[1]];
                arr[indexes[1]] = temp;

                console.log(arr.join(' '));
            }

        } else if (action === "add") {
            arr.push(indexes);
            console.log(arr.join(' '));
        } else if (action === "insert") {

                arr.splice(indexes[1], 0, indexes[0]);
                console.log(arr.join(' '));
        } else if (action === "center") {
            if (arr.length % 2 == 0) {
                let m1 = arr[arr.length / 2];
                let m2 = arr[arr.length / 2 - 1];
                console.log(`${m2} ${m1}`);
            } else {
                let mid = arr[Math.floor(arr.length / 2)];
                console.log(`${mid}`);
            }
        }

        
    }
    
    
}

// starfighterFormation([1, 2, 3, 4, 5], ["destroy 3", "swap 0 1", "add 6", "center"]);
// starfighterFormation([1, 2, 3, 4, 5], ["add 6", "swap 0 5", "swap 1 4", "swap 2 3", "swap 2 100", "swap 2 2", "center"]);
starfighterFormation([1, 2], ["insert 3 2", "center", "destroy 1", "destroy 2", "center"]);
