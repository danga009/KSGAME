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