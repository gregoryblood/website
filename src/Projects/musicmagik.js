import React from 'react';
import {PTitle, Body, Core, Header, Flavor, Portal, TitleBar,
        Tools, Text, Img, ImgLong} from './style';
import mm2 from '../Images/mm2.png';
import mm3 from '../Images/mm3.png';
import mm4 from '../Images/mm4.png'
import {Buttons, HotButton, Disclaimer} from './style';

export class MusicMajik extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <TitleBar>
          <PTitle>Music Magik</PTitle>
          <Flavor>Organize you music... Fast...</Flavor>
        </TitleBar>
        <Core>
          <Body>
            <Img src={mm3} />
            <Buttons>
              <a href='https://spotify-organizer-web.herokuapp.com/' target='_blank'><HotButton>Visit</HotButton></a>
              <a href='https://github.com/gregoryblood/spotifyApp' target='_blank'><HotButton>GitHub</HotButton></a>
            </Buttons>
            <Header>
              What I Learned
            </Header>
            <Tools>API calls with queries - OAuth - Web hosting with Express</Tools>
            <Text>
              This project was pretty fun for me because I really wanted something to 
              sort my playlists. The big challenge was not only hooking up the Spotify 
              Authentification, but learning ReactJS while doing it. I knew it would be a 
              large project for me to do solo but I was pretty happy with how it turned out.
              It was also fun trying to conform to a design trend while adhering to Spotify's 
              logo usages. In the end I really like the look on mobile but wish I drafted 
              something different for larger screens. 
            </Text>
            <ImgLong src={mm2}/>
            <Header>
              About
            </Header>
            <Tools>ReactJS (HTML5/CSS3/Javascript) - Express</Tools>
            <Text>
              This app's purpose was to sort the user's Spotify music. I developed it on my own 
              using ReactJS as well as an Express server to manage Spotify's authentication process. 
              <br/><br/>
              Once logged in, the user can view their top artists and songs as well as their current playlists. 
              If they select a playlist they will see all songs with their respective artists. If 
              they click the button at the top the app will automatically create a new playlist with 
              the same name with a plus sign at the end. That playlist will have all of the same songs 
              but they will be sorted by Spotify's interpretation of how energetic the song is. This playlist 
              is now visible to the user and does not replace the old playlist. (This is to allow the user 
              to decide if they like how it was sorted and so they aren't worried the app will mess something up)
              <br/><br/>
              The Spotify API offers statistics for each song given such as how acoustic it is or how 
              vocal it is. I wanted it to make my playlists seem like I sorted with slow songs first and 
              high paced songs at the end. I first used BPM to sort but didn't like how it ended up sorting.
              A big issue was some songs started sounding like they were really slow, like AC/DC's Thunderstruck,
              and would pick up later, which I wanted to be towards the beginning of the playlist. I ended up 
              sorting by the 'Energy' of the song. Which takes into account multiple factors, including BPM, to 
              return a single decimal number for me to sort. 
              <br/><br/>
              For the design I tried the trend of Neomorphism. The essence of the trend is to make the screen 
              looks like it has soft 3D buttons. I knew that this was going to be hard since I also wanted my app to 
              feel like it was part of the Spotify ecosystem. I quickly realized that Spotify's background colors were 
              very dark and the design looked best on brighter backgrounds. I settled on a dark navy blue which 
              looks a lot better on bright screens. I made the site responsive as well and really enjoyed how it 
              turned out on mobile. When I go back to this project I will probably update the overall design 
              strategy to make it more 'Spotifyie'.
            </Text>
            <Img src={mm4} />
          </Body>
          
        </Core>
      </React.Fragment>
    );
  };
}

export default MusicMajik;