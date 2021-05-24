import React from 'react'
import Link from 'next/link'
import Footer from './Footer/Footer'
import Header from './Header/Header'
export default function Layout({children})
{
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}