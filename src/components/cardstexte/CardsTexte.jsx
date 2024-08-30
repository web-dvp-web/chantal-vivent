import { useState } from "react";
import './cardstexte.css';

const CardsTexte = (props) => {
  const [ouvert, setOuvert] = useState(false);

  const changeTexteContainer = () => {
    setOuvert(!ouvert);
  };

  return (
    <div className="cardsTexteContainer">
      <div className="allTexteContainer">
        <div className="titreButtonContainer">
          <h2 className="h2ServicesTextContainer">{props.titre}</h2>
          <button onClick={changeTexteContainer} className="buttonEnSavoirPlus">En savoir plus</button>
        </div>
        <div className={ouvert ? 'texteContainer ouvert' : 'texteContainer'}>
          {props.texte}
        </div>
      </div>
    </div>
  );
};

export default CardsTexte;
