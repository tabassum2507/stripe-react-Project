import React, { useState, useContext} from "react"

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true)


const openSidebar = ()  => {
    setIsSidebarOpen(true)
}

const closeSidebar = () => {
    setIsSidebarOpen(false)
}

const openIsSubMenu = ()  => {
    setIsSubMenuOpen(true)
}

const closeIsSubMenu = () => {
    setIsSubMenuOpen(false)
}

return (<AppContext.Provider value={{
    isSidebarOpen,
    isSubMenuOpen,
    openSidebar,
    closeSidebar,
    openIsSubMenu,
    closeIsSubMenu
}}>
    {children}
</AppContext.Provider>
);
};

//custom Hooks

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider}