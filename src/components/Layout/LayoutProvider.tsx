import { ReactNode, createContext, useContext, useState } from "react";

type Layout = {
    search: string,
    updateSearch: (value: string) => void,
}

const layoutContext = createContext<Layout>({
    search: '',
    updateSearch: () => {},
});

export const LayoutProvider = ({ children }: { children: ReactNode}) => {
    const [search, updateSearch] = useState('');

    return (
        <layoutContext.Provider value={{search, updateSearch}}>
            {children}
        </layoutContext.Provider>
    );
};

export const useLayout = () => useContext(layoutContext);
