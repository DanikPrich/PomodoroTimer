import Header from '../Header/Header';
import Timer from '../Timer/Timer';
import Footer from '../Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="section">
      <div className="container">
        <div className="pomodoro">
          <Header/>
          <Timer/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
