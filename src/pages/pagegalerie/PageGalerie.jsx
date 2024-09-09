import "./pagegalerie.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import chantalviventlatour2 from "../../images/nouvelles/latour 2.jpg";
import CarteInformations7 from "../../components/carteinformations7/CarteInformations7";
import papillon from "../../images/papillon2.png";
import separationGalerie from "../../images/separation2.png";

import commentaireimg1 from "../../images/citations/commentaireimg1.png";
import commentaireimg2 from "../../images/citations/citationsimg2.png";
import commentaireimg3 from "../../images/citations/citationsimg3.png";
import commentaireimg4 from "../../images/citations/citationsimg4.png";
import commentaireimg5 from "../../images/citations/citationsimg5.png";
const PageGalerie = () => {
  const [ouvert, setOuvert] = useState(false);
  const [ouvert2Galerie, setOuvert2] = useState(false);

  const changeTexteContainer = () => {
    setOuvert(!ouvert);
  };

  const changeTexteContainer2 = () => {
    setOuvert2(!ouvert2Galerie);
  };

  return (
    <div className="allCardsTexteContainerGalerie">
      <div className="cardsTexteContainerGalerie">
        <div className="allTexteContainer">
          <div className="titreButtonContainerGalerie">
            <h2 className="h2ServicesTextContainer">Qui suis-je ?</h2>
            <h2 className="h2TextContainer">
            Animée par le désir d'aider les autres à trouver leur chemin,
             je mets mes capacités de médium voyante et énergéticienne au service de votre épanouissement.
            </h2>
            <h2 className="h2TextContainer">
            <b>Envie d'en savoir plus sur mon histoire et mes inspirations ?</b>
            </h2>
            <br /> <br />
            <button
              onClick={changeTexteContainer2}
              className="buttonEnSavoirPlus"
            >
              Découvrez sans plus attendre...
            </button>
            <div className="separationGalerieContainer">
              <img className="separationGalerie" alt="ligne soleil" src={separationGalerie} />
            </div>
            <h1 className="rappel">CHANTAL VIVENT</h1>
            <h1 className="rappel">06 80 52 04 94</h1>
          </div>
          <div
            className={
              ouvert2Galerie
                ? "texteContainerGalerieOuvertGalerie"
                : "texteContainer"
            }
          >
            <br />
            <br />
            J’ai grandi au sein de la campagne gersoise dans une ferme. La
            petite fille avait pour merveilleux amis et confidents les animaux,
            Dame nature, les mondes subtils. <br />
            Les êtres de lumière veillaient sur moi. En tant qu’être
            hypersensible, j’avais ce besoin de solitude pour me ressourcer.
            <br />
            J’en ai compris la signification bien plus tard. Mon chemin a été
            sinueux pour accepter, comprendre et accueillir quel était mon rôle
            d’âme terrestre dans cette vie.
            <br /> <br />
            Tous ces mondes vibrant d’énergie m’ont accompagnée. L’évolution de
            mes capacités psychiques et spirituelles s’est faite naturellement
            en grandissant et au fil des enseignements de la vie. Mes canaux
            étaient ouverts. Je sentais, percevais, ressentais, voyais etc et
            venais en aide dans la bienveillance à toutes formes de vie.
            <br />
            <br />
            Durant l’adolescence, j’ai dévoré tous les livres du rayon
            ésotérique de la bibliothèque de la ville. Ces lectures ont été une
            approche précieuse pour identifier les subtilités de mon être. Des
            questions demeuraient bien sur en suspend pour diverses raisons.
            J’ai du passer par un long parcours pour m’accepter, me comprendre.
            Peu à peu, j’ai accueilli mes particularités pour les transformer en
            force pour moi-même et pour les autres. Adulte, tout naturellement,
            je me suis tournée vers nos anciens, portant la mémoire de notre
            humanité. J’ai exercé de longues années en tant que cadre
            médico-social pour senior. Je me suis engagée dans diverses actions
            de bénévolats auprès de personnes vulnérables. Toutes ces
            expériences m’ont enrichies, m’ont fait me questionner sur ma place,
            mon rôle dans cette société. J’étais porté par ma volonté d’être en
            accord avec mes aspirations profondes . Durant cette période, je me
            suis engagée dans un travail de développement personnel. J’ai
            travaillé sur mes blessures, mes croyances limitantes, et autres
            freins. Avec joie, l’être spirituel que je suis, c’est déployé et
            s’est révélé. A ce jour, cela me permet d&#39;avoir une approche
            sensible aux circonstances de vie. Nous sommes tous en chemin sur
            notre propre voie. J’ai suivi et continu à me former auprès de
            différents praticiens reconnus pour leurs expertises (notamment les
            enseignements de Serge Boutboul, Mathieu Boutboul, Rahul Barthi etc
            D’autres sources d’inspirations viennent de mes guides et «mentors».
            Mon souhait est de vous accompagner pour vous permettre de vous
            révéler pleinement. Découvrez ce que votre âme veut vous dire
            maintenant. Permettez-vous ce chemin en écoutant la voix de votre
            cœur.
          </div>
        </div>

        <img className="imgchantalGalerie1" src={chantalviventlatour2} />
      </div>
      <div className="separationApropos">
        
          <h2 className="h2APropos">GUIDANCE INTUITIVE PAR LES CITATIONS</h2>
        
      </div>
      <CarteInformations7
        titre="Laissez les mots vous montrez le chemin"
        texte="Découvrez leurs pouvoirs pour accéder à votre sagesse intérieure. "
        texte2="Révéler pleinement votre potentiel spirituel"
        texte3=" pour une vie plus épanouie et alignée avec votre âme"
        img={papillon}
      />
      <div className="allCardsCommentaireContainer">
    
          <img className="commentaireimg" alt="paul coelho" src={commentaireimg5} />
          <img className="commentaireimg" alt="citations oscar wilde" src={commentaireimg3} />
          <img className="commentaireimg" alt="citations Albert Einstein" src={commentaireimg2} />
     
      </div>
      <div className="allCardsCommentaireContainer">
      
          <img className="commentaireimg" alt="citation bouddha" src={commentaireimg4} />
          <img className="commentaireimg" alt="citation gandhi" src={commentaireimg1} />
       
      </div>
      <a href="contact-horaires-chantal-vivent-medium-voyante-energéticienne">
        <button className="buttonReservezVotreConsultation">
          Reservez votre consultation
        </button>
      </a>
    </div>
  );
};
export default PageGalerie;
