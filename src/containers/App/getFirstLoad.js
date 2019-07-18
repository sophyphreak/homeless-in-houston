const getFirstLoad = () => {
  const firstLoad = JSON.parse(localStorage.getItem('firstLoad'));
  console.log(typeof firstLoad);
  console.log(firstLoad);
  if (typeof firstLoad === 'boolean' && firstLoad === false) {
    return false;
  }
  return true;
};

export default getFirstLoad;
