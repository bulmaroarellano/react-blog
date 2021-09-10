import React, { useState, useEffect } from 'react'
import api from '../../Assets/lib/api'

import './styles.scss'

import{
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Col
} from 'reactstrap'

const CreateProducts = () => {
    const [productData, setProductData] = useState({})
    const [showAlert, setShowAlert] = useState( false )

    const changeHandler = event => {
        setProductData({...productData,[event.target.name]:event.target.value})
    }

    const saveProduct = async () => {
        const result = await api.createProduct( productData )
        result && setShowAlert( true )
        setTimeout( function(){
            setShowAlert( false )
            document.location.href = "product-catalog"
        },3000)
    }

    return (
        <Col xs="12">

            <h1>Create Posts</h1>
            <Form className="bg-dark text-white p-3 my-3">
                <FormGroup>
                    <Label>Title:</Label>
                    <Input name="name" onChange={changeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label>Content:</Label>
                    <Input name="description" type="textarea" onChange={changeHandler} />
                </FormGroup>
                <Button type="button" color="dark" onClick={saveProduct}>Guardar producto</Button>
            </Form>
            {showAlert && <div className={`custom-alert ${showAlert ? 'shown':''}`}>
                <p>Post guardado con éxito</p>
            </div>}
        </Col>
    )
}

export default CreateProducts