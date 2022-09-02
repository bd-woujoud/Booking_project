
import React from 'react'
import 'antd/dist/antd.css'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'
import GetUsers from './GetUsers'





function ContentUsers() {

    return (

        <div>

            <SideBarPrincipal /><div id="content">

                <div class='main ml-5 ' style={{ width: "90%",marginTop: "150px"}}>
                    <div class='container-fluid'>
                        <div className="row column1 " style={{ marginTop: "50px" }}> {/*Dashboared*/}

                            {/* getAll users */}
                            <div class="col-md-8 col-lg-12">


                                <GetUsers/>




                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContentUsers
