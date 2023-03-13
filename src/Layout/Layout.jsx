import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";
import NavBar from '../Componentes/NavBar/NavBar'

export function Layout() {
  return (
    <UserContextProvider>
      <main>
        
        <NavBar/>
        <section className="body">
            <Outlet/>
        </section>
      </main>
    </UserContextProvider>
  );
}
