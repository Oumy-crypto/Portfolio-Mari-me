// --- 1. GESTION DU MENU BURGER (MOBILE) ---
const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        // Ajoute ou enlève la classe 'nav-active' pour afficher le menu
        nav.classList.toggle('nav-active');
        
        // Optionnel : Animation du burger (les barres qui bougent)
        burger.classList.toggle('toggle');
    });
}

// --- 2. GESTION DE LA GALERIE PHOTO (LIGHTBOX) ---
// On crée la boîte sombre qui va contenir la grande image
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// On sélectionne toutes les images de tes réalisations
// (On suppose qu'elles sont dans une balise avec la classe portfolio-container)
const images = document.querySelectorAll('.portfolio-container img');

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active'); // Affiche la lightbox
        
        // On crée l'image en grand
        const img = document.createElement('img');
        img.src = image.src;
        
        // On vide la lightbox au cas où il y a déjà une image, puis on met la nouvelle
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

// Pour fermer la lightbox quand on clique à côté de l'image
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return; // Si on clique sur l'image, on ne ferme pas
    lightbox.classList.remove('active');
});

const boutons = document.querySelectorAll('.btn-filtre');
const sections = document.querySelectorAll('.categorie-section');

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const filtre = bouton.getAttribute('data-filter');
        console.log("Filtre cliqué :", filtre); // Ouvre la console F12 pour voir ça !

        // Mise à jour visuelle des boutons
        boutons.forEach(b => b.classList.remove('active'));
        bouton.classList.add('active');

        // Filtrage des sections
        sections.forEach(section => {
            const categorie = section.getAttribute('data-category');
            
            if (filtre === 'tous') {
                section.style.display = 'block';
            } else if (categorie === filtre) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});