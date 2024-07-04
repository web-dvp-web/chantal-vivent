import './mentionslegales.css';

const MentionsLegales = (props) => {
    return(
        <div className="mentionsLegaleContainer">
            <h1 className='h1MentionsLegales'>Mentions Légales et CGV</h1>
            <p className="texteMentionsLegales">

Le Site est hébergé sur les serveurs de Gandi
Numéro de téléphone : 06 31 55 06 82
Liens hypertextes vers des sites tiers
Le Site propose des liens hypertextes pointant vers des sites Internet édités par des tiers. La mise en place de ces liens n'implique pas
l'approbation de l'éditeur du contenu desdits sites. L'Editeur ne peut contrôler en permanence le contenu desdits sites, 
et ne peut donc garantir : l'exactitude, la fiabilité, la pertinence, la mise à jour ou l'exhaustivité de leur contenu ;
leur accès et leur bon fonctionnement technique. En conséquence, la responsabilité de l'Editeur ne pourra être engagée en cas de litige
entre un site référencé sur le Site et un Utilisateur. 
Seule la responsabilité des éditeurs des sites référencés sur le Site peut être engagée.
<br />
<br />
Les images utilisées sur ce site Web sont une combinaison de photographies originales et d'images provenant 
de la bibliothèque d'images de Canva et pixabay.
merci à {props.artistes}  
<br />

</p>
        </div>
    )
}
export default MentionsLegales