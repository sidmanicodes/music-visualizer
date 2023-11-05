import React from 'react';
import { StyleSheet } from "react-native"
import BackgroundImage from '../src/assets/images/Background.png';
import StudioSoundsImage from '../src/assets/images/Studio_Sounds.png';
import MusicIconImage from '../src/assets/images/Music_icon.png';
import VectorImage from '../src/assets/images/Vector.png';
import { styled } from '@mui/material/styles';
import SoundwaveImage from '../src/assets/images/Soundwave.png';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {


  const MacBookAir11 = styled('div')({
    backgroundColor: `rgba(50, 50, 50, 1)`,
    borderRadius: `0px`,
    mixBlendMode: `screen`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: '100%',
    height: `832px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
  });

  const Background = styled('img')({
    // height: `832px`,
    // width: `1286px`,
    display: 'flex',
    justifyContent: 'center',  // Horizontally center the content
    alignItems: 'center',      // Vertically center the content
    height: '100vh',   
    // height: '100%',
    width: '100vw',
    objectFit: `cover`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const BeatVisualizer = styled('div')({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `200`,
    fontSize: `64px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    // left: `792px`,
    left: `54%`,
    top: `268px`,
  });

  const Line1 = styled('div')({
    border: `2px solid rgba(8, 164, 252, 1)`,
    width: `430px`,
    height: `0px`,
    position: `absolute`,
    left: `54%`,
    top: `345px`,

  });

  const Rectangle1 = styled('div')({
    background: `linear-gradient(180deg, rgba(0, 0, 0, 1) 21.874999999999993%, rgba(0, 0, 0, 0) 99.99999999999997%)`,
    borderRadius: `0px`,
    width: `1280px`,
    height: `169px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const StudioSounds = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `200`,
    fontSize: `35px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    height: `50px`,
    width: `242px`,
    position: `absolute`,
    left: `132px`,
    top: `45px`,
  });

  const MusicIcon = styled('img')({
    height: `47px`,
    width: `39px`,
    position: `absolute`,
    left: `69px`,
    top: `42px`,
  });

  const VisualizeYourFavorit = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `20px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    // left: `792px`,
    left: `54%`,
    top: `387px`,
    margin: `10px`,
  });

  const Rectangle2 = styled('div')({
    backgroundColor: `rgba(89, 53, 214, 1)`,
    borderRadius: `15px`,
    width: `242px`,
    height: `63px`,
    position: `absolute`,
    left: `884px`,
    top: `501px`,
    margin: `10px`,
  });

  const Vector = styled('img')({
    height: `21.32px`,
    width: `21.88px`,
    position: `absolute`,
    left: `1059px`,
    top: `522px`,
    margin: `10px`,
  });

  const NextScreen = styled('div')({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `26px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `937px`,
    top: `517px`,
    margin: `10px`,
  });

  const Soundwave = styled('div')({
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundImage: `url(${SoundwaveImage})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    borderRadius: `0px`,
    mixBlendMode: `screen`,
    // width: `630px`,
    // height: `366px`,
    // width: `25%`,
    // height: `50%`,
    position: `absolute`,
    // left: `69px`,
    // top: `223px`,
    width: '50%',  // Set the width to 50% of the container
    height: '60vh',  // Set the height to 50% of the viewport height
    position: 'absolute',
    left: '1%',  // Adjust the left position as needed
    top: '20vh', 
  });

  const navigation = useNavigation();

  const advanceToVisualizer = () => {
    navigation.navigate(`Visualizer`);
  }

  // function Home(props) {
  return (
    <MacBookAir11 className={props.className}>
      <Background src={BackgroundImage} loading="lazy" alt={'Background'} />
      
      <div>
        <BeatVisualizer >{`Beat Visualizer`}</BeatVisualizer>
        <Line1></Line1>
        <VisualizeYourFavorit>
          {`Visualize your favorite beats with the all-new Beat Visualizer from The Studio. It’s super easy to use!`}
        </VisualizeYourFavorit>
      </div>
      
      
      <Rectangle1></Rectangle1>
      <StudioSounds>
        {`Studio Sounds`}
      </StudioSounds>
      <MusicIcon src={MusicIconImage} loading="lazy" alt={'Music icon'} />

      <Rectangle2></Rectangle2>
      <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
      <button onClick={() => advanceToVisualizer()}>
        <NextScreen>
          {`Try it out`}
        </NextScreen>
      </button>
      <Soundwave></Soundwave>
    </MacBookAir11>
  );
}
export default HomeScreen;
