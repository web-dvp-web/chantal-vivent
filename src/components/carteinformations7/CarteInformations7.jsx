import "./cartesinformations7.css";

const CarteInformations6 = (props) => {
  return (
    <div className="carteInformations5Container">
      <div className="infoCi6Container">
        <h2 className="h2Ci6">{props.titre}</h2>
        <div className="pCi6Container">
        <p className="pCi6">{props.texte}</p>
        <p className="pCi6">{props.texte2}</p>
        <p className="pCi6">{props.texte3}</p>
        </div>
      </div>
      <div className="imgCi6Container">
        <img className="imgCi6" alt="img" src={props.img} />
      </div>
    </div>
  );
};
export default CarteInformations6;
