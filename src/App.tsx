import React from 'react';
import Profile from "./components/Profile/Profile";
import UsersList from "./components/UsersList/UsersList";
import './App.css';

function App(): JSX.Element {
  return (
    <>
      <UsersList/>
      <Profile/>
    </>
  );
}

export default App;
