/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1
  } else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0
  } else if (words.length === 1){
    return words[0].length
  } else {
    const firstWord = words[0].length;
    const arrWords = longest(words.slice(1));
    if (firstWord > arrWords) {
      return firstWord
    } else {
      return arrWords
    }
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {
  if (str.length <= idx) {
    return ""
  } else {
    const result = str[idx] + everyOther(str, idx + 2);
    return result
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true

  const lastIdx = str.length - 1;

  if (str[0] !== str[lastIdx]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, lastIdx))
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length <= i ) {
    return -1;
  } else if (arr[i] === val) {
    return i;
  } else {
    return findIndex(arr, val, i + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return str

  const lastLetter = str[str.length - 1]; 
  const restOfWord = revString(str.slice(0, str.length - 1))
  
  return lastLetter + restOfWord

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      // If there is a nested object, this will recursively get through each object key value pair
      // Until we get throuh all the nested object
      strings.push(...gatherStrings(obj[key]))
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) return -1

  const middle = Math.floor((1/2) * (start + end));
  if (arr[middle] === val) {
    return middle
  } else if (arr[middle] < val) {
    // If the value is greater than the midpoint value
    // Discard everything from the start to middle and look in middle to end
    return binarySearch(arr, val, middle + 1, end);
  } else {
    // If the value is less than the midpoint value
    // Discard everything from the middle to the end and look from start to middle
    return binarySearch(arr, val, start, middle - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
