import React from 'react'
import Style from './LoginLayout.module.css'

function LoginLayout({children}){
    return(
        <>
            <div className={Style.LoginLayoutContainer}>
                {children}
            </div>
        </>
    )
}

export default LoginLayout;