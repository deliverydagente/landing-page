import { BrowserRouter as Router, Route } from "react-router-dom";
import * as rdd from "react-device-detect";
import TermsOfUse from "../pages/termos-de-uso";
import PolicyAndPrivacy from "../pages/poliitica-de-privacidade";
import Estabelecimentos from "../pages/estabelecimentos";
import EstabelecimentosConfirmacao from "../container/EstabelecimentosConfirmacao";

import LandingPage from "../pages/index";

const Routes = () => {
  console.log({
    rdd,
  });
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/termos-de-uso" component={TermsOfUse} />
      <Route path="/politica-de-privacidade" component={PolicyAndPrivacy} />
      <Route path="/estabelecimentos" component={Estabelecimentos} />
      <Route
        path="/estabelecimentos-confirmacao"
        component={EstabelecimentosConfirmacao}
      />
    </Router>
  );
};

export default Routes;
