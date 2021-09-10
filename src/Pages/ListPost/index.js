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

const ProductCatalog = props => {
    const [productCatalog, setProductCatalog] = useState(null)
    const [ collapsed, setCollapsed ] = useState( true )
    
    useEffect( async () => {
  
        const data = await api.getAllProducts()
        const singleProduct = await api.getProductById("producto1")
        const newKey = await api.createProduct({ name:"producto nuevo", 
        description:"Producto creado desde la app"})

        api.deleteProductById("-Mj2FRPRHcxlJsQDsXDs")
        api.patchProductById({name:"producto parchado"},"-Mj2GA7hNS7dNh-dar4G")

        setProductCatalog(data)

        console.log( data )
        console.log( singleProduct )
       

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