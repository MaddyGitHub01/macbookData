import React,{ useReducer, createContext, useEffect } from 'react'
import reducer from './reducer'

const AppContext = createContext();

const API = "https://ecomwebapi-production.up.railway.app/api/products"

const initialState = {
    name:"",
    page:"",
    image:"",
    services:[]
}

const AppProvider = ({children}) => {

const updateHomePage = () => {
    return dispatch(
        {
            type: "HOME_UPDATE",
            payload: {
                name:"Priyank",
                page:"My Home Page",
                image:"./images/hero.jpeg"
            }
        }
    )
}

const updateAboutPage = () => {
    return dispatch(
        {
            type: "ABOUT_UPDATE",
            payload: {
                name:"Priyank",
                page:"My About Page",
                image:"./images/about.jpeg"
            }
        }
    )
}

const getServices = async(url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type:"GET_SERVICES", payload:data})
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getServices(API)
},[])

    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider}
