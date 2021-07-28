import React from 'react';
import {PTitle, Body, Core, Header, Flavor, Portal, TitleBar,
        Tools, Text} from './style';
import {Buttons, HotButton, Disclaimer} from './style';

export class WhatToWear extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <TitleBar>
          <PTitle>WhatToWear</PTitle>
          <Flavor>The Most Fail-Safe Weather App...</Flavor>
        </TitleBar>
        <Core>
          <Body>
            <Portal src="https://www.gregoryblood.me/weatherapi/" width="540" height="450"></Portal>
            <Disclaimer>Due to DarkSky's API changes, this no longer works</Disclaimer>

            <Buttons>
              <a href='https://www.gregoryblood.me/weatherapi/' target='_blank'><HotButton>Visit</HotButton></a>
              <a href='https://github.com/gregoryblood/gregoryblood.github.io/tree/master/weatherapi' target='_blank'><HotButton>GitHub</HotButton></a>
            </Buttons>
            <Header>
              What I Learned
            </Header>
            <Tools>API calls - Geolocation - Website deploying</Tools>
            <Text>
              This was my first site that I wanted to deploy, use, and share. It was 
              also the first time I used APIs. It was a lot to learn but it wasn't 
               too hard to implement since the project itself was simple. 
            </Text>
            <Header>
              About
            </Header>
            <Tools>HTML5 - CSS3 - Javascript</Tools>
            <Text>
              This site uses darksky.net's API to gather weather data based on the user's
              device location. Depending on current temperature, the app will generate the
              appropriate clothing to wear. If darksky.net predicts that it will rain anytime 
              throughout the day, it will also recommend bringing an umbrella or a raincoat,
              depending on the temperature. 
              <br/><br/>
              I made this app because every morning when I check the weather I see something
              like '54 degrees' and I sometimes forget what that feels like and if I need a 
              long sleeve or a heavier jacket. I made the app display what to wear in the simplest 
              way possible with bold, large text on a simple background. Nothing more. I set the 
              website to show up on my phone's home screen and use it every morning. I love creating 
              something practical and helpful, even if I'm the only user.
            </Text>
            
          </Body>
        </Core>
      </React.Fragment>
    );
  };
}

export default WhatToWear;