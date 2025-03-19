import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
import { ToastContainer, Bounce } from 'react-toastify';

const Home = () => {
  const [uploadVideoStatus, setUploadVideoStatus] = useState({})
  return (
    <>
      {/* first section  */}
      <div className='container d-flex align-items-center justify-content-between mt-4'>
        <Add setUploadVideoStatus={setUploadVideoStatus} />
        <Link style={{ textDecoration: "none", color: "white" }} to={'/history'}>
          <span style={{ color: "#ADD8E6" }}>WATCH HISTORY<i className="fa-solid fa-clock ms-2"></i></span>
        </Link>
      </div>
      {/* second section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <View uploadVideoStatus={uploadVideoStatus} />
          </div>
          <div className="col-md-3">
            <Category />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default Home

