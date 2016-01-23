//Bowdoin recursion exercises: http://www.bowdoin.edu/~ltoma/teaching/cs107/spring05/recursion.html

 //1. Write a recursive function that computes the sum of all numbers from 1 to n, where n is given as parameter.
 //return the sum 1+ 2+ 3+ ...+ n
 //int sum(int n)

function sum (n){
	if(n === 1){
		return 1;
	} else {
		return n + sum(n-1);
	}
}

 ///2. Write a recursive function that finds and returns the minimum element in an array, where the array and its size are given as parameters.
 ///return the minimum element in a[]
 ///int findmin(int a[], int n)
 //PLAN
 //associated result is a single el value, which has to be compared to a previous value. 
 //always examine array[0], slicing each time
 //
function findMin(array){
	if(array.length === 1){
		return array[0];
	} else {
		var min;
		array[0] <= array[1] ? min = array[0] : min = array[1];
		return findMin([].concat(min).concat(array.slice(2)));
	}
}

 ///3. Write a recursive function that computes and returns the sum of all elements in an array, where the array and its size are given as parameters.
 ///return the sum of all elements in a[]
 ///int findsum(int a[], int n)
 //PLAN
 //associated result is a single composite sum
 //base case is reaching the end/ beginning of the array
 //move towards it by poppping
 //remember to add;

function sumArr (arr){
	if(arr.length === 1){
		return arr[0];
	} else {
		return arr[arr.length-1] + sumArr(arr.slice(0, arr.length-1));
	}
}

 ///4,Write a recursive function that determines whether an array is a palindrome, where the array and its size are given as parameters.
 ///returns 1 if a[] is a palindrome, 0 otherwise
 ///int ispalindrome(char a[], int n)

  	/* functional AS A LOOP

 	///var stepsLeft = Math.floor(size/2);
 	///var x = 0;
   /// var y = size -1;

 	///for(var i = 0; i < stepsLeft; i++){
 		if(arr[x] === arr[y]){
 			x++;
 			y++;
 		} else {
 			return 0;
 		}
 	///}
   /// return 1;
    */

 function isPalindrome(array, size){
 	var arr = array.slice();
 	size = arr.length;
 	var x = 0; 
 	var y = size -1;

 	//base cases:
 	// wholeEND - is palindrome, return 1;
 	//even
 	if(size === 2 && arr[x] === arr[y]){
 		return 1;
 	//odd
 	} else if(size === 3 && arr[x] === arr[y]){
 		return 1;
 	// shortEND - isn't palindrome, return 0;
 	} else if(arr[x] !== arr[y]){
 		return 0
 	}


 	//recursive cases:
 	//could check if even/ odd then count out from the middle(s) to the beginning/ end. 
 	//or, could focus on the number of steps from the outside to the middlemost pair (regardless even/ odd).
 	arr.pop();
 	arr.shift();
 	return isPalindrome(arr, size);
 }


 ///5.Write a recursive function that searches for a target in a sorted array using binay search, where the array, its size and the target are given as parameters.

function binarySearch (array, size, target){
	// remember, you need to modify the acutal array each time. 
	//Find the middle (Math.floor/ ceiling) of arr
	var checkIndex = Math.floor((size -1) / 2);
	console.log()
	var searchArr;

	//if middle === target, return_____? T/ F? The index? (Index will be hard if in 2nd half)
	if(array[checkIndex] === target){
		return true; //If you get this, step it up to write it to return an index. 
	}else if(size === 1 && array[checkIndex] !== target){
		return false;
	} else if(array[checkIndex] > target){
		searchArray = array.slice(checkIndex); // give only begin, so will go through end.
		console.log(searchArray + "," + checkIndex);
	} else {
		searchArray = array.slice(0, checkIndex);
		console.log(searchArray);
	}

	var searchLength = searchArray.length;
	//if target > middle, keep 2nd half. 
	//when you keep the 2nd half, you need to add (length?) to a tracker 'index' variable to keep the index No. intact. 
	//if target < middle, keep 1st half.
	//Use slice/ splice to modify the array. 

	return binarySearch(searchArr, searchLength, target);

}

//HOLY MOLEY, take a gander at this beaute!:
isPalindrome = function(arr, size) {
  return arr[0] != arr[size - 1] ? 0 :
    size > 3 ? isPalindrome(arr.slice(1, -1), size - 2) :
      (size == 1 || arr[0] == arr[size - 1]) ? 1 :
        0
}


 ////Re-write Underbar using recursion, whenever possible.

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.

function each (el, col, it, length) {
	var i; 

	if(i === col.length -1){

	}

	//recursion case
}