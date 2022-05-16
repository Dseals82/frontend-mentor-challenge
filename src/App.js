import { ReactComponent as Logo } from './assets/images/logo.svg'
import { ReactComponent as DataBizLogo } from './assets/images/client-databiz.svg'
import { ReactComponent as AudioPhileLogo } from './assets/images/client-audiophile.svg'
import { ReactComponent as MeetLogo } from './assets/images/client-meet.svg'
import { ReactComponent as MakerLogo } from './assets/images/client-maker.svg'
import { ReactComponent as IconArrowUp } from './assets/images/icon-arrow-up.svg'
import { ReactComponent as Hamburger } from './assets/images/icon-menu.svg'
import { ReactComponent as IconArrowDown } from './assets/images/icon-arrow-down.svg'
import ImageHeroDesktopSrc from './assets/images/image-hero-desktop.png'
import ImageHeroMobileSrc from './assets/images/image-hero-mobile.png'
const App = () => {
  return (
    <div className="App">
    
      <header className="header"> 

        <nav className="nav-left">
        <Logo className='logo' />
          <a href="/" className="nav__links ">Features <IconArrowDown /></a>
          <a href="/" className="nav__links ">Company <IconArrowDown /></a>
          <a href="/" className="nav__links ">Careers</a>
          <a href="/" className="nav__links ">About</a>
        </nav>
      
        <div className="nav-right">
          <a href="/" className="nav__links">Login</a>
          <a href="/" className="nav__links">Register</a>
          <Hamburger className='hamburger'/>
        </div>
              
      </header>
    
    
      <main className="main">
        <div className="main__left-container">
          <h1 className='main__left-h1'><span className='main__left-h1-span'>Make</span> remote work</h1>
          
            <p className='main__p'>
              Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.
            </p>
            <button className='main__btn'>Learn more</button>
         
          
          <footer className='main__left-container-footer'>
            <DataBizLogo />
            <AudioPhileLogo />
            <MeetLogo />
            <MakerLogo />
          </footer>
        </div>

        <div className="main__right-container">
          <img alt='' src={ImageHeroDesktopSrc} className="main__img"/>
          <img alt='' src={ImageHeroMobileSrc} className="main__img-mobile"/>
        </div>
      </main>
    
    </div>
  );
}

export default App;
