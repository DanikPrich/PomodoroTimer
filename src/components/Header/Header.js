import './header.scss'

const Header = ({timerType, changeTimerType}) => {

  return (
    <div className="pomodoro__btns">
      <button onClick={() => {changeTimerType('pomodoro')}} className={`pomodoro__btn ${timerType === 'pomodoro' ? 'pomodoro__btn_active' : ''}`}>
        pomodoro
      </button>
      <button onClick={() => {changeTimerType('shortBreak')}} className={`pomodoro__btn ${timerType === 'shortBreak' ? 'pomodoro__btn_active' : ''}`}>
        short break
      </button>
      <button onClick={() => {changeTimerType('longBreak')}} className={`pomodoro__btn ${timerType === 'longBreak' ? 'pomodoro__btn_active' : ''}`}>
        long break
      </button>
    </div>
  )
} 

export default Header 