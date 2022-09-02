
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function SideBarClient() {
  const {user}=useContext(AuthContext)
  return (
    <div>

      <nav id="sidebar"  >
        <div className="sidebar_blog_1">
          <div className="sidebar-header">
            
          </div>
          <div className="sidebar_user_info">
            <div className="icon_setting" />
            <div className="user_profle_side">
              <div className="user_img"><img className="rounded-circle " style={{ height: "100px",width:"160px",marginLeft:'40px'}}  src={'http://localhost:4000/file/' +user.avatar}  alt="#" /></div>

            </div>
          </div>
        </div>

      

        <div className="sidebar_blog_2 mt-5">

          <ul className="list-unstyled components">
            <li className="active">
            <Link to='/mesreservation'><i class="fa fa-object-group ml-3 mr-3 yellow_color"></i> <span>mes réservations</span></Link>

            </li>
          </ul>
        </div>
        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
            <Link to='/profil'> <i class="fa fa-user ml-3 mr-3 red_color"></i><span>mon profil</span></Link>

            </li>
          </ul>
        </div>

      </nav>


    </div>
  )
}

export default SideBarClient