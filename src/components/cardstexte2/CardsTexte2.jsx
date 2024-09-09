import { useState } from "react";
import './cardstexte2.css';

const CardsTexte = (props) => {
  const [ouvert, setOuvert] = useState(false);

  const changeTexteContainer = () => {
    setOuvert(!ouvert);
  };

  return (
    <div className="cardsTexteContainer">
      <div className="allTexteContainer2">
        <div className="titreButtonContainer">
          <h2 className="h2ServicesTextContainer">{props.titre}</h2>
          <button onClick={changeTexteContainer} className="buttonEnSavoirPlus">En savoir plus</button>
        </div>
        <div className={ouvert ? 'texteContainer ouvert' : 'texteContainer'}>
          {props.texte}
          <br/>
          {props.texte2}
          <br/>
          {props.texte3}
        </div>
      </div>
    </div>
  );
};

export default CardsTexte;
