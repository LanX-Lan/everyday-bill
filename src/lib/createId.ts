const localStorageKey = '_idEveryMax'
let id: number = parseInt(window.localStorage.getItem(localStorageKey)||'0');
function createId(){
  id++;
  window.localStorage.setItem(localStorageKey,JSON.stringify(id))
  return id
}
export  default  createId;
