const binarySearch = (list, target) => {
  const withinRange = list[0] <= target && list[list.length-1] >= target;
  const notFound = 'target not within range';

  if (!list.length || !withinRange) return notFound;

  let start = 0;
  let end = list.length - 1;
  let midpoint = Math.floor((start + end) / 2);
  let found = false;

  do {
    if (list[midpoint] === target) {
      found = true;
      return midpoint;
    } else if (list[midpoint] < target) {
      if (list[midpoint + 1] === target) {
        found = true;
        return midpoint + 1
      } else {
        start = midpoint + 1;
      }
    } else {
      if (list[start] === target) {
        found = true;
        return start;
      } else {
        end = midpoint - 1;
      }
    }
    midpoint = Math.floor((start + end) / 2);
  } while (!found && withinRange);
}