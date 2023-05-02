import './footer.scss'
import resetImg from '../../resources/img/reset.svg'

const Footer = () => {
  return (
    <div class="pomodoro__footer">
      <button class="pomodoro__btn pomodoro__start">
        start
      </button>
      <img class="pomodoro__reset" src={ resetImg } alt="reset button"></img>
    </div>
  )
}

export default Footer 