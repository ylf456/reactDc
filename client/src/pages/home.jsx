import React, {Component} from 'react'
import {Navigate, Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom'
import { Layout } from 'antd'
const { Footer, Sider, Content } = Layout

import LeftNav from '../components/left-nav/index'
import Header from '../components/header/index'
import Category from '../pages/category/category'

export default function Home() {
 
  
  // The Navbar UI component will render each of the Link elements in the links prop
  return (

    <Layout style={{minHeight: '100%'}}>
        <Sider>
              <LeftNav/>
        </Sider>
        <Layout>
         <Header>Header</Header>
            <Content style={{margin: 20, backgroundColor: '#fff'}}>

                <Routes>
                    {/* <Route from='/' exact to='/home'/>

                    <Route path='/home' element={<Home/>}/> */}
                    <Route path='/category' element={<Category/>}/>
                 {/*    <Route path='/user' element={<User/>}/>
                    <Route path='/role' element={<Role/>}/>
                    <Route path="/charts/bar" element={<Bar/>}/>
                    <Route path="/charts/pie" element={<Pie/>}/>
                    <Route path="/charts/line" element={<Line/>}/> */}
                   
                </Routes>

            </Content>
            <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
    </Layout>

);
}