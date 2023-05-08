import './header.scss'

const Header = ({actualSessionType, changeSessionType}) => {

  return (
    <div className="pomodoro__btns">
      <button onClick={() => {changeSessionType('pomodoro')}} className={`pomodoro__btn ${actualSessionType === 'pomodoro' ? 'pomodoro__btn_active' : ''}`}>
        pomodoro
      </button>
      <button onClick={() => {changeSessionType('shortBreak')}} className={`pomodoro__btn ${actualSessionType === 'shortBreak' ? 'pomodoro__btn_active' : ''}`}>
        short break
      </button>
      <button onClick={() => {changeSessionType('longBreak')}} className={`pomodoro__btn ${actualSessionType === 'longBreak' ? 'pomodoro__btn_active' : ''}`}>
        long break
      </button>
    </div>
  )
} 

export default Header 