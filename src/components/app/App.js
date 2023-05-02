import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Timer from '../Timer/Timer';
import Footer from '../Footer/Footer';

import './app.scss';

function App() {

  const timerTypes = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15
  }

  const [timerType, setTimerType] = useState()

  const [timer, setTimer] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(1)
  const [timerInterval, setTimerInterval] = useState()

  const [timerRunning, setTimerRunning] = useState(false)
  const [timerPaused, setTimerPaused] = useState(false)

  useEffect(() => {
    transformTimer(minutes, seconds)
    setTimerType('pomodoro')
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(seconds === 0 && minutes === 0) {
      if(timerType === 'pomodoro') {
        setTimerType('shortBreak')
      }
      stopTimer()
    }

    if(seconds < 0) {
      setSeconds(59)
      setMinutes(minutes => minutes - 1)
    }

    transformTimer(minutes, seconds)
    // eslint-disable-next-line
  }, [minutes, seconds])

  useEffect(() => {
    setMinutes(timerTypes[timerType])
    setSeconds(0)
    // eslint-disable-next-line
  }, [timerType])

  const changeTimerType = (type) => {
    setTimerType(type)
    stopTimer()
  }

  const transformTimer = (min, sec) => {
    const convertTime = (time) => {
      if (time < 10) {
        return `0${time}`
      }
      return time
    }
    setTimer(`${convertTime(min)}:${convertTime(sec)}`)
  }

  const startTimer = () => {
    console.log('start')
    setTimerRunning(true)
    setTimerPaused(false);

    if (timerRunning) return

    const interval =  setInterval(() => {
      setSeconds(seconds => seconds - 1)
    } ,1000)

    setTimerInterval(interval)
  }
  
  const stopTimer = () => {
    console.log('stop')

    clearInterval(timerInterval)
    setMinutes(timerTypes[timerType])
    setSeconds(0)
    setTimerRunning(false);
    setTimerPaused(false);
  }

  const onPausePressed = () => {
    console.log('pause')
    clearInterval(timerInterval)
    setTimerRunning(false);
    setTimerPaused(true);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="pomodoro">
          <Header 
            timerType={timerType} 
            changeTimerType={changeTimerType}/>
          <Timer 
            timer={timer}/>
          <Footer 
            onStartPressed={startTimer} 
            onPausePressed={onPausePressed} 
            onResetPressed={stopTimer} 
            timerRunning={timerRunning} 
            timerPaused={timerPaused}/>
        </div>
      </div>
    </div>
  );
}

export default App;
