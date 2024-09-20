import "./pagecontact.css";
import { Fade } from "react-awesome-reveal";
import imggooglemap from "../../images/googlemapchantalvivent.png";
import iconelotus from "../../images/iconelotus.png";
import click from "../../images/logoClick.png";
import React from 'react';
const PageContact = (props) => {
 
  return (
    
    <div className="allPageContactContainer">
<h2 id="section3">Section 3</h2>
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
            <br />
            <br />
          </p>
          <p className="sTitreHoraire2">
            Choisissez l'option qui vous convient le mieux
          </p>
          <div className="iconeLotusContainer">
            <img className="iconeLotus" alt="icone-lotus" src={iconelotus} />
          </div>
            <d1 className="d1Contact">
          <div className="horairec">
            <dt className="jour-de-la-semaine">Lundi</dt>
            <div className="horairec">
              <dd className="pHoraires">{props.lundi}</dd>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Mardi</p>
            <div className="horairec">
              <dd className="pHoraires">{props.mardi}</dd>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Mercredi</p>

            <div className="horairec">
              <dd className="pHoraires">{props.mercredi}</dd>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Jeudi</p>

            <div className="horairec">
              <dd className="pHoraires">{props.jeudi}</dd>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Vendredi</p>

            <div className="horairec">
              <dd className="pHoraires">{props.vendredi}</dd>
            </div>
          </div>
          <div className="horairec">
            <p className="jour-de-la-semaine">Samedi</p>

            <div className="horairec">
              <dd className="pHoraires">{props.samedi}</dd>
            </div>
          </div>
            </d1>
          <div className="iconeLotusContainer">
            <img className="iconeLotus" alt="icone-lotus" src={iconelotus} />
          </div>
          <div className="horairec"></div>
        </div>   


        <div className="imgLogoContainer">
          <img className="logoClick"src={click} />
          <a href="https://www.google.fr/maps/place/7+Chem.+de+Bonzoumet,+31310+Montesquieu-Volvestre/@43.2113517,1.2194748,14.58z/data=!4m6!3m5!1s0x12aed4ce2802efd3:0x9d283e32ceffc779!8m2!3d43.216664!4d1.218772!16s%2Fg%2F11smz7_n1t?entry=ttu">
            <img
              className="imgGoogleMap"
              src={imggooglemap}
              alt="img google map adresse chantal vivent"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default PageContact;
