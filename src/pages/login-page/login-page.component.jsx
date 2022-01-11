import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPublicAddress, setUser } from '../../redux/slices/auth-slice';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/buttons';
export const LoginPage = () => {
      const [username, setUsername] = useState('');
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const auth = useSelector(state => state.auth);
      const getAccount = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            dispatch(setPublicAddress(account));
      }
      useEffect(() => {
            getAccount()
      }, [])
      const createUserProfile = async () => {

            const res = await fetch(`http://localhost:3000/user/${auth.publicAddress}/`, {
                  method: 'post',
                  mode: 'cors',
                  headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  },
                  body: new URLSearchParams({
                        username,

                  })
            });

            const response = await res.json();
            if (response) {
                  dispatch(setUser(response));
            }

      }

      return (
            <div>
                  {
                        auth.publicAddress ?
                              <>
                                    <h1>Finish creating account</h1>
                                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <button onClick={() => createUserProfile()}>Create account</button>
                              </>
                              :
                              <>
                                    <h1>Welcome!</h1>
                                    <h3>Please sign in with MetaMask</h3>
                                    <Button onClick={() => getAccount()}>Sign in</Button>
                              </>
                  }
            </div>
      )
}

