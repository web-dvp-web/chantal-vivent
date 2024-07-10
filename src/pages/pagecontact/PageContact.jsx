import "./pagecontact.css";
import imgcontact from "../../images/imgtexte.jpg";
import logoapell from "../../images/3.png";
import logomail from "../../images/4.png";
import logoadresse from "../../images/6.png";
const PageContact = (props) => {
  return (
    <div className="pageContactContainer">
      <div className="horairesContainer">
        <h1 className="h1Horaires">Horaires d'ouverture</h1>
        <p className="jour-de-la-semaine">Lundi</p>
        <p className="pHoraires">{props.lundi}</p>
        <p className="jour-de-la-semaine">Mardi</p>
        <p className="pHoraires">{props.mardi}</p>
        <p className="jour-de-la-semaine">Mercredi</p>
        <p className="pHoraires">{props.mercredi}</p>
        <p className="jour-de-la-semaine">Jeudi</p>
        <p className="pHoraires">{props.jeudi}</p>
        <p className="jour-de-la-semaine">Vendredi</p>
        <p className="pHoraires">{props.vendredi}</p>
        <p className="jour-de-la-semaine">Samedi</p>
        <p className="pHoraires">{props.samedi}</p>
        <p className="jour-de-la-semaine">Dimanche</p>
        <p className="pHoraires">{props.dimanche}</p>
        <p>test</p>
      </div>
      <div className="imgLogoContainer">
        <img
          className="imgContact"
          src={imgcontact}
          alt="img logo de contact"
        />
        <div className="mailTelAdresseContainer">
          <div className="logoTexteContainer">
            <img className="logoTel" src={logoapell} alt="logo appel" />
            <p className="pInfo">{props.tel}</p>
          </div>
          <div className="logoTexteContainer">
            <img className="logoMail" src={logomail} alt="logo mail" />
            <p className="pInfo">{props.mail}</p>
          </div>
          <div className="logoTexteContainer">
            <img className="logoAdresse" src={logoadresse} alt="logo adresse" />
            <p className="pInfo">{props.adresse}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageContact;
