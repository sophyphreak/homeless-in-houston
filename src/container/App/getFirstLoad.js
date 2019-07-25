const getFirstLoad = () => {
  let isFirstLoad;
  if (typeof window !== `undefined`) {
    // for `gatsby build` to succeed
    isFirstLoad = JSON.parse(localStorage.getItem('isFirstLoad'));
  }
  if (typeof isFirstLoad === 'boolean' && isFirstLoad === false) {
    return false;
  }
  return true;
};

export default getFirstLoad;
