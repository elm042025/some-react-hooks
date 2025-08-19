import { mockData } from "../data/mockData.js";
import { useState } from "react";
import styles from "./Users.module.css";

//! part 1 maps over users in mockData, displaying their username and email
//! part 2 adds a form to add new users, updating mockData with the new users

export function Users() {
   const [users, setUsers] = useState(mockData);
   const [newUser, setNewUser] = useState({ username: "", email: "" });
   const [error, setError] = useState("");

   //!    function to handle submit and cleans input user data

   const handleSubmit = (e) => {
      e.preventDefault();
      const cleanedUser = {
         username: newUser.username.trim().toLowerCase(),
         email: newUser.email.trim().toLowerCase(),
      };
      if (users.some((user) => user.email === cleanedUser.email)) {
         setError("That email is already registered!");
         return;
      } else {
         setUsers([...users, cleanedUser]);
         setNewUser({ username: "", email: "" });
         setError("");
      }
   };

   //! Part 1 => map over users and display their username and email

   return (
      <section className={styles.users}>
         <section className={styles.usersList}>
            <h2>User List</h2>
            {users.map((user) => {
               const { username, email } = user;
               return (
                  <section
                     key={email}
                     className={styles.user}
                  >
                     <h3>{username}</h3>
                     <p>{email}</p>
                  </section>
               );
            })}
         </section>

         {/* part 2 Add New User Form */}

         <section className={styles.addUser}>
            <h4>Add New User</h4>
            <fieldset>
               <legend>Enter User Details</legend>
               <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Username:</label>
                  <input
                     type="text"
                     id="username"
                     placeholder="Eksempel: Albert Einstein "
                     value={newUser.username}
                     required
                     onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                     type="email"
                     id="email"
                     placeholder="Eksempel: albert.einstein@relativity.com"
                     value={newUser.email}
                     required
                     onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  />
                  <button type="submit">Add User</button>
                  {error && <p className={styles.error}>{error}</p>}
               </form>
            </fieldset>
         </section>
      </section>
   );
}
