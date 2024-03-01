import React, { useMemo, useState } from 'react';
import { onLogout } from "../api/AuthAPI";
import Button from '../components/common/Button';
import Home from "../Pages/Home";
import { getCurrentUser } from "../api/FirestoreAPI";

export default function HomeLayout() {
   const [currentUser, setCurrentUser] = useState({});


   useMemo(() => {
      getCurrentUser(setCurrentUser);
   }, []);
   return (
      <div>
         <Home currentUser={currentUser} />
         <Button title="Log out" onClick={onLogout} />
      </div>
   );
}