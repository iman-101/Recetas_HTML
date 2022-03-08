window.onload=function(){
	//on key up se convirte a majuscula
	showMapa();
   var tog =document.querySelector("nav .toggle-menu");
    var men =document.querySelector("nav ul");

    tog.addEventListener('click',function(){
      men.classList.toggle('show');
      
    });
   nombre.onkeyup=function(){
   	   if(nombre.value!="" ){
   	     nombre.value=nombre.value.toUpperCase();
      }
   }
    apellido.onkeyup=function(){
   	   if(apellido.value!="" ){
   	     apellido.value=apellido.value.toUpperCase();
      }
   }
   check.onclick=function(){

   	    if(check.checked){
	      
	   	  mail.removeAttribute("disabled");
	   }else{
	   	    mail.setAttribute("disabled","disabled");
	   }
   }

   	form.onsubmit=function(e){
   		e.preventDefault();
   		var lista='';
   		var bool=true;
      
        error.style.color="red";
		    
       if(dni.value==="" ){
       	
       	   lista+="Introduce tu DNI. <br>";
           bool=false;
	   }

	    if(nombre.value==="" || nombre.value===null){
       	
       	   lista+="Introduce tu nombre.<br>";
           bool=false;
	   }
	    if(apellido.value==="" || apellido.value===null){
    
       	   lista+="Introduce tu apellido.<br>";
           bool=false;
	   }
      if(inpass.value==="" || inpass.value===null){
    
           lista+="Introduce una contraseña.";
           bool=false;
     }
	   error.innerHTML=lista;
	   if(bool ){
	   	  error.innerHTML="enviado ....";
	   	   error.style.color="blue";
	   	  this.submit();

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




