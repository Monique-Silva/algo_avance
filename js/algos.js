// Converts from degrees to radians.
Number.prototype.toRadians = function () {
    return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
    //console.log(city);
    //console.log(city.latitude);
    let GrenobleLat = 45.166667;
    let GrenobleLong = 5.716667;

    const R = 6371e3; // metres
    const φ1 = GrenobleLat * Math.PI / 180; // φ, λ in radians
    const φ2 = city.latitude * Math.PI / 180;
    const Δφ = (city.latitude - GrenobleLat) * Math.PI / 180;
    const Δλ = (city.longitude - GrenobleLong) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {
    displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
    let temp = csvData[j];
    csvData[j] = csvData[i];
    csvData[i] = temp;
    console.log("swap - implement me !");
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city

function isLess(i, j) { //pra usar uma função dentro de outra função, não precisa usá-la como parâmetro
    displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
    if (distanceFromGrenoble(csvData[i]) < distanceFromGrenoble(csvData[j])) {
        return true;
    }
}

function insertsort() {
    for (let i = 1; i < csvData.length; i++) {
        let j = i - 1;
        while (j >= 0) {
            if (isLess(j + 1, j) === true) {
                swap(j + 1, j);
            }
            j--;
        }
        console.log(csvData);
    }
}

function selectionsort() {
    for (let i = 0; i < csvData.length - 1; i++) {
        console.log(i);
        let smallerIndex = i;
        for (let j = i + 1; j < csvData.length; j++) {
            if (isLess(j, smallerIndex) === true) {
                smallerIndex = j;
            }
        }
        swap(i, smallerIndex);
    }
    console.log(csvData);
}

function bubblesort() {
    for (let i = 0; i < csvData.length - 1; i++) {
        for (let j = 0; j < csvData.length - 1; j++) {
            if (isLess(j + 1, j) === true) {
                swap(j + 1, j);
            }
        }
        console.log(csvData);
    }
}

function shellsort() {
    console.log("shellsort - implement me !");
    for (let gap = Math.floor(csvData.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < csvData.length; i++) {
            let j = i;
            while (j >= gap) {
                if (isLess(j, j-gap) === true) {
                    swap(j, j - gap);
                }
                j -= gap;
            }
        }
    }
    console.log(csvData);
}
function mergesort() {
    console.log("mergesort - implement me !");
}

function heapsort() {
    console.log("heapsort - implement me !");
}

function quicksort() {
    console.log("quicksort - implement me !");
}

function quick3sort() {
    console.log("quick3sort - implement me !");
}


function sort(algo) {
    switch (algo) {
        case 'insert':
            insertsort();
            break;
        case 'select':
            selectionsort();
            break;
        case 'bubble':
            bubblesort();
            break;
        case 'shell':
            shellsort();
            break;
        case 'merge':
            mergesort();
            break;
        case 'heap':
            heapsort();
            break;
        case 'quick':
            quicksort();
            break;
        case 'quick3':
            quick3sort();
            break;
        default:
            throw 'Invalid algorithm ' + algo;
    }
}
