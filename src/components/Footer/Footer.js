import './footer.scss'
import resetImg from '../../resources/img/reset.svg'

const Footer = ({onStartPressed, onPausePressed, onResetPressed, timerRunning, timerPaused}) => {
  return (
    <div className="pomodoro__footer">
      <button onClick={onStartPressed} className={`pomodoro__btn ${timerRunning ? 'pomodoro__btn_active' : ''}`}>
        start
      </button>
      <button onClick={onPausePressed} className={`pomodoro__btn ${timerPaused ? 'pomodoro__btn_active' : ''}`}>
        pause
      </button>
      <img onClick={onResetPressed} className="pomodoro__footer-img" src={ resetImg } alt="reset button"></img>
    </div>
  )
}

export default Footer 