import React from 'react';
import {PTitle, Body, Core, Header, Flavor, Portal, TitleBar,
        Tools, Text, Img} from './style';
import {Buttons, HotButton} from './style';
import ph2 from '../Images/ph2.png'

export class PureHoney extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <TitleBar>
          <PTitle>Bear Lake Honey</PTitle>
          <Flavor>A Website to Buy Honey...</Flavor>
        </TitleBar>
        <Core>
          <Body>
          <Img src={ph2}/>
            <Buttons>
              <a href='https://www.gregoryblood.me/projects/honey/#/' target='_blank'><HotButton>Visit</HotButton></a>
              <a href='https://github.com/gregoryblood/gregoryblood.github.io/tree/master/projects/honey' target='_blank'><HotButton>GitHub</HotButton></a>
            </Buttons>
            <Header>
              What I Learned
            </Header>
            <Tools>How to Work with a Client</Tools>
            <Text>
              I was super excited for someone to reach out to me to pay me to build a website for them.
              They were inexperienced with web development and I really enjoyed helping them through the 
              process. I loved talking with them about what they wanted and their future plans. Unfortunately  
              after many hours of consultation, design and prototype building. I determined that they didn't 
              have the legal requirements to sell honey online. I could have asked for full payment but I determined 
              I really enjoyed the process and learned a lot so just let them know how to get permission and will 
              charge once they finish that. 
            </Text>
            <Header>
              About
            </Header>
            <Tools>ReactJS (HTML5/CSS3/Javascript)</Tools>
            <Text>
              A client jarred honey and began to sell it to people they knew. They decided they wanted to 
              make some extra money and sell it to more people. To do this they reached out to me to build 
              them a website. Their original idea was a full-stack website that tracked inventory and could 
              do the purchasing of honey without the use of a third party. While I was excited to take on the 
              challenge, I told them they could minimize upfront costs (my hourly labor fee) by selling the 
              honey on Amazon and for me to build more of an info page she could share that linked to Amazon. 
              If they sold enough honey, I could always upgrade the website.
              <br/><br/>
              Once we settled on our strategy, I began to make some drafts. I created four templates in AdobeXD 
              each with different styles and asked them what they liked and disliked about each one. Taking in that 
              input I created another draft that they later approved. With the design decided it was just left to me 
              to build it. I went with ReactJS since it might have been built more upon. 
              <br/><br/>
              Once built I begin to look into selling honey on Amazon. I quickly realized that you need a license 
              to sell cottage foods. (Non-potentially hazardous foods that do not require time and/or temperature controls for safety)
              I told them about their local laws and am currently waiting for them to finish that process. 
            </Text>
            
          </Body>
        </Core>
      </React.Fragment>
    );
  };
}

export default PureHoney;