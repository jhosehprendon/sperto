import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import history from './history';
import Home from './components/Home';
import HomeEs from './components/HomeEs';
import Header from './components/Header';
import HeaderEn from './components/HeaderEn';
import RemarketingCase from './components/RemarketingCase';
import RemarketingCaseGracias from './components/RemarketingCaseGracias';
import InterestsTool from './components/InterestsTool';
import CursoReclutadores from './components/CursoReclutadores';
import SecuenciaVideo1 from './components/SecuenciaVideo1';
import SecuenciaVideo2 from './components/SecuenciaVideo2';
import SecuenciaVideo3Consulta from './components/SecuenciaVideo3Consulta';
import SecuenciaVideo3Curso from './components/SecuenciaVideo3Curso';
import MiniCurso from './components/MiniCurso';
import MiniCursoRegistro from './components/MiniCursoRegistro';
import Consulta from './components/Consulta';
import Consult from './components/Consult';
import GuiaSistema from './components/Guias/GuiaSistema';
import GuiaSistemaGracias from './components/Guias/DescargarSistemaGracias';

// Agency
import ArticuloSMI from './components/Articulos/ArticuloSMI';
import ArticuloSMIEn from './components/Articulos/ArticuloSMIEn';
import GuiaLeadMagnet from './components/Guias/GuiaLeadMagnet';
import GraciasGuiaLmManager from './components/Guias/GraciasGuiaLmManager';
import GraciasGuiaLmMarketer from './components/Guias/GraciasGuiaLmMarketer';
import DescargarGuiaLeadMagnet from './components/Guias/DescargarGuiaLeadMagnet';

import GetInterestTool from './components/GetInterestTool';
import GetInterestToolGracias from './components/GetInterestToolGracias';

import GuiaMaximizador from './components/Guias/GuiaMaximizador';
import FBGrupo from './components/FBGrupo';
import DescargarGuiaMaximizador from './components/Guias/DescargarGuiaMaximizador';
import VideoSystem from './components/VideoSystem';
import ArticuloLeadMagnet from './components/Articulos/ArticuloLeadMagnet';
import ArticuloSistema from './components/Articulos/ArticuloSistema';

import VideoEstrategia from'./components/EmailVideoSequence/VideoEstrategia';
import ObjetivoMarketing from'./components/EmailVideoSequence/ObjetivoMarketing';
import AntesDespues from'./components/EmailVideoSequence/AntesDespues';
import LeadMagnet from'./components/EmailVideoSequence/LeadMagnet';
import Tripwire from'./components/EmailVideoSequence/Tripwire';
import MaximizadorGanancias from'./components/EmailVideoSequence/MaximizadorGanancias';
import ReturnPath from'./components/EmailVideoSequence/ReturnPath';
import FBLeadGen from'./components/EmailVideoSequence/FBLeadGen';
import PageLeadGen from'./components/EmailVideoSequence/PageLeadGen';
import Cvo from'./components/EmailVideoSequence/Cvo';
import Remarketing from'./components/EmailVideoSequence/Remarketing';
import PreLaunch from'./components/EmailVideoSequence/PreLaunch';
//
import Nosotros from './components/Nosotros';
import CursoReclutadoresPayment from './components/CursoReclutadoresPayment';
import ConsultaGracias from './components/ConsultaGracias';
import Entrenamiento from './components/Entrenamiento';

//Blog
import ArticuloGeneracionRec from './components/Articulos/ArticuloGeneracionRec';
import ArticuloEmbudoReclutador from './components/Articulos/ArticuloEmbudoReclutador';
import ArticuloReclutadorVendedor from './components/Articulos/ArticuloReclutadorVendedor';
import ArticuloRealidad from './components/Articulos/ArticuloRealidad';
import ArticuloContenido from './components/Articulos/ArticuloContenido';

import GoogleAnalytics from './components/GoogleAnalytics';

//Jobs
import JobsNewsLetter from './components/JobsNewsLetter';
import JobsNewsLetterGracias from './components/JobsNewsLetterGracias';

