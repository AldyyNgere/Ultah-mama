function surprise(){
   
   const container = document.querySelector(".container")
   const btn = document.getElementById('btn');
   const title = document.querySelector("title")
   const audio = new Audio('audio.mp3'); 
   container.style.display = "block";
   btn.style.display = 'none';
   title.textContent = "Happy Birthday Mom";
   audio.play();    
         
 }
