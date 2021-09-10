import React from 'react'
import {
    useParams
} from 'react-router-dom'
import { Card, Row, Col, CardBody, CardTitle, CardText } from 'reactstrap'

const ProductDetail = props => {
    const { id } = useParams()
    return(
        <Row>
            <Col xs="12">
                <Card>
                    <CardBody>
                        <CardTitle >Producto seleccionado { id }</CardTitle>
                        <CardText>Descripcion del Producto seleccionado</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default ProductDetail