
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'
import { useDispatch, useSelector } from 'react-redux'
import {GetEmail, selectGetEmail } from '../../features/emailss/emailSlice'
import moment from 'moment'
import { GrSend } from 'react-icons/gr'
import { Modal, Button } from 'antd';
import swal from 'sweetalert';
import axios from 'axios';

function ContentMessage() {

    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [to, setTo] = useState('')
    const [message, setMessage] = useState('')
    const messages = useSelector(selectGetEmail)


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    useEffect(() => {

        dispatch(GetEmail())

    }, [])

    const handleOk = () => {

        let data = {

            to: localStorage.getItem('emailto'),
            message: message,

        }
        axios.post('http://localhost:4000/users/sendTo', data)
            .then(res => {
                console.log(res);
            })


        swal({
            title: "bien fait!",
            text: "votre reponse evoyée avec succées !",
            icon: "success",
            button: "ok!",
        });

        setIsModalVisible(false);
    }

    return (

        <div>

            <SideBarPrincipal />
            <div id="content">
                <div className="midde_cont">
                    <div className="container-fluid">
                        <div className="row column_title">
                            <div className="col-md-12">
                                <div className="page_title">
                                    <h2>Email Page</h2>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            {/* table section */}
                            <div className="col-md-12">
                                <div className="white_shd full margin_bottom_30">
                                    <div className="full graph_head">
                                        <div className="heading1 margin_0">
                                            <h2>Email Box</h2>
                                        </div>
                                    </div>
                                    <div className="full inbox_inner_section">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="full padding_infor_info">
                                                    <div className="mail-box">

                                                        <aside className="lg-side">
                                                            <div className="inbox-head">
                                                                <h3 style={{ background: "#ff5722" }} >Inbox ()</h3>

                                                            </div>
                                                            <div className="inbox-body">
                                                                <div className="mail-option">


                                                                    <ul className="unstyled inbox-pagination">

                                                                        <li>
                                                                            <a className="np-btn" href="#"><i className="fa fa-angle-left  pagination-left" /></a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="np-btn" href="#"><i className="fa fa-angle-right pagination-right" /></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <table className="table table-inbox table-hover">
                                                                    <tbody>

                                                                        {
                                                                            messages.map((m, i) => {

                                                                                return (

                                                                                    <tr className>
                                                                                        <td className="inbox-small-cells" onClick={showModal} ><GrSend onClick={() => localStorage.setItem('emailto', m.voyageur.email)} /></td>
                                                                                        <td className="view-message ">{m.voyageur.email}</td>
                                                                                        <td className="view-message">{m.message}</td>
                                                                                        <td className="view-message text-right">{moment(m.createdAt).format('DD-MM-YYYY')}</td>
                                                                                    </tr>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                                <Modal title="New message" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                                                                    <div class="modal-body">
                                                                        <form  >
                                                                            <div class="form-group">
                                                                                <label for="recipient-name" class="col-form-label">to:</label>
                                                                                <input type="text" disabled class="form-control" id="recipient-name" style={{ color: "black" }} value={localStorage.getItem('emailto')} onChange={(e) => setTo(e.target.value)} />
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <label for="message-text" class="col-form-label">Message:</label>
                                                                                <textarea class="form-control" id="message-text" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                                                            </div>
                                                                        </form>

                                                                    </div>

                                                                </Modal>
                                                            </div>
                                                        </aside>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div></div></div>
    )
}


export default ContentMessage
