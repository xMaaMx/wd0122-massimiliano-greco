let budget = 500;
function iniziaShopping() {

    let compere = 0;
    let prezzi = Math.floor(Math.random() * 50);
    while (budget >= prezzi) {

        
        if (prezzi <= budget) {
            compere += 1;
            budget -= prezzi;
            
            document.getElementById('mio_budget').innerHTML += '<p> Costo acquisto: € ' + prezzi + '<br>Soldi rimasti: € ' + budget + '<p>' + '<br>';
        }
        if (budget < 100 && budget + prezzi >=100 ) {
            document.getElementById('mio_budget').innerHTML += 'hai meno di 100€. Non comprare niente';
            
        }
        prezzi = Math.floor(Math.random() * 50);
    }
    document.getElementById('mio_budget').innerHTML += '<p>Totale scontrino: ' + compere + ' oggetti </p>';
    alert(prezzi)
}
function continuaSpesa() {

    let compere = 0;

    while (budget > 20) {

        let prezzi = Math.floor(Math.random() * 20);

        if (prezzi <= budget) {
            compere += 1;
            budget -= prezzi;

        }
        document.getElementById('miobudget').innerHTML += '<p> Spesa parziale: € ' + prezzi + '<br>Soldi rimasti: € ' + budget + '<p>' + '<br>';
        document.getElementById('miobudget').innerHTML += '<p>Totale scontrino: ' + compere + ' oggetti </p>' + '<br>';
        if (budget < 20) {
            document.getElementById('messaggio1').innerHTML = 'BUONA PASSEGGIATA :)';
            break;
        }
    }
}
    