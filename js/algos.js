// Converts from degrees to radians.
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};


function distanceFromGrenoble(city)
{
  console.log("distanceFromGrenoble - implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;

  return 1;
}

function swap(i,j) // Swap the values in array csvData
{
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  console.log("swap - implement me !");

}

function isLess(A,B)
{
  displayBuffer.push(['compare', A, B]); // Do not delete this line (for display)
  console.log("isLess - implement me !");
}


function insertsort()
{
  console.log("insertsort - implement me !");
}

function selectionsort()
{
  console.log("selectionsort - implement me !");
}

function bubblesort()
{
  console.log("bubblesort - implement me !");
}

function shellsort()
{
  console.log("shellsort - implement me !");
}

function mergesort()
{
  console.log("mergesort - implement me !");
}

function heapsort()
{
  console.log("heapsort - implement me !");
}

function quicksort()
{
  console.log("quicksort - implement me !");
}
function quick3sort()
{
  console.log("quick3sort - implement me !");
}


function sort(algo)
{
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    case 'quick3': quick3sort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
