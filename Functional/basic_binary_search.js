/**
 * tests the existence of a search param in a given list
 * 
 * @param {Array} list - Array of numbers to search
 * @param {num} num - search param
 * @return {boolean}
 */
function basicBinarySearch(list, num) {
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
