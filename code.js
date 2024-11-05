function permutationSort(a) {
    let counter = 0;
    let swapped;
    
    do {
        swapped = false;
        for (var i = 0; i < a.length -1; i++) {
            if (a[i] > a[i + 1]) {
                
                var tmp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = tmp;
                
                counter++;
                swapped = true;
            }
        }
    } while (swapped);  

    return counter;
}
