const getFirstLoad = () => {
  const firstLoad = localStorage.getItem('firstLoad');
  if (typeof firstLoad === Boolean && firstLoad === false) {
    return false;
  }
  return true;
};

export default getFirstLoad;
