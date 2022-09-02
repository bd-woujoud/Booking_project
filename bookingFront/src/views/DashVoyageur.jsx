import React from 'react'

import Profil from '../components/voyageurComponent/profil'



import SideBarPrincipal from '../layouts/SiderBarPrincipal'


function DashAdmin() {

    return (

        <div>
            <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBarPrincipal/>
                        <Profil/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashAdmin
