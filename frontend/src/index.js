import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Lista from './routes/Listar';
import Inserir from './routes/Inserir';
import Extrair from './routes/Extrair';

// import './styles/style.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path='/listar' component={Lista} />
        <Route path='/inserir' component={Inserir} />
        <Route path='/extrair' component={Extrair} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


