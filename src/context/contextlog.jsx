import React from "react";

const ContextLog = React.createContext({
    isLoggedIn: false,
    onLogout: true
})

export default ContextLog