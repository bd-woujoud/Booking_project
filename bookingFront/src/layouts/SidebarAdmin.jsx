import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function SideBarAdmin() {
  
  const {user}=useContext(AuthContext)

  return (

    <div>


      <nav id="sidebar" >
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
            <Link to='/vol'><i class="fa fa-plane ml-3  mr-3 red_color"> </i><span> vols </span></Link> 

            </li>
          </ul>
        </div>




        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
            <Link to='/voyageurs'> <i class="fa fa-users ml-3 mr-3 blue1_color"></i> <span> gestion voyageurs </span></Link> 

            </li>
          </ul>
        </div>


        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
            <Link to='/agent'> <i class="fa fa-table ml-3 mr-3 green_color"></i> <span> Agents </span></Link> 

            </li>
          </ul>
        </div>


        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
            <Link to='/messages'> <i class="fa fa-envelope-o ml-3 mr-3 yellow_color"></i> <span> Boite de reception</span></Link>

            </li>
          </ul>
        </div>
        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
            <Link to='/profil'> <i class="fa fa-user ml-3 mr-3 purple_color"></i> <span> Profil</span></Link>

            </li>
          </ul>
        </div>

     

      </nav>


    </div>
  )
}

export default SideBarAdmin
