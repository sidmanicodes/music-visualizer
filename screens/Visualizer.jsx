import React, { useState } from 'react';
import BackgroundImage from '../src/assets/images/Background.png';
import StudioSoundsImage from '../src/assets/images/Studio_Sounds.png';
import MusicIconImage from '../src/assets/images/Music_icon.png';
import VectorImage from '../src/assets/images/Vector.png';
import { styled } from '@mui/material/styles';
import AddMusic from '../src/assets/components/addMusic.jsx';
import SoundwaveImage from '../src/assets/images/Soundwave.png';
import WaveComponent from "../src/assets/components/wave.jsx"

const VisualizerScreen = (props) => {
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
        height: `100%`,
        width: `100%`,
        display: 'flex',
        justifyContent: 'center',  // Horizontally center the content
        alignItems: 'center',      // Vertically center the content
        // height: '100vh',   
        // height: '100%',
        // width: '100vw',
        objectFit: `cover`,
        position: `absolute`,
        left: `0px`,
        top: `0px`,
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

    const Rectangle2 = styled('div')({
        backgroundColor: `rgba(89, 53, 214, 1)`,
        borderRadius: `15px`,
        width: `242px`,
        height: `63px`,
        position: `absolute`,
        left: `884px`,
        top: `501px`,
    });

    const Vector = styled('img')({
        height: `21.32px`,
        width: `21.88px`,
        position: `absolute`,
        left: `1059px`,
        top: `522px`,
    });

    return (
        <MacBookAir11 className={props.className}>
            {/* <button onClick={handleSelectSong}>
                <AddMusic onFileSelected={handleFileSelected}/>
                <SelectSong>Select song</SelectSong>
            </button> */}
            <Background src={BackgroundImage} loading="lazy" alt={'Background'} />
            <StudioSounds>
                {`Studio Sounds`}
            </StudioSounds>

            <WaveComponent />
            <MusicIcon src={MusicIconImage} loading="lazy" alt={'Music icon'} />
            {/* <button onClick={() => advanceToVisualizer()}>
                <NextScreen>
                {`Try it out`}
                </NextScreen>
                
            </button> */}
        </MacBookAir11>
    );
}

export default VisualizerScreen;
