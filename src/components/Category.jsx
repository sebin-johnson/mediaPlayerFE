import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addcategory, deleteCategory, getAllCategory } from '../services/allApi';

const Category = () => {
  const [categories, setCategories] = useState()
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    setCategoryName('')
  }
  const handleShow = () => setShow(true)
  const [categoryName, setCategoryName] = useState("")
  const handleAddCategory = async () => {
    if (!categoryName) {
      toast.warning('Please enter all required fields!')
    } else {
      const categorySection = {
        Genre: categoryName,
        allVideos: []
      }
      const response = await addcategory(categorySection)
      console.log(response.data)
      if (response.status === 201) {
        toast.success(`${categoryName} added successfully`)
      }
      handleClose()
    }
  }
  const getCategory = async () => {
    const res = await getAllCategory()
    // console.log(res)
    const { data } = res
    setCategories(data)
  }
  const removeCategory = async (id) => {
    const res2 = await deleteCategory(id)
    console.log(res2)
    if (res2.status === 200) {
      toast.success(`Category removed successfully`)
    } else {
      toast.error('Something went wrong!')
    }
  }
  useEffect(() => {
    getCategory()
  }, [categories])
  return (
    <>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-warning mt-4' onClick={handleShow}>Add New Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
        className='text-white'>
        <Modal.Header closeButton>
          <Modal.Title className='fw-semibold'><i className="fa-solid fa-list-ul text-warning me-2"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-secondary'>Please fill the Form</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Category"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      {
        categories?.map((item) => (
          <div className='border border-secondary rounded p-2 mt-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 className='ms-2'>{item.Genre}</h6>
              <button className='btn btn-warning me-2' onClick={() => removeCategory(item.id)}><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Category
