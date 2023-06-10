import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

const projects = () => {
  return (
    <div className='projects'>
      <div className='card-container'>
        <div className='card'>
            <h3>MACHINE LEARNING</h3>
            <span className='bar'></span>
            <p className='prj1'>Face Recognition</p>
            <p>A Machine Learning model created using prebuild model. We need to feed the images to the model and it will predict if the same person is there else it will mark as unknown.</p>
            <Link to='https://github.com/MohamedArafath205/Face-Recognition-System' className='btn'>source code</Link>
        </div>
        <div className='card'>
            <h3>MACHINE LEARNING</h3>
            <span className='bar'></span>
            <p className='prj1'>Emotion Detector</p>
            <p>This Machine Learning model is used to detect emotions using deepface library using your webcam. It also uses haarcascade_frontalface_default.xml file created by OpenCV to recognize the human face and to draw a rectangle around it.</p>
            <Link to='https://github.com/MohamedArafath205/live-emotion-detector' className='btn'>source code</Link>
        </div>
        <div className='card'>
            <h3>MACHINE LEARNING</h3>
            <span className='bar'></span>
            <p className='prj1'>Mine or Rock</p>
            <p>This is a Machine Learning model created to predict whether the given input are of a rock or mine. It needs 59 values for it's evaluation. This ML model has 75% of accuracy.</p>
            <Link to='https://mohamedarafath.streamlit.app/' className='btn'>live demo</Link>
            <Link to='https://github.com/MohamedArafath205/Streamlit' className='btn'>source code</Link>
        </div>
        <div className='card'>
            <h3>MACHINE LEARNING</h3>
            <span className='bar'></span>
            <p className='prj1'>Image Recognition</p>
            <p>A Machine Learning Model using Deep Face library to detect the emotions of that image. This project is similar to the Emotion Detector but this uses image.</p>
            <Link to='https://github.com/MohamedArafath205/Emotion-Detector' className='btn'>source code</Link>
        </div>
        <div className='card'>
            <h3>PYTHON & AI</h3>
            <span className='bar'></span>
            <p className='prj1'>Jarvis</p>
            <p>My project, named Jarvis, is a voice recognition application built in Python. The application is designed to take voice commands and perform various tasks based on the user's input.</p>
            <Link to='https://github.com/MohamedArafath205/Jarvis' className='btn'>source  code</Link>
        </div>
        <div className='card'>
            <h3>MACHINE LEARNING</h3>
            <span className='bar'></span>
            <p className='prj1'>ML</p>
            <p>I am also highly intrested in Machine Learning. I also Participated in a Machine Learning Hackthon on my first year of college and all of my Machine Learning projects are in this GitHub Repository. Check it out.</p>
            <Link to='https://github.com/MohamedArafath205/Machine-Learning' className='btn'>source code</Link>
        </div>
        <div className='card'>
            <h3>PYTHON & AI</h3>
            <span className='bar'></span>
            <p className='prj1'>Chat GPT</p>
            <p>This is a clone of Chat GPT using its AI. I made this app on tried to host it on the Streamlit Platform but due to some api issues I couldn't do it. You can download this project and test it.</p>
            <Link to='https://github.com/MohamedArafath205/Chat-GPT' className='btn'>source code</Link>
        </div>
        <div className='card'>
            <h3>HTML, CSS & JAVASCRIPT</h3>
            <span className='bar'></span>
            <p className='prj1'>Expense Tracker</p>
            <p>A Expense Tracker application build using HTML and Javascript. It stores your input and tells you the profit or loss status for you. It is easy to use.</p>
            <Link to='https://github.com/MohamedArafath205/Expense-Tracker-' className='btn'>source code</Link>
        </div>
        <div className='card'>
            <h3>PYTHON</h3>
            <span className='bar'></span>
            <p className='prj1'>Hangman</p>
            <p>Hangman is a word-guessing game where the computer picks a word and displays dashes for each letter. The user guesses one letter at a time. If the letter is correct, the computer reveals all occurrences of that letter. If the letter is incorrect, the computer draws a part of the hangman. The game ends when the user either guesses the entire word or the hangman is fully drawn.</p>
            <Link to='https://github.com/MohamedArafath205/Hangman' className='btn'>source code</Link>
        </div>
      </div>
    </div>
  )
}

export default projects
