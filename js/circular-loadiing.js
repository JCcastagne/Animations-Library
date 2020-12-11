
document.addEventListener('DOMContentLoaded', animate);

function animate() {

  let Dots = document.querySelectorAll('#Dots circle');

  Dots.forEach((circle, i)=>{
    setTimeout(() => {
      circle.classList.add('animate')
    }, i * 100);
  })

}

const outer = document.querySelector('#outer');

//const drawer = document.querySelector('.drawer');

let outerScaledUp = false;

outer.addEventListener('click', () =>{
  if (outerScaledUp == false){
    outer.classList.add('scaleUp')
    outerScaledUp = true;
  }else{
    outer.classList.remove('scaleUp');
    outerScaledUp = false;
  }
})