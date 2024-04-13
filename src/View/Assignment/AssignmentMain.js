import { Box, Button, Checkbox, Divider, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
function AssignmentMain() {

     const [selectedIndex, setSelectedIndex] = React.useState(1);

     const handleListItemClick = (event, index) => {
          setSelectedIndex(index);
     };


     const [listMission, setListMission] = React.useState([
          {
               id: 1,
               name: 'Soạn thảo nghị quyết',
               describe: 'Soạn thảo nghị quyết trình lãnh đạo',
               leader: true,
               specialize: true,
               support: false,
          },
          {
               id: 2,
               name: 'Soạn thảo công văn trình lãnh đạo',
               describe: 'Soạn thảo công văn theo nghị định trình lãnh đạo xét duyệt',
               leader: true,
               specialize: true,
               support: true,
          },
          {
               id: 3,
               name: 'Tham dự tập huấn cán bộ',
               describe: 'Tham dự tập huấn về quy trình công tác dành cho cán bộ',
               leader: true,
               specialize: false,
               support: false,
          },
          {
               id: 4,
               name: 'Chủ trì dự thảo tập huấn',
               describe: 'Chuẩn bị và điều phối cuộc họp',
               leader: false,
               specialize: true,
               support: false,
          },
          {
               id: 5,
               name: 'Họp chi bộ',
               describe: 'Chuẩn bị và điều phối cuộc họp',
               leader: false,
               specialize: true,
               support: true,
          },
          {
               id: 6,
               name: 'Tham gia học nghị quyết',
               describe: 'Tham gia khóa học về soạn thảo, bố cục nghị quyết',
               leader: false,
               specialize: true,
               support: true,
          },
     ])

     const [listDeparment, setListDeparment] = useState([
          {
               id: 1,
               name: 'Ban Tổ chức Tỉnh ủy'
          },
          {
               id: 2,
               name: 'Ban Dân vận Tỉnh ủy'
          },
          {
               id: 3,
               name: 'Ban Tuyên giáo Tỉnh ủy'
          },
          {
               id: 4,
               name: 'Văn phòng Tỉnh ủy'
          },
          {
               id: 5,
               name: 'Ủy ban Kiểm tra Tỉnh ủy'
          },
          {
               id: 6,
               name: 'Tỉnh đoàn'
          },
     ])



     return (
          <Box width={'100%'} padding={3} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
               <Box>
                    <Typography fontSize={25} sx={{ fontWeight: 'bold' }}>Hãy chọn phòng ban để phân công nhiệm vụ tương ứng</Typography>
                    <Divider sx={{ borderTop: '1px solid black' }} />
               </Box>
               <Box width={'100%'} padding={3} display={'flex'} >

                    <Box width={'49%'} backgroundColor={'#f5f5f5'} borderRadius={1} padding={2} >
                         <Box display={'flex'} alignItems={'center'}>
                              <TextField size={'small'} sx={{ flex: 2 }} placeholder='Nhập từ khóa tìm kiếm...'
                                   InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                   }} />
                              <Button sx={{ marginLeft: 1 }} variant='outlined' >Tìm kiếm</Button>
                         </Box>
                         <Box>
                              <List component="nav" aria-label="main mailbox folders" sx={{ backgroundColor: 'white', marginTop: 2, paddingTop: 0, paddingBottom: 0, border: '1px solid gray' }}>
                                   <ListItem sx={{ backgroundColor: 'white', borderBottom: '1px solid gray', height: 35, backgroundColor: '#e3e3e3' }}>
                                        <ListItemIcon>
                                             Tên phòng ban
                                        </ListItemIcon>
                                   </ListItem>
                                   {listDeparment && listDeparment.length > 0 ?
                                        listDeparment.map(ele => {
                                             return (
                                                  <ListItemButton
                                                       sx={{ borderBottom: '1px solid gray', height: 35 }}
                                                       selected={selectedIndex === ele.id}
                                                       onClick={(event) => handleListItemClick(event, ele.id)}
                                                  >
                                                       <ListItemIcon>
                                                            {ele.name}
                                                       </ListItemIcon>
                                                  </ListItemButton>
                                             )
                                        })
                                        : ""}

                              </List>
                         </Box>
                         <Box width={'100%'} height={'200px'} display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'} >

                              <Box display={'flex'} alignItems={'center'} >
                                   <Typography>
                                        Tổng số {listDeparment && listDeparment.length} phòng ban
                                   </Typography>
                                   <Box width={'30px'} height={'35px'} backgroundColor={'white'} display={'flex'}
                                        alignItems={'center'} justifyContent={'center'} border={'1px solid gray'}
                                        borderRadius={1} marginLeft={2} color={'gray'}
                                   >
                                        {'<'}
                                   </Box>
                                   <Box width={'30px'} height={'35px'} backgroundColor={'white'} display={'flex'}
                                        alignItems={'center'} justifyContent={'center'} border={'1px solid blue'}
                                        borderRadius={1} marginLeft={1}
                                   >
                                        1
                                   </Box>
                                   <Box width={'30px'} height={'35px'} backgroundColor={'white'} display={'flex'}
                                        alignItems={'center'} justifyContent={'center'} border={'1px solid gray'}
                                        borderRadius={1} marginLeft={1} color={'gray'}
                                   >
                                        {'>'}
                                   </Box>
                              </Box>


                         </Box>
                    </Box>
                    <Box width={'49%'} backgroundColor={'#f5f5f5'} borderRadius={1} padding={2} marginLeft={3}>
                         <Box display={'flex'} alignItems={'center'}>
                              <TextField size={'small'} sx={{ flex: 2 }} placeholder='Nhập từ khóa tìm kiếm...'
                                   InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                   }} />
                              <Button sx={{ marginLeft: 1 }} variant='outlined' >Tìm kiếm</Button>
                         </Box>
                         <Box>
                              <List component="nav" aria-label="main mailbox folders" sx={{ backgroundColor: 'white', marginTop: 2, border: '1px solid gray', paddingTop: 0, paddingBottom: 0 }}>
                                   <ListItem sx={{ fontSize: 15, borderBottom: '1px solid gray', display: 'flex', justifyContent: 'space-between', backgroundColor: '#e3e3e3' }}>
                                        <ListItemIcon>
                                             Danh sách nhiệm vụ
                                        </ListItemIcon>
                                        <ListItemIcon>
                                             Chọn
                                        </ListItemIcon>
                                   </ListItem>
                                   {listMission && listMission.length > 0 ?
                                        listMission.map(ele => {
                                             return (
                                                  <ListItem sx={{ backgroundColor: 'white', fontSize: 15, height: 35, borderBottom: '1px solid gray', display: 'flex', justifyContent: 'space-between' }}>
                                                       <ListItemIcon>
                                                            {ele.name}
                                                       </ListItemIcon>
                                                       <ListItemIcon>
                                                            <Checkbox size={'small'}></Checkbox>
                                                       </ListItemIcon>
                                                  </ListItem>
                                             )
                                        })
                                        : ""}
                              </List>
                         </Box>
                         <Box width={'100%'} height={'200px'} display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'} >

                              <Box display={'flex'} alignItems={'center'} >
                                   <Typography>
                                        Tổng số {listMission && listMission.length} nhiệm vụ
                                   </Typography>
                                   <Box width={'30px'} height={'35px'} backgroundColor={'white'} display={'flex'}
                                        alignItems={'center'} justifyContent={'center'} border={'1px solid gray'}
                                        borderRadius={1} marginLeft={2} color={'gray'}
                                   >
                                        {'<'}
                                   </Box>
                                   <Box width={'30px'} height={'35px'} backgroundColor={'white'} display={'flex'}
                                        alignItems={'center'} justifyContent={'center'} border={'1px solid blue'}
                                        borderRadius={1} marginLeft={1}
                                   >
                                        1
                                   </Box>
                                   <Box width={'30px'} height={'35px'} backgroundColor={'white'} display={'flex'}
                                        alignItems={'center'} justifyContent={'center'} border={'1px solid gray'}
                                        borderRadius={1} marginLeft={1} color={'gray'}
                                   >
                                        {'>'}
                                   </Box>
                              </Box>
                         </Box>
                    </Box>

               </Box>

          </Box>
     )
}

export default AssignmentMain