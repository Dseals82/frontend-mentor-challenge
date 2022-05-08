import { ReactComponent as Logo } from './assets/images/logo.svg'
import { ReactComponent as DataBizLogo } from './assets/images/client-databiz.svg'
import { ReactComponent as AudioPhileLogo } from './assets/images/client-audiophile.svg'
import { ReactComponent as MeetLogo } from './assets/images/client-meet.svg'
import { ReactComponent as MakerLogo } from './assets/images/client-maker.svg'
import ImageHeroDesktopSrc from './assets/images/image-hero-desktop.png'
const App = () => {
  return (
    <div className="App">
      <nav className="nav">
      <Logo />
        <div className="nav-links-container nav-links-container-left">
          <a href="/" className="nav-links">Features</a>
          <a href="/" className="nav-links">Company</a>
          <a href="/" className="nav-links">Careers</a>
          <a href="/" className="nav-links">About</a>
        </div>
        <div className="nav-links-container nav-links-container-right">
          <a href="/" className="nav-links">Login</a>
          <a href="/" className="nav-links">Register</a>
        </div>
      </nav>
    
    
      <main className="main">
        <div className="main-left-container">
          <h1> Make remote work</h1>
          <div className='btn-p-container'>
            <p>
              Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
          </div>
          
          <footer className='main-left-container-footer'>
            <DataBizLogo />
            <AudioPhileLogo />
            <MeetLogo />
            <MakerLogo />
          </footer>
        </div>

        <div className="main-right-container">
          <img alt='' src={ImageHeroDesktopSrc} />
        </div>
      </main>
    
    </div>
  );
}

export default App;
