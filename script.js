const button = document.getElementById('myButton');
const message = document.getElementById('message');

 button.addEventListener('click', function() {
    message.textContent = 'КРАСАВЧИК:)';
    message.style.color = 'black';
 });
     
   fetch('/base')
   .then(res =>{return res.json()})
   .then(data => console.log);

       
