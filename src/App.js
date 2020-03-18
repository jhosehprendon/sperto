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
// Agency
import GuiaLeadMagnet from './components/GuiaLeadMagnet';
import DescargarGuiaLeadMagnet from './components/DescargarGuiaLeadMagnet'

import GuiaMaximizador from './components/GuiaMaximizador';
import FBGrupo from './components/FBGrupo';
import DescargarGuiaMaximizador from './components/DescargarGuiaMaximizador';
import VideoSystem from './components/VideoSystem';
import ArticuloLeadMagnet from './components/ArticuloLeadMagnet';
import ArticuloSistema from './components/ArticuloSistema';

import VideoEstrategia from'./components/EmailVideoSequence/VideoEstrategia';
import ObjetivoMarketing from'./components/EmailVideoSequence/ObjetivoMarketing';
import AntesDespues from'./components/EmailVideoSequence/AntesDespues';
import LeadMagnet from'./components/EmailVideoSequence/LeadMagnet';
import Tripwire from'./components/EmailVideoSequence/Tripwire';
import MaximizadorGanancias from'./components/EmailVideoSequence/MaximizadorGanancias';
import ReturnPath from'./components/EmailVideoSequence/ReturnPath';
import FBLeadGen from'./components/EmailVideoSequence/FBLeadGen';
import PageLeadGen from'./components/EmailVideoSequence/PageLeadGen';
//
import Nosotros from './components/Nosotros';
import CursoReclutadoresPayment from './components/CursoReclutadoresPayment';
import ConsultaGracias from './components/ConsultaGracias';
import GuiaEsquemaGoogle from './components/GuiaEsquemaGoogle';
import GuiaEsquemaGoogleGracias from './components/GuiaEsquemaGoogleGracias';
import GuiaSiglasIT from './components/GuiaSiglasIT';
import GuiaSiglasITGracias from './components/GuiaSiglasITGracias';
import Entrenamiento from './components/Entrenamiento';
import DescargarGuiaEmail from './components/DescargarGuiaEmails';
import DescargarGuiaEsquema from './components/DescargarGuiaEsquema';
import DescargarGuiaSiglasIT from './components/DescargarGuiaSiglasIT';
//Blog
import ArticuloGeneracionRec from './components/ArticuloGeneracionRec';
import ArticuloEmbudoReclutador from './components/ArticuloEmbudoReclutador';
import ArticuloReclutadorVendedor from './components/ArticuloReclutadorVendedor';
import ArticuloRealidad from './components/ArticuloRealidad';

import GoogleAnalytics from './components/GoogleAnalytics';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Route path="/" render={({location}) => {
          if (typeof window.ga === 'function') {
            window.ga('set', 'page', location.pathname + location.search);
            window.ga('send', 'pageview');
          }
          return null;
        }} />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/case-remarketing" exact component={RemarketingCase} />
          <Route path="/case-remarketing/gracias" component={RemarketingCaseGracias} />
          <Route path="/interests-tool" component={InterestsTool} />

          {/* Manager Funnel */}
          <Route path="/guia-esquema-google" exact component={GuiaEsquemaGoogle} />
          <Route path="/guia-esquema-google/gracias" component={GuiaEsquemaGoogleGracias} />

          {/* Agency Funnel */}          
          <Route path="/guia-lead-magnet" exact component={GuiaLeadMagnet} />
          <Route path="/descarga-guia-lead-magnet" component={DescargarGuiaLeadMagnet} />

          <Route path="/guia-maximizador" exact component={GuiaMaximizador} />
          <Route path="/fb-grupo" exact component={FBGrupo} />
          <Route path="/descarga-guia-maximizador" component={DescargarGuiaMaximizador} />
          <Route path="/video-sistema-marketing" component={VideoSystem} />

          <Route path="/email/video-estrategia" component={VideoEstrategia} />
          <Route path="/email/objetivo-marketing" component={ObjetivoMarketing} />
          <Route path="/email/antes-despues" component={AntesDespues} />
          <Route path="/email/lead-magnet" component={LeadMagnet} />
          <Route path="/email/tripwire" component={Tripwire} />
          <Route path="/email/maximizador" component={MaximizadorGanancias} />
          <Route path="/email/return-path" component={ReturnPath} />
          <Route path="/email/fb-lead-gen" component={FBLeadGen} />
          <Route path="/email/page-lead-gen" component={PageLeadGen} />

          {/* Recruiter Funnel */}
          <Route path="/curso-sistema-reclutadores" exact component={CursoReclutadores} />
          <Route path="/curso-sistema-reclutadores/payment" component={CursoReclutadoresPayment} />

          <Route path="/guia-email-candidato" exact component={GuiaEmailCandidato} />
          <Route path="/guia-email-candidato/gracias" component={GuiaEmailCandidatoGracias} />

          <Route path="/guia-sistema" exact component={GuiaSistema} />
          <Route path="/guia-sistema/gracias" exact component={GuiaSistemaGracias} />

          <Route path="/guia-siglas-it" exact component={GuiaSiglasIT} />
          <Route path="/guia-siglas-it/gracias" exact component={GuiaSiglasITGracias} />

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
          <Route path="/descarga-guia-siglas-it" component={DescargarGuiaSiglasIT} />

          <Route path="/sobre-nosotros" component={Nosotros} />

          {/* Blog */}
          <Route path='/blog/nueva-generacion-de-reclutadores' exact={true} component={ArticuloGeneracionRec} />
          <Route path='/blog/embudo-candidatos' exact={true} component={ArticuloEmbudoReclutador} />
          <Route path='/blog/reclutador-vendedor' exact={true} component={ArticuloReclutadorVendedor} />

          <Route path='/blog/lead-magnet' exact={true} component={ArticuloLeadMagnet} />
          <Route path='/blog/sistema' exact={true} component={ArticuloSistema} />

          <Route path='/blog/realidad-marketing' exact={true} component={ArticuloRealidad} />

          {/* Redirects */}
          <Route path='/secuencia/video-4' exact={true} component={MiniCurso} />
          <Route path='/secuencia/*' exact={true} component={SecuenciaVideo1} />
          <Route path='*' exact={true} component={Home} />
        </Switch>
        <GoogleAnalytics />
      </Router>
    )
  }
};


export default App;
