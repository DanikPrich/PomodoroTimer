import './footer.scss'
import resetImg from '../../resources/img/reset.svg'

const Footer = ({onStartPressed, onResetPressed}) => {
  return (
    <div className="pomodoro__footer">
      <button onClick={onStartPressed} className="pomodoro__btn pomodoro__start">
        start
      </button>
      <img onClick={onResetPressed} className="pomodoro__reset" src={ resetImg } alt="reset button"></img>
    </div>
  )
}

export default Footer 