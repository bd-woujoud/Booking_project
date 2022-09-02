import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


import client from '../assets/image/admin.png'
import '../assets/css/register.css'
import 'antd/dist/antd.css';
import abc from '../assets/image/admin.png'

import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
} from 'antd';

import AuthService from '../services/AuthService';

 function Register(props) {

    const [role, setrole] = useState('');
    const { setUser, setIsAuth } = useContext(AuthContext);

    const onFinish = (values) => {
        console.log('Success:', values);
        values.role = role
        AuthService.register(values).then(jsonData => {
            if (!jsonData.error) {
                setUser(jsonData.user);
                setIsAuth(jsonData.isAuthenticated);
                props.history.replace("/login")
            }
            else {
                console.log("...register error...", jsonData)
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (


     
       <div>
        <div className='registerform' >
            {role === '' &&
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center'}} >
                    <div  >
                       
                          <h1  style={{ display: 'flex', justifyContent: 'center',fontWeight:'bold', marginTop: '100px',color:'yellow' ,fontSize:'60px'}}>  Bienvenue monsieur le voyageur dans notre platforme !</h1>
                   
                    </div>
                    <div className='actors' style={{ display: "flex", flexWrap: 'nowrap' }} >

                        <div >
                            <div className="entreprise">
                                <img onClick={() => setrole('voyageur')} src={client} alt="" align="center" />
                                <h4>voyageur</h4>
                            </div>
                        </div>
                       
                        
                    </div>

                </div>
                }
            {
                ( role === 'voyageur') && <>
                  <div>   <img src={abc} alt="" align="left" style={{width: "700px" , height:"500px" ,marginTop:"150px"}} /> </div> 
                <Form name="basic"  style={{marginTop:"150px"}}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                     onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  
                  /*  style= {{backgroundImage:`url(${abc})`}} */
                   >

                    <Form.Item name='nom'  label="Nom">
                        <Input />
                    </Form.Item>
                   
                    <Form.Item name='prenom' label="Prenom">
                        <Input />
                    </Form.Item>
                   
                    <Form.Item name='tel' label="N° Téléphone">
                        <Input />
                    </Form.Item>
                   
                    <Form.Item name='Num_passport' label="N° Passport"
                    rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                 
                    >
                        <Input />
                        
                    </Form.Item>
                   
                    <Form.Item name='email' label="Email">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item name='gender'label="Register Now" style={{align:"right"}}>
                        <Button type="primary" htmlType="submit" style={{align:"right", background:"orange"}}> Submit</Button>
                    </Form.Item>
                </Form>
                </>

            }
        </div>
        </div> 

    )


}
export default Register
