import './App.css';
import React from 'react';

import { Switch, Route } from 'react-router';
import Title from './Components/Title';
import Body from './Components/Body';
import MusicMajik from './Projects/musicmagik';
import WhatToWear from './Projects/whattowear';
import PureHoney from './Projects/purehoney';
import Ships from './Projects/ships';
import MasterBlaster from './Projects/masterblaster';
import Capstone from './Projects/capstone';
import Overseer from './Projects/overseer';
import KingsGambit from './Projects/kingsgambit'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/capstone">
          <Capstone/>
        </Route>
        <Route path="/ships">
          <Ships/>
        </Route>
        <Route path="/kings-gambit">
          <KingsGambit/>
        </Route>
        <Route path="/overseer">
          <Overseer/>
        </Route>
        <Route path="/master-blaster">
          <MasterBlaster/>
        </Route>
        <Route path="/purehoney">
          <PureHoney/>
        </Route>
        <Route path="/whattowear">
          <WhatToWear/>
        </Route>
        <Route path="/musicmajik">
          <MusicMajik/>
        </Route>
        <Route path="/">
          <Title/>
          <Body />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
