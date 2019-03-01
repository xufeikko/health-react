import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './components/login/login';
import Index from './components/index'
import './App.css';
class RouterList extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact  path="/" component={Login} />
                        <Route path="/index" component={Index}/>
                    </Switch>
                </div>

            </BrowserRouter>
        )
    }
}
export default RouterList;