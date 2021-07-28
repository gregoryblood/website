import React from 'react';
import kg2 from '../Images/kg2.PNG'
import kg3 from '../Images/kg3.PNG'
import {PTitle, Body, Core, Header, Flavor, Portal, TitleBar,
        Tools, Text, Img} from './style';
import {Buttons, HotButton} from './style';

export class KingsGambit extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <TitleBar>
          <PTitle>A King's Gambit</PTitle>
          <Flavor>Chess-like + Rogue-like...</Flavor>
        </TitleBar>
        <Core>
          <Body>
            <Buttons>
              <a href='https://itch.io/embed-upload/3388342?color=1b6729' target='_blank'><HotButton>Play</HotButton></a>
            </Buttons>
            <Header>
              What I Learned
            </Header>
            <Tools>Unknown Time Restraint - Designing while Developing</Tools>
            <Text>
              This game was the most difficult game jam entry for me to make so far because it was in the middle of 
              a college term. I had a full week to make something around the "Stronger together" theme but I wasn't sure 
              how much time I would actually have since school was my priority. 
              <br/><br/>
              Because of potential crunch, I just started developing without any real plan. I knew I wanted to make a 
              methodical 2D game with high replayability. I started out with a 5x5 board with a piece that could move 
              around using WASD and ended with a turn-based, roguelike that used chess piece movement. While you could read the 
              full detail of my progress below, I'll summarize by saying I needed to 'Find the fun' by playing what I had and 
              running with what worked. Overall I was really happy with what I made given the circumstances. 
            </Text>
            <Img src = {kg2}/>
            <Header>
              About
            </Header>
            <Tools>Unity - C#</Tools>
            <Text>
            Alarm goes off, Saturday 2:00am, I check my phone for the Brakeys 2021.1 theme to start thinking about ideas.<br/><br/>"Stronger Together" 
            <br/><br/>
            My second alarm goes off at 8:00am, I wake up without a clue of what I'm going to do. I knew I had a pact schedule of
            this, work, and school so I know I have to work quickly while I have the time. I had a general sense of what I've been 
            wanting to do which was a roguelike you only need 1 finger to play but a lot of brainpower to play well. So I opened up 
            Unity and went to work creating a board, a player, and a WASD movement system.
            <br/><br/>
            I'm no pixel-artist, so I went to the Asset store to grab whatever I can see and it just so happened my 
            placeholder for the player was a king. This will come up later. I went with the easiest form of conflict, 
            evil enemies with health and damage, and ended up with a stat-check game where the player threw themselves 
            at enemies and enemies threw themselves at the player. To add a way for the player to win I created items like 
            healthpots, swords to increase the player's attack, shields to block damage, and coins for something I'd add later. (like a shop)
            I added enemies with different stats and started playtesting.<br/><br/>It was perfect and I was done within 24 hours.
            <br/><br/>
            I wish.
            <br/><br/>
            The game didn't fit the theme and worst of all, it wasn't fun. It was boring and I felt like calling a quits. I closed my 
            computer tired and frustrated. The next day I had to knock out homework and I didn't touch my game as I knew I needed to 
            think of a way to make it fun. Monday started, I had no homework, no work, but no ideas. Not wanting to do nothing, 
            I followed my previous plan and just started coding things. I updated the movement system to selecting one piece and moving 
            to specific spots, and then making the enemies mark where they're going to do damage as well as different patterns. 
            <br/>
            <Img src = {kg3}/>
            The game all of a sudden got better. It added choice: run or attack. To add difficulty, I made either the health or the 
            attack of enemies scale with the time elapse over the game. I could have made it scale from turns but figured I want to 
            pressure the player into making more mistakes. 
            <br/><br/>
            Now that the game was sort of fun, I needed to work on the theme. I decided on adding allies the player could control. This 
            added more choice for the player and therefore required more thought. Perfect! While I was brainstorming ways this ally can 
            move I thought to the game my board looked an awful like with a piece my main character was already. Chess! From this decision, 
            the game came together for me. I made pieces that move like a knight, bishop and rook. (Queen movement was overpowered) Each piece 
            had abilities that gave them purpose. By having more pieces the player has more options to attack without moving, but they have to 
            balance what pieces they want to move out of the way of damage. Some pieces felt better than others and the game as a whole could use 
            more testing and difficulty adjusting but by then I was out of time and needed to submit.  
            </Text>
            
          </Body>
        </Core>
      </React.Fragment>
    );
  };
}

export default KingsGambit;