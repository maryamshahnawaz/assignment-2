
const menuIcon = document.getElementById('icon');
menuIcon.addEventListener('click',function(){
  const ulElement = document.querySelector('ul');
  ulElement.classList.toggle('show');
})