// Funzione per controllare la presenza del selettore
async function checkSelector() {
    
    // Selezioniamo l'elemento tramite il selettore
    let element =  document.getElementsByClassName("paywal-plan")[0];
    
    // Se l'elemento è presente
    if (element) { 
      alert("Reset Done =)");
      localStorage.removeItem("user-settings");  
      // Ricarichiamo la pagina corrente
      location.reload();
    }
  }
  
  // Eseguiamo la funzione ogni secondo
 setInterval(checkSelector, 5000);