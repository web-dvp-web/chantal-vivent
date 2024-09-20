import "./cardspageprincipale.css";
import chantalvivent from "../../images/nouvelles/chantal-viventcopti.png"
const CardsPagePrincipale = (props) => {
  return (
    <div className="filterContainer"  id="sectionmenuprincipal">
    <div className="cardsPagePrincipaleContainer">
      <p className="texteBienvenue"> Vous cherchez un nouveau départ ? <br/> <br/> Prêt(e) à un changement positif dans votre vie ? <br/> <br/> Laissez-moi vous guider vers votre plein potentiel grace à la médiumnité et la connexion aux énergies. <br/> <br/> Contactez moi
</p>
      <div className="portraitContainer">
        <img src={chantalvivent} className="imgChantalVivent"  alt='chantal vivent'/>
      </div>
    </div>
    </div>
  );
};
export default CardsPagePrincipale;
