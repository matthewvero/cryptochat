import { useState } from "react";
import { useEffect } from "react/cjs/react.development"
import { io } from 'socket.io-client';
export const useSocket = (url) => {
      const [socket, setSocket] = useState();
      useEffect(() => {
            const _socket = io(url, {
                  withCredentials: true,
                  extraHeaders: {
                  "messenger": "abcd"
                  }
            })
            setSocket(_socket);
      }, [])
      return socket;
}