import React, { useMemo, useState } from 'react';
import { onLogout } from "../api/AuthAPI";
import Button from '../components/common/Button';
import Home from "../pages/Home";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from '../components/common/Topbar';

export default function HomeLayout() {
   const [currentUser, setCurrentUser] = useState({});


   useMemo(() => {
      getCurrentUser(setCurrentUser);
   }, []);
   return (
      <div>
         <Topbar currentUser={currentUser} />
         <Home currentUser={currentUser} />
         <Button title="Log out" onClick={onLogout} />
      </div>
   );
}