const linearSearch = (list, target) => {
  if (list.length === 0) return;

  while (i < list.length) {
    if (list[i] === target) {
      return i;
    }
    i += 1;
  }
  return 'target not found';
};
