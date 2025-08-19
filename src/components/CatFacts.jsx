import styles from "./CatFacts.module.css";
import { useState, useEffect, use } from "react";

export function CatFacts() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [facts, setFacts] = useState([]);

   useEffect(() => {
      const fetchFacts = async () => {
         try {
            const response = await fetch("https://catfact.ninja/facts?limit=5");
            if (!response.ok) {
               throw new Error("Failed to fetch cat facts");
            }
            const data = await response.json();
            setFacts(data.data);
         } catch (error) {
            setError(error.message);
         } finally {
            setLoading(false);
         }
      };
      fetchFacts();
   }, []);

   return (
      <section className={styles.catFacts}>
         <h2>Cat Facts🐈</h2>
         {loading && <p>Loading...</p>}
         {error && <p className={styles.error}>{error}</p>}
         {!loading && !error && (
            <ul>
               {facts.map((fact, index) => (
                  <li key={index}>{fact.fact}</li>
               ))}
            </ul>
         )}
         <hr />
      </section>
   );
}
