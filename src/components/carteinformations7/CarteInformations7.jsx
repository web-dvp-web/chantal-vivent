import "./cartesinformations7.css";

const CarteInformations6 = (props) => {
  return (
    <div className="carteInformations5Container">
      <div className="infoCi6Container">
        <h2 className="h2Ci6">{props.titre}</h2>

        <p className="pCi6">{props.texte}</p>
      </div>
      <div className="imgCi6Container">
        <img className="imgCi6" alt="img" src={props.img} />
      </div>
    </div>
  );
};
export default CarteInformations6;
