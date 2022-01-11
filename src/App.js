import './App.css';
import { useEffect } from 'react';
import {useSelector } from 'react-redux';
import { Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import {LoginPage} from './pages/login-page/login-page.component';
import Dashboard from './pages/dashboard-page/dashboard-page.component';
import { Header } from './components/header/header.component';
import { Compose } from './components/compose/compose.component';
import { useGetUserProfileQuery } from './redux/redux-query';
import { AddContact } from './components/addcontact/add-contact.component';
function App() {
  const state = useSelector(state => state.userAPI)
  const auth = useSelector(state => state.auth);

  const navigate = useNavigate()
  
  const { data, error, isLoading } = useGetUserProfileQuery(auth.publicAddress);

  useEffect(() => {
    console.log(data)
    if(!isLoading && data.hasOwnProperty('username')) {
      navigate('/dashboard/home');
    } else {
      navigate('login')
    }
  }, [data])

  

  return (
    
    <div className="App" data-testid="app-container" >
        <Routes>
          <Route path='/dashboard' element={<Header/>}>
            
            <Route path='home' element={isLoading ? <div>LOADING</div> : <Dashboard/>}/>

          </Route>
         
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        <Compose/>
        <AddContact user={data}/>
    </div>
  );
}

export default App;
