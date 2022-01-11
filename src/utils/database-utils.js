export const searchUser = async (username) => {
      try {
            const res = await fetch(`http://localhost:3000/user/search/${username}`, {
                  method: 'get',
                  mode: 'cors',
                  headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  },

            });
            const user = await res.json();
            return user;
      } catch (err) {
            return new Error(err);
      }
}

export const addFriend = async (userID, friendID) => {
      try {
            const res = await fetch(`http://localhost:3000/user/add`, {
                  method: 'post',
                  mode: 'cors',
                  headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  },
                  body: new URLSearchParams({
                        userID,
                        friendID
                  })

            });
            const response = await res.json();
            return response;

      } catch (err) {
            return new Error(err)
      }
}