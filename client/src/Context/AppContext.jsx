import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();
export const  AppContextProvider = (props)=>{

    const currency = import.meta.env.VITE_CURRENCY;
    const [allCourses, setAllCourses]=useState([]);
    // fetch all courses
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses)
    }
    useEffect(()=>{
        fetchAllCourses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const value = {
        currency,allCourses,

    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
};