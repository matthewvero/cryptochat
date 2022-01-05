import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { Button } from '../../components/buttons';
const Dashboard = () => {
      const userProfile = useSelector(state => state.auth.userProfile);
      const navigate = useNavigate();
      useEffect(() => {
            if (userProfile) {

            }
      }, [userProfile])
      return (
            <div>
                  <p>You have no chats</p>
                  <Button onPointerUp={() => navigate('/compose')}>Create Chat</Button>
            </div>
      );
}

export default Dashboard
