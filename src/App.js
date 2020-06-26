import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/header";
import bgImage from "./img/main_bg.png";
import {ArrowNav, BlockTitle, Titles} from "./components/components";
import {Home} from "./components/home";
import {Route, Switch} from "react-router";
import {About} from "./components/about";
import {Resume} from "./components/resume";
import {Portfolio} from "./components/portfolio";
import {Contact} from "./components/contact";
import {Blog} from "./components/blog";

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
                                <Route path="/resume" render={() => <Resume/>}/>
                                <Route path="/portfolio" render={() => <Portfolio/>}/>
                                <Route path="/blog" render={() => <Blog/>}/>
                                <Route path="/contact" render={() => <Contact/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
