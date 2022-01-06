import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router';
import { Button } from '../../components/buttons';
import { useGetUserProfileQuery } from '../../redux/redux-query';
import { openAddContact, openCompose } from '../../redux/slices/ui-slice';
const Dashboard = ({ children }) => {
      const auth = useSelector(state => state.auth);
      const { data, error, isLoading } = useGetUserProfileQuery(auth.publicAddress);
      const dispatch = useDispatch();
      if (!data.friends?.length) return (
            <div>
                  <p>Add some friends to get started</p>
                  <Button onPointerUp={() => dispatch(openAddContact())}>Add Friends</Button>
            </div>
      )
      return (
            <div>

                  <p>You have no chats</p>
                  <Button onPointerUp={() => dispatch(openCompose())}>Create Chat</Button>



            </div>
      );
}

export default Dashboard;
