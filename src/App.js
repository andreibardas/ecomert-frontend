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
        <Route path="/dulciuri" component={Dulciuri} />
        <Route path="/snacks" component={Snacks} />
        <Route path="/cafea" component={Cafea} />
        <Route path="/bere" component={Bere} />
        <Route path="/alcool" component={Alcool} />
        <Route path="/tutun" component={Tutun} />
        <Route path="/apa" component={Apa} />
        <Route path="/suc" component={Suc} />
      </Switch>

    </div>
  );
}

export default App;
