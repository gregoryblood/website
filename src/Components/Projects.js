import React from 'react';
import styled from '@emotion/styled';
import whattowear from '../Images/whattowear.png';
import ships from '../Images/ships.png';
import mb3 from '../Images/mb3.png';
import kg1 from '../Images/kg1.PNG';
import ph1 from '../Images/ph1.jpg';
import mm1 from '../Images/mm1.png';
import osu from '../Images/osu.PNG';
import { NavLink } from 'react-router-dom';

var scroll = 0;
export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0 
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height;
    if (scrolled > 0.1) {
      if (scrolled > scroll) {
        scroll = scrolled;
        this.setState({
          scoll: scrolled,
        })
      }
    }
  }
  render() {   
    const scroll = this.state.scoll;
    return (
      <React.Fragment>
        <br/>
        
        <CardArea id="work"  >
          <Card to={`/capstone`}  show={scroll > 0.12} >
              
              <Img src={ osu }/>
              <CardWords>
                <CardTitle>Capstone</CardTitle>
                <CardFlavor>
                The 'I' in 'Team'
                </CardFlavor>  
              </CardWords>
          </Card>
          <Card to={`/purehoney`} show={scroll > 0.25}>
            <Img src={ph1}/>
            <CardWords>
              <CardFlavor>
              A Website to Buy Honey
              </CardFlavor>
            </CardWords>
          </Card>
          <Card to={`/musicmajik`} show={scroll > 0.38} >
            <Img src={mm1}/>
            <CardWords>
              <CardFlavor>
              Organize your Music... Fast
              </CardFlavor>
            </CardWords>
          </Card>
        </CardArea>
        <Games>Games</Games> 
        <CardArea>
          <Card to={`/kings-gambit`} show={scroll > 0.62} >
            <Img src={ kg1 }/>
            <CardWords>
              <CardFlavor>
              Chess-like + Rogue-like
              </CardFlavor>
            </CardWords>
          </Card>
          <Card to={`/master-blaster`} show={scroll > 0.75}>
            <Img src={ mb3 }/>
            <CardWords>
              <CardFlavor>
              A Retro Game with a Twist
              </CardFlavor>
            </CardWords>
            
          </Card>
          <Card to={`/ships`} show={scroll > 0.88} >
            <Img src={ships}/>
            <CardWords>
              <CardFlavor>
              A Party Game for Pirates
              </CardFlavor>
            </CardWords>
          </Card>
        </CardArea>
      </React.Fragment>
    );
  }
}

export default Projects;

const CardArea = styled.div`
  display: flexbox;
  display:-webkit-flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  
  @media(max-width: 768px) {
    justify-content: center;
  }
`;
const Card = styled(NavLink)`
  text-decoration: none;
  display: block;
  width: 50vw;
  margin-bottom: 0px;
  height: 600px;
  transition-duration: 1s;
  -webkit-transition-duration: 1s;
  border-radius: 16px;
  position: relative;
  width: 100%;  
  opacity: ${props => props.show ? 1 : 0}
  

`;

const Img = styled.img `
  position: relative;
  z-index: 2;
  height: 60%;
  width: 60%;
  border-radius: 16px;
  margin-top: 0px;

  float: center;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  object-fit: cover;
  &:hover {
    opacity: 0.35;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
  
`;
const CardWords = styled.div `
  position: absolute;
  top: 30px;
  z-index: 2;
  right: 30px;
  height: 100px;
  width: 300px;
  background: black;
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;
const CardTitle = styled.div `
  padding: 20px;
  padding-bottom: 0px;
  text-align: right;
  font-size: 36px;
  font-weight: 800;
  color: white;
`;

const CardFlavor = styled.div `
  font-size: 24px;
  text-align: right;
  padding: 0 20px;
  color: gray;

  font-style: italic;
`;
const Games = styled.div `
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  margin: 100px 0;
  z-index: 1;

`;