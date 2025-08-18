import cookiePng from "/cookie.png";
import { useState } from "react";
import styles from "./cookieClicker.module.css";

export function CookieClicker() {
   const [cookiePoints, setCookiePoints] = useState(0);
   const handleClick = () => {
      setCookiePoints(cookiePoints + 1);
   };
   return (
      <section className={styles.cookieClicker}>
         <h2>Cookie Clicker</h2>
         <button title="Click me to get more cookie points">
            <img
               src={cookiePng}
               alt="Brown cookie with chocolate chips"
               onClick={handleClick}
            />
         </button>
         <p>Cookie points: {cookiePoints}</p>
      </section>
   );
}
