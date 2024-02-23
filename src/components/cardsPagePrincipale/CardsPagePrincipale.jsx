import "./cardspageprincipale.css";
import videomenu3 from "../../videos/alaune.mp4"
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
        <a href="/pagegalerie">
      <div className="cards3Container">
          <p className="titreMenu3">{props.titremenu3}</p>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "70%",
          height: "98%",
                }}
      >
        <source src={videomenu3} type="video/mp4" />
      </video>
      </div>
        </a>
    </div>
  );
};
export default CardsPagePrincipale;
