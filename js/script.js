let generate = document.getElementById('buttonGenerate');
let copyclipboard = document.getElementById('buttonClip');

let publicStringTaak;
let publicStringCial;
let publicObjectInputs;
let publicRadioFormat = 'woorden';
let publicRadioEmoji = true;

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
        console.log('cialdini is leeg');
        resultCialdini = '';
    }
    else{
        console.log('De gekozen cialdini principes zijn:', publicStringCial)
        resultCialdini = 'De gekozen cialdini principes zijn: ' + publicStringCial;
    }

    // console.log('De ontwerpen content is:', publicStringTaak)
    
    if (!publicStringTaak) {
        alert('taak is leeg');
    }
    else{
        console.log('De te ontwerpen content is:', publicStringTaak)
        resultTaak = 'De te ontwerpen content is: ' +  publicStringTaak;
    }

    // Als de publicInputs niet leeg is dan doe je de string loggen

    // #1 Role -> Bedrijfsnaam
    if(publicObjectInputs.bedrijfsnaam) {
        resultBedrijfsnaam = 'Je schrijft het stuk content voor ' + publicObjectInputs.bedrijfsnaam + '.';

        console.log(resultBedrijfsnaam)
    }

    // #2 Role -> Bedrijfsrol
    if(publicObjectInputs.bedrijfsrol) {
        resultBedrijfsrol = publicObjectInputs.bedrijfsrol;
        
        console.log(publicObjectInputs.bedrijfsrol);
    }

    // #3 Attributes -> formatAantal
    if(publicObjectInputs.formatAantal) {
        resultFormatAantal = 'De tekst mag maximaal ' + publicObjectInputs.formatAantal + ' ' + publicRadioFormat + ' lang zijn';

        console.log(resultFormatAantal);
    }

    // #4 Attributes -> schrijfstijl
    if(publicObjectInputs.schrijfstijl) {
        resultSchrijftstijl = publicObjectInputs.schrijfstijl;

        console.log(resultSchrijftstijl);
    }

    // #5 Attributes -> Varianten aantal
    if(publicObjectInputs.variantAantal) {
        resultVariantAantal = 'Ik wil graag ' + publicObjectInputs.variantAantal + ' verschillende varianten.';
    
        console.log(resultVariantAantal);
    }

    // #6 Context -> Campagnedoel
    if(publicObjectInputs.campagnedoel) {
        resultCampagnedoel = publicObjectInputs.campagnedoel;

        console.log(resultCampagnedoel);
    }

    // #7 Context -> Inhoud bericht
    if(publicObjectInputs.inhoudbericht) {
        resultInhoudbericht = publicObjectInputs.inhoudbericht;

        console.log(resultInhoudbericht);
    }
    
    // #8 Context -> Doelgroep
    if(publicObjectInputs.doelgroep) {
        resultDoelgroep = publicObjectInputs.doelgroep;
    
        console.log(resultDoelgroep);
    }
    
    // #9
    // if(publicObjectInputs.cialdinieExtra) {
    //     resultCialdiniExtra = publicObjectInputs.cialdinieExtra;

    //     console.log(resultCialdiniExtra);
    // }
    
    // #10
    if(publicObjectInputs.seasonal) {
        resultSeasonal = publicObjectInputs.seasonal;

        console.log(resultSeasonal);
    }
    else{
        resultSeasonal = '';
    }
    
    // #11
    if(publicObjectInputs.emojiExtra) {
        if(publicRadioEmoji == true){
        resultEmojiExtra = 'De emojis die gebruikt mogen worden zijn: ' + publicObjectInputs.emojiExtra;

        console.log(resultEmojiExtra);
        }
      
    }  
    else{
            resultEmojiExtra = '';
        }
    
    // #12
    if(publicObjectInputs.onderwerpsregelOS) {
        resultOnderwerpsregelOS = 'Deze onderwerpsregel is al geschreven voor de e-mail: "' + publicObjectInputs.onderwerpsregelOS + '"';
        
        console.log(resultOnderwerpsregelOS);
    }
    else{
        resultOnderwerpsregelOS = '';
    }
    
    // #13
    if(publicObjectInputs.copyOS) {
        resultCopyOS = 'Deze copy is al geschreven voor de e-mail: "' + publicObjectInputs.copyOS + '"';

        console.log(resultCopyOS);
    }
    else{
        resultCopyOS = '';
    }
    
    // #14
    if(publicObjectInputs.SnippetOS) {
        resultSnippetOS = 'Deze snippet is al geschreven voor de e-mail: "' + publicObjectInputs.SnippetOS + '"';

        console.log(resultSnippetOS);
    }
    else{
        resultSnippetOS = '';
    }
    
    // #15
    if(publicObjectInputs.ctaOS) {
        resultCtaOS = 'Deze Call to action is al geschreven voor de e-mail: "' + publicObjectInputs.ctaOS + '"';

        console.log(resultCtaOS);
    }
    else{
        resultCtaOS = '';
    }
    
    const verplichteVelden = document.querySelectorAll('.form-control[required]');

    // Array om bij te houden welke velden leeg zijn
    let legeVelden = [];
    let ingevuldeVelden = [];

    verplichteVelden.forEach(veld => {
        if (!veld.value) {
            // Veld is leeg
            legeVelden.push(veld.id || veld.name); // Gebruik id of name als fallback
            veld.style.borderColor = 'red'; // Optioneel: markeer het veld visueel als leeg/niet ingevuld
        } else {
            // Veld is ingevuld
            ingevuldeVelden.push(veld.id || veld.name);
            veld.style.borderColor = ''; // Reset de stijl
        }
    });

    // Feedback geven over lege en ingevulde velden
    if (legeVelden.length > 0) {
        alert('Deze velden moeten nog ingevuld worden:' + legeVelden.join(', '));
    }

    if (ingevuldeVelden.length > 0) {
        console.log('Correct ingevulde velden:', ingevuldeVelden.join(', '));
    }

    // Voeg logica toe om te bepalen wat er moet gebeuren als er lege velden zijn
    if (legeVelden.length === 0) {
        // Alle velden zijn ingevuld, ga verder met de volgende stap
        console.log('Alle velden zijn correct ingevuld.');
    }
    // #16
    // if(publicObjectInputs.succesdefinitie) {
    //     resultSuccesDefinitie = 'Deze voorbeeldmail is een succesvolle mail, de structuur van deze mail mag gebruikt worden als voorbeeld, inhoud niet: "' + publicObjectInputs.succesdefinitie + '"';

    //     console.log(resultSuccesDefinitie);
    // }

    // COMBINEREN VAN DE LOSSE VARIABELEN

    let completeTask = resultTaak;
    let completeRole = resultBedrijfsnaam + "\n" + resultBedrijfsrol;
    let completeAttributes = resultFormatAantal + "\n" + resultSchrijftstijl + "\n" + resultVariantAantal;

    // Filter de array om alleen niet-lege strings te behouden en voeg ze samen
    let completeContext = [resultCampagnedoel, resultInhoudbericht, resultDoelgroep, resultCialdini, resultSeasonal, resultEmojiExtra]
    .filter(text => text !== '')
    .join("\n");

    let completeExamples = [resultOnderwerpsregelOS, resultCopyOS, resultSnippetOS, resultCtaOS]
    .filter(text => text !== '')
    .join("\n");

    let variabelen = [completeTask, completeRole, completeAttributes, completeContext, completeExamples];
  
    let completeText = variabelen.filter(text => text !== '').join("\n\n")

    // Toewijzen van de samengestelde tekst aan het textarea element
    document.getElementById("results").value = completeText;

     // let completeContext = resultCampagnedoel + "\n" + resultInhoudbericht + "\n" + resultDoelgroep + "\n" + resultCialdini + "\n" + resultSeasonal + "\n" + resultEmojiExtra;
    // let completeExamples = resultOnderwerpsregelOS + "\n" + resultCopyOS + "\n" + resultSnippetOS + "\n" + resultCtaOS;
    // let completeText = completeTask + "\n\n" + completeRole + "\n\n"  + completeAttributes  + "\n\n"  + completeContext + "\n\n"  + completeExamples + "\n\n"; // Voeg \n toe voor nieuwe regels



};

function copyToClipboard() {
    // Verkrijg de tekst van het tekstvak met ID 'results'
    const textToCopy = document.getElementById('results').value;

    // Gebruik de Clipboard API om de tekst te kopiëren
    navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Tekst succesvol gekopieerd naar het klembord');
    }, function(err) {
        console.error('Fout bij het kopiëren van de tekst: ', err);
    });
}