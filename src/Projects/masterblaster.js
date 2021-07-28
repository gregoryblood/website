import React from 'react';
import {PTitle, Body, Core, Header, Flavor, Portal, TitleBar,
        Tools, Text, Img} from './style';
import {Buttons, HotButton, Link} from './style';
import mb1 from '../Images/mb1.png';
import mb2 from '../Images/mb2.png';

export class MasterBlaster extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <TitleBar>
          <PTitle>Master Blaster</PTitle>
          <Flavor>A retro game with a twist...</Flavor>
        </TitleBar>
        <Core>
          <Body>
            <Img src={mb1}/>
            <Buttons>
              <a href='https://gregoryblood.itch.io/master-blaster' target='_blank'><HotButton>Play!</HotButton></a>  
              {
              //<a href='https://github.com/gregoryblood/' target='_blank'><HotButton>GitHub</HotButton></a>
              }
            </Buttons>
            <Header>
              What I Learned
            </Header>
            <Tools>Developing with a Time Limit - Developing with a Theme</Tools>
            <Text>
              This was a bit of a two part game with the first part being in the <Link href="https://itch.io/jam/gmtk-2020">Game Maker's Toolkit game jam</Link>. 
              There was a 72 hour time limit with the theme of 'Out of Control. <Link>This version</Link> was created first and boy, 
              did I feel a crunch. I could only work on it two days out of the three and had to do all the tricks I knew.
              I quickly just started building just the gameplay not caring about graphics at all. I iterated through a few 
              ideas but settled on this asteroid  like game. The theme was a fun way to focus my ideas and it was really fun stretching 
              the meaning of the theme.<br/><br/>
              I ended up making the player lose control of their ship after a certain amount of time while simultaneously increasing their fire rate.
              This made the player carefully predict where the ship was going and would point to score points and not lose health. 
              <br/><br/>
              I learned an important lesson about accessibility when I didn't realize I could have the game played in the 
              browser at the time of my submission. This deterred other competitors from trying and voting for my game. The votes and comments 
              I did get were really fun to send I continued to iterate the game afterward.
            </Text>
            <Img src={mb2}/>

            <Header>
              About
            </Header>
            <Tools>Unity - C#</Tools>
            <Text>
              Master Blaster is a classic arcade looking game similiar to astroids. The player starts the game by 
              selecting options for their ship (27 combinations total) each complimenting different builds. 
              The player controls their ship with a gamepad or WASD and it automatically fires. The hook is if they 
              press space or the south gamepad button, their ship loses all acceleration dampening and fires rapidly. While they 
              can only spin the ship, it is the strongest way to defeat enemies. 
              <br/><br/>
              Their objective is to destroy enemies to increase their score. There are five different enemies each 
              having drastically behaviors and mechanics. They are introduced at different point thresholds to increase 
              difficulty. At 200, 400, and 600 points, a boss spawns with completely new mechanics and take multiple hits 
              to defeat. The game is intended to be infinitely long lasting with increasing difficulty.
              <br/><br/>
              As enemies are destroyed they have a chance to drop coins, that the player can exchange at milestones to 
              upgrade their ship/stats. Some of the possible upgrades compliment the choices, or even 
              directly upgrade, the choices they made at the beginning. Because of this they can create 
              builds that get exponentially stronger.
            </Text>
            
          </Body>
        </Core>
      </React.Fragment>
    );
  };
}

export default MasterBlaster;