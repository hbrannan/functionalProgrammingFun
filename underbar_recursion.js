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
	return target > array[midway] ? binarySearch(array.slice(midway + 1), target) : binarySearch(array.slice(0, midway), target); //*
}
//******* REMEMBER to slice with an INDEX, not an element


///CHALLENGE:
////Re-write Underbar using recursion, whenever possible.


//FIRST
//return an array of the first n elements. if n is undefined, return only last
//associated result is either one el or an array of els
//base case: n = 1
//move towards base case by recursing w n-1 ea time
function first(arr, n){
	if(n === undefined || n <= 1){
		return [arr[0]];
	}
	return [].concat(first(arr, n-1)).concat(arr[n-1]);
}
//like first, but for the final elements
//associated result is either one el or an array of els
//base case is n = 1
//move towards base case by recursing w n-1 ea time
function last(arr, n){
	if(n === undefined || n <= 1){
		return [arr[arr.length-1]];
	}
	return [].concat(arr.length-n).concat(last(arr, n-1));
}

//call a func on each el in a col
//associated result -- is none. 
//base case is col.length = 0
//move towards it using recursion & slice
//YOU JUST CAN'T SENSIBLY USE RECURSION FOR TRAD EACH BC 1) difficult access arr i w/o for loop 2) NEED for-in loop to access keys in obj
function each (col, it) {
	if (Array.isArray(col)){
		it(col[0]);
	} else {

	}
}

//build a recursive func that returns the index of where a target is 1st found, or if not found, returns -1
//PLAN
//associated result is single index or -1
//base case is 1) when target found 2) when arr traversal complete

function indexOf(arr, target){
	var count = arr.length -1;

	if(arr.length === 0){ // edge case: if input array has no els
		return -1;
	}

	function recurse (arr, c){
		if (arr[c] === target){
			return c;
		} else if (c === 0){
			return -1;
		}
		return recurse(arr, c-1);
	}
	return recurse(arr, count);
}

//return all els of an arr that pass a truth test
//PLAN
//associated result is a composite arr
//base case: array fully traversed

function filter(col, truthTest){
	var l = col.length;
	var newCol = col.slice(0, l-1);
	if(l === 1){
		if(col[0] % 2 === 0){
		    return col;
	    } else {
	    	return [];
	    }
	}
	if(truthTest(col[l-1])){
		 return [].concat(filter(newCol, truthTest)).concat(col[l-1]);
	} else {
		return filter(newCol, truthTest);
	}
}

//PLAN
//associated result is an arr composed of elements operated upon.. OR EMPTY
//base case -- having traversed the whole array
//how to get closer -- decrease col each time
function reject(col, truthTest){
  if(col.length === 0){
  	if(truthTest(col[0])){
  	    return col;
  	} else {
		return [];
	}
  }
  var slice = col.slice(1);
  if(!truthTest(col[0])){
  	return [].concat(col[0]).concat(reject(slice, truthTest));
  } else {
	return reject(slice, truthTest);
  }
}

//PLAN:
//result is composite array (repeated operations)
// base case: traversed whole array
//challenge: you need to maintain an array for comparison ****!!****
function uniq (arr){ [1,2,2,3]
	//subfunc to store result for comparison
  function recurse (array, result){
  	 //if result uninitialized, initialize 
  	result = result || [];
  	  //base case
	if(array.length === 1){ 
		if(indexOf(result, array[0]) === -1){ 
			return result = array;
		} else {
			return result;
		}
	}
	if(indexOf(result, array[0]) === -1){
		result = [].concat(array[0]);         // huh?!! if I am storing result & also adding a recursive call 
		return result.concat(recurse(array.slice(1), result));  //  **!!** to it, HAVE TO separate them
	} else {
		return recurse(array.slice(1), result);
	}
  }
  return recurse(arr);
}
//PLAN
//associated result is a composite array
function map(col, it){
	if(col.length === 0){
		return col;
	}
	return [].concat(it(col[0])).concat(map(col.slice(1), it));
}
  // Takes an array of objects and returns an array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
//PLAN
//associated result is an array of object values
//base case -- array is completely traversed
function pluck(arrOfObjs, key){
	if(arrOfObjs.length === 0){
		return arrOfObjs;
	}
	return [].concat(arrOfObjs[0][key]).concat(pluck(arrOfObjs.slice(1), key));
}

//PLAN
//associated result is a single number with acc results
//when array is traversed
function reduce(col, it, acc){
	if(!acc){
		return acc = col[0];
	}
	if(col.length === 0){
		return acc; 
	}
	acc = (it(acc, col[0]));
	return reduce(col.slice(1), it, acc);
}
//Determine if given array/obj contains a val
//PLAN
//associated result is single: t/f
//base case: found OR col traversed
//challenge: arr OR obj
function contains(col, target){
	//var copy; //how would you copy an object? 
	function recurse (col, memo){
		if(Array.isArray(col)){
			if(col[0] === target){
				return true;
			} else if (col.length === 0){
				return false;
			} else {
				return recurse(col.slice(1));
			}
		} else {
			for(var key in obj){
				if(obj[key] === target){ 
					return true;
				}
				delete obj[key];
				return contains(col, target, false); //this will modify orig. obj. protect with a copy?
			}
			  //after loop runs the whole way thru obj, if memo still false, IS false
			if(memo === false){
				return false;
			}
		}
	}
	return recurse(col, false);
}

function every(){}

function some(){}

function extend(){}

function defaults(){}

function shuffle(){}


