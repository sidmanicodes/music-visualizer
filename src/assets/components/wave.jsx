import React, {Component, useState} from 'react';
import { styled } from '@mui/material/styles';
import song from "../sounds/BeatShort.mp3"; 

const WaveButton = styled('div')({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `200`,
    fontSize: `60px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `50%`,
    top: `75vh`,

  });

  const Container = styled('div')({
    position: `absolute`,
    top: `60vh`,
    left: `0`,

    width: `100%`,
    height: `100%`,
  });

const Canvas1 = styled('canvas')({
    position: `absolute`,
    top: `0`,
    left: `0`,
    width: `100%`,
    height: `100%`,
});

const Audio1 = styled('audio')({
    width: `50%`,
    margin: `50px auto`,
    display: `block`,
});

const SelectSong = styled('div')({
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
    left: `660px`,
    top: `625px`,
  });

  const Rectangle2 = styled('div')({
    backgroundColor: `rgba(89, 53, 214, 1)`,
    borderRadius: `15px`,
    width: `242px`,
    height: `63px`,
    position: `absolute`,
    left: '600px',
    top: `600px`,
    margin: `10px`,
  });


  function WaveComponent() {
    let audio1 = new Audio();
    audio1.preload = "auto";

    const [selectedFile, setSelectedFile] = useState('');
    const audioRef = React.createRef();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        console.log(file.name)
        playPause(file);
    };

    const handleSelectFile = () => {
        // Trigger file selection when button is clicked
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    }



    var isPlaying = false;

    audio1.addEventListener('playing', function () {
        console.log('Audio is playing');
        isPlaying = true;
    });

    audio1.addEventListener('ended', function () {
        console.log('Audio has ended');
        isPlaying = false;
    });

    const playPause = (file) => {
        if (file) {
            
            const audioElement = audioRef.current;
            audioElement.src = URL.createObjectURL(file);
            
            if (isPlaying) {
                audioElement.pause();
                isPlaying = false;
            } else {
                audioElement.play();
                isPlaying = true;
            }
            console.log("Clicked");
        }

      }
  
    return (
      <div>
        <Rectangle2></Rectangle2>
        <input
            type="file"
                id="fileInput"
                style={{ display : 'none'} }
                onChange={handleFileChange}
                accept=".mp3"
            />
            <button onClick={handleSelectFile}>
                <SelectSong>
                    {'Select song'}
                </SelectSong>
            </button>
        <Container>
        <Canvas1 />
        <Audio1 controls></Audio1>
      </Container>
      <button onClick={playPause}>
        {/* <WaveButton>Play</WaveButton> */}
      </button>

    </div>
    );
  }

export default WaveComponent;