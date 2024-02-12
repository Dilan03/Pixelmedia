import React from 'react';
import { onLogout } from "../api/AuthAPI";
import Button from '../components/common/Button';

export default function HomeLayout() {
   return (
      <>
         <div>Home</div>
         <Button title="Log out" onClick={onLogout} />
      </>

   )
}