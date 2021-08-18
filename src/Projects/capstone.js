import React from 'react';
import {PTitle, Body, Core, Header, Flavor, Portal, TitleBar,
        Tools, Text, Img, ImgLong} from './style';
import {Buttons, HotButton, Link} from './style';
import capstone from '../Images/capstone.PNG'

export class Capstone extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <TitleBar>
          <PTitle>Senior Project</PTitle>
          <Flavor>The 'I' in 'Team'...</Flavor>
        </TitleBar>
        <Core>
          <Body>
            
            <Buttons>
              <a href='https://xd.adobe.com/view/8076e940-3750-4138-a939-32692b7e0e67-d525/?fullscreen' target='_blank'><HotButton>Interact</HotButton></a>
              <a href='https://github.com/gregoryblood/Event-Management-App' target='_blank'><HotButton>GitHub</HotButton></a>
            </Buttons>
            <Header>
              About
            </Header>
            <Tools>React Native (Mobile Development) - Express - Postgres (Database) - SQL</Tools>
            <Text>
            This app was for my 9-month long senior capstone. I picked this specific 
          project because I wanted to accomplish a goal that I felt challenged me and had a tangable result 
          that I would enjoy talking about.<br/><br/>
          Our goal given to us by a professor in the College of Business at Oregon State University was 
          to develop an app for the school that streamlines the process for students to find out about events 
          going on around the school. We worked closely with the professor to figure out key features of the app and 
          the design. Administrators would needed to be identified at login, and have the ability to create/edit/delete 
          events. Students could then sign-up for whichever event they want to attend and have their calendar 
          updated. 
              <br/><br/>
              One of the challenges of this project, and in my opinion the most important, is being a team-leader to  
          two other students and working with a professor and a teacher's assistant. There isn't a right way to do this project.
          I just knew I wanted a professional looking application that the school could consider using to help students. 
          <br/><br/>
          </Text>
          <Header>Leadership</Header>
            <Text>
              Being a leader isn't an easy task. While we didn't take an official vote, my starting skill set and attitude towards 
              the project made me the best fit for the role, and I was happy to take it knowing it doesn't mean I can just give other 
              people my work. I wanted to lead by example. I listened to my teammates worries about working with new tools, and opted 
              to create the back-end, a new frontier for me. I listened to my teammates worry about planning such a large project, and got 
              to work giving us direction. 
              <br/><br/>
              A challenge I wasn't expecting is how I needed to act. Since I consider myself easy-going for the most part, I determined 
              I'd have to change my demeanor if I felt my team needed the pressure. I of course want to be friends with everyone and didn't 
              want to add any unnecessary stress, but at the end of the day we have a product to build and a time limit to worry about. I decided 
              to keep a blog of events at the bottom of this page mainly to help me evaluate myself as a team-leader. 
              
            </Text>
            <ImgLong src={capstone}/>
            <Header>
              Fall Blog
            </Header>
            <Tools>"Plans are useless but planning is indispensable." - Dwight D. Eisenhower</Tools>
            <Text>
              We're making an application for a professor at the College of Business at Oregon State to create a better way for 
              students and faculty to manage events. I'm working with two other students to get this done 
              and we also have help from a TA to make sure we're making progress. I opted to take a leadership 
              role for my team because not only was I experienced with how React worked, but I also wanted to 
              make this app look and perform like it was made by professionals and felt the most confident to get this done. 
              <br/><br/>I designed the app, you can interact with it above, and I created a timeline 
              for our team to finish a working prototype by the end of March. I assigned my team members with 
              creating the front-end, since they felt the most comfortable with it, and I got to work on the back-end.
              <br/><br/>
              I immedietly researched different tools that we would need to learn to accomplish our task. 
          I decided to use React Native for the front end since it allowed us to develop for both IOS, 
          Android, and web which was ideal since we weren't experienced with app development.
          I then worked closely with the professor to create a <Link href='https://xd.adobe.com/view/8076e940-3750-4138-a939-32692b7e0e67-d525/?fullscreen'>design prototype </Link>
          that would help us plan out the features we would have, the user interface and experience, and helped us 
          all be on the page when we would start to develop. <br/><br/>
          To begin development I created a <Link href='https://www.heroku.com/home'>Heroku </Link> server to host an express server.
          Next I started our React Native app and set it up to be able to make API calls. This was mainly to help the group see 
          what React frameworks look like. I also set a timeline of the entire app development for us to follow. 
              <br/><br/>
            </Text>
            <Header>
              Winter Blog
            </Header>
            <Tools>"Everyone has a plan until they get punched in the mouth." - Mike Tyson</Tools>
            <Text>
              The biggest challenge hasn't been the technical side of the project but the team side. The term started off seeming 
              fine. Every member agreed with my timeline and said they started work. In week 3 (of 10) I requested for everyone to 
              merge their work to Github so we could see all of the progress we've made since we were to present it to other teams soon. I noticed one member did no work beyond what 
              they did last term (which was impressive amount) and the other team member ignored all styling and did pretty much 
              the minimum. I did expect this, I know people can get busy and have to prioritize their time. Something like this Capstone 
              doesn't have any grades and there's no risk of being fired, so of course it can be difficult to respect deadlines.
              <br/><br/>
              We gave a presentation in which we focused more on how I set-up our backend and our goals for the term. Afterwards I got my team together 
              and let them know I would have liked to see more effort put in. I listened to what my teammates had to say. They understood my disappointment, 
              agreed they could have done more, and said they'd catch up and stick to the timeline. Since I was the only one who organized 
              our project I asked them if they wanted to make any changes, because I expected I may have given too little time for hard features and 
              too much time for easy features. They both said it was still good and so we left the meeting with the plan unchanged.
              <br/><br/> 
              At the end of week 7 our project partner asked about when a demo would become available. This caused me to request we all merged our project, 
              and gave a realistic evaluation of where we're at. Both members completed what was required earlier, but still didn't match the 
              styling with what we had designed. So now was time to pivot. I narrowed down what was core to our application and asked my team 
              if we could get there. After finding an agreement, I created a new, short-term timeline to plan what each of us was to do to get a demo 
              working by week 10. 
            </Text>
            
          </Body>
        </Core>
      </React.Fragment>
    );
  };
}

export default Capstone;