import "./cardspageprincipale.css";
import chantalvivent from "../../images/nouvelles/chantal-viventc.png"
const CardsPagePrincipale = (props) => {
  return (
    <div className="filterContainer">
    <div className="cardsPagePrincipaleContainer">
      <p className="texteBienvenue"> "Je vous souhaite la bienvenue dans mon monde de medium voyante énergéticienne en lien avec le visible-invisible. De part ma connexion, vous recevrez les messages de votre coeur, de votre âme, de vos guides de lumière. "
</p>
      
        
      <div className="portraitContainer">
        <img src={chantalvivent} className="imgChantalVivent" />
      </div>
    </div>
    </div>
  );
};
export default CardsPagePrincipale;
