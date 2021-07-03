
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './constants/Firebase';
import { login, logout } from './features/userSlice';
import RegistrationInfo from './pages/RegistrationInfo';
import PasswordEnter from './pages/PasswordEnter';
import Plan from './pages/Plan';
import Payment from './pages/Payment';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout());
      }
    })
    return unSubscribe
  }, [dispatch])



  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/signup/registration'>
          <RegistrationInfo/>
        </Route>
        <Route path='/signup/password'>
          <PasswordEnter/>
        </Route>
        <Route path='/plan'>
          <Plan/>
        </Route>
        <Route path='/payment'>
          <Payment/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
