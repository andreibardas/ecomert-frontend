import React from 'react';
import {Switch, Route} from "react-router-dom";

import './App.css';

import HomePage from "../src/pages/components/homepage.component";

const Dulciuri = () =>(
  <div>
    <h1>DULCIURI</h1>
      <h2>Pagina in lucru</h2>
  </div>
);
const Snacks = () =>(
    <div>
        <h1>APERITIVE SARATE</h1>
        <h2>Pagina in lucru</h2>
    </div>
);
const Cafea = () =>(
    <div>
        <h1>CAFEA SI CEAI</h1>
        <h2>Pagina in lucru</h2>
    </div>
);
const Bere = () =>(
    <div>
        <h1>BERE SI CIDRU</h1>
        <h2>Pagina in lucru</h2>
    </div>
);
const Alcool = () =>(
    <div>
        <h1>BAUTURI ALCOOLICE</h1>
        <h2>Pagina in lucru</h2>
    </div>
);
const Tutun = () =>(
    <div>
        <h1>TUTUN</h1>
        <h2>Pagina in lucru</h2>
    </div>
);
const Apa = () =>(
    <div>
        <h1>APA</h1>
        <h2>Pagina in lucru</h2>
    </div>
);
const Suc = () =>(
    <div>
        <h1>SUCURI</h1>
        <h2>Pagina in lucru</h2>
    </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
        <Route path={process.env.PUBLIC_URL + '/dulciuri'} component={Dulciuri} />
        <Route path={process.env.PUBLIC_URL + '/snacks'} component={Snacks} />
        <Route path={process.env.PUBLIC_URL + '/cafea'} component={Cafea} />
        <Route path={process.env.PUBLIC_URL + '/bere'} component={Bere} />
        <Route path={process.env.PUBLIC_URL + '/alcool'} component={Alcool} />
        <Route path={process.env.PUBLIC_URL + '/tutun'} component={Tutun} />
        <Route path={process.env.PUBLIC_URL + '/apa'} component={Apa} />
        <Route path={process.env.PUBLIC_URL + '/suc'} component={Suc} />
      </Switch>

    </div>
  );
}

export default App;
