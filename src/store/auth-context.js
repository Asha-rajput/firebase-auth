import React,{useState} from 'react';

const AuthContext=React.createContext({
    token:'',
    isloggedIn:false,
    login:(token)=>{},
    logout:()=>{},
});

 export const AuthontextProvider=(props)=>{
    const[token,setToken]=useState(null)

    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token);
    };

    const logoutHandler=()=>{
        setToken(null);
    };

    const contextValue ={
        token:token,
        isloggedIn : userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    };
return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};

export default AuthContext;