document.addEventListener('DOMContentLoaded', animate);

function animate() {

  let circles = document.querySelectorAll('#circles circle');

  circles.forEach((circle, i)=>{
    setTimeout(() => {
      circle.classList.add('animate')
    }, i * 250);
  })

}