/**
 * @class Search
 * @classdesc OO approach to basic search algorithms
 */
class Search {
/**
 * tests the existence of a search param in a given list
 * 
 * @param {Array} list - Array of numbers to search
 * @param {Number} num - search param
 * @return {Boolean}
 */
  static basicBinarySearch(list, num) {
    let start = 0;
    let end = list.length;
    let midpoint = Math.floor(start + (end - start) / 2);
    let isNumFound = true;

    // if array is empty or the search param is not within scope, return false;
    if (!list.length || num < Math.min(...list) || num > Math.max(...list)) return false;

    while (start <= end) {
      if (list[start] === num || list[end] === num || list[midpoint] === num) {
        isNumFound = true;
        break;
      } else if (num < list[midpoint]) {
        end = midpoint - 1;
      } else {
        start = midpoint + 1;
      }
    }

    return isNumFound;
  }

  /**
   * tests the existence of a search param in a given list
   * returns the result as an object containing max number of steps,
   * total steps taken and the search param
   * 
   * @param {Array} arr - Array of numbers to search
   * @param {Number} num - search param
   * @return {Object}
   */
  static binarySearchAdvanced(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    result = { steps: 0, maxSteps:  Math.ceil(Math.log2(arr.length)) };
    
    if (!arr.length) {
      result.error = 'Cannot search an empty list';
      return result;
    }

    if (num > Math.max(...arr) || num < Math.min(...arr)) {
      result.error = `${num} does not exist in this list`;
      return result;
    }
    
    while (result.steps <= result.maxSteps) {
      let mid = Math.floor(low + ((high - low) / 2));

      if (result.steps === result.maxSteps && !result.num) {
        result.error = 'too many steps';
        break;
      }

      if (arr[mid] === num || arr[low] === num || arr[high] == num) {
        result.steps++;
        result.num = num;
        break;
      } else if (num < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
      
      result.steps++;
      
    }
    
    return result;
  }
}