import './header.scss'

const Header = () => {
  return (
    <div className="pomodoro__btns">
      <button className="pomodoro__btn pomodoro__btn_active">
        pomodoro
      </button>
      <button className="pomodoro__btn">
        short break
      </button>
      <button className="pomodoro__btn">
        long break
      </button>
    </div>
  )
} 

export default Header 