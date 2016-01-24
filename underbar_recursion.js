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

//PLAN
//result is t/f val after going through entire array
//move closer to base by decreasing in size each time
 function isPalindrome(array){
 	if(array.length <== 1){
 		return true;
 	} else {
 		return array[0] !== array[array.length-1] ? false : isPalindrome(array.slice(1, array.length-1));
 	}
 }

// WHAT I FIRST THOUGHT: HOLY MOLEY, take a gander at this beaute! (someone else's code)
// WHAT I NOW THINK: MEH. I did better.
isPalindrome = function(arr, size) {
  return arr[0] != arr[size - 1] ? 0 :
    size > 3 ? isPalindrome(arr.slice(1, -1), size - 2) :
      (size == 1 || arr[0] == arr[size - 1]) ? 1 :
        0
}
 ///5.Write a recursive function that searches for a target in a sorted array using binay search, where the array, its size and the target are given as parameters.
//PLAN
//associated result is t/f 
//base case: 1) target matched 2) array traversed
//move closer to base by shortening array
function binarySearch (array, target){
	var midway = Math.floor(array.length/2);
	  //BASE CASE(S)
	if(array[midway] === target){
		return true;
	} else if (array.length === 1){
		return false;
	} 
	return target > array[midway] ? binarySearch(array.slice(midway + 1), target) : binarySearch(array.slice(0, midway), target);
}
//******* REMEMBER to slice with an INDEX, not an element



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