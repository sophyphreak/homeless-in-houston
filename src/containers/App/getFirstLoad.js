const getFirstLoad = () => {
  const isFirstLoad = JSON.parse(localStorage.getItem('isFirstLoad'));
  if (typeof isFirstLoad === 'boolean' && isFirstLoad === false) {
    return false;
  }
  return true;
};

export default getFirstLoad;
