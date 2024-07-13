import "./cardscommentaire.css";
const CardsCommentaire = (props) => {
  return (
    <div className="cardsCommentaireContainer">
      <div className="imgNameContainer">
        <img className="imgUser" src={props.img} alt="img profil" />
        <p className="nameUser">{props.nom}</p>
      </div>
      <p className="commentaireUser">{props.commentaire}</p>
    </div>
  );
};
export default CardsCommentaire;
