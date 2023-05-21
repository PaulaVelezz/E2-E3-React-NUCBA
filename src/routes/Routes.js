import React from 'react';
import { 
    BrowserRouter,
    Route,
    Routes as RutasReactDom
} from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Pokesuki from '../pages/Pokesuki/Pokesuki';
import ToDoApp from '../pages/ToDoApp/ToDoApp';

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <RutasReactDom>
                    <Route path= "/" element= {<Home/>}/>
                    <Route path= "/todoapp" element= {<ToDoApp/>}/>
                    <Route path= "/pokesuki" element= {<Pokesuki/>}/>

                    <Route path="*" element= {<p>Estoy probando un error 404</p>}/>
                </RutasReactDom>
            </Layout> 
        </BrowserRouter>
    )
};

export default Routes;