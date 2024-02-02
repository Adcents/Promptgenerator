let generate = document.getElementById('buttonGenerate');

let publicStringTaak;
let publicStringCial;

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
            console.log(inputWaarden); // Voor demonstratiedoeleinden
        }
    
        // Voeg event listeners toe aan alle inputvelden
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('change', updateWaarde);
        });
    });

function buttonClick1() {


    
    if (!publicStringCial) {
        console.log('cialdini is leeg');
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
    

    // //test    
    // let bedrijfsnaam = document.getElementById('bedrijfsnaam');
    // let bedrijfsrol = document.getElementById('bedrijfsrol');



    // console.log('bedrijfsnaam: '+bedrijfsnaam.value)
    // console.log('bedrijfsrol: '+bedrijfsrol.value)
}