import IntroUpwork from'./components/Curso/IntroUpwork';
import PlayListIntro from './components/Curso/PlayListIntro';
import MiniClass1 from './components/Curso/MiniClass1';
import MiniClass2 from './components/Curso/MiniClass2';
import MiniClass3 from './components/Curso/MiniClass3';
import RegisterMiniClass from './components/Curso/RegisterMiniClass';
import Curso from './components/Curso/Curso';


class App extends React.Component {
  renderHeaders() {
    if (history.location.pathname === '/'
      || history.location.pathname === '/consult'
      || history.location.pathname === '/sistema-smi/en'
      || history.location.pathname === '/interests-tool') {
      return <HeaderEn />
    } else {
      return <Header />
    }
  }

  render() {
    return (
      <Router history={history}>
        {this.renderHeaders()}
        <Route path="/" render={({location}) => {
          if (typeof window.ga === 'function') {
            window.ga('set', 'page', location.pathname + location.search);
            window.ga('send', 'pageview');
          }
          return null;
        }} />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/es" exact component={HomeEs}/>
          <Route path="/case-remarketing" exact component={RemarketingCase} />
          <Route path="/case-remarketing/gracias" component={RemarketingCaseGracias} />
          <Route path="/interests-tool" component={InterestsTool} />

          {/* Agency Funnel */} 
          <Route path="/sistema-smi" exact component={ArticuloSMI} />  
          <Route path="/sistema-smi/en" exact component={ArticuloSMIEn} />     
          <Route path="/guia-lead-magnet" exact component={GuiaLeadMagnet} />
          <Route path="/guia-lead-magnet/gracias-manager" component={GraciasGuiaLmManager} />
          <Route path="/guia-lead-magnet/gracias-marketer" component={GraciasGuiaLmMarketer} />
          <Route path="/descarga-guia-lead-magnet" component={DescargarGuiaLeadMagnet} />

          <Route path="/get-interest-tool" exact component={GetInterestTool} />
          <Route path="/get-interest-tool/gracias" exact component={GetInterestToolGracias} />

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
          <Route path="/email/cvo" component={Cvo} />
          <Route path="/email/remarketing" component={Remarketing} />
          <Route path="/email/prelaunch" component={PreLaunch} />

          {/* Jobs News Letter Funnel */}
          <Route path="/jobs-news-letter" exact component={JobsNewsLetter} />
          <Route path="/jobs-news-letter/gracias" exact component={JobsNewsLetterGracias} />

          <Route path="/email/intro-upwork" component={IntroUpwork} />

          <Route path="/playlist-intro" component={PlayListIntro} />

          <Route path="/mini-class" component={RegisterMiniClass} />
          <Route path="/mini-class-1" component={MiniClass1} />
          <Route path="/mini-class-2" component={MiniClass2} />
          <Route path="/mini-class-3" component={MiniClass3} />
          <Route path="/curso-marketing-digital" component={Curso} />

          {/* Recruiter Funnel */}
          <Route path="/curso-sistema-reclutadores" exact component={CursoReclutadores} />
          <Route path="/curso-sistema-reclutadores/payment" component={CursoReclutadoresPayment} />

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

          <Route path="/consult" exact component={Consult} />

          <Route path="/entrenamiento" component={Entrenamiento} />

          <Route path="/sobre-nosotros" component={Nosotros} />

          {/* Blog */}
          <Route path='/blog/nueva-generacion-de-reclutadores' exact={true} component={ArticuloGeneracionRec} />
          <Route path='/blog/embudo-candidatos' exact={true} component={ArticuloEmbudoReclutador} />
          <Route path='/blog/reclutador-vendedor' exact={true} component={ArticuloReclutadorVendedor} />

          <Route path='/blog/lead-magnet' exact={true} component={ArticuloLeadMagnet} />
          <Route path='/blog/sistema' exact={true} component={ArticuloSistema} />

          <Route path='/blog/realidad-marketing' exact={true} component={ArticuloRealidad} />
          <Route path='/blog/contenido' exact={true} component={ArticuloContenido} />

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
