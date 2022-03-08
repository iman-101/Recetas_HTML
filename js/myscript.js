var i=0;




window.addEventListener('load',function(){
   
       
        ban();
     
       // showMapa();
        irHash();
    document.body.onkeypress=function(e){

      	  if(e.shiftKey && e.key.toUpperCase()=="Q"){
                	location.href="contacte.html";
                   }
      } 
    var tog =document.querySelector("nav .toggle-menu");
    var men =document.querySelector("nav ul");

    tog.addEventListener('click',function(){
      men.classList.toggle('show');
      
    });

     /* var receta=document.querySelectorAll(".map-segon li");
      for(let element of receta){
          element.addEventListener('click',function(e){
           
          
          });
      }*/
     

});



/***********functiones *******************/
function ban(){
	 var  time=setTimeout(function(){
	 	bannerChek.checked=false;
	    banner.style.top='0';
	 },2000);
	
	bannerBotton.addEventListener('click',function(){
		if(bannerChek.checked){
		    
			banner.remove();
			clearInterval(time);
		  }
	    }
      );
}


function videoEnd(){

	video.onended = function(){
		  
	    this.src=videos[i];
	    i=(i+1)%videos.length;
	}
	
}

/*function showMapa(){
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
   
}*/

function irHash(){
	var lista=document.querySelectorAll('.map-segon');
	for(let ele of lista){
		for(let i=0; i<ele.length;i++){
              ele.children[i].addEventListener('click',function(e){
		   	  e.stopPropagation();
		   	  console.log(ele.children[i]);
		   });
		}
		
	}
}

/*function irReceta(){

   var element= document.querySelectorAll('.map-segon li')[4];


   element.scrollIntoView();

}*/
