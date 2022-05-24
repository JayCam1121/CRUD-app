import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserForm = ({ getUsers, userSelected, deselectUser }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        } else {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
        }
    }, [userSelected]);

    const submit = (e) => {
        e.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday
        };
        if (userSelected !== null) {
            alert("Modifying");
            axios
                .put(
                    `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
                    user
                )
                .then(() => {
                    getUsers();
                    deselectUser();
                });
        } else {
            axios
                .post("https://users-crud1.herokuapp.com/users/", user)
                .then(() => getUsers())
                .catch((error) => console.log(error.response));
        }   
    };

    return (
        <div>
            <form onSubmit={submit} className="content">
                <h1>New User</h1>
                <div class='input1'>
                    <input placeholder="First Name" type="text" required onChange={e => setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div class='input2'>
                    <input placeholder="Last Name" type="text" required onChange={e => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div class='input3'>
                    <input placeholder="Email" type="text" required onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div class='input4'>
                    <input placeholder="Password" type="password" required  onChange={e => setPassword(e.target.value)} value={password}/>
                </div>
                <div class='input5'>
                    <input placeholder="Birthday" type="date" required onChange={e => setBirthday(e.target.value)} value={birthday}/>
                </div>
                <button type='submit' class="btn">
                Submit <i class="fa-duotone fa-down-to-bracket"></i>
                </button>
                {
                    userSelected !== null && (
                        <button class="btn" type='button' onClick={() => deselectUser()}>Cancel</button>
                    )
                }
            </form>
        </div>
    );
};

export default UserForm;