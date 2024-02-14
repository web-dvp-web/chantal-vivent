import "./pagecontact.css";
import imgcontact from "../../images/basketball.jpg";
import logomail from "../../images/logomail.png";
const PageContact = (props) => {
  return (
    <div className="pageContactContainer">
      <div className="horairesContainer">
        <h1 className="h1Horaires">Me Contacter</h1>
        <p className="pHoraires">
Vous pouvez me joindre à tout moment par mail !
N'hésitez pas à me contacter par email pour :
Poser une question
Prendre rendez-vous
Partager vos idées
Me faire part de vos commentaires
</p>
      </div>
      <div className="imgLogoContainer">
        <img
          className="imgContact"
          src={imgcontact}
          alt="img logo de contact"
        />
        <div className="mailTelAdresseContainer">
          <div className="logoTexteContainer">
            <img className="logoMail" src={logomail} alt="logo mail" />
            <p className="pInfo">{props.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageContact;
