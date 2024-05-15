
# exo-gestion-vente-billet
### Gestion de vente de billets de concert : 
 
<p>
Librairie à utiliser : <br>
<ul>
<li>React-router-dom (pour le routing)</li>
<li>Redux toolkit (pour le state management)</li>
<li>React-hook-form (pour la gestion des formulaires) </li>
<li>React-query (pour les call api) </li>
<li>json-server (pour mock le backend) </li>
<li>YUP (pour validation formulaire)</li>
</ul>
</p>

<p>
 Routes :
 <ul>
<li>'/' </li>
<li>'/events/:id' </li>
<li>'/book/:id' (réservation) </li>
<li>... </li>
</ul>
</p>

<p>
Le formulaire demandera plusieurs informations personnelles libre à toi de faire ce que tu veux. <br>
Pour utiliser une fake DB utilise json-server qui est plus simple a mettre en place que Mirage (ou mirage si tu veux) et utiliser react-query pour contacter ta fakeDB. <br>
Utilises redux tk pour stocker et gérer tes states globalement (tu peux le cumuler avec context mais ça n'a pas grand intérêt).
</p>
 
<p>
Utilises YUP pour valider les inputs utilisateurs de ton form react-hook-form.
</p>

<p>
<strong>BONUS : </strong> <br>
<li>Implémenter un filtre d'événements (type) </li>
<li>Ajoutes des transitions CSS (CSS-in-JS ou CSS normal) pour améliorer l'expérience utilisateur</li>
</p>
