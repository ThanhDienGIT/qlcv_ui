import React from 'react'
import '../CSS/HomePage.css'
import SideBarMain from '../Layout/Sidebar/SideBarMain'
import HeaderMain from '../Layout/Header/HeaderMain'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
function HomePage() {
     return (
          <Box display={'flex'}>
               <SideBarMain></SideBarMain>
               <Box width={'100%'} height={'45px'}>
                    <HeaderMain></HeaderMain>
                    {/* Render */}
                    <Box >
                         <Outlet />
                    </Box>
               </Box>


          </Box>
     )
}

export default HomePage