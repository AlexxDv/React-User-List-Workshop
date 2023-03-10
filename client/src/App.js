import { useEffect, useState } from "react"
import * as userService from "./services/userService";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserList } from "./components/UserList";
import "./App.css"


function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(users => { // or .then(setUsers)
                setUsers(users)
            })
            .catch(err => {
                console.log("Error" + err);
            })
    }, []);


    const onUserCreateSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData)

        const createdUser = await userService.create(userData)
        setUsers(x => [...x, createdUser])
    }

    const onUserDelete = async (userId) => {
        // Delete from server
        await userService.remove(userId)

        // Delete from client/state
        setUsers(x => x.filter(u => u._id !== userId))
    }

    return (
        <>
            < Header />

            <main className="main">
                <section className="card users-container" />

                < Search />
                < UserList
                    users={users}
                    onUserCreateSubmit={onUserCreateSubmit}
                    onUserDelete={onUserDelete}
                />

            </main>

            < Footer />

        </>
    );
}

export default App;
