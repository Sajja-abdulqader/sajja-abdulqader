import React from 'react';
import styles from './FooterStyles.module.css';
function Footer() {
  return (
   <section  id="Footer"  className={styles.container}>
  <p>
    Contact me: 
    <a href="mailto:sajja.abdulqader@example.com">
      sajjaabdulqader@gmail.com
    </a>
  </p>
    <p>© 2025 Sajja Abdulqader. All rights reserved.</p>
   </section>
  
  );
}

export default Footer;