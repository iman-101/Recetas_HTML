window.onload=function(){
	var bool=true;
	showPreparacion(bool);
    showImage();
     var tog =document.querySelector("nav .toggle-menu");
    var men =document.querySelector("nav ul");

    tog.addEventListener('click',function(){
      men.classList.toggle('show');
      
    });
  
}








function showPreparacion(bool){
      var visi=document.querySelectorAll('.visibl span');
     
      for(let ele of visi){
	    ele.onclick=function(){
	    	
	      	 if (bool) {
		          this.parentElement.nextElementSibling.style.display='block';
		           miga.innerHTML= '&#8827;'+this.parentElement.previousElementSibling.previousElementSibling.innerHTML.toLowerCase();
		          bool=false;
		   	}else{
		   		 this.parentElement.nextElementSibling.style.display='none';
	             bool=true;
		   	}

      	 }
      }
 
}

function showImage(){
	var images=document.querySelectorAll('.left img');
	for(let image of images){
		image.onclick=function(){
			var ab=document.createElement('div');
			/*var spa=document.createElement('span');
			spa.innerHTML='x';
			spa.className='spn';*/
			var newImage=document.createElement('img');
            var fig=document.createElement('div');
			newImage.src=this.src;
			newImage.style.width='100%';
			fig.className='styleImage';
			fig.appendChild(newImage);
			
			//fig.appendChild(spa);
			ab.className='styleDiv';
			ab.appendChild(fig);
            document.body.appendChild(ab);
            ab.onclick=function(){
            	ab.remove();
            }
		}
	}
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