var body = document.getElementsByTagName("body");
console.log(body);
var txt = document.getElementById("texto")
var txt1 = document.getElementById("texto1")
var container = document.getElementById("container");
var img = document.getElementById("imagem");


function trocar(){
   var res = document.getElementById("escolha");
   console.log(res)
   var valor = String(escolha.value);
   console.log(`Você escolheu ${valor}`);
  
   if( valor == "javier"){ document.body.style.backgroundColor = " #009673"; container.style.backgroundColor = "#52D290";
    container.classList.add("javier"); container.classList.add("javier1"); txt.style.color = "#005357"; txt.style.backgroundColor="rgba(255, 255, 255, 0)"
txt1.style.color = "#005357 "; res.style.backgroundColor= "#008B51";  container.classList.remove("cypher"); container.classList.remove("mihira")
container.classList.remove("javier");container.classList.remove("xiao"); img.src = "javier.jpg";container.classList.remove("kaya");}

else{ if(valor == "cypher"){document.body.style.backgroundColor = "#37A39E"; 
container.style.backgroundColor = "#44CCCF";
    container.classList.add("cypher"); container.classList.add("cphback"); txt.style.color = "#0281C6"; txt.style.backgroundColor="transparent"
txt1.style.color = "#0281C6"; res.style.backgroundColor= "#206D7A"; container.classList.remove("javier");container.classList.remove("mihira");container.classList.remove("kaya");
container.classList.remove("javier");container.classList.remove("xiao"); container.classList.remove("javier1"); img.src = "cypher.jpg"; }

else{ if(valor == "mihira"){document.body.style.backgroundColor = "#B0D9EB"; 
container.style.backgroundColor = "#44CCCF";
    container.classList.add("mihira"); txt.style.color = "white"; txt.style.backgroundColor="transparent"
txt1.style.color = "white";  container.classList.remove("javier");container.classList.remove("cypher");container.classList.remove("kaya");
container.classList.remove("javier");container.classList.remove("xiao");container.classList.remove("javier1"); img.src = "mihira.jpg";res.style.backgroundColor= "#B1B9C4";}

else{if(valor == "xiao"){document.body.style.backgroundColor = "#6B5551"; 
container.style.backgroundColor = "";
    container.classList.add("xiao"); txt.style.color = "white"; txt.style.backgroundColor="transparent"
txt1.style.color = "white"; res.style.backgroundColor= "white"; container.classList.remove("javier");container.classList.remove("cypher");
 container.classList.remove("mihira");container.classList.remove("javier1");res.style.backgroundColor= "#AD5242";
img.src = "xiao.jpg"; container.classList.remove("kaya");}

else{if(valor == "kaya"){
    document.body.style.backgroundColor = "#E63600"; 
    container.style.backgroundColor = "#EBE384";
        container.classList.add("kaya"); txt.style.color = "#291C00"; txt.style.backgroundColor="transparent"
    txt1.style.color = "#291C00"; res.style.backgroundColor= "#EBE384"; container.classList.remove("javier");container.classList.remove("cypher");
     container.classList.remove("mihira");container.classList.remove("javier1");container.classList.remove("xiao");
    img.src = "kaya1.jpg"; 
}else{
    window.location.reload(true);
}}}}
} 






}