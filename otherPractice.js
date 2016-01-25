/*// Write a function called `allCombos` that takes as its only argument an array and returns an array of arrays, each containing 
// one possible permutation of the elements in the passed in array. The returned array should not contain any elements whose content 
// is identical, even if in a different order. The result array should contain the permutation containing no elements, as well as the 
// permutation containing all elements.

// For example:
// ['a', 'b', 'c'] ----> [[], ['a'], ['b'], ['c'], ['a', 'b'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']]*/
//factorial? 
//choose?
//PLAN
//associated result is an arr constituted of aggregated operations
//base case: you get to combo that is the same as the beginning
//way to get closer to base case: 
//you need to start at 0, go up to length. 
//you need to keep arr info the same.. cant modify it, so subFunc? 
//
var allCombos = function (arr){
  //DEFINITIONS, VARS
    var length = arr.length;
	var count = length; //  track numElements to go into each array grouping (update each call)

	 //define a factorial function 
	var factorial = function(number){
		if (number === 0){
			return 1;
		} else {
			return number * factorial(number-1);
		}
	};
	  //define n choose k : n is relatable to the number of the row or set of arrays. (Pascals Triangle)
	    //the result of this func will give you the number of how many possible arrays
	  // k is relatable to the index within the row
	var choose = function(n, k){
		return (factorial(n) / (factorial(n-k) * factorial(n)));
	};


	  //BASE CASE
    if (count === 0){ 
    	return [[]];

    } else {
    	function recurse (){
    		var subCount = choose(length, count); // this will tell you the num. of arrays in the row.
    		var nextCombo =  new Array (count); 
    		//fill it in
    		//if
    		return recurse((subCount -1)).push(nextCombo);
    	}
    }


};

//Challenge: write a recursive factorial function

var factorial = function (n){
	if(n === 0){
		return 1;
	}
	return n* factorial(n-1);
};





/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3 5 8 13 21
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */
//PLAN
//associated result is a composite calculation
  //calc: n-1+n-2
//base case: reach the first two. **the numbers, NOT the array

var fib = function(index){
	if(index === 0){
		return 0;
	} else if(index === 1){
		return 1;
	}

	else return fib(index-2) + fib(index-1);
};

/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.   ///< WTF is that?!
  *
  */
//Challenge: write a recursive func that checks if one array deeply equals another. all els, including
// nested els, should be the same. 
//associate result: t/f
//base case: not nested
//each step, compare element to element
var deepEquals = function(a, b){
	for(var i = 0, i < a.length; i++){
		 //base case (A.- failed match)
		if(typeof a[i] !== 'object'){
			if(a[i] !== b[i]){
				return false;
			}
		} else {
			return deepEquals(a[i], b[i]);
		}
	}
	return true;
};

//PLAN
//associated result is a composite string, add to it each time.
//base case is the BIG array (of objs) is traversed.
//OR base case: all nests are found.
var stringifyJSON = function(obj){
	  //array case
	if (Array.isArray(obj)){
		var result = '';
		for(var i = 0; i < obj.length; i++){
			if(i !== obj.length-1){
				result += stringifyJSON(obj[i]) + ',';
			} else {
				result += stringifyJSON(obj[i]); 
			}
		}
		return '[' + result + ']';

	} else if (obj){
		var result = [];
		for(var key in obj){
			if(obj[key] !== undefined || typeof obj[key] !== 'function' ){
			  result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
			}
		}
		return '{' + result.join(',') + '}';
	}
	if(typeof obj === 'string'){
		return '"' + obj + '"';
	}
	return '' + obj;
};

//PLAN
//associated result is an array of elements that match a truth test
//base case: searched classNames of all nodes and subnodes
//get closer: diving deeper into subnodes
//operation should ALWAYS be performed before a dive
var getElementsByClassName = function(className){

	function recurse (node){
		var classList = node.classList;
		for(var i = 0; i < node.classList.length; i++){
		    if(classList[i] === className){
			    //add node to the list, but don't return
			    return [node];
		    }
	    }
		if(node.hasChildNodes()){
			for(var i = 0; i < node.children.legnth; i++){
				 var result = recurse(node.children[i]);
				 return [].concat(result);
			}
		}
		return result;
	}

	return recurse(document.body);
};

//6! = 6x5x4x3x2x1x1
var factorial = function(number){
	if(number === 0){ // yes, 1! === 1 but also 0! === 1, so technically should include 0
		return 1;
	}
	return number * factorial(number - 1);
};
//Challenge: find greatest common denominator using recursion
//PLAN
//associated result is a single value (that does not immediately appear to be the result of a cumulative computation)
//
var gcd = function(a, b, factor){
	factor = factor || 1;
	 //start with the largest possible divisor for a (the pair to 1)
    divisor =  (a / factor);
    if((a % divisor === 0 ) && (b % divisor === 0)){
    	return divisor;
    } 
    factor ++;
    return gcd(a, b, factor);
};

var gcdTurbo1 = function(a,b){ //EUCLID's THEORUM
 //
};
//PLAN
//associated result is a single number (like a min/max)
//must run 1-multiple operations to find it
//base case: a: located b: reach 1 (also 'located')
//decrease factor each time.
var gcdTurbo2 = function(a,b, factor){ //
 //treat 1 as a factor
 factor = factor || 1;
 var divisor = a / factor;

 if(a % divisor === 0 && b%divisor ==0){
 	return factor;
 }
 factor ++;
 return gcdTurbo2(a, b, factor)
};

