import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/header";
import bgImage from "./img/main_bg.png";
import {ArrowNav, Titles} from "./components/components";
import {Home} from "./components/home";
import {Route, Switch} from "react-router";
import {About} from "./components/about";

const App = () => {
    const backgroundImage = `url(${bgImage})`

    return (
        <BrowserRouter>
            <div className="lmAnimatedBg" style={{backgroundImage}}/>
            <div className="page">
                <div className="pageContent">
                    <Header/>
                    <ArrowNav/>
                    <div className="contentArea">
                        <div className="animatedSections">
                            <Switch>
                                <Route path="/home" render={() => <Home/>}/>
                                <Route path="/about" render={() => <About/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
