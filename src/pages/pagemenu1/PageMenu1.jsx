import "./pagemenu1.css";
import imgIntroduction from "../../images/plume2canva.png";
import CardsServices from "../../components/cardsservices/CardsServices";
import CardsCommentaire from "../../components/cardscommentaire/CardsCommentaire";
import service1 from "../../images/a1.jpg";
import service2 from "../../images/a2.jpg";
import service3 from "../../images/a3.jpg";
/*animation du texte*/
import { Fade } from "react-awesome-reveal";

const PageMenu1 = () => {
  return (
    <div className="pageMenu1Container">
      <div
        className="h1VideoContainer"
        aria-label="fleurs rose avec des branches en avant avec un fond flou de la foret "
      >
        <div className="h1Container">
          <h1 className="h1CV">Chantal Vivent</h1>
          <h1 className="h1Presentation">
            Chantal Vivent est une médium et énergéticienne passionnée, qui
            accompagne les personnes en quête d'un mieux-être profond et
            durable. Forte de ses capacités et de son expérience, elle offre des
            consultations personnalisées pour vous aider
          </h1>
          <div className="imgIntroductionContainer">
            <img
              className="imgIntroduction"
              alt="montage-images"
              src={imgIntroduction}
            />
          </div>
        </div>
      </div>

      <h2 className="h2Services">Mes prestations </h2>
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
      <div className="allCardsCommentaireContainer">
        <CardsCommentaire
          nom="David, retraitée :"
          img="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg"
          commentaire="
            «J'ai consulté Chantal pour des douleurs chroniques qui me handicapaient au quotidien. Grâce à ses séances d'énergétisation, j'ai ressenti une nette amélioration de mon état général. Je retrouve peu à peu ma mobilité et mon autonomie. Je suis très heureux d'avoir découvert Chantal et je la recommande vivement à tous ceux qui souffrent de douleurs chroniques. »"
        />
        <CardsCommentaire
          nom="Sophie, mère au foyer :"
          img="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
          commentaire="
            « Ma fille souffrait d'anxiété et d'agitation depuis son entrée à l'école. Chantal a su apaiser ses peurs et l'aider à se sentir plus calme et confiante en elle-même. Elle a également donné des conseils précieux à mon mari et moi pour mieux accompagner notre fille dans cette étape importante de sa vie. Nous sommes très satisfaits des résultats obtenus. »"
        />
        <CardsCommentaire
          nom=" Pierre, chef d'entreprise :"
          img="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
          commentaire="Chantal a su me guider à travers une période de stress intense au travail. Son aide m'a permis de retrouver mon calme et ma concentration, et ainsi de surmonter les obstacles qui se dressaient sur mon chemin. Je la recommande vivement à tous ceux qui recherchent un soutien énergétique et spirituel."
        />
      </div>
      <div className="allCardsCommentaireContainer">
        <CardsCommentaire
          nom="Sarah, artiste :"
          img="https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_1280.jpg"
          commentaire="« J'ai consulté Chantal pour des problèmes de sommeil qui me perturbaient depuis des mois. Grâce à ses séances, j'ai enfin pu retrouver un sommeil profond et réparateur. Elle a également su m'aider à me libérer de blocages émotionnels qui m'empêchaient de m'exprimer pleinement dans mon art. Je suis très reconnaissante de son aide précieuse. »"
        />
        <CardsCommentaire
          nom="Lucas, étudiant:"
          img="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_960_720.jpg"
          commentaire="«Je traversais une période de doute et d'incertitude quant à mon avenir. Chantal m'a aidé à clarifier mes pensées et à me reconnecter à mon intuition. Ses conseils avisés m'ont permis de prendre des décisions importantes avec confiance et sérénité. Je lui suis très reconnaissant pour son soutien inestimable.»"
        />
        <CardsCommentaire
          nom="Paul, musicien:"
          img="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg"
          commentaire="«J'ai consulté Chantal pour un blocage créatif qui me paralysait depuis plusieurs mois. Grâce à son aide, j'ai pu me libérer de mes blocages et retrouver mon inspiration. Elle m'a également donné des conseils précieux pour développer ma créativité et m'exprimer pleinement dans ma musique. »"
        />
      </div>
      <div className="h2BandeauConnaissance"></div>

      <div className="texteContainer">
        Un{" "}
        <a href="https://fr.wikipedia.org/wiki/M%C3%A9dium_(spiritisme)">
          <u>médium est</u>
        </a>{" "}
        un intermédiaire. Il a cette capacité d’entendre « Les Guides de Lumière
        » et vous répète ce qu’il entend, c’est l’opportunité magique d’être
        guidé vers la meilleure version de vous-même
        <br />
        <br />
        Vos raisons qui peuvent vous pousser à consulter
        <br />
        <br />
        <div className="listeContainer">
           Vos « Guides de Lumière » ont besoin de vous parler
          <br />
          <br />
           Vous vous sentez connecté et avez besoin de communiquer avec vos «
          Guides de Lumière »
          <br />
          <br />
           Vous êtes en demande d’informations et de solutions parce que vous
          vous sentez perdu, triste, en colère, seul, dubitatif pour prendre une
          décision...
          <br />
          <br />
           Vous avez beaucoup d’énergie et vous ne savez pas par où commencer
          pour mener à bien vos projets de vie (travail, vie sociale, vie
          amoureuse...)
          <br />
          <br />
           Vous avez besoin, envie de contacter un défunt, ou ressentez des
          présences subtiles
          <br />
          <br />
           Vous avez une décision à prendre
          <br />
          <br />
           Vous vous interrogez sur le sens de votre vie
          <br />
          <br />
           Vous pensez être dans le vrai mais une petite confirmation pour
          aller de l’avant
          <br />
          <br />
           Vous avez le sentiment que rien n’avance et vous avez envie de
          comprendre pourquoi
          <br />
          <br />
           Vous avez des problèmes au travail, dans votre couple, au sein de
          votre cercle d’amis...
          <br />
          <br /> Cette liste n’est pas exhaustive, bien sur..........
        </div>
        <br />
        <br />
        <b>Quand Consulter un Médium ?</b>
        <br />
        <br />
        Il est important de comprendre qu’on ne consulte pas un médium à tout-va
        et dans n’importe quel état d’esprit. Attention aux addictions! Un bon
        médium ne vous rendra jamais accro.
        <br />
        <br />
        <u className="bstitre">Vous pouvez consulter un médium quand :</u>
        <br />
        <br />
        <div className="listeContainer">
           Vous êtes dans une position d’ouverture et vous avez besoin d’être
          éclairé
          <br />
          <br />
           Vous avez envie de bienveillance à votre égard <br />
          <br />
           Vous en avez besoin et non pas envie <br />
          <br />
           Vous avez besoin qu’un médium vous apporte une guidance <br />
          <br />
           Vous avez envie de prendre des raccourcis <br />
          <br />
           Vous avez un choix important à faire <br />
          <br />
           Vous n’êtes pas heureux et vous voulez savoir pourquoi et comment
          vous en sortir <br />
          <br />
           Vous ressentez les choses et vous avez besoin d’une confirmation{" "}
          <br />
          <br />
           Vous avez besoin de conseils, d’amour, et de donner un sens <br />
          <br />
           Vous souffrez d’un deuil et vous avez besoin, envie de contacter un
          défunt <br />
          <br />
           Vous êtes prêt à opérer des changements en vous parce que vous avez
          envie d’être heureux <br />
          <br />
           Vous êtes inquiet, stressé, fatigué... et vous avez envie d’aller
          mieux <br />
          <br />
          <br />
        </div>
        <b>Brève distinction entre un médium et un voyant :</b>
        <br />
        <br />
        On pourrait dire que le <b>voyant</b> utilise des supports comme des
        cartes ou autres et fait une lecture tandis que le <b>médium</b> «
        entend vos guides de lumière et vous répète l’information. Il est canal
        et utilise toutes ses capacités extra- sensorielles. Pour ma part, j’ai
        le privilège d’accéder aux différentes sources dans le cadre de mes
        consultations.
        <br />
        <br />
        Bonnes consultations à toutes et à tous et soyez heureux ✨
      </div>
    </div>
  );
};
export default PageMenu1;
