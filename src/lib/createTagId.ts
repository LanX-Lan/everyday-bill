const localStorageKey = '_idTagEveryMax'
let id: number = parseInt(window.localStorage.getItem(localStorageKey)||'0');
function createTagId(){
  id++;
  window.localStorage.setItem(localStorageKey,JSON.stringify(id))
  return id
}
export  default  createTagId;
