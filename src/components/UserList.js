import React from 'react';

const UsersList = ({ users, selectUser, deleteUser }) => {

    console.log(users);

    return (
        <ul className="list-group">
            {users.map((user) => (
                <li key={user.id} className="list-group-item">
                    <h3>{user.first_name} {user.last_name}</h3>
                    <p>
                        <b>Email:</b> {user.email} 
                    </p>
                    <p>
                        <b>Birthday: </b> {user.birthday}
                    </p>
                    <button
                        onClick={() => selectUser(user)}
                        className="btn"
                    >
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                        onClick={() => deleteUser(user.id)} 
                        className="btn">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </li>
            ))}
        </ul>
        
    );
    
};

export default UsersList;