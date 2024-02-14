import "./pagegalerie.css";
import CarteInformations6 from "../../components/carteinformations6/CarteInformations6";
import CarteInformations7 from "../../components/carteinformations7/CarteInformations7";
import img1 from "../../images/21.png"
import img2 from "../../images/23.jpg"
import img3 from "../../images/24.jpg"
import img4 from "../../images/25.jpg"
const PageGalerie = () => {
  return (
    <div className="pageGalerieContainer">
     <CarteInformations6
     titre="Le cadre idéal"
     texte="En offrant de la visibilité aux artisans a l'aide de notre boutique, nous aidons à la fois nos artisans, mais aussi la continuité d'œuvres et créations créer manuellement avec des matériaux nobles"
     img={img1} 
     />
     <CarteInformations7
     titre="Le cadre idéal"
     texte="En offrant de la visibilité aux artisans a l'aide de notre boutique, nous aidons à la fois nos artisans, mais aussi la continuité d'œuvres et créations créer manuellement avec des matériaux nobles"
     img={img2} 
     />
      <CarteInformations6
     titre="Le cadre idéal"
     texte="En offrant de la visibilité aux artisans a l'aide de notre boutique, nous aidons à la fois nos artisans, mais aussi la continuité d'œuvres et créations créer manuellement avec des matériaux nobles"
     img={img3} 
     />
       <CarteInformations7
     titre="Le cadre idéal"
     texte="En offrant de la visibilité aux artisans a l'aide de notre boutique, nous aidons à la fois nos artisans, mais aussi la continuité d'œuvres et créations créer manuellement avec des matériaux nobles"
     img={img4} 
     />
    </div>
  );
};
export default PageGalerie;
