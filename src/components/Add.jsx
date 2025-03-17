import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApi';
import { toast } from 'react-toastify';

const Add = ({setUploadVideoStatus}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setVideo({
            caption: '',
            thumbnailUrl: '',
            embeddedLink: ''
        })
    }
    const handleShow = () => setShow(true);
    const [video, setVideo] = useState({
        caption: '',
        thumbnailUrl: '',
        embeddedLink: ''
    })
    const setEmbeddedLink = (data) => {
        // set embedded link
        const link = `https://www.youtube.com/embed/${data.slice(-11)}`
        console.log(link)
        setVideo({ ...video, embeddedLink: link })
    }
    const handleUpload = async () => {
        console.log(video)
        if (!video.caption || !video.thumbnailUrl || !video.embeddedLink) {
            toast.warning('Please enter all required fields!')
        } else {
            const result = await uploadVideo(video)
            console.log(result)
            if (result.status === 201) {
                setUploadVideoStatus(result)
                toast.success("Successfully Uploaded.")
                handleClose()
            } else {
                toast.error('Something went wrong!')
                handleClose()
            }
        }
    }
    return (
        <>
            <div className='d-flex align-items-center'>
                <h5>UPLOAD VIDEO</h5>
                <button className='btn text-white w-auto mb-2' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up"></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                data-bs-theme='dark'
                className='text-white'>
                <Modal.Header closeButton>
                    <Modal.Title className='fw-semibold'><i className="fa-solid fa-film text-warning me-2"></i>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-secondary'>Please fill the Form</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Video Title"
                                onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Video Thumbnail"
                                onChange={(e) => setVideo({ ...video, thumbnailUrl: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Video Url"
                                onChange={(e) => setEmbeddedLink(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add
