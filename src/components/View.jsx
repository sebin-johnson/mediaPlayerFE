import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApi'

const View = ({ uploadVideoStatus }) => {
  const [deleteVideoStatus, setDeleteVideoStatus] = useState({})
  const [allVideos, setAllVideos] = useState([])
  const getVideos = async () => {
    const response = await getAllVideos()
    console.log(response.data)
    setAllVideos(response.data)
    // console.log(allVideos)
  }
  useEffect(() => {
    getVideos()
  }, [uploadVideoStatus, deleteVideoStatus])
  return (
    <>
      <Row>
        {
          allVideos?.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default View
