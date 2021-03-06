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

const CreatePosts = () => {
    const [productData, setPostData] = useState({})
    const [showAlert, setShowAlert] = useState( false )

    const changeHandler = event => {
        setPostData({...productData,[event.target.name]:event.target.value})
    }

    const savePost = async () => {
        const result = await api.createPosts( productData )
        result && setShowAlert( true )
        setTimeout( function(){
            setShowAlert( false )
            document.location.href = "posts-catalog"
        },3000)
    }

    return (
        <Col xs="12">

            <h1>Create Posts</h1>
            <Form className="bg-dark text-white p-3 my-3">
                <FormGroup>
                    <Label>Título:</Label>
                    <Input name="title" onChange={changeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label>Contenido:</Label>
                    <Input name="content" type="textarea" onChange={changeHandler} />
                </FormGroup>
                <Button type="button" color="dark" onClick={savePost}>Guardar post</Button>
            </Form>
            {showAlert && <div className={`custom-alert ${showAlert ? 'shown':''}`}>
                <p>Post guardado con éxito</p>
            </div>}
        </Col>
    )
}

export default CreatePosts