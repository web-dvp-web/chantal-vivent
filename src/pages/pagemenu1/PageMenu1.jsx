import "./pagemenu1.css";
import videomenu1 from "../../videos/videonaturo.mp4";
import galets from "../../images/galets.jpg"
import CardsServices from "../../components/cardsservices/CardsServices";
import CardsCommentaire from "../../components/cardscommentaire/CardsCommentaire";
import separationcommentaire1 from "../../images/separationcommentaires1.png";
import service1 from "../../images/canva/Nathuropa.png";
import service2 from "../../images/canva/alimentation.png";
import service3 from "../../images/canva/forfait.png";
/*animation du texte*/
import { Fade } from "react-awesome-reveal";

const PageMenu1 = () => {
  return (
    <div className="pageMenu1Container">
      <div className="h1VideoContainer" aria-label="fleurs rose avec des branches en avant avec un fond flou de la foret " >
        <div className="h1Container">
          <h1 className="h1Presentation">
            SB NaturoSport est un cabinet de naturopathie et de nutrithérapie dédié à votre bien-être et à vos performances sportives. 
            Spécialisé dans l'accompagnement des sportifs et des personnes actives, je vous propose des solutions naturelles et personnalisées
            pour vous aider à atteindre vos objectifs.
          </h1>
        </div>
        <video className="videoPresentation" autoPlay loop muted>
          <img src={galets} alt="galets empiler" />
        </video>
      </div>
      <Fade direction="right">
        <h2 className="h2Services">Liste de nos services</h2>
      </Fade>
      <div className="allCards">
        <CardsServices
          titre="Rdv problèmatique passagère 1h/70€ "
          img={service1}
          services="SB NaturoSport vous propose un accompagnement personnalisé pour vous aider à surmonter ces problématiques passagères et retrouver une alimentation saine et équilibrée."
        />
        <CardsServices
          titre="Rdv conseils nutritionnels 1h/60€"
          img={service2}
          services="Adaptée à vos besoins et à vos objectifs."
          services2="Un service de conseil nutritionnel personnalisé qui vous accompagne vers une alimentation saine et équilibrée."
          services3="Un suivi régulier pour vous accompagner dans la durée et vous aider à maintenir vos résultats."
        />
        <CardsServices
          titre="Forfait 3 rdv accompagnement complet 150€ (2x75€)"
          img={service3}
          services="RDV 1 : Bilan de vitalité + Protocole détox & réequilibrage + Fiches conseils... 1h30"
          services2="RDV 2 : Bilan de suivi + Protocole de renforcement & revitalisation + Fiches conseils... 1h"
          services3="RDV 3 : Bilan de suivi / Protocole de stabilisation... 30mn"
        />
      </div>
      <h2>Vos commentaires</h2>
      <img
        className="imgSeparationCommentaire1"
        alt="img"
        src={separationcommentaire1}
      />
      <div className="allCardsCommentaireContainer">
        <Fade cascade damping={0.4}>
          <CardsCommentaire
            nom="Marie.b"
            img="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg"
            commentaire="SBNaturosport m'a permis de retrouver une santé optimale grâce à des conseils personnalisés et un suivi rigoureux."
          />
          <CardsCommentaire
            nom="Julien.s"
            img="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
            commentaire="J'ai été très satisfaite de la consultation avec SBNaturosport. Elle a pris le temps de m'écouter et de comprendre mes besoins."
          />
          <CardsCommentaire
            nom="Sophie.t"
            img="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
            commentaire="SBNaturosport est une naturopathe très compétente et à l'écoute de ses patients. Je la recommande vivement."
          />
        </Fade>
      </div>
      <div className="allCardsCommentaireContainer">
        <Fade cascade damping={0.4}>
          <CardsCommentaire
            nom="Marie.v"
            img="https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_1280.jpg"
            commentaire="Grâce à SBNaturosport, j'ai pu perdre du poids et améliorer mon bien-être de manière durable."
          />
          <CardsCommentaire
            nom="Anna.s"
            img="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_960_720.jpg"
            commentaire="SBNaturosport m'a aidé à surmonter mes problèmes de stress et d'anxiété grâce à des solutions naturelles."
          />
          <CardsCommentaire
            nom="John.r"
            img="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg"
            commentaire="La consultation avec SBNaturosport était informative et intéressante. J'ai appris beaucoup de choses sur la naturopathie."
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
