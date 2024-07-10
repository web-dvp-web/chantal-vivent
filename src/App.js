import "./App.css";
import { Routes, Route } from "react-router-dom";
import PagePrincipale from "./pages/pageprincipale/PagePrincipale";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import logochantalvivent from "./images/logomedaillon.png";
import PageContact from "./pages/pagecontact/PageContact";
import PageGalerie from "./pages/pagegalerie/PageGalerie";
import PageMenu1 from "./pages/pagemenu1/PageMenu1";
import PageMentionsLegales from "./pages/pagementionslegales/PageMentionsLegales";
import PageCharte from "./pages/pagecharte/PageCharte";
import logochantalviventcarre from './images/logochantalvivent.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header
          h1header="Chantal Vivent"
          soustitre="Medium • Voyante  •  Energéticienne "
          logo={logochantalvivent}
        />
        <Routes>
          <Route path="/" element={<PagePrincipale />} />
          <Route exact path="/pagemenu1" element={<PageMenu1 />} />
          <Route
             exact path="/contact"
            element={
              <PageContact
              
                lundi="9h-20h30"
                mardi="9h-20h30"
                mercredi="9h-20h30"
                jeudi="9h-20h30"
                vendredi="9h-20h30"
                samedi="9h-20h30"
                dimanche="férmé"
                tel="06 80 52 04 94"
                mail="chantalvivent65@gmail.com"
                adresse="7 Chem. de Bonzoumet, 31310 Montesquieu-Volvestre"
              />
            }
          />
          <Route exact path="/leblog" element={<PageGalerie />} />
      <Route exact path="/mentionslegales" element={<PageMentionsLegales />} />
      <Route exact path="/charte" element={<PageCharte />} />
        </Routes>

      </header>
      <Footer
        titre="CHANTAL VIVENT"
        soustitre="Medium • Voyante  •  Energéticienne "
        mail="chantalvivent65@gmail.com"
        tel="06 80 52 04 94"
        adresse="7 Chem. de Bonzoumet, 31310 Montesquieu-Volvestre"
        logo={logochantalviventcarre}
      />
    </div>
  );
}

export default App;
