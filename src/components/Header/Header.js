import './header.scss'

const Header = ({sessionType, changeSessionType}) => {

  return (
    <div className="pomodoro__btns">
      <button onClick={() => {changeSessionType('pomodoro')}} className={`pomodoro__btn ${sessionType === 'pomodoro' ? 'pomodoro__btn_active' : ''}`}>
        pomodoro
      </button>
      <button onClick={() => {changeSessionType('shortBreak')}} className={`pomodoro__btn ${sessionType === 'shortBreak' ? 'pomodoro__btn_active' : ''}`}>
        short break
      </button>
      <button onClick={() => {changeSessionType('longBreak')}} className={`pomodoro__btn ${sessionType === 'longBreak' ? 'pomodoro__btn_active' : ''}`}>
        long break
      </button>
    </div>
  )
} 

export default Header 