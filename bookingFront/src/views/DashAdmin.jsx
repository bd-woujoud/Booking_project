import React from 'react'
import ContentVol from '../components/adminComponent/ContentVol'



import SideBarPrincipal from '../layouts/SiderBarPrincipal'


function DashAdmin() {

    return (

        <div>
            <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBarPrincipal/>
                        <ContentVol/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashAdmin
