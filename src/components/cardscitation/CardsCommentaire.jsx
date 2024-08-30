import "./cardscommentaire.css";
import separationCitation from "../../images/separationtra.png";
const CardsCommentaire = (props) => {
  return (
    <div className="cardsCommentaireContainer">
      <div className="imgNameContainer">
        <img className="imgUser" src={props.img} alt="img profil" />
        <p className="nameUser">{props.nom}</p>
      </div>
      <p className="commentaireUser">{props.commentaire}</p>
      <img className="separationCitation" src={separationCitation}/>
    </div>
  );
};
export default CardsCommentaire;
