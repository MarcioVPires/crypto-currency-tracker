function getList(item) {
  return JSON.parse(localStorage.getItem(item));
}

function setList(item) {
  localStorage.setItem("list", JSON.stringify(item));
}

export { getList, setList };
