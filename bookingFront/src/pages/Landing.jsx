import React from 'react'
import ContentVoyage from '../components/agentComponent/ContentVoyage'
import ContentAdmin from '../components/agentComponent/ContentVoyage'
import SideBarPrincipal from '../layouts/SiderBarPrincipal'
import Home from './Home'




function Landing() {

    return (

        <div>



            
            <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBarPrincipal/>
                        <Home/>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing
