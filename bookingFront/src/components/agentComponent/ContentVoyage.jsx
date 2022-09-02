
import React  from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import 'antd/dist/antd.css'
import GestionVoyage from './GestionVoyage';


function ContentVoyage() {

    return (

        <div> 
           <div id="content" >
    
            <div class='main ml-5 ' style={{width:"100%",marginTop:'150px'}}>
                <div class='container-fluid'>
                    <div className="row column1 " style={{ marginTop: "50px" }}> {/*Dashboared*/}
                  
                        <div class="col-md-8 col-lg-12">
                            <GestionVoyage />
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContentVoyage
