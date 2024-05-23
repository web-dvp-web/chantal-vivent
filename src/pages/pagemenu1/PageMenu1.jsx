import "./pagemenu1.css";
import imgMontage from "../../images/a1.jpg"
import CardsServices from "../../components/cardsservices/CardsServices";
import CardsCommentaire from "../../components/cardscommentaire/CardsCommentaire";
import separationcommentaire1 from "../../images/a3.jpg";
import service1 from "../../images/a1.jpg";
import service2 from "../../images/a2.jpg";
import service3 from "../../images/a3.jpg";
/*animation du texte*/
import { Fade } from "react-awesome-reveal";

const PageMenu1 = () => {
  return (
    <div className="pageMenu1Container">
      <div className="h1VideoContainer" aria-label="fleurs rose avec des branches en avant avec un fond flou de la foret " >
        <div className="h1Container">
          <h1 className="h1CV">Chantal Vivent</h1>
          <h1 className="h1Presentation">
          Chantal Vivent est une médium et énergéticienne passionnée, qui accompagne les personnes en quête d'un mieux-être profond et durable. Forte de ses capacités et de son expérience, elle offre des consultations personnalisées pour vous aider
          </h1>
        </div>
        <img className="imgIntroduction" alt="montage-images" src={imgMontage} />
      </div>
      <Fade direction="right">
        <h2 className="h2Services">Mes prestations </h2>
      </Fade>
      <div className="allCards">
        <CardsServices
          titre="Séance voyance "
          img={service1}
          services="Mes capacités de médium voyante
          vous apporteront une guidance
          spirituelle, favorisant votre
          développement personnel.Durant le soin, je vous accompagne
          dans votre totalité, corps,
          esprit, émotionnel.Les pathologies physiques
          ou psychiques peuvent
          être liées à un déséquilibre
          des corps énergétique
          ou à des interférences énergétiques."
          services2="Par la connexion aux mondes subtils,
          je vous guide sur différents sujets.
          Je réponds à vos questions
          (travail, amour, santé, évolution
          de vie, etc…). Vous avez une lecture
          claire pour vos choix à faire,
          éclairer votre chemin de vie
          afin de mieux gérer les situations
          que vous traversez."
          services3="Par la guidance, vous serez alignez
          sur vos aspirations profondes
          en étant vous-même pour profiter
          pleinement de la vie."
          services6="TARIF Consultation : 50€ Présentiel ou visio ou téléphone"
          
        />
        <CardsServices
          titre="Séance soin énergétique
          « nettoyage »"
          img={service2}
          services="Durant le soin, je vous accompagne
          dans votre totalité, corps,
          esprit, émotionnel."
          services2="Nettoyer les blessures, les charges
          émotionnelles négatives,
          libérer les schémas bloquants, les peurs,
          les entités et énergies négatives,
          vous permettra d’avoir une vie
          plus épanouie."
          services3="Par l’harmonisation des énergies,
          ce soin vous procure un bien-être général
          et une sensation de paix intérieure.
          C’est la clé d’un soin,
          d’un accompagnement réussi
          pour vous aider au mieux."
          services4="De par mes aptitudes de médium,
          je vous fais également une lecture,
          vous donnant des clès de guérison.
          (si vous le souhaitez)."
          services6="TARIF Soin : 50€"
        />
        <CardsServices
          titre="Soin
          de magnétisme"
          img={service3}
          services="Les pathologies physiques
          ou psychiques peuvent
          être liées à un déséquilibre
          des corps énergétique
          ou à des interférences énergétiques."
          services2="Problèmes physiques
          (mal de dos, torticolis, arthrose,
          maladie chronique, troubles
          respiratoires, sommeil etc…)"
          services3="Problèmes psychiques
          (dépression, stress, angoisse,
          timidité, manque de confiance…)"
          titreg="ACCOMPAGNEMENT INDIVIDUEL"
          services4="Bilan énergétique
          Contrôle des chakras
          Contrôle de l’aura
          Contrôle des organes
          et recherche de faiblesses
          Harmonisation et rééquilibrage
          des centres d’énergie vitale"
          services6="TARIF 1ère séance : 50€ SUIVI : 20€"
        />
      </div>
      <div className="h2BandeauConnaissance">
      </div>
        <p className="textInfo">
      <div className="h2ContainerConnaissance">
        <h2 className="h2CConnaissance">QUELQUES MOTS POUR FAIRE CONNAISSANCE ……………..</h2>
      </div>
  J’ai grandi au sein de la campagne gersoise dans une ferme. La petite fille que j’étais avait pour
  merveilleux amis et confidents les animaux, Dame nature, les mondes subtils et les êtres de lumière
  qui veillaient sur moi. En tant qu’être hypersensible, j’avais ce besoin de solitude pour me ressourcer
  et j’en ai compris la signification bien plus tard. Mon chemin a été sinueux pour accepter,
  comprendre et accueillir quel était mon rôle d’âme terrestre ici dans cette vie.
  <br/> <br/>
  Tous ces mondes vibrant d’énergie m’ont accompagnée. L’évolution de mes capacités psychiques et
  spirituelles s’est faite naturellement en grandissant et au fils des enseignements de la vie. Mes
  canaux étaient ouverts. Je sentais, percevais, ressentais, voyais et venais en aide dans la
  bienveillance à toutes formes de vie. Durant l’adolescence, j’ai dévoré tous les livres du rayon
  ésotérique de la bibliothèque pour apprendre, comprendre quel était mon identité, mon rôle, et me
  rassurer sur ma « normalité » dans cette société.
  <br/> <br/>
  Très vite, j’ai compris qu’il fallait se taire, mettre des masques pour se protéger, ne pas être traiter de
  « folle ». C’était difficile car cette gamine percevait et pouvait aider, tout simplement ; j’assistais en
  silence impuissante avec cette tristesse dans le cœur.
  <br/> <br/>
  Adulte, tout naturellement, je suis venue en aide à nos anciens, qui sont la mémoire de notre
  humanité. J’ai exercé de longues années en tant que cadre médico-social pour senior, et me suis
  engagée dans diverses actions de bénévolats auprès des plus vulnérables. Toutes ces expériences
  m’ont enrichies, m’ont fait questionner sur ma place, mon rôle dans cette société et dans cette vie
  pour être en accord avec mon moi profond .
   <br/> <br/>
  Durant cette période, je me suis engagée dans un travail de développement personnel. Pour exercer
  sereinement en toute légitimité, en tant que Médium et Énergéticienne, j’ai travaillé sur mes
  blessures, mes croyances limitantes, et autres freins. Avec joie, l’être spirituel que je suis, c’est
  déployé et s’est révélé.
  <br/> <br/>
  Parce-que nous sommes tous en chemin sur notre propre voie, j’ai suivi et continue à me former
  auprès de différents praticiens connus pour leurs expertises (notamment les enseignements de Serge
  Boutboul et Mathieu Boutboul). D’autres sources d’inspirations viennent de mes guides et mentors.
  <br/> <br/>
  Je souhaite de tout cœur vous accompagner pour vous permettre de vous révéler pleinement.
  Découvrez ce que votre âme veut vous dire maintenant. Permettez-vous ce chemin en écoutant la
  voix de votre cœur.</p>
     <div className="h2CommentairesContainer">
      <h2 className="h2Commentaire">Vos commentaires</h2>
     </div>
      <div className="allCardsCommentaireContainer">
        <Fade cascade damping={0.4}>
          <CardsCommentaire
            nom="Marie, retraitée :"
            img="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg"
            commentaire="
            « Sandrine m'accompagne dans la gestion des effets secondaires de ma maladie chronique et des
            médicaments. Un soulagement. »"
          />
          <CardsCommentaire
            nom="Thomas, sportif amateur :"
            img="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
            commentaire="
            « Je ne connaissais pas la naturopathie, mais c'est une véritable découverte qui m'a permis de mieux
            gérer mon hygiène de vie globale, et gagner en performances. »"
          />
          <CardsCommentaire
            nom="Fabienne, athlète professionnelle :"
            img="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
            commentaire="
            « Vraiment top comme naturopathe ! Je recommande !»"
          />
        </Fade>
      </div>
      <div className="allCardsCommentaireContainer">
        <Fade cascade damping={0.4}>
          <CardsCommentaire
            nom="Léa, étudiante non sportive :"
            img="https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_1280.jpg"
            commentaire="« Sandrine m'a bien cernée et grâce à elle j'ai trouvé le courage de me mettre au sport en douceur et
            améliorer mon hygiène de vie. »"
          />
          <CardsCommentaire
            nom="Sarah, sportive amateure :"
            img="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_960_720.jpg"
            commentaire="« Avec Sandrine, on a revu ma nutrition avec des conseils ajustés à ma situation.»"
          />
          <CardsCommentaire
            nom="Michelle, femme active :"
            img="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg"
            commentaire="« Un grand merci pour sa patience et ses conseils. Grâce à son accompagnement, j'ai perdu du poids
            en ayant cerné les origines émotionnelles. »"
          />
        </Fade>
      </div>
      <img
        className="imgSeparationCommentaire1-2"
        alt="img"
        src={separationcommentaire1}
      />
    </div>
  );
};
export default PageMenu1;
