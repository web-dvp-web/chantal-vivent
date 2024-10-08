import "./App.css";
import { Routes, Route } from "react-router-dom";
import PagePrincipale from "./pages/pageprincipale/PagePrincipale";
import Header from "./components/header/Header";
import Navbar2 from "./components/navbar2/NavBar2";
import Footer from "./components/footer/Footer";
import logochantalvivent from "./images/logochantalvivent.jpg";
import PageContact from "./pages/pagecontact/PageContact";
import PageGalerie from "./pages/pagegalerie/PageGalerie";
import PagePrestations from "./pages/pageprestations/PagePrestations";
import PageMentionsLegales from "./pages/pagementionslegales/PageMentionsLegales";
import PageCharte from "./pages/pagecharte/PageCharte";
import logochantalviventcarre from './images/logochantalvivent.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="reverseHeader">
        <Navbar2 
        lien1NB2="Menu Principal"
        lien2NB2="Mes Prestations"
        lien3NB2="Me contacter"
        lien4NB2="À propos de moi"
        lien5NB2="Mentions Légales"
        lien5NB22="Charte Éthique"
        tel="06 80 52 04 94"
        />
        <Header
          h1header="CHANTAL VIVENT"
          soustitre="Médium • Voyante  •  Energéticienne "
          logo={logochantalvivent}
          />
          </div>
        <Routes>
          <Route path="/" element={<PagePrincipale />} />
          <Route path="/prestations-chantalvivent-Medium-Voyante" element={<PagePrestations />} />
          <Route
             exact path="/contact-chantal-vivent"
            element={
              <PageContact
                lundi="9h-20h30"
                mardi="9h-20h30"
                mercredi="9h-20h30"
                jeudi="9h-20h30"
                vendredi="9h-20h30"
                samedi="9h-13h"
                dimanche="férmé"
                tel="06 80 52 04 94"
                mail="chantalvivent65@gmail.com"
                adresse="7 Chem. de Bonzoumet, 31310 Montesquieu-Volvestre"
              />
            }
          />
          <Route path="/aproposdemoi-Chantal-Vivent" element={<PageGalerie />} />
      <Route  path="/mentionslegales" element={<PageMentionsLegales />} />
      <Route  path="/charte-éthique" element={<PageCharte />} />
        </Routes>

      </header>
      <Footer
        titre="CHANTAL VIVENT"
        soustitre="Médium • Voyante  •  Energéticienne "
        mail="chantalvivent65@gmail.com"
        tel="06 80 52 04 94"
        adresse="7 Chem. de Bonzoumet, 31310 Montesquieu-Volvestre"
        logo={logochantalviventcarre}
      />
   
    </div>
  );
}

export default App;
