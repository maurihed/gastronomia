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
      <aside className="fixed h-full w-64 bg-emerald-400">
        <nav>
          <ul className="mt-8 mx-6 grid gap-4">
            <li><NavLink to="/topics" className={({ isActive }) => `block p-2 border-2 border-solid border-emerald-100 rounded-lg font-bold ${isActive ? 'bg-emerald-100 text-emerald-400' : 'text-emerald-100 hover:bg-emerald-100 hover:text-emerald-400'}`}>Temas</NavLink></li>
            <li><NavLink to="/recipes" className={({ isActive }) => `block p-2 border-2 border-solid border-emerald-100 rounded-lg font-bold ${isActive ? 'bg-emerald-100 text-emerald-400' : 'text-emerald-100 hover:bg-emerald-100 hover:text-emerald-400'}`}>Recetas</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main className="ml-64">
        <section className="px-6 flex justify-between items-center h-14">
          {title}
          <GlobalSearch />
        </section>
        <section>
          {children}
        </section>
      </main>
    </LayoutProvider>
  );
}

export default Layout;
