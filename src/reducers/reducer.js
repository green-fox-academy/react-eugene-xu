export default (state = 0, action) => {
  switch (action.type) {
    case 'BUYING':
      return state + 1;
    case 'EATING':
      if (state > 0) {
        return state - 1;
      }
      return state;
    default:
      return state;
  }
};
