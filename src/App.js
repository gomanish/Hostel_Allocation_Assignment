import React from 'react';
import './App.css';
import logo from "./images/tulogo.png";
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  
  signInSuccessUrl: '/home',
  
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};


function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [key, setKey] = React.useState(null);
  
  React.useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver();
  }, []);
  function signedOut(){
    firebase.auth().signOut();
    setIsSignedIn(false);
  }

  return (
      <div className="App">
        <header className="app-header">
          <img src={logo} alt="logo image"></img>
          <h2>Tezpur University</h2>
          {
            isSignedIn?
              <div className="right-header">
                <img onClick={signedOut} src="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/4ad550d80a1040d3b5bc8e4a5433f6ae.jpeg" alt="user image"></img>
              </div>
              :null
          }
        </header>
          {
            isSignedIn?
            <div className="container">
              <h1>Welcome{firebase.auth().currentUser.displayName} </h1>
              <p>Your Room details as follows: </p>
            </div>
            :<>
              <h1>Hostel Allocation</h1>
              <p>Please sign-in:</p>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </>  
          }
      </div>
  );
}

export default App;
