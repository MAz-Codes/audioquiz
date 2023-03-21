import './App.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import { motion } from "framer-motion"
import { Stack, Typography } from '@mui/material';

function App() {

  const answerStyle = {

      backgroundColor: "#f0f7ff",
      borderRadius: "10px",
      width:"60%",
      padding: "1vh",
      textAlign: "center",
      '&:hover': {
        backgroundColor: "#1976d1",
        color:"#ffffff",
        cursor:"pointer"
      }
    
  };

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the process of adjusting the volume level of individual audio tracks in a mix?",
      options: [
        { id: 0, text: "EQ", isCorrect: false },
        { id: 1, text: "Compression", isCorrect: false },
        { id: 2, text: "Leveling", isCorrect: true },
        { id: 3, text: "Panning", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is an effect used to create a sense of space and depth in a mix??",
      options: [
        { id: 0, text: "Reverb", isCorrect: true },
        { id: 1, text: "Delay", isCorrect: false },
        { id: 2, text: "Chorus", isCorrect: false },
        { id: 3, text: "Flanger", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a technique used to balance the frequency content of different audio tracks in a mix?",
      options: [
        { id: 0, text: "Compression", isCorrect: false },
        { id: 1, text: "EQ", isCorrect: true },
        { id: 2, text: "Reverb", isCorrect: false },
        { id: 3, text: "Panning", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is an effect used to create a rhythmic effect in a mix?",
      options: [
        { id: 0, text: "Chorus", isCorrect: false },
        { id: 1, text: "Delay", isCorrect: true },
        { id: 2, text: "Flanger", isCorrect: false },
        { id: 3, text: "Distortion", isCorrect: false },
      ],
    },
    {
      text: "What is the process of adjusting the stereo placement of individual audio tracks in a mix?",
      options: [
        { id: 0, text: "EQ", isCorrect: false },
        { id: 1, text: "Limiting", isCorrect: false },
        { id: 2, text: "Panning", isCorrect: true },
        { id: 3, text: "Filtering", isCorrect: false },
      ],
    },
  ];

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <motion.div
    initial={{opacity:0}}
  animate={{opacity:1, transition: {duration: 1} }}
  exit={{opacity:0, transition: {duration: 1} }} className="App">
      <Typography variant='h2' fontWeight="bold" color={"white"}>Test Your Audio Knowledge!</Typography>

      {/* 2. Current Score  */}
      <Typography variant='h3' my="2vh" color={"white"}>Score: {score}</Typography>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <Typography variant='h2' fontWeight="bold" my="2vh">Final Results</Typography>
          <Typography variant='h3' my="5vh">
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </Typography>
          <Button variant="contained" onClick={() => restartGame()}>Restart game</Button>
        </div>
      ) : (
        /* 5. Question Card  */
        <motion.div
        initial={{opacity:0}}
      animate={{opacity:1, transition: {duration: 1} }}
      exit={{opacity:0, transition: {duration: 1} }}>
          {/* Current Question  */}
          <Typography variant='h5' >
            Question: {currentQuestion + 1} out of {questions.length}
          </Typography>
          <Typography variant='h4' fontWeight="bold" mt="5vh" color={"white"}>{questions[currentQuestion].text}</Typography>

          {/* List of possible answers  */}
          <Stack spacing={2} alignItems="center" pt="5vh">
            {questions[currentQuestion].options.map((option) => {
              return (
                <Typography
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                  sx={answerStyle}
                >
                  {option.text}
                </Typography>
              );
            })}
          </Stack>
        </motion.div>
      )}
    </motion.div>
  )
}

export default App
