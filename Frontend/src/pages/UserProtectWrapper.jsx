import React, { useContext, useEffect } from "react"
import { UserDataContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"

const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()


    useEffect(() => {
        if (!token) {
            navigate("/login");  // Now called inside useEffect
        }
    }, [token]);
    return (
        <div>
            {children}
        </div>
    )
}

export default UserProtectWrapper