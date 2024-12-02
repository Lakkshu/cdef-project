import Data from "./components/Data";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { auth, provider } from './firebase';
import styled from 'styled-components';
import { useState } from 'react';

// Styled components
const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  color: black;
  text-align: center;
  padding: 40px;

  h1 {
    font-size: 80px; /* Larger font size */
    margin-bottom: 20px;
    font-weight: 450;
    color: black;
  }

  ul {
    list-style-type: circle;
    padding: 0;
    font-size: 20px;

    li {
      margin: 10px 0;
      text-align:left;
    }
  }

  .bottom-logo {
    position: absolute;
    bottom: 20px;
    img {
      width: 300px; /* Adjusted logo size */
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap:80px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 60px;
  }

  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    background: darkmagenta;
    width: 400px; /* Increased width */
    height:60px;
    padding: 15px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 50px;
    cursor: pointer;
  }
  .lines{
     display:flex;
     flex-direction:column;
     gap:25px;
     h1{
       margin:auto;
     }
  }
`;


function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => setUser(user))
      .catch(err => alert(err));
  };

  const signUp = (e) => {
    e.preventDefault();
    // Logic for sign-up can be added here
    alert('Sign-Up feature coming soon!');
  };

  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL} />
          <div className="App">
            <Sidebar />
            <Data />
          </div>
        </>
      ) : (
        <AppWrapper>
          <LeftSection>
            <h1>Private Cloud</h1>
            <ul>
              <li>Securely store your files</li>
              <li>Access from anywhere</li>
              <li>Share with trusted users</li>
              <li>Real-time collaboration</li>
              <li>High data privacy   </li>
            </ul>
            <div className="bottom-logo">
              <img src="5813080.png" alt="Logo" />
            </div>
          </LeftSection>

          

          
          <RightSection>
            <div className="lines">
              <h1>Manage your files the best way</h1>
              <h2>This is a place where you can store all your documents.</h2>
            </div>
            <button onClick={signIn}>Login</button>
          </RightSection>
        </AppWrapper>
      )}
    </>
  );
}

export default App;

