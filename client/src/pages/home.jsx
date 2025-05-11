import React, { Component } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import { Layout } from "antd";
const { Footer, Sider, Content } = Layout;
import LeftNav from "../components/left-nav/index";
import Header from "../components/header/index";
import Category from "../pages/category/category";
import Admin from "./login/index";
import memoryUtils from "../utils/memoryUtils";
import storageUtils from "../utils/storageUtils";
const USER_KEY = "user_key";

// all the routes here instead of main/app routing
export default function Home() {
   let user = memoryUtils.user;
   if (!user._id) {
    // user = storageUtils.getUser();
    user = JSON.parse(localStorage.getItem(USER_KEY) || '{}' )
   }
  
  console.log("user object: ");
  // return function itself?
  console.log(user);
  // 如果内存没有存储user ==> 当前没有登陆
  if (!user || !user._id) {
    // 自动跳转到登陆(在render()中)
    return <Navigate to="/login" />;
  }

  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Layout style={{ minHeight: "100%" }}>
      <Sider>
        <LeftNav />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{ margin: 20, backgroundColor: "#fff" }}>
          <Routes>
            <Route from="/" exact to="/home" />

            {/* <Route path='/home' element={<Admin/>}/>  */}
            <Route path="/category" element={<Category />} />
            {/*    <Route path='/user' element={<User/>}/>
                    <Route path='/role' element={<Role/>}/>
                    <Route path="/charts/bar" element={<Bar/>}/>
                    <Route path="/charts/pie" element={<Pie/>}/>
                    <Route path="/charts/line" element={<Line/>}/> */}
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center", color: "#cccccc" }}>
          推荐使用谷歌浏览器，可以获得更佳页面操作体验
        </Footer>
      </Layout>
    </Layout>
  );
}
