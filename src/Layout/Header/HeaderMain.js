import { Box } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import '../../CSS/HeaderMain.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useLocation } from 'react-router-dom';
function HeaderMain() {

     const location = useLocation();

     function capitalizeFirstLetter(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
     }

     return (
          <Box className='display-auto' width={'100%'} height={'42px'} borderTop={'1px solid gray'} borderBottom={'1px solid gray'} padding={2} fontSize={14}>
               <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                         <HomeOutlinedIcon />
                    </Link>
                    <Link
                         underline="hover"
                         color="inherit"
                         href="/"
                    >
                         Quản lý công việc
                    </Link>
                    {location && location.pathname.length > 1 ? <Typography color="text.primary">{capitalizeFirstLetter(location.pathname.slice(1))}</Typography> : ""}

               </Breadcrumbs>
          </Box>
     )
}

export default HeaderMain