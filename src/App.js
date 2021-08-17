import React from 'react';

//Page
import Home from './pages/Home';

//React Router Dom 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importar State de fromulario 
import FormularioState from './context/formularioContext/formularioState';

function App() {
  return (
    <FormularioState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </FormularioState>
  );
}

export default App;
