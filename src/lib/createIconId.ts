const localStorageKey = '_idIconEveryMax'
let id: number = parseInt(window.localStorage.getItem(localStorageKey)||'0');
function createIconId(){
  id++;
  window.localStorage.setItem(localStorageKey,JSON.stringify(id))
  return id
}
export  default  createIconId;
