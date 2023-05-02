import './timer.scss'

const Timer = ({ timer }) => {

  return (
    <>
      <div className="pomodoro__timer">
        { timer }
      </div>
    </>
  )
} 

export default Timer 