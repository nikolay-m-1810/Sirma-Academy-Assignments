function jediArchives(arr, str) {

    let first = -1;
    let last = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            if (first === -1) {
                first = i;
            }
        last = i;

        }

    }

    if (first != -1 || last != -1) {
    console.log(`First Occurrence: ${first} \n Last Occurrence ${last}\n`);
    } else {
        console.log("No record found\n");
    }

}

jediArchives(["Yoda", "Obi-Wan", "Yoda", "Luke"], "Yoda");
jediArchives(["Han", "Leia", "Chewbacca", "Han"], "Han");
jediArchives(["Lando", "Vader", "Palpatine"], "Maul");
jediArchives(["Yoda", "Obi-Wan", "Anakin", "Luke"], "Luke")
