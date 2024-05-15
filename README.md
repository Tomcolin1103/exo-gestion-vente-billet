# exo-gestion-vente-billet
Gestion de vente de billets de concert : 
 
Librairie à utiliser : 
React-router-dom (pour le routing)
Redux toolkit (pour le state management)
React-hook-form (pour la gestion des formulaires)
React-query (pour les call api)
json-server (pour mock le backend)
YUP (pour validation formulaire)
Routes : 
'/'
'/events/:id'
'/book/:id' (réservation)
...
Le formulaire demandera plusieurs informations personnelles libre à toi de faire ce que tu veux.
Pour utiliser une fake DB utilise json-server qui est plus simple a mettre en place que Mirage (ou mirage si tu veux) et utiliser react-query pour contacter ta fakeDB.
Utilises redux tk pour stocker et gérer tes states globalement (tu peux le cumuler avec context mais ça n'a pas grand intérêt).
 
Utilises YUP pour valider les inputs utilisateurs de ton form react-hook-form.
 
BONUS : 
Implémenter un filtre d'événements (type)
Ajoutes des transitions CSS (CSS-in-JS ou CSS normal) pour améliorer l'expérience utilisateur
