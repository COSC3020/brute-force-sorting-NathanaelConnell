function permutationSort(a) {
    let counter = 0;
    let foundSorted = false;

    if (a.length === 0) {
        return 0;
    }
    if (a.length === 1) {
        return 1;
    }
    if (a.length === 2) {
        if (a[0] <= a[1]) {
            return 1;
        } else {
            [a[0], a[1]] = [a[1], a[0]];
            return 2;
        }
    }

    function permute(arr) {
        let result = [];
        function generatePermutation(current, remaining) {
            if (remaining.length === 0) {
                counter++;
                if (foundSorted === false && checkSorted(current)) {
                    foundSorted = true;
                    for (let i = 0; i < current.length; i++) {
                        a[i] = current[i];
                    }
                }
            } else {
                for (let i = 0; i < remaining.length; i++) {
                    let newCurrent = current.concat(remaining[i]);
                    let newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                    generatePermutation(newCurrent, newRemaining);
                }
            }
        }
        generatePermutation([], arr);
    }

    permute(a);
    return counter;
}

function checkSorted(current) {
    for (let i = 0; i < current.length - 1; i++) {
        if (current[i] > current[i + 1]) {
            return false;
        }
    }
    return true;
}
