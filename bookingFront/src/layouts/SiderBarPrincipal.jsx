import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import SidebarAdmin from './SidebarAdmin'
import SideBarAgent from './SideBarAgent'
import SideBarVoyageur from './SideBarVoyageur'


function SideBarPrincipal() {

    const { user } = useContext(AuthContext)


  return (


    <div>
    

     {user.role === "admin" ? <SidebarAdmin /> :

     (user.role === "agent") ? <SideBarAgent/> : <SideBarVoyageur/>}

    </div>
  )
}

export default  SideBarPrincipal