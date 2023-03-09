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


    const onUserCreate = (e) => {

    }
    return (
        <>
            < Header />

            <main className="main">
                <section className="card users-container" />

                < Search />
                < UserList users={users} onUserCreate={onUserCreate} />

            </main>

            < Footer />

        </>
    );
}

export default App;
