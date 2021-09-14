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

const PostsCatalog = props => {
    const [postsCatalog, setPostsCatalog] = useState(null)
    const [ collapsed, setCollapsed ] = useState( true )
    
    useEffect( async () => {
  
        const data = await api.getAllPosts()
        const singlePost = await api.getPostsById("post1")
        const newKey = await api.createPosts({ title:"post nuevo", 
        content:"Post creado desde la app"})

        setPostsCatalog(data)

        console.log( data )
        console.log( singlePost )
       

    }, [])


    const { data } = props
    return (
        <Row>
            {
                !postsCatalog && <div className="spinner">
                    <div className="dot"></div>
                </div>
            }
            {
                postsCatalog &&
                <>
                    <h1>Catálogo de posts</h1>
                    {
                        Object.keys(postsCatalog).map(posts=> {
                                   console.log(postsCatalog[posts])
                            const { title, content } = postsCatalog[posts]
                            return (
                                <Col xs="12" md="4" className="mb-3" key={posts}>
                                    <Card key={posts}>
                                        <CardBody>
                                     <CardTitle className="text-capitalize">{title}</CardTitle>
                                            <CardText collapsed={collapsed} className={ !collapsed ? "open":''}>{
                                                collapsed
                                                    ? ( 
                                                        <>
                                                            {content.slice(0,30)}...
                                                            <span 
                                                                className="text-primary"
                                                                onClick={ () =>  setCollapsed( !collapsed )}
                                                            >ver más</span> 
                                                        </>
                                                    )  
                                                    : ( 
                                                        <>
                                                        {content}
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
                                                data-posts-key={posts}
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

export default PostsCatalog