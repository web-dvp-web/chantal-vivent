import "./App.css";
import { Routes, Route } from "react-router-dom";
import PagePrincipale from "./pages/pageprincipale/PagePrincipale";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import logochantalvivent from "./images/logochantalvivent.png";
import PageContact from "./pages/pagecontact/PageContact";
import PageGalerie from "./pages/pagegalerie/PageGalerie";
import PageMenu1 from "./pages/pagemenu1/PageMenu1";
import PageMentionsLegales from "./pages/pagementionslegales/PageMentionsLegales";
import PageCharte from "./pages/pagecharte/PageCharte";
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
                lundi="8h-12h 13h30-16h30"
                mardi="8h-12h 13h30-16h30"œ
                mercredi="fermé"
                jeudi="8h-12h 13h30-16h30"
                vendredi="8h-12h 13h30-16h30"
                samedi="8h-12h 13h30-16h30"
                dimanche="férmé"
                tel="06 80 52 04 94"
                mail="chantalvivent65@gmail.com"
                adresse="Montesquieu Volvestre"
              />
            }
          />
          <Route exact path="/leblog" element={<PageGalerie />} />
      <Route exact path="/mentionslegales" element={<PageMentionsLegales />} />
      <Route exact path="/charte" element={<PageCharte />} />
        </Routes>

      </header>
      <Footer
        titre="Chantal Vivent"
        soustitre="Medium • Voyante  •  Energéticienne "
        mail="chantalvivent65@gmail.com"
        tel="06 80 52 04 94"
        adresse="Montesquieu Volvestre"
        logo={logochantalvivent}
      />
    </div>
  );
}

export default App;
