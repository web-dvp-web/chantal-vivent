import "./cardspageprincipale.css";
import livremontagne from "../../images/leblog.jpg";
const CardsPagePrincipale = (props) => {
  return (
    <div className="cardsPagePrincipaleContainer">
      <div className="cards1and2Container">
        <div className="cards1Container">
          <a href="/Pagemenu1">
            <p className="titreMenu1">{props.titremenu1}</p>
          </a>
        </div>
        <div className="cards2Container">
          <a href="/contact">
            <p className="titreMenu2">{props.titremenu2}</p>
          </a>
        </div>
      </div>
        <a className="aLeBlog" href="/leblog">
      <div className="cards3Container">
        <p className="titreMenu3">{props.titremenu3}</p>
        <img src={livremontagne} className="imgLivreMontagne" alt="montagne" />
      </div>
        </a>
    </div>
  );
};
export default CardsPagePrincipale;