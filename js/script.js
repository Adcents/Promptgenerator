let generate = document.getElementById('buttonGenerate');

let publicStringTaak;
let publicStringCial;
let publicObjectInputs;
let publicRadioFormat;
let publicRadioEmoji;

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

    document.addEventListener('DOMContentLoaded', () => {
        const radioButtons = document.querySelectorAll('input[name="btnradio"]');
        
        radioButtons.forEach(radio => {
          radio.addEventListener('change', function() {
            if(this.checked) {
              if(this.id == 'btnradio1'){
                publicRadioFormat = 'woorden';
              }
              if(this.id == 'btnradio2'){
                publicRadioFormat = 'letters';
              }
            // Gebruik onderstaand console log om te testen.
            // console.log(publicRadioFormat);
            }
          });
        });
      });

      
    document.addEventListener('DOMContentLoaded', () => {
        const radioButtons = document.querySelectorAll('input[name="btnradioEmoji"]');
        
        radioButtons.forEach(radio => {
          radio.addEventListener('change', function() {
            if(this.checked) {
              if(this.id == 'emojiJA'){
                publicRadioEmoji = true;
              }
              if(this.id == 'emojiNEE'){
                publicRadioEmoji = false;
              }
            // Gebruik onderstaand console log om te testen.
            console.log(publicRadioEmoji);
            }
          });
        });
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
        let resultBedrijfsnaam = 'Je schrijft het stuk content voor ' + publicObjectInputs.bedrijfsnaam;

        console.log(resultBedrijfsnaam)
    }

    // #2
    if(publicObjectInputs.bedrijfsrol) {
        let resultBedrijfsrol = publicObjectInputs.bedrijfsrol;
        
        console.log(publicObjectInputs.bedrijfsrol);
    }

    // #3
    if(publicObjectInputs.formatAantal) {
        let resultFormatAantal = 'De tekst mag maximaal ' + publicObjectInputs.formatAantal + ' ' + publicRadioFormat + ' lang zijn';

        console.log(resultFormatAantal);
    }

    // #4
    if(publicObjectInputs.schrijfstijl) {
        let resultSchrijftstijl = publicObjectInputs.schrijfstijl;

        console.log(resultSchrijftstijl);
    }

    // #5
    if(publicObjectInputs.variantAantal) {
        let resultVariantAantal = 'Ik wil graag ' + publicObjectInputs.variantAantal + ' verschillende varianten.';
    
        console.log(resultVariantAantal);
    }

    // #6
    if(publicObjectInputs.campagnedoel) {
        let resultCampagnedoel = publicObjectInputs.campagnedoel;

        console.log(resultCampagnedoel);
    }

    // #7
    if(publicObjectInputs.inhoudbericht) {
        let resultInhoudbericht = publicObjectInputs.inhoudbericht;

        console.log(resultInhoudbericht);
    }
    
    // #8
    if(publicObjectInputs.doelgroep) {
        let resultDoelgroep = publicObjectInputs.doelgroep;
    
        console.log(resultDoelgroep);
    }
    
    // #9
    if(publicObjectInputs.cialdinieExtra) {
        let resultCialdiniExtra = publicObjectInputs.cialdinieExtra;

        console.log(resultCialdiniExtra);
    }
    
    // #10
    if(publicObjectInputs.seasonal) {
        let resultSeasonal = publicObjectInputs.seasonal;

        console.log(resultSeasonal);
    }
    
    // #11
    if(publicObjectInputs.emojiExtra) {
        if(publicRadioEmoji == true){
        let resultEmojiExtra = 'De emojis die gebruikt mogen worden zijn: ' + publicObjectInputs.emojiExtra;

        console.log(resultEmojiExtra);
        }
    }
    
    // #12
    if(publicObjectInputs.onderwerpsregelOS) {
        let resultOnderwerpsregelOS = 'Deze onderwerpsregel is al geschreven voor de e-mail: "' + publicObjectInputs.onderwerpsregelOS + '"';
        
        console.log(resultOnderwerpsregelOS);
    }
    
    // #13
    if(publicObjectInputs.copyOS) {
        let resultCopyOS = 'Deze copy is al geschreven voor de e-mail: "' + publicObjectInputs.copyOS + '"';

        console.log(resultCopyOS);
    }
    
    // #14
    if(publicObjectInputs.SnippetOS) {
        let resultSnippetOS = 'Deze snippet is al geschreven voor de e-mail: "' + publicObjectInputs.SnippetOS + '"';

        console.log(resultSnippetOS);
    }
    
    // #15
    if(publicObjectInputs.ctaOS) {
        let resultCtaOS = 'Deze Call to action is al geschreven voor de e-mail: "' + publicObjectInputs.ctaOS + '"';

        console.log(resultCtaOS);
    }
    
    // #16
    if(publicObjectInputs.succesdefinitie) {
        let resultSuccesDefinitie = 'Deze voorbeeldmail is een succesvolle mail, de structuur van deze mail mag gebruikt worden als voorbeeld, inhoud niet: "' + publicObjectInputs.succesdefinitie + '"';

        console.log(resultCtaOS);
    }
    

    

    // //test    
    // let bedrijfsnaam = document.getElementById('bedrijfsnaam');
    // let bedrijfsrol = document.getElementById('bedrijfsrol');



    // console.log('bedrijfsnaam: '+bedrijfsnaam.value)
    // console.log('bedrijfsrol: '+bedrijfsrol.value)
}