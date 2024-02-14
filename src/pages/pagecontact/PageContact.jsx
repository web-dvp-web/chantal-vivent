import "./pagecontact.css";
import imgcontact from "../../images/contactok.jpg";
const PageContact = (props) => {
  return (
    <div className="pageContactContainer">
      <div className="horairesContainer">
        <h1 className="h1Horaires">Me Contacter</h1>
        <p className="pHoraires">
          Vous pouvez me contacter à tout moment par email pour prendre rendez-vous poser une question ou me faire part de vos commentaires
        </p>
      </div>
        <div className="mailTelAdresseContainer">
          <div className="logoTexteContainer">
            <p className="pInfo">{props.mail}</p>
          </div>
        </div>
      <div className="imgLogoContainer">
        <img
          className="imgContact"
          src={imgcontact}
          alt="img logo de contact"
        />
      </div>
    </div>
  );
};
export default PageContact;
