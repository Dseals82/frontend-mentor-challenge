import { ReactComponent as Logo } from './assets/images/logo.svg'
import { ReactComponent as DataBizLogo } from './assets/images/client-databiz.svg'
import { ReactComponent as AudioPhileLogo } from './assets/images/client-audiophile.svg'
import { ReactComponent as MeetLogo } from './assets/images/client-meet.svg'
import { ReactComponent as MakerLogo } from './assets/images/client-maker.svg'
import { ReactComponent as IconArrowUp } from './assets/images/icon-arrow-up.svg'
import { ReactComponent as IconArrowDown } from './assets/images/icon-arrow-down.svg'
import ImageHeroDesktopSrc from './assets/images/image-hero-desktop.png'
const App = () => {
  return (
    <div className="App">
      <nav className="nav">
      
        
        <div className='nav-links-main-container'>
        
          <div className="nav-links-container nav-links-container-left">
          <Logo className='nav-logo' />
            <a href="/" className="nav-links grey-color">Features <IconArrowDown /></a>
            <a href="/" className="nav-links grey-color">Company <IconArrowDown /></a>
            <a href="/" className="nav-links grey-color">Careers</a>
            <a href="/" className="nav-links grey-color">About</a>
          </div>
        
          <div className="nav-links-container nav-links-container-right">
            <a href="/" className="nav-links grey-color ">Login</a>
            <a href="/" className="nav-links grey-color nav-btn ">Register</a>
          </div>
        </div>
          
        
        
      </nav>
    
    
      <main className="main">
        <div className="main-left-container">
          <span className='main-h1-make'>Make</span><h1 className='main-h1'>  remote work</h1>
          <div className='btn-p-container'>
            <p className='main-p'>
              Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.
            </p>
            <button className='main-btn'>Learn more</button>
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
