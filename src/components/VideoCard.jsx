import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';

const VideoCard = ({ displayVideo, setDeleteVideoStatus }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true)
        const { caption, embeddedLink } = displayVideo
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const day = today.getDate()
        const hour = today.getHours()
        const minutes = String(today.getMinutes()).padStart(2, '0')
        const timeValue = `${day}-${month}-${year} ${hour}:${minutes}`
        console.log(timeValue)
        const history = {
            caption: caption,
            embeddedLink: embeddedLink,
            time: timeValue
        }
        await addToHistory(history)
    }
    const removeVideo = async (id) => {
        const response = await deleteVideo(id)
        console.log(response)
        if (response.status === 200) {
            setDeleteVideoStatus(response)
            toast.success(`${displayVideo.caption} successfully deleted`)
        } else {
            toast.error('Something went wrong!')
        }
    }
    return (
        <>
            <div className='container-fluid d-flex flex-row flex-wrap gap-3 mt-4 justify-content-center'>
                <Card style={{ width: '18rem' }} className='bg-dark text-white'>
                    <Card.Img variant="top" style={{
                        objectFit: "cover"
                    }}
                        onClick={handleShow}
                        src={displayVideo.thumbnailUrl} />
                    <Card.Body>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Card.Title className='text-center'>{displayVideo.caption}</Card.Title>
                            <Button variant="warning" onClick={() => removeVideo(displayVideo.id)}><i className="fa-solid fa-trash"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    data-bs-theme='dark'
                    className='text-white'>
                    <Modal.Header closeButton>
                        <Modal.Title>{displayVideo.caption}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe width="100%" height="400px" src={displayVideo.embeddedLink} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default VideoCard
