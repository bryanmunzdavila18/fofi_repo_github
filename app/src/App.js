import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AvatarComponent from './components/AvatarComponent';
import BottomNavigationComponent from './components/BottomNavigationComponent';
import CardComponent from './components/CardComponent';
import ChartContainer from "./components/ChartComponent";
import ChatComponent from "./components/ChatComponent";
import DrawerRouterContainer from './components/DrawerRouterContainer';
import MenuComponent from './components/MenuComponent';
import PanelBarComponent from './components/PanelBarComponent';
import ScheduleComponent from "./components/ScheduleComponent";
import SplitterComponent from './components/SplitterComponent';
import StepperComponent from './components/StepperComponent';
import TabStripComponent from './components/TabStripComponent';
import TileLayoutComponent from './components/TileLayoutComponent';

const App = () => {
    const [user, setUser] = useState('');
    
    return <React.Fragment>
        <HashRouter>
            <DrawerRouterContainer>
                <Switch>
                    <Route exact={true} path="/" component={AvatarComponent} />
                    <Route exact={true} path="/bottomnavigation" component={BottomNavigationComponent} />
                    <Route exact={true} path="/card" component={CardComponent} />
                    <Route exact={true} path="/menu" component={MenuComponent} />
                    <Route exact={true} path="/panelbar" component={PanelBarComponent} />
                    <Route exact={true} path="/splitter" component={SplitterComponent} />
                    <Route exact={true} path="/stepper" component={StepperComponent} />
                    <Route exact={true} path="/tabstrip" component={TabStripComponent} />
                    <Route exact={true} path="/tilelayout" component={TileLayoutComponent} />
                    <Route exact={true} path="/chatcomponent" component={ChatComponent} />
                    <Route exact={true} path="/schedulecomponent" component={ScheduleComponent} />
                    <Route exact={true} path="/chartcomponent" component={ChartContainer} />
                </Switch>
            </DrawerRouterContainer>
        </HashRouter>
    </React.Fragment>;
};

export default App;