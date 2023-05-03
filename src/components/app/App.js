import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Timer from '../Timer/Timer';
import Footer from '../Footer/Footer';

import './app.scss';

function App() {

  const [sessionTypes, setSessionTypes] = useState([
    {
      name: 'pomodoro',
      minutes: 25,
      seconds: 0,
    },
    {
      name: 'shortBreak',
      minutes: 5,
      seconds: 0,
    },
    {
      name: 'longBreak',
      minutes: 15,
      seconds: 0,
    }
  ])

  const [sessionType, setSessionType] = useState('pomodoro')

  const [timer, setTimer] = useState('')

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(1)

  const [timerInterval, setTimerInterval] = useState()

  const [timerRunning, setTimerRunning] = useState(false)
  const [timerPaused, setTimerPaused] = useState(false)

  useEffect(() => {
    transformTimer(minutes, seconds)
    setSessionType('pomodoro')
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (timerRunning) {
      if(seconds === 0 && minutes === 0) {
        if(sessionType === 'pomodoro') {
          setSessionType('shortBreak')
        }
        if(sessionType === 'shortBreak' || sessionType === 'longBreak') {
          setSessionType('pomodoro')
        }
        stopTimer()
      }
  
      if(seconds < 0) {
        setSeconds(59)
        setMinutes(minutes => minutes - 1)
      }
    }

    transformTimer(minutes, seconds)
    // eslint-disable-next-line
  }, [minutes, seconds])

  useEffect(() => {
    setTimerValuesBySessionType()
    // eslint-disable-next-line
  }, [sessionType])

  useEffect(() => {
    // console.log(sessionTypes)
    setTimerValuesBySessionType()
    // eslint-disable-next-line
  }, [sessionTypes])

  const changeSessionType = (type) => {
    setSessionType(type)
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
    setTimerValuesBySessionType()
    setTimerRunning(false);
    setTimerPaused(false);
  }

  const onPausePressed = () => {
    console.log('pause')
    if (timerRunning) {
      clearInterval(timerInterval)
      setTimerRunning(false);
      setTimerPaused(true);
    }
  }

  const setTimerValuesBySessionType = () => {
    setMinutes(sessionTypes.find(type => type.name === sessionType).minutes)
    setSeconds(sessionTypes.find(type => type.name === sessionType).seconds)
  }

  const onTimerChange = (timerType, operationType) => {
    setSessionTypes(sessionTypes => {
      return sessionTypes.map((type) => {

        const newValue = operationType < 0 
          ? ((type[timerType] - 1) < 0) ? 59 : type[timerType] - 1
          : ((type[timerType] + 1) > 59) ? 0 : type[timerType] + 1

        if(type.name === sessionType) {
          return {
            ...type,
            [timerType]: newValue
          }
        } else {
          return type
        }
      })
    })
  }
  

  return (
    <div className="section">
      <div className="container">
        <div className="pomodoro">
          <Header 
            sessionType={sessionType} 
            changeSessionType={changeSessionType}/>
          <Timer 
            timer={timer}
            onTimerChange={onTimerChange}
            timerRunning={timerRunning} 
            timerPaused={timerPaused}/>
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
