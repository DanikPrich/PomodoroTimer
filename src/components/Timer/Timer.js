import { useState, useEffect } from 'react'

import './timer.scss'

const Timer = ({ timer }) => {

  // const [timer, setTimer] = useState('')
  // const [minutes, setMinutes] = useState(0)
  // const [seconds, setSeconds] = useState(5)
  // const [timerInterval, setTimerInterval] = useState()
  // const [timerStarted, setTimerStarted] = useState(false)

  // useEffect(() => {
  //   transformTimer(minutes, seconds)
  //   // eslint-disable-next-line
  // }, [])

  // useEffect(() => {
  //   if(seconds === 0 && minutes === 0) {
  //     stopTimer()
  //     setSeconds(0)
  //     setMinutes(25)
  //   }

  //   if(seconds < 0) {
  //     setSeconds(59)
  //     setMinutes(minutes => minutes - 1)
  //   }

  //   transformTimer(minutes, seconds)
  //   // eslint-disable-next-line
  // }, [minutes, seconds])

  // const transformTimer = (min, sec) => {
  //   const convertTime = (time) => {
  //     if (time < 10) {
  //       return `0${time}`
  //     }
  //     return time
  //   }
  //   setTimer(`${convertTime(min)}:${convertTime(sec)}`)
  // }

  // const startTimer = () => {
  //   // setTimerStarted(true)

  //   if (props.timerStarted) return

  //   const interval =  setInterval( async () => {
  //     setSeconds(seconds => seconds - 1)
  //   } ,1000)

  //   setTimerInterval(interval)
  // }

  const stopTimer = () => {
    // clearInterval(timerInterval)
    // setTimerStarted(false)
  }

  return (
    <>
      <div className="pomodoro__timer">
        { timer }
      </div>
      {/* <button onClick={startTimer}>
        start
      </button>

      <button onClick={stopTimer}>
        stop
      </button> */}
    </>
  )
} 

export default Timer 