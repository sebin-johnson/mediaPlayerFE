import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deleteHistory, getHistory } from '../services/allApi';
import { toast, ToastContainer, Bounce } from 'react-toastify';

const WatchHistory = () => {
  const [history, setHistory] = useState([])
  const getAllHistory = async () => {
    const res = await getHistory()
    // console.log(res)
    setHistory(res.data)
  }
  const removeHistory = async (id) => {
    const response = await deleteHistory(id)
    console.log(response)
    if (response.status === 200) {
      // deleteHistory(response)
      toast.success('History successfully removed')
    } else {
      toast.error('Something went wrong!')
    }
  }
  useEffect(() => {
    getAllHistory()
  }, [history])
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <h4 className='fw-semibold'>Watch History</h4>
        <Link to={'/home'} style={{ textDecoration: "none", color: "white" }} className='text-warning'>
          <i className="fa-solid fa-arrow-left me-1"></i>Back to Home
        </Link>
      </div>
      <div style={{ overflow: "auto" }}>
        <table className='table table-dark container mt-3 text-center table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Video Url</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              history.length > 0 ? (
                history?.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.caption}</td>
                    <td>{item.embeddedLink}</td>
                    <td>{item.time}</td>
                    <td><Button variant="warning" onClick={() => removeHistory(item.id)}><i className="fa-solid fa-trash"></i></Button></td>
                  </tr>
                ))
              ) : (
                <p className='text-center mt-2 bg'>History not found.</p>
              )}
          </tbody>
        </table>
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

export default WatchHistory
