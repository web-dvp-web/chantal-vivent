import "./cardsservices.css";
const CardsServices = (props) => {
  return (
    <div className="cardsServicesContainer">
      <img className="imgCardsServices" src={props.img} alt="img" />
      <p className="titreServices">{props.titre}</p>
      <p className="pServices">{props.services}</p>
    </div>
  );
};
export default CardsServices;
