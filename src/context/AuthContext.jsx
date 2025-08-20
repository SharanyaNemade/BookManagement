import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialize state for user and authentication status
    const [user, setUser] = useState(null);

    // Check if the user is authenticated using localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            // Assume there's an endpoint to verify the token and fetch user data
            fetchUserFromToken(storedToken);
        }
    }, []);

    const fetchUserFromToken = async (token) => {
        try {
            // Assuming you have an endpoint to get the user from the token
            const response = await fetch('http://localhost:8080/api/auth/user', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data); // Set the user in state
            } else {
                localStorage.removeItem('token'); // Remove invalid token
            }
        } catch (err) {
            console.error("Error fetching user:", err);
            localStorage.removeItem('token');
        }
    };

    // Login function to set the user and store token
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token);
    };

    // Logout function to clear the user and token
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
