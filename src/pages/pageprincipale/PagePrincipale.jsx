import "./pageprincipale.css";
import CardsPagePrincipale from "../../components/cardsPagePrincipale/CardsPagePrincipale";
const PagePrincipale = () => {
  return (
    <div className="PagePrincipaleContainer">
      <CardsPagePrincipale
        titremenu1="À propos de moi "
        titremenu2="Mes Prestations"
        titremenu3="Me Contacter"
      />
    </div>
  );
};
export default PagePrincipale;
