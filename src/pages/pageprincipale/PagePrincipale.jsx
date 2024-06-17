import "./pageprincipale.css";
import CardsPagePrincipale from "../../components/cardsPagePrincipale/CardsPagePrincipale";
const PagePrincipale = () => {
  return (
    <div className="PagePrincipaleContainer">
      <CardsPagePrincipale
        titremenu1="Mes prestations"
        titremenu2="Me contacter"
        titremenu3="À propos de moi"
        titremenu4="La vibration de l'énergie"
        titremenu5="Sagesse des mots"
      />
    </div>
  );
};
export default PagePrincipale;
