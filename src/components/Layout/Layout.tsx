import { ReactNode } from "react";
import { LayoutProvider } from "./LayoutProvider";
import { GlobalSearch } from "../GlobalSearch";
import { NavLink } from "react-router-dom";

type Props = {
  title: ReactNode;
  children: ReactNode;
}
function Layout({ title, children }: Props) {
  return (
    <LayoutProvider>
      <aside className="fixed h-full w-64 bg-orange-800 hidden md:block">
        <nav>
          <ul className="mt-8 mx-6 grid gap-4">
            <li><NavLink to="/topics" className={({ isActive }) => `block p-2 border-2 border-solid border-orange-200 rounded-lg font-bold ${isActive ? 'bg-orange-200 text-orange-800' : 'text-orange-200 hover:bg-orange-200 hover:text-orange-800'}`}>Temas</NavLink></li>
            <li><NavLink to="/recipes" className={({ isActive }) => `block p-2 border-2 border-solid border-orange-200 rounded-lg font-bold ${isActive ? 'bg-orange-200 text-orange-800' : 'text-orange-200 hover:bg-orange-200 hover:text-orange-800'}`}>Recetas</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main className="md:ml-64">
        <section className="px-6 flex justify-between items-center h-20 my-4 md:my-0 md:h-14 flex-wrap">
          {title}
          <GlobalSearch />
        </section>
        <section>
          {children}
        </section>
      </main>
      <footer className="sticky bottom-0 bg-orange-800 h-20 flex justify-center items-center block md:hidden">
      <nav>
          <ul className="flex gap-4">
            <li><NavLink to="/topics" className={({ isActive }) => `block p-2 border-2 border-solid border-orange-200 rounded-lg font-bold ${isActive ? 'bg-orange-200 text-orange-800' : 'text-orange-200 hover:bg-orange-200 hover:text-orange-800'}`}>Temas</NavLink></li>
            <li><NavLink to="/recipes" className={({ isActive }) => `block p-2 border-2 border-solid border-orange-200 rounded-lg font-bold ${isActive ? 'bg-orange-200 text-orange-800' : 'text-orange-200 hover:bg-orange-200 hover:text-orange-800'}`}>Recetas</NavLink></li>
          </ul>
        </nav>
      </footer>
    </LayoutProvider>
  );
}

export default Layout;
