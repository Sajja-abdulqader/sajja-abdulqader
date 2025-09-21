import styles from './HeroStyles.module.css';
import heroImg from '../../assets/sajLOGO.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import  twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import Scv from '../../assets/Scv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;    
 

    return ( 
  <section id="Hero" className={styles.container}>  
  <div  className={styles.colorModeContainer}>
     
<img src={heroImg} 
alt="Sajja Abdulqader" 
className={styles.hero} />

<img src={themeIcon} 
alt="Color mode Icon"
onClick={toggleTheme}
className={styles.colorMode} />

     </div>
     <div className={styles.info}>
        <h1>
            Sajja <br /> Abdulqader

        </h1>
        <h2>     Frontend Developer </h2>
        <span> 
        <a href='https://x.com/Sajjaabdulqader' target='_blank'>
        <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a href='https://github.com/dashboard' target='_blank'>
        <img src={githubIcon} alt="github icon" />
        </a>
        <a href='https://www.linkedin.com/in/saja-abdulqader-00ab64352/' target='_blank'>
        <img src={linkedinIcon} alt="linkedin icon" />
        </a>
        </span>
<p> With a passion for developing modern react web apps for commercial businesses</p>
<a href={Scv} download>   
        <button className="hover"  >
            Resume
        </button>
</a>
        </div>
   </section>
    );
  
}

export default Hero;