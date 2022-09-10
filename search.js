const page = document.getElementById("page");
const search = document.getElementById("search");
const form = document.querySelector("form");

page.addEventListener("click",() => {
  search.focus()
})


form.addEventListener("submit",(event) => {
  event.preventDefault()
  document.location.href = `https://www.google.com/search?q=${
    search.value.replace(" ","+")
  }`
})


search.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(search); // immediately call the function

function resizeInput() {

  this.style.width = this.value.length + "ch";
}
