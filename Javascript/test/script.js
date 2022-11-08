const btn = document.getElementById('btn');
const body = document.getElementsByTagName('body')[0];


btn.addEventListener("click",() => {
  body.classList.toggle("biru-muda");
});