//Challenge: write recursive program to get integers BETWEEN range
//PLAN
//associated reslt is array
//base case min == max
//increase min ea time to near base case
var getRange = function(min, max){
	if(min - max < 2){
		return null;
	} else if (min - max === 2)){
		return [min + 1];
	} else {
		var list = getRange(min, (max-1));
		list.push(max-1);
	    return list; //why do we need to return list?? 
    }
};

//Challenge: write a recursive program that computes the sum of an array of integers (all inclusive)
//PLAN
//associated result is a number that is the result of a composite calculation. 
//base case -- if you've completely diminished your count /// I think people go to 0 as opposed to starting there to avoid creating a new var
//diminish count and splice off array chunks ea time 
var sumArray = function(arr){
	if(arr.length === 1){
		return arr[0];
	} else{
		//add the val of the last el to sumArr of one-smaller array. 
		//ps, could use pop!! 
		return arr[arr.length-1] + sumArray(arr.slice(0, -1));
	}
};

//Challenge: write a recursive program that computes the result of a given base to a given exponent
//PLAN
//associated result number is a number that is a result of a composite calculation
//base case- exp brought down to 0 (return 1)
  //another way to think about exponents is the number of times you multiply 1 by the base number
//move closer to the base case each time by: decreasing the exponent
//what value, currently definable through your inputs, can you use in your calculations? 

var power = function(base, exp){
	if(exp === 0){
		return 1;
	} else{
		return base * power(base, exp-1);
	}
};

//Challenge: write a recursive program to get the first n Fibonacci numbers.
//PLAN
//associated result is a list, the last element of which is a new computation
//base case- 
  //you must begin with the values 0 & 1
//move closer to the base case by descending from the 'n' input

var fibonacci = function(n){
	if (n === 2){
		return [0, 1];
	} else{
		var buildList = fibonacci(n-1);
		buildList.push(buildList[buildList.length-2] + buildList[buildList.length-1]);
		return buildList;
	}
};

//Challenge: write a recursive program that checks whether a number is even or not
//PLAN
//associated result is true/ false
//base case - number is either diminished to 1(not) or 0 (is)
var isEven = function(n){
	if(n === 1){
		return false;
	} else if (n === 0){
		return true;
	} else {
		return isEven(n-2);
	}
};

//Challenge: write a recursive binary search (target value, sorted array, begin mid then up or down)
//PLAN
//associated result is true/ false 
//base case - when 1) target found 2) array completed
//shallow diminish search using slice
var binarySearch = function(arr, target){

		var checkIndex = Math.floor(arr.length/2); // check element @ half rounded down

		if(arr[checkIndex] === target){
			return true;
		} else if (arr.length === 1){
			return false;
		} else {
			var slice;
		    if(target > arr[checkIndex]){ // if target is greater, use 2nd half, right after checkIndex
		    	slice = arr.slice(checkIndex + 1);
		    } else{
		    	slice = arr.slice(0, checkIndex); // if not greater, not equal: less. 1st half, until chP
		    }	

			return binarySearch(slice, target);
		}
};

//Challenge: write a recursive merge sort program
//PLAN
//associated result is a compositely sorted array of the same length
//base case: each sub is of length 1 and you can compare them
//
//
var mergeSort = function(arr){
	if(arr.length === 1){
		return arr; 
	} else {
		var cutIndex = Math.floor(arr.length / 2);
		var left = arr.slice(0, cutIndex);
		var right = arr.slice(cutIndex + 1);

		var compare = function(a, b){
		    var result = [];
		      //while the length of BOTH halves > 0 .. until at least one side is exhausted
		    while(left.length > 0 && right.length > 0){
			    //push the shifted lesser value of side[0]
			    if(left[0] > right[0]){
				    result.push(right.shift());
			    } else {
				    result.push(left.shift());
			    }
		    }
		     //then push the remaining (presorted) side
		    if(left.length){
			    return result.push(left);
		    } else {
			    return result.push(right);
		    }
	    };
	    return compare(left, right);
	}
};

//Challenge: reverse a string
//PLAN
//associated result is a composite string
//base case - 
var reverseString = function (str){
	if(str.length === 1){
		return '' + str;
	} else {
		return str[str.length-1] + reverseString(str.slice(0, str.length-1));
	}
};

//Challenge: Pascal's triangle
//PLAN
//associated result is an array OF ARRAYS of composite calculations  -- ea new array is ALL of k
//to build it from an upper bracket starting place, base case will be n=0 & k = 0;
//challenge: manipulate k more often than you manipulate n
var pascalsTriangle = function (n, k){
	 //setup: n choose k to determine next el value;
	var el = function (){
		return ( factorial(n) / ( factorial(n-k) * factorial(k) ));
	};

      //true base case
	if(n === 0 && k === 0){    
		return [el(n, k)];
	}

	function recurseK (n, k){
		if(k === 0){
			return [el(n,k)]; 
		}
		//val? 
		//concat?
		return recurseK(n, k-1);
	}



	  // call on 1 less n and 1 less k, adding the 
	return [].concat(pascalsTriangle(n-1, k-1)); 
	
};  /// [1]
