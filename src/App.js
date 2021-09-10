import React, { useState, useEffect } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  Row,
  Col,
  NavItem
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

//Pages
// import CreateProducts from './Pages/CreateProducts';
//import ProductCatalog from './Pages/ProductCatalog';
// import ShoppingCart from './Pages/ShoppingCart';
import CreatePosts from './Pages/CreatePosts';
import ListPost from './Pages/ListPost';
import PostDetail from './Pages/PostDetail';
//import CreatePost from './Pages/Reactions';



//Components
import CustomLink from './Components/CustomLink';
//import ProductDetail from './Pages/ProductDetail';



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const [selectedPage, setSelectedPage] = useState("createProducts")
  const [selectedPage, setSelectedPage] = useState("createPosts")

  const productData = [{
    title:"post 1",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil.",
    id:1
  },{
    title:"post 2",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil.",
    id:2
  },{
    title:"post 3",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil.",
    id:3
  }]

  const toggle = () => setIsOpen(!isOpen);

  const links = [
    {
      path:"/create-posts",
      text:"Create Posts"
    },
    {
      path:"/show-posts",
      text:"All posts"
    },
    // {
    //   path:"/shopping-cart",
    //   text:"Carrito de compras"
    // },
  ]


  return (
    <Router>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              links.map( (link, index ) => {
                const { path, text } = link
                return(
                  <NavItem key={index}>
                    <Link to={path} className="nav-item">{text}</Link>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col xs="12">
            <Switch>
              <Route path="/create-posts">
                <CreatePosts />
              </Route>
              <Route path="/show-posts">
                <PostCatalog data = { productData }/>
              </Route>
              {/* <Route path="/shopping-cart">
                <ShoppingCart />
              </Route> */}
              <Route path="/posts-detail/:id">
                <PostDetail />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App