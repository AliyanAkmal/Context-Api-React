import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import UserContextProvider from "./context/contex-api";
import "../src/app.css";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Leyn Akmal</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
