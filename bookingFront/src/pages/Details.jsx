
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import swal from 'sweetalert';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Details() {
    const { user } = useContext(AuthContext)
    const history = useHistory()

    const handleOk = () => {
   
        let data = {

            to: user.email,
            voyageur: user._id,
            voyage: localStorage.getItem('singlepostid')

        }

        axios.post('http://localhost:4000/users/sendMail', data)
            .then(res => {
                console.log(res, "aaaaaa");

            })

        swal({

            title: "super",
            text: "votre demande de reservation a été envoyée avec succées!",
            icon: "success",
            button: "ok!",

        });

        history.push('/')
    }

    return (
        <div >

            <div class="container">
                <div className="row">
                    <div className="row">
                        <div className='card' style={{ width: '100%', marginTop: "150px", color: 'black' }}>
                            <div class="col-md-12" >
                                <form style={{ width: '1000px', margin: '50px', color: 'black' }}><h2>Coordonnées</h2>
                                    <div className="form-row" style={{ marginTop: '50px' }}>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Nom</label>
                                            <input value={user.nom} type="text" style={{ padding: '30px', borderRadius: '5px', marginBottom: '20px', color: "black", fontSize: "20px" }} className="form-control" id="inputAddress" placeholder="Tapez votre nom" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPrenom">Prenom</label>
                                            <input value={user.prenom} type="text" style={{ padding: '30px', borderRadius: '5px', marginBottom: '20px', color: "black", fontSize: "20px" }} className="form-control" id="inputPrenom" placeholder="Tapez votre prenom" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputAddress">Email</label>
                                            <input value={user.email} type="email" style={{ padding: '25px', borderRadius: '5px', marginBottom: '20px', color: "black", fontSize: "20px" }} className="form-control" id="inputEmail4" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputAddress2">Adresse</label>
                                            <input value={user.adresse} type="text" style={{ padding: '25px', borderRadius: '5px', marginBottom: '20px', color: "black", fontSize: "20px" }} className="form-control" id="inputAddress2" />
                                        </div></div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputpassport">Numero passport</label>
                                            <input value={user.Num_passport} style={{ padding: '25px', borderRadius: '5px', marginBottom: '20px', color: "black", fontSize: "20px" }} type="text" className="form-control" id="inputpassport" />
                                        </div>
                                        <div className="form-group col-md-2"></div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputpassport">Numero de téléphone</label>
                                            <input value={user.tel} style={{ padding: '25px', borderRadius: '5px', marginBottom: '20px', color: "black", fontSize: "20px" }} type="text" className="form-control" id="inputpassport" />
                                        </div>
                                    </div>
                                    <div className="left_button">
                                        <button type="submit" onClick={handleOk} className="btn btn-primary float-right">Confirmer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>



                </div>



            </div>
        </div >
    )
}

export default Details