import { useState } from "react";

function UserInfo() {

  const [user, setUser] = useState({
    name: "Janus",
    email: "janus@gmail.com",
    bio: "Ako po si Janus"
  })

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          {user.name}
        </p>
        <p className="card-text">
          {user.email}
        </p>
        <p className="card-text">
          {user.bio}
        </p>
      </div>
    </div>
  )
}

export default UserInfo

