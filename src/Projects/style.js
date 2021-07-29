import styled from '@emotion/styled'
import { backgroundColor, flavorColor, flavorColor2 } from '../Components/Colors';

export const Core = styled.div `
    top: 8rem;
    position: relative;
    margin: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: white;
    overflow: visible;
    width: 100%;
`;
export  const Body = styled.div `
    padding: 1rem 1rem 10rem 1rem;
    margin: 0 auto;
    max-width: 900px;
    text-align: left;
    @media(max-width: 880px) {
        padding: 0rem 1rem 10rem 1rem;
    }
`;
export const TitleBar = styled.div `
    width: 100%;
    height: 100%;
    background: ${backgroundColor};
    position: fixed;
    top: 0;
    left: 0;
    
`;
export const PTitle = styled.div `
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    padding: 20px 20px 0 20px;
    @media(max-width: 768px) {
        text-align: center;
        font-size: 36px;
    }
`;
export const Header = styled.div `
    color: ${flavorColor2};
    font-size: 2rem;
    font-weight: bold;
    margin: 25px 0 10px 0;
`;
export const Text = styled.div `
    font-size: 1.5rem;
`;
export const Flavor = styled.div `
    padding: 0px 0 10px 0;
    font-size: 1rem;
    font-style: italic;
    color: white;
    padding: 0px 20px 20px 20px;
    
    @media(max-width: 768px) {
        text-align: center;
        font-size: 24px;
    }
`;
export const Portal = styled.iframe `
    margin: 30px auto 30px auto;
    display: block;
    width: 90%;
    max-width: 800px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    border-radius: 8px;
    
`;
export const Img = styled.img `
    margin: 30px auto 30px auto;
    display: block;
    width: 90%;
    max-width: 800px;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    
`;
export const ImgLong = styled.img `
    margin: 30px auto 30px auto;
    display: block;
    width: 40%;
    max-width: 800px;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    
`;
export const Tools = styled.div`
    margin: 10px 0; 
    font-style: italic;
    color: #525252;
    font-size: 1rem;
`;
export const Buttons = styled.ul `
  list-style-type: none;
  margin: 40px 0 0 0;
  overflow: visible;
  text-align: center;
  margin: 0;
  padding: 0;
`;
export const HotButton = styled.button `
    font-size: 1.5rem;
    font-weight: bold;
    border-style: solid;
    border-color: white;
    border-width: 4px;
    border-radius: 10px;
    display: inline-block;
    color: white;
    background-color: #1c1c1c;
    width: 100%;
    height: 5rem;
    margin: 0.5rem 0;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    font-family: nunito;
    &:hover {
        cursor: pointer;
        border-color: ${flavorColor2};
        color: black;
        background-color: transparent;
    }
`;
export const Disclaimer = styled.div `
  font-size: 24px;
  font-weight: bold;
  color: red;
  text-align: center;
  padding: 0px 0;
`;
export const Link = styled.a `
  font-weight: bold;
  color: ${flavorColor2};
  &:hover {
    text-decoration: underline;
  }
`;
