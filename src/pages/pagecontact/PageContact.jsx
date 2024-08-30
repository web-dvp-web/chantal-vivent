import "./pagecontact.css";
import { Fade } from "react-awesome-reveal";
import imggooglemap from "../../images/googlemapchantalvivent.png";
import logoapell from "../../images/2.png";
import logomail from "../../images/5.png";
import logoadresse from "../../images/adresse.png";
import logoweb from "../../images/7.png";
import logofacebook from "../../images/8.png";
import iconelotus from '../../images/iconelotus.png';

const PageContact = (props) => {
  return (
    <div className="allPageContactContainer">
      <div className="titreHoraireContainer">
        <Fade direction="right">
          <h2 className="h2Horaires">
            VOTRE SÉANCE VOUS ATTEND: DÉCOUVREZ MES HORAIRES
          </h2>
        </Fade>
      </div>
      <div className="pageContactContainer">
        <div className="horairesContainer">
          <p className="sTitreHoraire">
            Consultation en cabinet ou en visio conférence.
            <br/>
            <br /> Choisissez l'option qui vous convient le mieux
          </p>
          <div className="iconeLotusContainer">
            <img className="iconeLotus" alt="icone-lotus"  src={iconelotus}/>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Lundi</p>
            <div className="horairec">
              <p className="pHoraires">{props.lundi}</p>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Mardi</p>
            <div className="horairec">
              <p className="pHoraires">{props.mardi}</p>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Mercredi</p>

            <div className="horairec">
              <p className="pHoraires">{props.mercredi}</p>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Jeudi</p>

            <div className="horairec">
              <p className="pHoraires">{props.jeudi}</p>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Vendredi</p>

            <div className="horairec">
              <p className="pHoraires">{props.vendredi}</p>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Samedi</p>

            <div className="horairec">
              <p className="pHoraires">{props.samedi}</p>
            </div>
          </div>
          <div className="iconeLotusContainer">
            <img className="iconeLotus" alt="icone-lotus"  src={iconelotus}/>
          </div>
          <div className="horairec"></div>
        </div>
        <div className="imgLogoContainer">
          <a href="https://www.google.fr/maps/place/7+Chem.+de+Bonzoumet,+31310+Montesquieu-Volvestre/@43.2113517,1.2194748,14.58z/data=!4m6!3m5!1s0x12aed4ce2802efd3:0x9d283e32ceffc779!8m2!3d43.216664!4d1.218772!16s%2Fg%2F11smz7_n1t?entry=ttu">
            <img
              className="imgGoogleMap"
              src={imggooglemap}
              alt="img google map adresse chantal vivent"
            />
          </a>
          
        </div>
      </div>
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
              <img
                className="logoAdresse"
                src={logoadresse}
                alt="logo adresse"
              />
              <p className="pInfo">{props.adresse}</p>
            </div>
            <div className="logoTexteContainer">
              <img className="logoAdresse" src={logoweb} alt="logo web" />
              <p className="pInfo">https://chantalvivent.fr/</p>
            </div>
            <div className="logoTexteContainer">
            <a href="https://www.facebook.com/chantal.vivent/?locale=fr_FR">
              <img
                className="logoAdresse"
                src={logofacebook}
                alt="logo facebook"
              />
              <p className="pInfo">https://chantalvivent.fr/</p>
              </a>
            </div>
          </div>
    </div>
  );
};
export default PageContact;
