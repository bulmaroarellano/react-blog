import React from 'react'
import {
    useParams
} from 'react-router-dom'
import { Card, Row, Col, CardBody, CardTitle, CardText } from 'reactstrap'
 

const PostDetail = props => {
    const { id } = useParams()
    console.log(id);
    return(
        <Row>
            <Col xs="12">
                <Card>
                    <CardBody>
                        <CardTitle >{ id }</CardTitle>
                        <CardText>Descripcion del Producto seleccionado</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default PostDetail