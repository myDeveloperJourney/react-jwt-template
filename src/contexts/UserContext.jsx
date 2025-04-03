import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    // the children prop represents each component we provide context to
    
    const value = { user, setUser };
    
    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };