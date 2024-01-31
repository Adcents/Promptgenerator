let generate = document.getElementById('buttonGenerate');



// document.getElementById('buttonOnderwerp').contains('action') = function() {
//     alert("button was clicked");
//  }​;​


function buttonClick1() {


    let buttonOnderwerp = document.getElementById('buttonOnderwerp');
    let buttonCTA = document.getElementById('buttonCTA');
    let buttonSnippet = document.getElementById('buttonSnippet');
    let buttonCopy = document.getElementById('buttonCopy');

    if (buttonOnderwerp.classList.contains('active')){
        buttonOnderwerp = 'Onderwerpsregel'
    }
    else {
        buttonOnderwerp = '';
    }

    if (buttonCTA.classList.contains('active')){
        buttonCTA = 'CTA';
    }
    else {
        buttonCTA = '';
    }

    if (buttonSnippet.classList.contains('active')){
        buttonSnippet = 'Snippet';
    }
    else {
        buttonSnippet = '';
    }

    if (buttonCopy.classList.contains('active')){
       buttonCopy = 'Copy';
    }
    else {
        buttonCopy = '';
    }

    // array misschien niet gemakkelijk -> morgen even aanpassen
    let generateArray = [buttonOnderwerp, buttonCTA, buttonSnippet, buttonCopy];

    // console.log('Ontwikkel de volgende content:buttonOnderwerp + buttonCTA + buttonSnippet + buttonCopy');
    console.log(generateArray);


    //test    
    let bedrijfsnaam = document.getElementById('bedrijfsnaam');
    let bedrijfsrol = document.getElementById('bedrijfsrol');



    console.log('bedrijfsnaam: '+bedrijfsnaam.value)
    console.log('bedrijfsrol: '+bedrijfsrol.value)
}