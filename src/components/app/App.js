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
  const [seconds, setSeconds] = useState(5)
  const [timerInterval, setTimerInterval] = useState()

  const [timerStarted, setTimerStarted] = useState(false)

  useEffect(() => {
    transformTimer(minutes, seconds)
    setTimerType('pomodoro')
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(seconds === 0 && minutes === 0) {
      stopTimer()
    }

    if(seconds < 0) {
      setSeconds(59)
      setMinutes(minutes => minutes - 1)
    }

    transformTimer(minutes, seconds)
    // eslint-disable-next-line
  }, [minutes, seconds])

  const changeTimerType = (type) => {
    setTimerType(type)

    stopTimer()

    setMinutes(timerTypes[type])
    setSeconds(0)
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
    setTimerStarted(true)

    if (timerStarted) return

    const interval =  setInterval( async () => {
      setSeconds(seconds => seconds - 1)
    } ,1000)

    setTimerInterval(interval)
  }
  
  const stopTimer = () => {
    console.log('stop')
    clearInterval(timerInterval)
    setMinutes(timerTypes[timerType])
    setSeconds(0)
    setTimerStarted(false);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="pomodoro">
          <Header timerType={timerType} changeTimerType={changeTimerType}/>
          <Timer timer={timer}/>
          <Footer onStartPressed={startTimer} onResetPressed={stopTimer}/>
        </div>
      </div>
    </div>
  );
}

export default App;
