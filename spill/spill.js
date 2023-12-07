const prompt = require('prompt-sync')(); //modul som trengs for å hente input fra terminal
var mySql = require('sync-mysql'); //modul for å koble til databasen

//lager en kobling til databasen
var connection = new mySql({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    database: 'game'
});

var game = connection.query('SELECT * from game');

function printMeny() {
    console.log("------------------------------Telefonkatalog----------------------------");
    console.log("| 1. Start                                                             |");
    console.log("| 2. Våpen                                                             |");
    console.log("| 3. oppnåelser                                                               |")
    console.log("| 4. Avslutt                                                           |")
    console.log("| 5. Karakter informasjon                                              |")
    console.log("------------------------------------------------------------------------")

    var tallFraMeny = prompt('Velg et tall fra menyen: ');
    utfoerMenyvalg(tallFraMeny);
}

printMeny(); // for å starte programmet første gang 

function utfoerMenyvalg(tallFraMeny) {
    if (tallFraMeny == 1) {
        Start();
    } else if (tallFraMeny == 2) {
        Våpen();
    } else if (tallFraMeny == 3) {
        visAlle();
    } else if (tallFraMeny == 4) {
        avslutt();
    } else if (tallFraMeny == 5) {
        karakter();
    } else {
        console.log("Du må velge gyldig tall (1-5)");
        printMeny();
    }
}

function Start() {
   

   
    console.log(nyPerson.id + "" + nyPerson.fornavn + "" + nyPerson.etternavn + " er registrert med telefonnummer " + nyPerson.telefon);
    prompt("Trykk en tast for å gå tilbake til menyen")
    printMeny()
}

function sokPerson() {

    console.log("1. Søk på fornavn")
    console.log("2. Søk på etternavn")
    console.log("3. Søk på telefonnummer")
    console.log("4. Tilbake til hovedmenyen")

    var sokefelt = prompt("Skriv inn ønsket søk 1-3, eller 4 for å gå tilbake:")

    if (sokefelt == "1") {
        navn = prompt("Fornavn:")
        finnperson("fornavn", navn)
    } else if (sokefelt == "2") {
        navn = prompt("Etternavn")
        finnperson("etternavn", navn)
    } else if (sokefelt == "3") {
        tlfnummer = prompt("Telefonnummer:")
        finnperson("telefonnummer", tlfnummer)
    } else if (sokefelt == "4") {
        printMeny()
    } else {
        prompt("Ugyldig valg. Velg et tall mellom 1-4.")
        sokPerson()
    }
}

//typeSok angir om man søker på fornavn, etternavn, eller telefonnumer 
function finnperson(typeSok, sokTekst) {

    var spoerring = "SELECT * from telefonkatalog WHERE " + typeSok + " = '" + sokTekst + "'";
    var resultat = connection.query(spoerring);
    if (resultat.length < 1) {
        console.log("Finner ingen treff på det søket.");
    } else {
        for (var i = 0; i < resultat.length; i++) {
            console.log( resultat[i].id + "" + resultat[i].fornavn + "" + resultat[i].etternavn + " er registrert med telefonnummer " + resultat[i].telefonnummer);
        }
    }
    prompt("Trykk en tast for å gå tilbake til menyen");
    printMeny();
}

function visAlle() {
    var result = connection.query('SELECT * from game');
    for (var i = 0; i < result.length; i++) {
        console.log( result[i].id + " ID " +  result[i].fornavn + " " + result[i].etternavn + " er registrert med telefonnummer " + result[i].telefonnummer);
    }
    prompt("Trykk en tast for å gå tilbake til menyen");
    printMeny();
}

function avslutt() {
    console.log("Bye");
    connection.dispose(); //lukker databasetilkobling
    process.exit(); //avslutter programmet
}

function karakter() {
    var karakter = connection.query('SELECT * game');
    for (var i = 0; i < game.length; i++) {
        console.log( game[i].karakter_nummer + "  " + karakter[i].Navn + " " + [i] + " " + [i]);
    }
    
    var inputNavn = prompt("Skriv inn et navn: ");

    var spoerring = "INSERT INTO game(Navn) VALUES ('" + inputNavn + "','" +  + "','" +  + "');"
    connection.query(spoerring);

    var nyPerson = {id: inputID, fornavn: inputFornavn,etternavn: inputEtternavn, telefonnummer: inputTelefonnummer };
    telefonkatalog.push(nyPerson);


    var karakterID = prompt(" Velg en karakter du øsnker å fjerne fra spillet: ");
    var svar = prompt("Er du sikker at du øsnker å slette denne personen? trykk 1 for ja og 2 for nei.")
    if (svar == 1) {
        var bye = connection.query("delete from game WHERE id =" + karakterID); 
        printMeny()
    } else if (svar == 2) {
        prompt("Trykk en tast for å gå tilbake til meny")
        printMeny()
    }
}
