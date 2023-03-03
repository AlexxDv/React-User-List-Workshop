
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserList } from "./components/UserList";
import "./App.css"


function App() {
  return (
    <>

      < Header />

      <main className="main">
        < Search />
        < UserList />

      </main>

      < Footer />

    </>
  );
}

export default App;
