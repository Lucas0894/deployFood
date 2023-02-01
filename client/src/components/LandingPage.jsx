import React from "react";
import { Link } from "react-router-dom";
import estilosLanding from './LandingPage.module.css'

export default function LandingPage(){
    return (
        <div className={estilosLanding.centralLanding}>
            <h1 className={estilosLanding.tituloPrincipal}>Welcome to my Food Page</h1>
            <Link to= "/home" >
                <button className={estilosLanding.buttonGetIn}>Enter</button>
            </Link>
        </div>
    )
}

