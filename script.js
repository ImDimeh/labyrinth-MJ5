
// récupérer la div "character" par son id
const character = document.getElementById('character');

// définir la position de départ
let positionX = 0;
let positionY = 0;

// ajouter un écouteur d'événements pour détecter les touches fléchées
document.addEventListener('keydown', (event) => {
    // déplacer la div selon la touche appuyée
    switch (event.key) {
        case 'ArrowLeft':
            positionX -= 80;
            break;
        case 'ArrowUp':
            positionY -= 80;
            break;
        case 'ArrowRight':
            positionX += 80;
            break;
        case 'ArrowDown':
            positionY += 80;
            break;
        default:
            break;
    }
    // mettre à jour la position de la div
    character.style.top = positionY + 'px';
    character.style.left = positionX + 'px';
});