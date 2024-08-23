"use client";
import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    // Toggle Theme
    const setThemeFun = () => {
        if (theme === "dark") {
            console.log("dark 1");
            setTheme("light");
            localStorage.setItem("myPortfolioProfileTheme", "light");
        } else {
            console.log("dark 2");
            setTheme("dark");
            localStorage.setItem("myPortfolioProfileTheme", "dark");
        }
    };

    // Get Theme Value From LocalStorage
    useEffect(() => {
        const getTheme = localStorage.getItem("myPortfolioProfileTheme");
        console.log(getTheme);
        if (!getTheme) {
            return
        }
        setTheme(getTheme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setThemeFun }}>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className='dark:text-white dark:bg-black'>{children}</div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;