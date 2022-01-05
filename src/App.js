import './App.css';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate} from 'react-router-dom';
import {LoginPage} from './pages/login-page/login-page.component';
import Dashboard from './pages/dashboard-page/dashboard-page.component';
import { setUser } from './redux/slices/auth-slice';
import { Header } from './components/header/header.component';
import { Compose } from './components/compose/compose.component';

function App() {
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(false);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate()
  useEffect(() => {
    console.log(auth.userProfile)
  
  }, [auth.userProfile])
  useEffect(() => {
    if (auth.publicAddress) {
          const getUserProfile = async () => {
                const res = await fetch(`http://localhost:5000/user/${auth.publicAddress}`, {
                      method: 'get',
                      mode: 'cors',
                      headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                      }
                });

                const response = await res.json();
                if (response) {
                      dispatch(setUser(response));
                } 
          }
          getUserProfile();
    }
    
}, [auth.publicAddress])

  return (
    
    <div className="App">
        {auth.userProfile?.hasOwnProperty('username') && <Header/>}
        <Routes>
          <Route path='/' element={auth.userProfile?.hasOwnProperty('username') ? <Dashboard/> : <LoginPage />}/>
        </Routes>
  
    </div>
  );
}

export default App;
