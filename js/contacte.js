window.onload=function(){
    // showMapa();

        var tog =document.querySelector("nav .toggle-menu");
    var men =document.querySelector("nav ul");

    tog.addEventListener('click',function(){
      men.classList.toggle('show');
      
    });
}






function showMapa(){
    var map=document.querySelectorAll('.map-principal > li');
     for (let el of map){
     	el.addEventListener('click',function(){
     	
     		 
     		this.children[0].classList.toggle("fa-minus");
     		this.children[0].classList.toggle("fa-plus");
     		console.log('hola :'+this.children.length);
     		if(this.children[0].classList.item(1)=="fa-plus"){

               this.children[1].style.display='none';
     		}else{
     			this.children[1].style.display='block';

     		}
     	});
     }
   
}