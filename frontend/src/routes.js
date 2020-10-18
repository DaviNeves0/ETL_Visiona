import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Login from './pages/login';
import Lista from './pages/listar';
import Inserir from './pages/inserir';



export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path='/listar' component={Lista}/>
            <Route path='/inserir' component={Inserir}/>
        </Switch>
    </BrowserRouter> 
    );
}