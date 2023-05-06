import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Timer from '../Timer/Timer';
import Footer from '../Footer/Footer';

import useDocumentTitle from '../../hooks/title.hook';

import alarm1 from '../../assets/alarm1.mp3'
import alarm2 from '../../assets/alarm2.mp3'
import alarm3 from '../../assets/alarm3.mp3'

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

  const [actualSessionType, setSessionType] = useState('pomodoro')

  const [timer, setTimer] = useState('')

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(1)

  const [timerInterval, setTimerInterval] = useState()

  const [timerRunning, setTimerRunning] = useState(false)
  const [timerPaused, setTimerPaused] = useState(false)

  useDocumentTitle(timer)

  useEffect(() => {
    transformTimer(minutes, seconds)
    // setSessionType('pomodoro')
    // eslint-disable-next-line
  }, [])

  useEffect(() => {

    if (timerRunning) {
      if(seconds === 0 && minutes === 0) {

        switch(actualSessionType) {
          
          case 'shortBreak': 
            playAlarm(alarm1)
            setSessionType('pomodoro')
            break;
          
          case 'longBreak': 
            playAlarm(alarm3)
            setSessionType('pomodoro')
            break;
          
          default: 
            playAlarm(alarm2)
            setSessionType('shortBreak')
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
  }, [actualSessionType, sessionTypes])

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
    console.log('start');
    setTimerRunning(true);
    setTimerPaused(false);

    if (timerRunning) return

    if (minutes === 0 && seconds === 0) {
      stopTimer()
      return
    }

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
    setMinutes(sessionTypes.find(type => type.name === actualSessionType).minutes)
    setSeconds(sessionTypes.find(type => type.name === actualSessionType).seconds)
  }

  const onTimerChange = (timerType, operationType) => {
    setSessionTypes(sessionTypes => {
      return sessionTypes.map((type) => {

        const newValue = operationType < 0 
          ? ((type[timerType] - 1) < 0) ? 59 : type[timerType] - 1
          : ((type[timerType] + 1) > 59) ? 0 : type[timerType] + 1

        if(type.name === actualSessionType) {
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

  const playAlarm = (alarm) => {
    new Audio(alarm).play()
  }

  const keyDown = (e) => {
    if(e.code === "Space") {
      if(timerRunning) {
        onPausePressed();
      } else {
        startTimer();
      }
    }
    if(e.code === "Escape") {
      stopTimer();
    }
  }


  return (
    <div className="section"
      onKeyDown={(e) => keyDown(e)}
      tabIndex="0">
      <div className="container">
        <div className="pomodoro">
          <Header 
            actualSessionType={actualSessionType} 
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
