import { Box, Button, Checkbox, Divider, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function AssignmentPrivate() {

     const [selectedIndex, setSelectedIndex] = React.useState(1);

     const handleListItemClick = (event, index) => {
          setSelectedIndex(index);
     };


     return (
          <Box width={'100%'} padding={3} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
               <Box>
                    <Typography fontSize={25} sx={{ fontWeight: 'bold' }}>Hãy chọn phòng ban để phân công nhiệm vụ tương ứng</Typography>
                    <Divider sx={{ borderTop: '1px solid black' }} />
               </Box>
               <Box width={'100%'} padding={3} display={'flex'} >

                    <Box width={520} height={400} backgroundColor={'#f5f5f5'} borderRadius={1} padding={2} >
                         <Box display={'flex'} alignItems={'center'}>
                              <TextField size={'small'} sx={{ flex: 2 }} placeholder='Nhập từ khóa tìm kiếm...'
                                   InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                   }} />
                              <Button sx={{ marginLeft: 1 }} variant='outlined' >Tìm kiếm</Button>
                         </Box>
                         <Box>
                              <List component="nav" aria-label="main mailbox folders" sx={{ backgroundColor: 'white', marginTop: 2, paddingTop: 0, paddingBottom: 0, border: '1px solid gray' }}>
                                   <ListItem sx={{ backgroundColor: 'white', borderBottom: '1px solid gray', height: 35 }}>
                                        <ListItemIcon>
                                             Tên cá nhân
                                        </ListItemIcon>
                                   </ListItem>
                                   <ListItemButton
                                        sx={{ borderBottom: '1px solid gray', height: 35 }}
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleListItemClick(event, 0)}
                                   >
                                        <ListItemIcon>
                                             Bùi Việt Anh
                                        </ListItemIcon>
                                   </ListItemButton>
                                   <ListItemButton
                                        sx={{ borderBottom: '1px solid gray', height: 35 }}
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleListItemClick(event, 1)}
                                   >
                                        <ListItemIcon>
                                             Văn Nguyễn Duy Tân
                                        </ListItemIcon>
                                   </ListItemButton>
                                   <ListItemButton
                                        sx={{ borderBottom: '1px solid gray', height: 35 }}
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}
                                   >
                                        <ListItemIcon>
                                             Nguyễn Danh Hưng
                                        </ListItemIcon>
                                   </ListItemButton>
                                   <ListItemButton
                                        selected={selectedIndex === 3}
                                        onClick={(event) => handleListItemClick(event, 3)}
                                   >
                                        <ListItemIcon>
                                             Nguyễn Trần Thanh Điền
                                        </ListItemIcon>
                                   </ListItemButton>

                              </List>
                         </Box>
                         <Box width={'100%'} height={'130px'} display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'} >

                              <Box display={'flex'} alignItems={'center'} >
                                   <Typography>
                                        Tổng số 4 phòng ban
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
                    <Box width={520} height={400} backgroundColor={'#f5f5f5'} borderRadius={1} padding={2} marginLeft={3}>
                         <Box display={'flex'} alignItems={'center'}>
                              <TextField size={'small'} sx={{ flex: 2 }} placeholder='Nhập từ khóa tìm kiếm...'
                                   InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                   }} />
                              <Button sx={{ marginLeft: 1 }} variant='outlined' >Tìm kiếm</Button>
                         </Box>
                         <Box>
                              <List component="nav" aria-label="main mailbox folders" sx={{ backgroundColor: 'white', marginTop: 2, border: '1px solid gray' }}>
                                   <ListItem sx={{ fontSize: 15, backgroundColor: 'white', borderBottom: '1px solid gray', display: 'flex', justifyContent: 'space-between' }}>
                                        <ListItemIcon>
                                             Danh sách nhiệm vụ
                                        </ListItemIcon>
                                        <ListItemIcon>
                                             Chọn
                                        </ListItemIcon>
                                   </ListItem>
                                   <ListItem sx={{ backgroundColor: 'white', fontSize: 15, height: 35, borderBottom: '1px solid gray', display: 'flex', justifyContent: 'space-between' }}>
                                        <ListItemIcon>
                                             Nhiệm vụ 1
                                        </ListItemIcon>
                                        <ListItemIcon>
                                             <Checkbox size={'small'}></Checkbox>
                                        </ListItemIcon>
                                   </ListItem>
                                   <ListItem sx={{ backgroundColor: 'white', fontSize: 15, height: 35, borderBottom: '1px solid gray', display: 'flex', justifyContent: 'space-between' }}>
                                        <ListItemIcon>
                                             Nhiệm vụ 2
                                        </ListItemIcon>
                                        <ListItemIcon>
                                             <Checkbox size={'small'}></Checkbox>
                                        </ListItemIcon>
                                   </ListItem>
                                   <ListItem sx={{ backgroundColor: 'white', fontSize: 15, height: 35, borderBottom: '1px solid gray', display: 'flex', justifyContent: 'space-between' }}>
                                        <ListItemIcon>
                                             Nhiệm vụ 3
                                        </ListItemIcon>
                                        <ListItemIcon>
                                             <Checkbox size={'small'}></Checkbox>
                                        </ListItemIcon>
                                   </ListItem>
                                   <ListItem sx={{ backgroundColor: 'white', fontSize: 15, height: 35, display: 'flex', justifyContent: 'space-between' }}>
                                        <ListItemIcon>
                                             Nhiệm vụ 4
                                        </ListItemIcon>
                                        <ListItemIcon>
                                             <Checkbox size={'small'}></Checkbox>
                                        </ListItemIcon>
                                   </ListItem>

                              </List>
                         </Box>
                         <Box width={'100%'} height={'130px'} display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'} >

                              <Box display={'flex'} alignItems={'center'} >
                                   <Typography>
                                        Tổng số 4 nhiệm vụ
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

export default AssignmentPrivate