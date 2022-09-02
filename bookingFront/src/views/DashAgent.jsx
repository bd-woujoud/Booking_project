import React from 'react'
import ContentVoyage from '../components/agentComponent/ContentVoyage'

import SideBarPrincipal from '../layouts/SiderBarPrincipal'





function DashAgent() {

    return (

        <div>

        <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBarPrincipal/>
                        <ContentVoyage/>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashAgent
