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
import SecuenciaVideo3Consulta from './components/SecuenciaVideo3Consulta';
import SecuenciaVideo3Curso from './components/SecuenciaVideo3Curso';
import MiniCurso from './components/MiniCurso';
import MiniCursoRegistro from './components/MiniCursoRegistro';
import Consulta from './components/Consulta';
import GuiaSistema from './components/GuiaSistema';
import GuiaSistemaGracias from './components/GuiaSistemaGracias';
import Nosotros from './components/Nosotros';
import CursoReclutadoresPayment from './components/CursoReclutadoresPayment';
import ConsultaGracias from './components/ConsultaGracias';
import GuiaEsquemaGoogle from './components/GuiaEsquemaGoogle';
import GuiaEsquemaGoogleGracias from './components/GuiaEsquemaGoogleGracias';
import Entrenamiento from './components/Entrenamiento';
import DescargarGuiaEmail from './components/DescargarGuiaEmails';
import DescargarGuiaEsquema from './components/DescargarGuiaEsquema';
//Blog
import ArticuloGeneracionRec from './components/ArticuloGeneracionRec';
import ArticuloEmbudoReclutador from './components/ArticuloEmbudoReclutador';
import ArticuloReclutadorVendedor from './components/ArticuloReclutadorVendedor';

history.listen((location) => {
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview');
});

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

          {/* Manager Funnel */}
          <Route path="/guia-esquema-google" exact component={GuiaEsquemaGoogle} />
          <Route path="/guia-esquema-google/gracias" component={GuiaEsquemaGoogleGracias} />

          {/* Recruiter Funnel */}
          <Route path="/curso-sistema-reclutadores" exact component={CursoReclutadores} />
          <Route path="/curso-sistema-reclutadores/payment" component={CursoReclutadoresPayment} />

          <Route path="/guia-email-candidato" exact component={GuiaEmailCandidato} />
          <Route path="/guia-email-candidato/gracias" component={GuiaEmailCandidatoGracias} />

          <Route path="/guia-sistema" exact component={GuiaSistema} />
          <Route path="/guia-sistema/gracias" exact component={GuiaSistemaGracias} />

          <Route path="/secuencia/video-1" component={SecuenciaVideo1} />
          <Route path="/secuencia/video-2" component={SecuenciaVideo2} />
          <Route path="/secuencia/video-3-consulta" component={SecuenciaVideo3Consulta} />
          <Route path="/secuencia/video-3" component={SecuenciaVideo3Curso} />
          <Route path="/secuencia/video-3-curso" component={SecuenciaVideo3Curso} />

          <Route path="/mini-curso" exact component={MiniCurso} />
          <Route path="/mini-curso/registro" component={MiniCursoRegistro} />

          <Route path="/consulta" exact component={Consulta} />
          <Route path="/consulta/gracias" component={ConsultaGracias} />

          <Route path="/entrenamiento" component={Entrenamiento} />

          <Route path="/descarga-guia-emails" component={DescargarGuiaEmail} />
          <Route path="/descarga-guia-esquema" component={DescargarGuiaEsquema} />

          <Route path="/sobre-nosotros" component={Nosotros} />

          {/* Blog */}
          <Route path='/blog/nueva-generacion-de-reclutadores' exact={true} component={ArticuloGeneracionRec} />
          <Route path='/blog/embudo-candidatos' exact={true} component={ArticuloEmbudoReclutador} />
          <Route path='/blog/reclutador-vendedor' exact={true} component={ArticuloReclutadorVendedor} />

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
