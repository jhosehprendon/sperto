import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import history from './history';
import Home from './components/Home';
import Header from './components/Header';
import RemarketingCase from './components/RemarketingCase';
import RemarketingCaseGracias from './components/RemarketingCaseGracias';
import InterestsTool from './components/InterestsTool';
import CursoReclutadores from './components/CursoReclutadores';
import GuiaEmailCandidato from './components/GuiaEmailCandidato';
import GuiaEmailCandidatoGracias from './components/GuiaEmailCandidatoGracias'
import SecuenciaVideo1 from './components/SecuenciaVideo1';
import SecuenciaVideo2 from './components/SecuenciaVideo2';
import SecuenciaVideo3 from './components/SecuenciaVideo3';
import MiniCurso from './components/MiniCurso';
import Consulta from './components/Consulta';
import GuiaSistema from './components/GuiaSistema';
import GuiaSistemaGracias from './components/GuiaSistemaGracias';
import Nosotros from './components/Nosotros';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/case-remarketing" exact component={RemarketingCase} />
          <Route path="/case-remarketing/gracias" component={RemarketingCaseGracias} />
          <Route path="/interests-tool" component={InterestsTool} />
          {/* Recruiter Funnel */}
          <Route path="/curso-sistema-reclutadores" component={CursoReclutadores} />
          <Route path="/guia-email-candidato" exact component={GuiaEmailCandidato} />
          <Route path="/guia-email-candidato/gracias" component={GuiaEmailCandidatoGracias} />
          <Route path="/guia-sistema" exact component={GuiaSistema} />
          <Route path="/guia-sistema/gracias" exact component={GuiaSistemaGracias} />
          <Route path="/secuencia/video-1" component={SecuenciaVideo1} />
          <Route path="/secuencia/video-2" component={SecuenciaVideo2} />
          <Route path="/secuencia/video-3" component={SecuenciaVideo3} />
          <Route path="/mini-curso" component={MiniCurso} />
          <Route path="/consulta" component={Consulta} />
          <Route path="/sobre-nosotros" component={Nosotros} />
          {/* Redirects */}
          <Route path='/secuencia/video-4' exact={true} component={MiniCurso} />
          <Route path='/secuencia/*' exact={true} component={SecuenciaVideo1} />
          <Route path='*' exact={true} component={Home} />
        </Switch>
      </Router>
    )
  }
};


export default App;
