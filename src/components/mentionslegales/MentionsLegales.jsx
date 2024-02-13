import './mentionslegales.css';

const MentionsLegales = (props) => {
    return(
        <div className="mentionsLegaleContainer">
            <h1 className='h1MentionsLegales'>mentions légales</h1>
            <p className="texteMentionsLegales">
Dénomination sociale : dvpariege <br />
Siège social :  <br />
Capital social :  € <br />
Numéro siret :  <br />
Numéro RCS :  <br />
Le Site est hébergé sur les serveurs de Gandi <br />
Numéro de téléphone : 06 31 55 06 82
<br />
<br />
Liens hypertextes vers des sites tiers <br />
Le Site propose des liens hypertextes pointant vers des sites Internet édités par des tiers. La mise en place de ces liens n'implique pas l'approbation de l'éditeur du contenu desdits sites. L'Editeur ne peut contrôler en permanence le contenu desdits sites, et ne peut donc garantir : l'exactitude, la fiabilité, la pertinence, la mise à jour ou l'exhaustivité de leur contenu ; leur accès et leur bon fonctionnement technique. En conséquence, la responsabilité de l'Editeur ne pourra être engagée en cas de litige entre un site référencé sur le Site et un Utilisateur. Seule la responsabilité des éditeurs des sites référencés sur le Site peut être engagée.
<br />
<br />
Les images utilisées sur ce site Web sont une combinaison de photographies originales et d'images provenant de la bibliothèque d'images de Canva et pixabay.
merci à {props.artistes}  
<br />
<br />
Protection de la vie privée et des données personnelles <br />
Le Site collecte les informations personnelles fournies par les Utilisateurs lors de leur visite sur le Site. Cette collecte permet : L'établissement de statistiques générales de fréquentation du Site ; L'envoi aux adresses email fournies par les Utilisateurs de réponses, d'informations diverses ou d'annonces de la part de l'Editeur. La collecte et le traitement des informations personnelles sur Internet doivent respecter les droits fondamentaux des personnes. En conséquence, l'Editeur s'engage dans une politique de traitement conforme à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique. Tout utilisateur du Site dispose d'un droit d'accès, de modification, de rectification et de suppression des données personnelles le concernant. Il peut exercer ces droits en contactant l'Editeur aux coordonnées indiquées en haut de page. Pour faciliter l'exercice de ces droits, les Utilisateurs du Site peuvent se désinscrire en cliquant sur les liens hypertextes de désinscription présents sur les emails envoyés. Les ordinateurs se connectant aux serveurs du Site reçoivent sur leur disque dur un ou plusieurs fichiers au format texte très léger communément appelés « Cookies ». Les cookies enregistrent des informations relatives à la navigation sur le Site effectuée à partir de l'ordinateur sur lequel le « cookie » est stocké (les pages consultées, la date et l'heure de la consultation, etc.). Ils permettent d'identifier les visites successives effectuées à partir d'un même ordinateur. Les personnes connectées au Site sont libres de s'opposer à l'enregistrement de « cookies ». Pour ce faire, ils peuvent utiliser les fonctionnalités correspondantes de leur navigateur. L'Editeur attire toutefois l'attention des Utilisateurs sur le fait que, dans un tel cas, l'accès à certains services du Site peut s'avérer altéré, voire impossible.
<br />
<br />
Sécurité des échanges <br />
L'Editeur s'engage à prendre toutes les mesures juridiques et techniques pour sécuriser les échanges. A ce titre, l'Editeur s'engage à une obligation de moyens pour bloquer tout détournement de données, et à se conformer à la réglementation applicable. Néanmoins, les Utilisateurs du Site sont conscients des particularités techniques du réseau Internet et des risques y afférents. En conséquence, l'Editeur ne peut garantir à ses Utilisateurs que les données échangées via les services proposés par le Site ne seront pas collectées frauduleusement par des tiers.
<br />
<br />
Droits de propriété intellectuelle <br />
L'Editeur est titulaire de droits sur certaines données protégées par le Code de la Propriété Intellectuelle. C'est notamment le cas de sa(ses) marque(s), sa charte graphique, sa base de données. En conséquence, leur utilisation hors ligne ou en ligne, à titre gratuit ou onéreux, de tout ou partie de ces données sans l'accord exprès de l'Editeur est interdite.

<br />
<br />
Disponibilité des services <br />
L'Editeur a une obligation de moyens en matière d'accessibilité du service et met en place les structures nécessaires pour rendre le Site accessible 7j/7 et 24h/24. Néanmoins, l'Editeur peut suspendre l'accès sans préavis, notamment pour des raisons de maintenance et de mises à jour. L'Editeur n'est en aucun cas responsable des dommages qui pourraient en résulter pour l'Utilisateur ou tout tiers. L'Editeur peut à tout moment supprimer tout ou partie de ses Services ou modifier leur contenu, notamment pour des raisons techniques, sans préavis. L'Editeur se réserve le droit de refuser, unilatéralement et sans notification préalable, à tout Utilisateur l'accès à tout ou partie du Site. Une telle décision pourrait notamment être prise en cas de non-respect des termes de ce texte par un Utilisateur.
</p>
        </div>
    )
}
export default MentionsLegales