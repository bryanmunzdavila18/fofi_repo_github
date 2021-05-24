import * as React from 'react';
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
import {useState} from "react";


const items = {
    Admin: [ {
        text: 'Avatar',
        icon: 'k-i-user',
        selected: true,
        route: '/'
    }, {
        text: 'Schedule',
        icon: 'k-i-envelop',
        route: '/schedulecomponent'
    }, {
        text: 'Chart',
        icon: 'k-i-envelop',
        route: '/chartcomponent'
    },],
    Customer: [ {
        text: 'Avatar',
        icon: 'k-i-user',
        selected: true,
        route: '/'
    }, {
        separator: true
    }, {
        text: 'BottomNavigation',
        icon: 'k-i-menu',
        route: '/bottomnavigation'
    }, {
        separator: true
    }, {
        text: 'Card',
        icon: 'k-i-image',
        route: '/card'
    }, {
        separator: true
    }, {
        text: 'Menu',
        icon: 'k-i-menu',
        route: '/menu'
    }, {
        separator: true
    }, {
        text: 'PanelBar',
        icon: 'k-i-layout-side-by-side',
        route: '/panelbar'
    }, {
        separator: true
    }, {
        text: 'Splitter',
        icon: 'k-i-arrows-resizing',
        route: '/splitter'
    }, {
        separator: true
    }, {
        text: 'Stepper',
        icon: 'k-i-list-numbered',
        route: '/stepper'
    }, {
        separator: true
    }, {
        text: 'TabStrip',
        icon: 'k-i-thumbnails-up',
        route: '/tabstrip'
    }, {
        separator: true
    }, {
        text: 'TileLayout',
        icon: 'k-i-layout-side-by-side',
        route: '/tilelayout'
    }, {
        text: 'Chat',
        icon: 'k-i-envelop',
        route: '/chatcomponent'
    }, ]
};
const App = () => {
    const userInitialState = {
        name: 'Valentis Pizza',
        isAdmin: false,
    };
    const [ user, serUser ] = useState(userInitialState);
    return <React.Fragment>
        <HashRouter>
            <DrawerRouterContainer 
                items={( user.isAdmin ) ? items.Admin : items.Customer}
                user={user}
            >
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
