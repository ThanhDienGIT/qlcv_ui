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


     const [listMenu, setListMenu] = useState([
          {
               id: 1,
               name: 'Quản trị danh mục việc làm',
               collapse: true,
               childs: [
                    {
                         id: 4,

                         path: '', name: 'Quản lý đơn vị'
                    },
                    {
                         id: 5,

                         path: '', name: 'Quản lý người dùng'
                    },
                    {
                         id: 6,

                         path: '', name: 'Danh mục vị trí công tác'
                    },
                    {
                         id: 7,

                         path: '', name: 'Danh mục Ngạch CCVC'
                    },
                    {
                         id: 8,

                         path: '', name: 'Danh mục Độ phức tạp công việc'
                    },
                    {
                         id: 9,

                         path: '', name: 'Danh mục Chức vụ'
                    },
                    {
                         id: 10,
                         path: '',
                         name: 'Danh mục Trình độ lý luận chính trị'
                    },
                    {
                         id: 11,
                         path: '',
                         name: 'Danh mục ngày lễ'
                    },
                    {
                         id: 12,
                         path: '',
                         name: 'Cấu hình thời gian làm việc'
                    },
                    {
                         id: 13,
                         path: '',
                         name: 'Vị trí việc làm đơn vị'
                    },
                    {
                         id: 14,
                         path: '',
                         name: 'Vị trí việc làm nhân viên'
                    },
                    {
                         id: 15,
                         path: 'mission',
                         name: 'Danh mục loại công việc'
                    },
                    {
                         id: 16,
                         path: '',
                         name: 'Phân công nhiệm vụ cho đơn vị'
                    },
                    {
                         id: 17,
                         path: '',
                         name: 'Phân công nhiệm vụ cho nhân viên'
                    },
               ]
          },
          {
               id: 2,
               name: 'Quản lý nhật ký công việc',
               collapse: true,
               childs: [
                    {
                         id: 18,
                         path: 'assignjob',
                         name: 'Giao việc'
                    },
                    {
                         id: 19,
                         path: '',
                         name: 'Công việc cần xử lý'
                    },
                    {
                         id: 20,
                         path: '',
                         name: 'Công việc đã giao'
                    },
                    {
                         id: 21,
                         path: '',
                         name: 'Đăng ký nghỉ phép'
                    },
                    {
                         id: 22,
                         path: 'logwork',
                         name: 'Nhật ký công việc'
                    },
                    {
                         id: 23,
                         path: 'WorkEvaluating',
                         name: 'Đánh giá công việc'
                    },
                    {
                         id: 24,
                         path: 'assignment',
                         name: 'Phân công nhiệm vụ phòng'
                    },
                    {
                         id: 25,
                         path: 'assignmentprivate',
                         name: 'Phân công nhiệm vụ cá nhân'
                    },

               ]
          },
          {
               id: 3,
               name: 'Báo cáo và thống kê',
               collapse: true,
               childs: [
                    {
                         id: 28,
                         path: '',
                         name: 'Báo cáo Nhật ký công việc cá nhân'
                    },
                    {
                         id: 29,
                         path: '',
                         name: 'Báo cáo tổng hợp nhật ký công việc cá nhân'
                    },
                    {
                         id: 30,
                         path: '',
                         name: 'Báo cáo ổng hợp nhật ký công việc đơn vị'
                    },
                    {
                         id: 31,
                         path: '',
                         name: 'Báo cáo công việc cá nhân theo mức độ phức tạp.'
                    },
                    {
                         id: 32,
                         path: '',
                         name: 'Báo cáo công việc đơn vị theo mức độ phức tạp'
                    },
                    {
                         id: 33,
                         path: '',
                         name: 'Báo cáo tổng hợp công việc cá nhân theo thời gian'
                    },
                    {
                         id: 34,
                         path: '',
                         name: 'Bảng tổng hợp công việc đơn vị theo thời gian'
                    },
                    {
                         id: 35,
                         path: '',
                         name: 'Bảng tổng hợp nhật ký công việc đơn vị'
                    },
               ]
          }
     ])

     const openCloseCollapse = (ele) => {
          const arr = [...listMenu]

          arr.map(element => {
               if (Number(element.id) === Number(ele.id)) {
                    element.collapse = !element.collapse
               }
          })

          setListMenu(arr);
     }


     useEffect(() => {

     }, [])

     return (
          <div className='box-keepPosition'>
               <div className='contained-sidebar'>
                    <List className='delete-padding' sx={{ paddingTop: '0px', paddingBottom: '0px' }}>
                         {listMenu.map(ele => {
                              return (
                                   <>
                                        <ListItemButton onClick={() => { openCloseCollapse(ele) }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                             <Typography fontSize={12}>{ele.name}</Typography>
                                             {ele.collapse ? <IndeterminateCheckBoxOutlinedIcon /> : <AddBoxOutlinedIcon />}
                                        </ListItemButton>
                                        {ele.childs.map(Element => {
                                             return (
                                                  <Collapse in={ele.collapse} timeout="auto" unmountOnExit>
                                                       <List component="div" disablePadding sx={{ backgroundColor: 'white', borderBottom: '1px solid rgb(128, 128, 128)', }}>
                                                            <Link to={Element.path} className='link'>
                                                                 <ListItemButton sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px dotted black' }}>
                                                                      <Typography fontSize={12}>{Element.name}</Typography>
                                                                 </ListItemButton>
                                                            </Link>
                                                       </List>
                                                  </Collapse>
                                             )
                                        })}
                                   </>
                              )
                         })}
                    </List >

               </div >
          </div>
     )
}

export default SideBarMain