
    
    

    function arquivar(){
       var texto = document.getElementById("texto").value;
       var caixa = document.createElement("span");
       var div = document.createElement("div");      
       document.body.appendChild(div);      
       caixa.id = "assunto";
       caixa.innerHTML = texto;
       div.appendChild(caixa);
       div.classList.add("div-shadow");
     
       var data = document.getElementById("data").value;
       var hora = document.getElementById("hora").value;
       var dataHora = document.createElement("p");
       dataHora.innerHTML = " Despacho no dia: " + data + " às " + hora;
       div.appendChild(dataHora);

       var queimar = document.createElement("button");
       queimar.id = "queimar";
       queimar.classList="btn-add"
       queimar.innerHTML = "Deletar 🔥";
       div.appendChild(queimar);
       queimar.onclick = destruir;

       var modificar = document.createElement("button");
       modificar.id = "Editar";
       modificar.classList="btn-add"
       modificar.innerHTML = "Editar 📝";
       div.appendChild(modificar);
       modificar.onclick = edicao;

       function edicao(){
           var alterar =prompt("Nome atual do Mangá ; "+"("+texto+")"+ " Altere o nome do Mangá na caixa abaixo: ");
           if (alterar==false || alterar==""){
              caixa.innerHTML=texto;
         }else{
                caixa.innerHTML=alterar;
       }
       }

       function destruir(){
       div.remove();
       }
       
       }  

          function opcoesCidades(){
              var estado = document.getElementById("estados")
              var cidade= document.getElementById("nomeCidade")
  
              if (estado.value == 1){
                  var optRecife = document.createElement("option")
                  optRecife.value="rec";
                  optRecife.innerHTML="Recife";
                  cidade.appendChild(optRecife);
              }
              else if(estado.value == 2){
                  var  optJaboatão= document.createElement("option")
                  optJaboatão.value="Jab";
                  optJaboatão.innerHTML="Jaboatão";
                  cidade.appendChild(optJaboatão);
              }
              else if(estado.value == 3){
                     var optCamaragibe= document.createElement("option")
                     optCamaragibe.value="Cam";
                     optCamaragibe.innerHTML="Camaragibe";
                     cidade.appendChild(optCamaragibe);
              }
                 else if(estado.value == 4){
                     var optOlinda = document.createElement("option")
                     optOlinda.value="Oli";
                     optOlinda.innerHTML="Olinda";
                     cidade.appendChild(optOlinda);
                 }
                 else if(estado.value == 5){
                     var optPaulista = document.createElement("option")
                     optPaulista.value="Paul";
                     optPaulista.innerHTML="Paulista";
                     cidade.appendChild(optPaulista);
                 }
                 

              
  
          }
