import React, { useState, useEffect } from 'react'
import {
    Card,
    CardBody,
    CardText,
    Row,
    Col,
    CardTitle,
    Button
} from 'reactstrap'
import api from '../../Assets/lib/api'

import './styles.scss'

import {
    Link
} from 'react-router-dom'

const ListPost = props => {
    const [postCatalog, setPostCalog] = useState(null)
    const [ collapsed, setCollapsed ] = useState( true )
    
    useEffect( async () => {
  
        const data = await api.getAllPosts()
        const singlePost = await api.getProductById("post1")
        const newKey = await api.createProduct({ name:"post nuevo", 
        description:"Post creado desde la app"})

        api.deletePostById("-Mj2FRPRHcxlJsQDsXDs")
        api.patchPostById({name:"producto parchado"},"-Mj2GA7hNS7dNh-dar4G")

        setPostCatalog(data)

        console.log( data )
        console.log( singlePost )
       

    }, [])


    const { data } = props
    return (
        <Row>
            {
                !productCatalog && <div className="spinner">
                    <div className="dot"></div>
                </div>
            }
            {
                productCatalog &&
                <>
                    <h1>Catálogo de productos</h1>
                    {
                        Object.keys(productCatalog).map(product => {
                            console.log(productCatalog[product])
                            const { name, description } = productCatalog[product]
                            return (
                                <Col xs="12" md="4" className="mb-3" key={product}>
                                    <Card key={product}>
                                        <CardBody>
                                            <CardTitle>{name}</CardTitle>
                                            <CardText collapsed={collapsed} className={ !collapsed ? "open":''}>{
                                                collapsed
                                                    ? ( 
                                                        <>
                                                            ${description.slice(0,20)}...
                                                            <span 
                                                                className="text-primary"
                                                                onClick={ () =>  setCollapsed( !collapsed )}
                                                            >ver más</span> 
                                                        </>
                                                    )  
                                                    : ( 
                                                        <>
                                                        {description}
                                                        <span 
                                                            className="text-primary"
                                                            onClick={ () =>  setCollapsed( !collapsed )}
                                                        >ver menos</span>
                                                        </>
                                                    )
                                                }
                                            </CardText>
                                            <Button
                                                color="dark"
                                                type="button"
                                                data-product-key={product}
                                            >Ver detalles</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </>
            }
        </Row>
    )
}

export default ProductCatalog