import React, { useEffect, useState } from 'react'
import '../../CSS/SideBarMain.css'
import { Box, Collapse, List, ListItemButton, Typography } from '@mui/material'
import ListIcon from '@mui/icons-material/List';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import ListMenuSideBar from '../../Data/ListMenuSideBar';
import { Link } from 'react-router-dom';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
function SideBarMain() {

     const [collapse, setCollapse] = useState(true)

     const openCollapse = () => {
          setCollapse(!collapse)
     }

     useEffect(() => {

     }, [])

     return (
          <div className='contained-sidebar'>
               <List className='delete-padding' sx={{ paddingTop: '0px', paddingBottom: '0px' }}>
                    <ListItemButton onClick={openCollapse} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid gray' }}>
                         <ListIcon /> <Typography>Phân công nhiệm vụ</Typography>
                         <IndeterminateCheckBoxOutlinedIcon />
                    </ListItemButton>
                    <ListItemButton onClick={openCollapse} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                         <MailOutlineOutlinedIcon /> <Typography>Quản lý công việc</Typography>
                         {collapse ? <IndeterminateCheckBoxOutlinedIcon /> : <AddBoxOutlinedIcon />}
                    </ListItemButton>
                    <Collapse in={collapse} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding sx={{ borderTop: '1px solid rgb(128, 128, 128)', backgroundColor: 'white', borderBottom: '1px solid rgb(128, 128, 128)', }}>
                              <Link className='link'>
                                   <ListItemButton sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px dotted black' }}>
                                        <Typography fontSize={14} >Tổng hợp nhật ký công việc</Typography>
                                   </ListItemButton>
                              </Link>
                              <Link to={'/mission'} className='link'>
                                   <ListItemButton sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px dotted black' }}>
                                        <Typography fontSize={14} >Danh mục nhiệm vụ</Typography>
                                   </ListItemButton>
                              </Link>
                              <Link to={'/assignment'} className='link'>
                                   <ListItemButton sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px dotted black' }}>
                                        <Typography fontSize={14} >Phân công nhiệm vụ phòng</Typography>
                                   </ListItemButton>
                              </Link>
                              <Link to={'/assignmentprivate'} className='link'>
                                   <ListItemButton sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px dotted black' }}>
                                        <Typography fontSize={14} >Phân công nhiệm vụ cá nhân</Typography>
                                   </ListItemButton>
                              </Link>
                              <Link to={'/assignjob'} className='link'>
                                   <ListItemButton sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px dotted black' }}>
                                        <Typography fontSize={14} >Giao việc</Typography>
                                   </ListItemButton>
                              </Link>
                              <Link to={'/logwork'} className='link'>
                                   <ListItemButton sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px dotted black' }}>
                                        <Typography fontSize={14} >Nhật ký công việc</Typography>
                                   </ListItemButton>
                              </Link>
                              <Link to={'/WorkEvaluating'} className='link'>
                                   <ListItemButton sx={{ display: 'flex', alignItems: 'center', }}>
                                        <Typography fontSize={14} >Đánh giá công việc</Typography>
                                   </ListItemButton>
                              </Link>

                         </List>
                    </Collapse>


               </List >

          </div >
     )
}

export default SideBarMain