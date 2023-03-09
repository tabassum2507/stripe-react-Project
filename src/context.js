import React, { useState, useContext} from "react"

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const openSidebar = ()  => {
    setIsSidebarOpen(true)
}

const closeSidebar = () => {
    setIsSidebarOpen(false)
}

const openSubMenu = (text, coordinates)  => {
    setLocation(coordinates)
    setIsSubMenuOpen(true)
}

const closeSubMenu = () => {
    setIsSubMenuOpen(false)
}

return (<AppContext.Provider value={{
    isSidebarOpen,
    isSubMenuOpen,
    openSidebar,
    closeSidebar,
    openSubMenu,
    closeSubMenu, 
    location
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