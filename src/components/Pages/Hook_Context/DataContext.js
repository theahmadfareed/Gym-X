import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [ loggedIn, setLoggedIn] = useState({});
    const [ membership, setMembership] = useState({});
    const [ memberInfo, setMemberInfo ] = useState({});
    const [ user, setUser] = useState({
        email: '',
        password: '',
        error: '',
        success: false
    });
    return (
        <DataContext.Provider value={
            [ loggedIn, setLoggedIn, user, setUser]
        }>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;