import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Wohnungsaufloesung from './pages/Wohnungsaufloesung'
import Haushaltsaufloesung from './pages/Haushaltsaufloesung'
import Entruempelung from './pages/Entruempelung'
import KellerDachboden from './pages/KellerDachboden'
import SperrmüllEntsorgung from './pages/SperrmüllEntsorgung'
import Nachlassentruempelung from './pages/Nachlassentruempelung'
import MessieEntruempelung from './pages/MessieEntruempelung'
import Gewerbeentruempelung from './pages/Gewerbeentruempelung'
import EntruempelungKosten from './pages/EntruempelungKosten'
import EntruempelungBeckum from './pages/EntruempelungBeckum'
import EntruempelungHamm from './pages/EntruempelungHamm'
import EntruempelungWarendorf from './pages/EntruempelungWarendorf'
import EntruempelungOelde from './pages/EntruempelungOelde'
import EntruempelungDrensteinfurt from './pages/EntruempelungDrensteinfurt'
import EntruempelungSendenhorst from './pages/EntruempelungSendenhorst'
import EntruempelungEnnigerloh from './pages/EntruempelungEnnigerloh'
import EntruempelungMuenster from './pages/EntruempelungMuenster'
import EntruempelungLippstadt from './pages/EntruempelungLippstadt'
import EntruempelungGuetersloh from './pages/EntruempelungGuetersloh'
import EntruempelungWerne from './pages/EntruempelungWerne'
import EntruempelungTelgte from './pages/EntruempelungTelgte'
import EntruempelungLuedinghausen from './pages/EntruempelungLuedinghausen'
import Gartenraeumung from './pages/Gartenraeumung'
import EntruempelungAuszug from './pages/EntruempelungAuszug'
import Seniorenentruempelung from './pages/Seniorenentruempelung'
import ElektroschrottEntsorgung from './pages/ElektroschrottEntsorgung'
import MoebelEntsorgung from './pages/MoebelEntsorgung'
import EntruempelungCheckliste from './pages/EntruempelungCheckliste'
import SperrmüllRatgeber from './pages/SperrmüllRatgeber'
import EntruempelungSteuer from './pages/EntruempelungSteuer'
import EntruempelungSelberMachen from './pages/EntruempelungSelberMachen'
import FuerVermieter from './pages/FuerVermieter'
import FuerErbengemeinschaften from './pages/FuerErbengemeinschaften'
import FAQ from './pages/FAQ'
import Kontakt from './pages/Kontakt'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {/* Leistungen */}
        <Route path="wohnungsaufloesung" element={<Wohnungsaufloesung />} />
        <Route path="haushaltsaufloesung" element={<Haushaltsaufloesung />} />
        <Route path="entruempelung" element={<Entruempelung />} />
        <Route path="keller-dachboden" element={<KellerDachboden />} />
        <Route path="sperrmuell-entsorgung" element={<SperrmüllEntsorgung />} />
        <Route path="nachlassentruempelung" element={<Nachlassentruempelung />} />
        <Route path="messie-entruempelung" element={<MessieEntruempelung />} />
        <Route path="gewerbeentruempelung" element={<Gewerbeentruempelung />} />
        <Route path="gartenraeumung" element={<Gartenraeumung />} />
        <Route path="entruempelung-auszug" element={<EntruempelungAuszug />} />
        <Route path="seniorenentruempelung" element={<Seniorenentruempelung />} />
        <Route path="elektroschrott-entsorgung" element={<ElektroschrottEntsorgung />} />
        <Route path="moebel-entsorgung" element={<MoebelEntsorgung />} />
        <Route path="entruempelung-kosten" element={<EntruempelungKosten />} />
        {/* Einsatzgebiete */}
        <Route path="entruempelung-beckum" element={<EntruempelungBeckum />} />
        <Route path="entruempelung-hamm" element={<EntruempelungHamm />} />
        <Route path="entruempelung-warendorf" element={<EntruempelungWarendorf />} />
        <Route path="entruempelung-oelde" element={<EntruempelungOelde />} />
        <Route path="entruempelung-drensteinfurt" element={<EntruempelungDrensteinfurt />} />
        <Route path="entruempelung-sendenhorst" element={<EntruempelungSendenhorst />} />
        <Route path="entruempelung-ennigerloh" element={<EntruempelungEnnigerloh />} />
        <Route path="entruempelung-muenster" element={<EntruempelungMuenster />} />
        <Route path="entruempelung-lippstadt" element={<EntruempelungLippstadt />} />
        <Route path="entruempelung-guetersloh" element={<EntruempelungGuetersloh />} />
        <Route path="entruempelung-werne" element={<EntruempelungWerne />} />
        <Route path="entruempelung-telgte" element={<EntruempelungTelgte />} />
        <Route path="entruempelung-luedinghausen" element={<EntruempelungLuedinghausen />} />
        {/* Ratgeber */}
        <Route path="entruempelung-checkliste" element={<EntruempelungCheckliste />} />
        <Route path="sperrmuell-ratgeber" element={<SperrmüllRatgeber />} />
        <Route path="entruempelung-steuer" element={<EntruempelungSteuer />} />
        <Route path="entruempelung-selber-machen" element={<EntruempelungSelberMachen />} />
        {/* Zielgruppen */}
        <Route path="fuer-vermieter" element={<FuerVermieter />} />
        <Route path="fuer-erbengemeinschaften" element={<FuerErbengemeinschaften />} />
        {/* Sonstiges */}
        <Route path="faq" element={<FAQ />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
      </Route>
    </Routes>
  )
}
