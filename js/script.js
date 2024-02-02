let generate = document.getElementById('buttonGenerate');

let publicStringTaak;
let publicStringCial;
let publicObjectInputs;

    document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll("#btnTaak");
        const selectedValues = [];
      
        buttons.forEach(button => {
          button.addEventListener("click", function() {
            if (button.classList.contains("active")) {
              selectedValues.push(button.textContent.trim());
            } else {
              const index = selectedValues.indexOf(button.textContent.trim());
              if (index !== -1) {
                selectedValues.splice(index, 1);
              }
            }
      
            updateSelectedValues();
          });
        });
      
        function updateSelectedValues() {
          const selectedStringTaak = selectedValues.join(" & ");

            publicStringTaak = selectedStringTaak;

        //   console.log(selectedStringTaak); // Hier kun je de geselecteerde waarden gebruiken zoals je wilt, voor nu een console log.
        }
      });

      document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll("#cialdiniknop");
        const selectedValues = [];
      
        buttons.forEach(button => {
          button.addEventListener("click", function() {
            if (button.classList.contains("active")) {
              selectedValues.push(button.textContent.trim());
            } else {
              const index = selectedValues.indexOf(button.textContent.trim());
              if (index !== -1) {
                selectedValues.splice(index, 1);
              }
            }
      
            updateSelectedValues();
          });
        });
      
        function updateSelectedValues() {
          const selectedStringCial = selectedValues.join(" & ");
          
          publicStringCial = selectedStringCial;
          
        //   console.log(selectedStringCial); // Hier kun je de geselecteerde waarden gebruiken zoals je wilt, voor nu een console log.
        }
      });

      document.addEventListener("DOMContentLoaded", function() {
        // Object om de waarden op te slaan
        let inputWaarden = {};
    
        // Functie om de waarde van een inputveld bij te werken
        function updateWaarde(event) {
            const id = event.target.id;
            const waarde = event.target.value;
            inputWaarden[id] = waarde;
            // console.log(inputWaarden); // Voor demonstratiedoeleinden
        }
    
        // Voeg event listeners toe aan alle inputvelden
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('change', updateWaarde);
        });

        publicObjectInputs = inputWaarden;
    });

function buttonClick1() {


    
    if (!publicStringCial) {
        // console.log('cialdini is leeg');
    }
    else{
        console.log('De gekozen cialdini principes zijn:', publicStringCial)
    }

    // console.log('De ontwerpen content is:', publicStringTaak)
    
    if (!publicStringTaak) {
        console.log('taak is leeg');
    }
    else{
        console.log('De ontwerpen content is:', publicStringTaak)
    }

    // Als de publicInputs niet leeg is dan doe je de string loggen
    // #1

    if(publicObjectInputs.bedrijfsnaam) {
        console.log('Je schrijft het stuk content voor', publicObjectInputs.bedrijfsnaam);
    }

    // #2
    if(publicObjectInputs.bedrijfsrol) {
        console.log(publicObjectInputs.bedrijfsrol);
    }

    // #3
    if(publicObjectInputs.formatAantal) {
        console.log(publicObjectInputs.formatAantal);
    }

    // #4
    if(publicObjectInputs.schrijfstijl) {
        console.log(publicObjectInputs.schrijfstijl);
    }

    // #5
    if(publicObjectInputs.variantAantal) {
        console.log(publicObjectInputs.variantAantal);
    }

    // #6
    if(publicObjectInputs.campagnedoel) {
        console.log(publicObjectInputs.campagnedoel);
    }

    // #7
    if(publicObjectInputs.inhoudbericht) {
        console.log(publicObjectInputs.inhoudbericht);
    }
    
    // #8
    if(publicObjectInputs.doelgroep) {
        console.log(publicObjectInputs.doelgroep);
    }
    
    // #9
    if(publicObjectInputs.cialdinieExtra) {
        console.log(publicObjectInputs.cialdinieExtra);
    }
    
    // #10
    if(publicObjectInputs.seasonal) {
        console.log(publicObjectInputs.seasonal);
    }
    
    // #11
    if(publicObjectInputs.emojiExtra) {
        console.log(publicObjectInputs.emojiExtra);
    }
    
    // #12
    if(publicObjectInputs.onderwerpsregelOS) {
        console.log(publicObjectInputs.onderwerpsregelOS);
    }
    
    // #13
    if(publicObjectInputs.copyOS) {
        console.log(publicObjectInputs.copyOS);
    }
    
    // #14
    if(publicObjectInputs.SnippetOS) {
        console.log(publicObjectInputs.SnippetOS);
    }
    
    // #15
    if(publicObjectInputs.ctaOS) {
        console.log(publicObjectInputs.ctaOS);
    }
    
    // #16
    if(publicObjectInputs.succesdefinitie) {
        console.log(publicObjectInputs.succesdefinitie);
    }
    

    

    // //test    
    // let bedrijfsnaam = document.getElementById('bedrijfsnaam');
    // let bedrijfsrol = document.getElementById('bedrijfsrol');



    // console.log('bedrijfsnaam: '+bedrijfsnaam.value)
    // console.log('bedrijfsrol: '+bedrijfsrol.value)
}