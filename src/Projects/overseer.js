import React from 'react';
import {PTitle, Body, Core, Header, Flavor, Portal, TitleBar,
        Tools, Text, Img} from './style';
import {Buttons, HotButton} from './style';

export class Overseer extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <TitleBar>
          <PTitle>Overseer</PTitle>
          <Flavor>Physics puzzles with horror...</Flavor>
        </TitleBar>
        <Core>
          <Body>
            <Header>
              What I Learned
            </Header>
            <Tools>AI Behaiviors - Playtesting</Tools>
            <Text>
              After following a lot of tutorials for using Unity, I finally felt confident to work on my own project. 
              I had an idea in mind to start and just went to work. After a lot of Googling I finished the first 
              version, but quickly realized the first build is only a portion of the work. I playtested the game 
              with friends and family and learned how to use feedback without losing my vision of the game. 
            </Text>
            <Portal height="400" src="https://www.youtube.com/embed/DTujndYq82E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></Portal>

            <Header>
              About
            </Header>
            <Tools>Unity - C#</Tools>
            <Text>
            This game is a 2-4 player party game in which players control a 
            pirate ship and must shoot cannons to destroy other ships. 
            The niche to the game is that to reload the cannonballs, the 
            player must spin a joystick in rotation. The more 
            consecutive spins without fire grant more ammo per spin. They can 
            fire the cannonballs from either side of the ship, depleting 15 rounds 
            per trigger pull a maximum of four times. There's and island that can be 
            shot over at the cost of a chance a ball hits the ground and flies 
            uncontrollably in the air. 
            A player wins when they are the last boat standing.<br/><br/>This game 
            has an alternate version where two people control the same boat, 
            one person steers and the other shoots and reloads.
            </Text>
            
          </Body>
        </Core>
      </React.Fragment>
    );
  };
}

export default Overseer;