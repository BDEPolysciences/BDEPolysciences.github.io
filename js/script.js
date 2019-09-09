function compte_a_rebours(){
    var compte_a_rebours = document.getElementById("compte_a_rebours");

    var date_actuelle = new Date();
    var date_evenement = new Date("Sep 21 14:00:00 2019");
    var total_secondes = (date_evenement - date_actuelle) / 1000;
    
    if (total_secondes > 0){
        var heures = Math.floor(total_secondes / (60*60) );
        total_secondes = total_secondes - heures * 60 * 60;
        var minutes = Math.floor(total_secondes / 60 );
        total_secondes = total_secondes - minutes * 60;
        var secondes = Math.floor(total_secondes);

        if (heures < 10) {
            var heures = "0" + heures;
        }
        if (minutes < 10) {
            var minutes = "0" + minutes;
        }
        if (secondes < 10) {
            var secondes = "0" + secondes;
        }
        
        compte_a_rebours.innerHTML = heures + ":" + minutes + ":" + secondes;
    }
    else{
        compte_a_rebours.innerHTML = '00:00:00';
    }

    var actualisation = setTimeout("compte_a_rebours();", 1000);
}

window.addEventListener("load", compte_a_rebours);