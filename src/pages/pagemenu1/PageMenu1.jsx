import "./pagemenu1.css";
import videomenu1 from "../../videos/videocoiffure.mp4";
import CardsServices from "../../components/cardsservices/CardsServices";
import CardsCommentaire from "../../components/cardscommentaire/CardsCommentaire";
import separationcommentaire1 from "../../images/separationcommentaires1.png";
/*animation du texte*/
import { Fade } from "react-awesome-reveal";

const PageMenu1 = () => {
  return (
    <div className="pageMenu1Container">
      <div className="h1VideoContainer" aria-label="fleurs rose avec des branches en avant avec un fond flou de la foret " >
        <div className="h1Container">
          <h1 className="h1Presentation">
            Bienvenue chez Les ciseaux d'or, votre salon de coiffure de
            Verniolle, en Occitanie. Nous sommes une équipe de coiffeurs et
            coiffeuses professionnels passionnés par notre métier. Nous sommes
            là pour vous aider à trouver le look qui vous correspond, qu'il soit
            classique, moderne ou audacieux.
          </h1>
        </div>
        <video className="videoPresentation" autoPlay loop muted>
          <source src={videomenu1} type="video/mp4" />
        </video>
      </div>
      <Fade direction="right">
        <h2 className="h2Services">Liste de nos services</h2>
      </Fade>
      <div className="allCards">
        <CardsServices
          titre="Coiffures"
          img="https://cdn.pixabay.com/photo/2017/07/20/10/51/beauty-salon-2521943_1280.jpg"
          services=" 
      Coupes de cheveux pour hommes, femmes et enfants
      Coupes classiques, modernes, audacieuses
      Coupes sur-mesure
      Coupes de barbe pour hommes
      "
        />
        <CardsServices
          titre="Coloration"
          img="https://cdn.pixabay.com/photo/2015/12/17/10/01/colors-1097123_1280.jpg"
          services="Colorations permanentes
      Colorations semi-permanentes
      Balayages
      Ombres
      Colorations végétales
      Colorations sans ammoniaque"
        />
        <CardsServices
          titre="Coiffures spéciales"
          img="https://cdn.pixabay.com/photo/2020/09/30/19/43/woman-5616861_1280.jpg"
          services="Coiffures de mariage,
      Coiffures de soirée,
      Coiffures de gala,
      Coiffures pour tout autres événements particuliers"
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
            nom="Marie"
            img="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg"
            commentaire="Je suis venue chez Les ciseaux d'or pour une nouvelle coupe de cheveux et j'ai été ravie du résultat. Les coiffeurs sont très professionnels et à l'écoute. Ils ont pris le temps de comprendre mes envies et de me proposer une coupe qui me correspond parfaitement. Je me sens belle et confiante avec ma nouvelle coupe ! Je recommande vivement ce salon."
          />
          <CardsCommentaire
            nom="Julien"
            img="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
            commentaire="J'ai fait une coloration chez Les ciseaux d'or et je suis très contente du résultat. Les couleurs sont magnifiques et la tenue est parfaite. Les coiffeurs ont utilisé des produits de haute qualité et ils ont pris le temps de faire un travail soigné. Je reviendrai sans hésiter."
          />
          <CardsCommentaire
            nom="Sophie"
            img="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
            commentaire="J'ai fait des extensions de cheveux chez Les ciseaux d'or et je suis ravie du résultat. Les cheveux sont naturels et la pose est impeccable. Les coiffeurs ont été très professionnels et ils m'ont expliqué tout le processus. Je recommande vivement ce salon."
          />
        </Fade>
      </div>
      <div className="allCardsCommentaireContainer">
        <Fade cascade damping={0.4}>
          <CardsCommentaire
            nom="Marie"
            img="https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_1280.jpg"
            commentaire="Je suis venue chez Les ciseaux d'or pour une nouvelle coupe de cheveux et j'ai été ravie du résultat. Les coiffeurs sont très professionnels et à l'écoute. Ils ont pris le temps de comprendre mes envies et de me proposer une coupe qui me correspond parfaitement. Je me sens belle et confiante avec ma nouvelle coupe ! Je recommande vivement ce salon."
          />
          <CardsCommentaire
            nom="Anna"
            img="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_960_720.jpg"
            commentaire="J'ai fait une coloration chez Les ciseaux d'or et je suis très contente du résultat. Les couleurs sont magnifiques et la tenue est parfaite. Les coiffeurs ont utilisé des produits de haute qualité et ils ont pris le temps de faire un travail soigné. Je reviendrai sans hésiter."
          />
          <CardsCommentaire
            nom="John"
            img="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg"
            commentaire="J'ai fait des extensions de cheveux chez Les ciseaux d'or et je suis ravie du résultat. Les cheveux sont naturels et la pose est impeccable. Les coiffeurs ont été très professionnels et ils m'ont expliqué tout le processus. Je recommande vivement ce salon."
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
