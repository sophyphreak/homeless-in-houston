const getFirstLoad = () => {
  const firstLoad = JSON.parse(localStorage.getItem('firstLoad'));
  if (typeof firstLoad === 'boolean' && firstLoad === false) {
    return false;
  }
  return true;
};

export default getFirstLoad;
