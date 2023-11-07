import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Search from "../Search/Search";
import Reel from "../Reel/Reel";
import Message from "../Message/Message";
import Profile from "../Profile/Profile";
import Navigate from "./Navigate";

const StackNavigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<Dashboard />} />

            <Route path="search" element={<Search />} />
            <Route path="Reel" element={<Reel />} />
            <Route path="Message" element={<Message />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default StackNavigation