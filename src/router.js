import React from 'react';
import { BrowserRouter,HashRouter,Route,Switch} from 'react-router-dom';
import Login from './components/login/login';
import Index from './components/index'
import './App.css';
class RouterList extends React.Component {
    render(){
        return(
            <BrowserRouter >
                <Switch>
                    <Route exact  path="/" component={Login} />
                    <Route path="/index" component={Index}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default RouterList;