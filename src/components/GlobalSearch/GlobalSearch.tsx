import { Icon } from "../Icon";
import { useLayout } from "../Layout";

function GlobalSearch() {
    const { search, updateSearch } = useLayout();

    return (
        <div className="border-2 border-solid border-slate-200 rounded-full px-2 flex items-center">
            <Icon prefix="fas" name="search" className="mx-2" />
            <input
                className="w-64 p-2 focus:outline-none"
                value={search}
                onChange={(e) => updateSearch(e.target.value)}
                autoComplete="off"
                type="text"
                placeholder="Buscar..."
            />
        </div>
    );
}

export default GlobalSearch;
