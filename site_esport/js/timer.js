let targetDate = new Date("July 14, 2028 00:00:00").getTime();

// Fonction pour afficher le temps sous format d'heures:minutes:secondes
function formatTime(ms) {
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((ms % (1000 * 60)) / 1000);
    
    return `${days}d ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Fonction qui met à jour le minuteur toutes les secondes
function updateTimer() {
    let now = new Date().getTime();
    let timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        document.getElementById('timer-display').textContent = formatTime(timeRemaining);
    } else {
        clearInterval(timerInterval);  // Arrête le minuteur quand la date cible est atteinte
        document.getElementById('timer-display').textContent = "Ouverture des JO 2028 !"; // Message de fin
    }
}

// Initialisation du compte à rebours
let timerInterval = setInterval(updateTimer, 1000);  // Mettre à jour chaque seconde