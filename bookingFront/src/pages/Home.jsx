import React, { useContext, useEffect, useState } from 'react'
import "../assets/css/home.css"
import { message, Button, Space } from 'antd';
import { FaPlane } from "react-icons/fa";
import { Searchvoyage, selectGetVoyages } from '../features/voyage/voyageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Home() {

  const vols = useSelector(selectGetVoyages)
  const dispatch = useDispatch()
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const [message, setMessage] = useState('')
  const [search, setsearch] = useState('')
  useEffect(() => {

    let dat = {
      keyword: search
    }
    dispatch(Searchvoyage(dat))

  }, [search])


  const contact = () => {

    let data = {

      to: user.email,
      message: message,
      voyageur: user._id,

    }

    axios.post('http://localhost:4000/users/sendContact', data)
      .then(res => {

        console.log(res, "aaaaaa");

      })

    success()

  }

  const success = () => {

    message.success('message sended successefly');

  };

  return (
    <div>


      <div class="main-layout">
        <section>
          <div className="banner-main">
            <img src="images/banner.jpg" alt="#" />
            <div className="container">
              <div className="text-bg">
                <h1>Tunisia<br /><strong className="white">Amazing Tour</strong></h1>

                <div className="container ">
                  <form className="main-form " >
                    <h3>Find Your Tour</h3>
                    <div className="row" style={{ marginTop: '10px' }}>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <label>Keywords</label>
                            <input value={search} onChange={(e) => setsearch(e.target.value)} className="form-control" placeholder type="text" name />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 float-right">
                          <a href="#">search</a>  </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div id="travel" className="traveling mb-5">

          <div class="inner_page contact_page ">
            <div className="container ">

              <div className="row column1 ">
                <div className="col-md-12 mt-5">
                  {

                    vols.map((e, i) => {
                      return (

                        <div className="white_shd fulll ">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 profile_details ">
                              <div className="contact_blog">
                                <div className="contact_inner">
                                  <div className="row">
                                    <div className="col-md-3 mt-5">
                                      <div className="left">
                                        <h3>{e.ville_depart}</h3>
                                        <p><strong> date: </strong>{e.date_depart}</p>
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-5">
                                      <FaPlane style={{ height: '50px', width: '50px', marginLeft: "50px" }} /></div>
                                    <div className="col-md-3 mt-5">
                                      <h3>{e.ville_arrive}</h3>
                                      <p><strong>date:</strong>{e.date_arrive}</p>
                                    </div>
                                    <div className="col-md-3 mt-5 ">
                                      <h2 style={{ color: '#EE580F' }}>Prix: {e.prix} $</h2></div>

                                  </div>
                                  <div className="bottom_list">
                                    <div className="right_button">
                                      <button onClick={() => { localStorage.setItem('singlepostid', e._id); history.push('/reserver') }} class="btn btn-primary" style={{ width: '150px', height: "50px", fontSize: "20px" }}> Réserver </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="titlepage">
                  <h2>About  our travel agency</h2>
                  <span> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="about-box">
                    <p> <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure thereThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</span></p>
                    <div className="palne-img-area">
                      <img src="images/plane-img.png" alt="images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="London">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Weekend in New York, London</h2>
                  <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="London-img">
              <figure><img src="images/London.jpg" alt="img" /></figure>
            </div>
          </div>
        </div>


        <div className="Tours">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>The Best Tours</h2>
                  <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                </div>
              </div>
            </div>
            <section id="demos">
              <div className="row">
                <div className="col-md-4">

                  <div className="item">
                    <img className="img-responsive" src="images/1.jpg" alt="#" />
                    <h3>Holiday Tour</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <img className="img-responsive" src="images/2.jpg" alt="#" />
                    <h3>New York</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</p>
                  </div></div>
                <div className="col-md-4">
                  <div className="item">
                    <img className="img-responsive" src="images/3.jpg" alt="#" />
                    <h3>London</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</p>
                  </div>


                </div>
              </div>
            </section>
          </div>
        </div>


        <div className="amazing mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="amazing-box">
                  <h2>Amazing London Tour</h2>
                  <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</span>
                  <a href="#">Book Now</a><a href="#">Get More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="blog" className="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Our Blog</h2>
                  <span>Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="blog-box">
                  <figure><img src="images/blog-image0.jpg" alt="#" />
                    <span>4 Feb 2019</span>
                  </figure>
                  <div className="travel">
                    <span>Post  By :  Travel  Agency</span>
                    <p><strong className="Comment"> 06 </strong>  Comment</p>
                    <p><strong className="like">05 </strong>Like</p>
                  </div>
                  <h3>London Amazing Tour</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="blog-box">
                  <figure><img src="images/blog-image.jpg" alt="#" />
                    <span>10 Feb 2019</span>
                  </figure>
                  <div className="travel">
                    <span>Post  By :  Travel  Agency</span>
                    <p><strong className="Comment"> 06 </strong>  Comment</p>
                    <p><strong className="like">05 </strong>Like</p>
                  </div>
                  <h3>London Amazing Tour</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <footer>
          <div id="contact" className="footer">
            <div className="container">
              <div className="row pdn-top-30">

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="Follow">
                    <h3>CONTACT US</h3>
                    <span>123 Second Street Fifth <br />Avenue,<br />
                      Manhattan, New York<br />
                      +987 654 3210</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="Follow">
                    <h3>ADDITIONAL LINKS</h3>
                    <ul className="link">
                      <li> <a href="#">About us</a></li>
                      <li> <a href="#">Terms and conditions</a></li>
                      <li> <a href="#"> Privacy policy</a></li>
                      <li> <a href="#">News</a></li>
                      <li> <a href="#"> Contact us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="Follow">
                    <h3> Contact</h3>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <input className="Newsletter" placeholder="Name" value={user.prenom} type="text" />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <input className="Newsletter" placeholder="Email" value={user.email} type="text" />
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <textarea className="textarea" placeholder="Tapez votre message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                      </div>
                    </div>
                    <button onClick={contact} className="Subscribe">Submit</button>
                  </div>
                </div>
              </div>
              <div className="copyright">
                <div className="container">
                  <p>Copyright 2022 All Right Reserved By <a href="https://html.design/">Dorra Arfaoui</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>


    </div>
  )
}

export default Home 