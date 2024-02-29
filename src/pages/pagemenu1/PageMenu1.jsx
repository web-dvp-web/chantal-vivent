import "./pagemenu1.css";
import imgMontage from "../../images/montageintroduction.jpg"
import CardsServices from "../../components/cardsservices/CardsServices";
import CardsCommentaire from "../../components/cardscommentaire/CardsCommentaire";
import separationcommentaire1 from "../../images/separationcommentaires1.png";
import service1 from "../../images/RDVpbpassagère.jpg";
import service2 from "../../images/RDVconseilsnutritionnels.jpg";
import service3 from "../../images/RDVcomplet2.jpg";
/*animation du texte*/
import { Fade } from "react-awesome-reveal";

const PageMenu1 = () => {
  return (
    <div className="pageMenu1Container">
      <div className="h1VideoContainer" aria-label="fleurs rose avec des branches en avant avec un fond flou de la foret " >
        <div className="h1Container">
          <h1 className="h1Presentation">
          SB NaturoSport est une entreprise individuelle de Naturopathie et conseils en Nutrithérapie.
          <br/>
          <br/>

Je vous accompagne essentiellement sur la base des 3 piliers majeurs de la Naturopathie que sont
l'équilibre nutritionnel, psycho-émotionnel, et l'activité physique. Je propose également des conseils
en phytologie, techniques respiratoires, énergétiques, et vibratoires.
<br />
<br />
Spécialisée dans l'accompagnement des sportifs, je vous propose mes services en prévention et
optimisation de votre vitalité et de vos performances. J'accompagne également toute personne
désireuse d'intégrer une activité physique dans son hygiène de vie, en l'adaptant au profil
hippocratique et naturopathique de la personne.
<br />
Je suis également spécialisée dans l'accompagnement des troubles thyroïdiens, psychiques et
émotionnels, la gestion du poids, des blessures..., et en nutrithérapie, pour vous conseiller au mieux
dans le choix de vos compléments, ou la gestion de l'équilibre nutritionnel selon les besoins.
<br/>
En rdv ponctuels ou en accompagnement complet et holistique, je vous donnerai les outils naturels
et personnalisés pour une meilleure maîtrise de votre hygiène de vie globale et de votre organisme.
<br/>
<br/>
<br/>
<b>
# La naturopathie ne peut se substituer à un traitement médical. N’arrêtez jamais un traitement sans l'avis de
votre médecin. Un naturopathe ne fait pas de diagnostic et ne soigne pas. C'est un hygiéniste dont le but est avant
tout préventif et thérapeutique, afin de maintenir l'intégrité de l'organisme et d'en optimiser les mécanismes
d'auto-guérison naturels. En cas de doute sur l'état de santé d'une personne, je me réserve le droit de l'envoyer
vers un médecin ou tout professionnel compétent en la matière.
</b>
          </h1>
        </div>
        <img className="imgIntroduction" alt="montage-images" src={imgMontage} />
      </div>
      <Fade direction="right">
        <h2 className="h2Services">Mes prestations </h2>
      </Fade>
      <div className="allCards">
        <CardsServices
          titre="RDV problématique passagère 1h/70€*"
          img={service1}
          services="SB NaturoSport vous propose des rdv uniques ponctuels ou de suivi, pour une gestion
          personnalisée d'un trouble aigu (blessure légère, inflammation, affection de saison...)."
          services2="
          Vous conseiller dans le choix de compléments alimentaires, ou tout simplement pour faire le
          point sur votre hygiène de vie globale."

          services3="*facture fournie pour prise en charge mutuelle"
          
        />
        <CardsServices
          titre="RDV conseils nutritionnels 1h/ 60€*"
          img={service2}
          services="En prévention, pour faire le point sur votre alimentation et gérer l'équilibre en macro et
          micronutrition en fonction de vos besoins, et de votre tempérament naturopathique."
          services2="   En cure, avec la mise en place d'une alimentation anti-inflammatoire en cas de blessure ou
          affection par exemple, ou d'un régime hypotoxique, des conseils en gestion des indices
          glycémiques...etc."
          services3="En optimisation, avec un accompagnement unique ou suivi, pour maintenir vos
          performances et la vitalité de l'organisme dans la durée."
        
          services4=" * facture fournie pour prise en charge mutuelle"
        />
        <CardsServices
          titre="Forfait de 3 RDV accompagnement complet 150€ (2x75€)*"
          img={service3}
          services="Suivi sur 3 à 5 mois, et mise en place des 3 cures naturopathiques.
          Pour toute problématique, et gestion du poids, des blessures, des douleurs et inflammations
          chroniques, troubles digestifs, émotionnels, thyroïdiens... (avec ou sans traitement médical)"
          services2="RDV1 :Bilan de vitalité + protocole Détox & Rééquilibrage + Fiches conseils... 1h30"
          services3="RDV2 :Bilan de suivi + protocole de Renforcement & Revitalisation + Fiches conseils... 1h"
          services4="RDV3 : Bilan de suivi + protocole de Stabilisation... 30mn"
          services5="Un accompagnement complet sur tous les plans de votre Etre (Physique, Mental,
            Émotionnel, Énergétique et Spirituel), pour travailler en profondeur sur votre organisme."
          services6="* 2 factures fournies pour prise en charge mutuelle"
        />
      </div>
      <p className="pBleu"> Les consultations se font en visio pour toute la France, et à domicile en Ariège (secteurs Couserans-Volvestre-Comminges) 
</p>
      <h2>Vos commentaires</h2>
      <img
        className="imgSeparationCommentaire1"
        alt="img"
        src={separationcommentaire1}
      />
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
