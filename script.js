const navbar = document.querySelector('.navbar');
const bars = document.querySelector('.navbar i');
const link = document.querySelectorAll('.navbar ul li a');

for (let i = 0; i < link.length; i++) {
  link[i].onclick = ()=>{
    navbar.classList.remove('active');
  }
}

bars.onclick = ()=>{
  navbar.classList.toggle('active');
}