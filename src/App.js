import "./App.css";
import { Routes, Route } from "react-router-dom";
import PagePrincipale from "./pages/pageprincipale/PagePrincipale";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import logonaturosport from "./images/logonaturosport.png";
import PageContact from "./pages/pagecontact/PageContact";
import PageGalerie from "./pages/pagegalerie/PageGalerie";
import PageMenu1 from "./pages/pagemenu1/PageMenu1";
import PageMentionsLegales from "./pages/pagementionslegales/PageMentionsLegales";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header
          h1header="SB NaturoSport"
          soustitre="naturopathe •
          nutrithérapeute"
          logo={logonaturosport}
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
                tel="06.00.00.00.82"
                mail="ciseauxdor@gmail.com"
                adresse="33 rue de neneak 09348 Juejsa"
              />
            }
          />
          <Route exact path="/pagegalerie" element={<PageGalerie />} />
      <Route exact path="/mentionslegales" element={<PageMentionsLegales />} />
        </Routes>
      </header>
      <Footer
        titre="CoifAir"
        soustitre="naturopathe • nutrithérapeute"
        tel="06.36.65.65.65"
        mail="lesciseauxdor@gmail.com"
        adresse="14 avenue de la République 09000 Foix"
        logo={logonaturosport}
      />
    </div>
  );
}

export default App;
