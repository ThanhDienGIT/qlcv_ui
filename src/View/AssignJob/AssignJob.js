import { Box, Button, Checkbox, Collapse, Divider, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import '../../CSS/AssignJob.css'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function AssignJob() {

     const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
               backgroundColor: '#052c65',
               color: 'white',
          },
          [`&.${tableCellClasses.body}`]: {
               fontSize: 13,
          },
     }));

     const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
               backgroundColor: '#052c65',
               color: 'white',
          },
          // hide last border
          '&:last-child td, &:last-child th': {
               border: 0,
          },
     }));


     const [datawork, setDataWork] = React.useState([
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


     const [data, setData] = useState([
          {
               id: 1,
               name: 'Ban Tổ chức Tỉnh ủy',
               xulychinh: {
                    phongban: true,
               },
               phoihop: {
                    phongban: true,
               },
               theodoi: {
                    phongban: false,
               },
               staff: [
                    {
                         id: 1, name: 'Lê Chí Cường', canhan: false
                    },
                    {
                         id: 2, name: 'Lê Ngọc Phụng', canhan: false
                    },
                    {
                         id: 3, name: 'Trần Lê Hòa', canhan: false
                    }
               ],
               open: false,
               ngaybatdau: '13/04/2024',
               ngayhethan: '19/04/2024'
          },
          {
               id: 2,
               name: 'Ban Dân vận Tỉnh ủy',
               xulychinh: {
                    phongban: true,
               },
               phoihop: {
                    phongban: true,
               },
               theodoi: {
                    phongban: false,
               },
               staff: [
                    {
                         id: 1, name: 'Lê Chí Cường', canhan: false
                    },
                    {
                         id: 2, name: 'Lê Ngọc Phụng', canhan: false
                    },
                    {
                         id: 3, name: 'Trần Lê Hòa', canhan: false
                    }
               ],
               open: false,
               ngaybatdau: '13/04/2024',
               ngayhethan: '19/04/2024'
          },
          {
               id: 3,
               name: 'Ban Tuyên giáo Tỉnh ủy',
               xulychinh: {
                    phongban: true,
               },
               phoihop: {
                    phongban: true,
               },
               theodoi: {
                    phongban: false,
               },
               staff: [
                    {
                         id: 1, name: 'Lê Chí Cường', canhan: false
                    },
                    {
                         id: 2, name: 'Lê Ngọc Phụng', canhan: false
                    },
                    {
                         id: 3, name: 'Trần Lê Hòa', canhan: false
                    }
               ],
               open: false,
               ngaybatdau: '13/04/2024',
               ngayhethan: '19/04/2024'
          },
          {
               id: 4,
               name: 'Văn phòng Tỉnh ủy',
               xulychinh: {
                    phongban: true,
               },
               phoihop: {
                    phongban: true,
               },
               theodoi: {
                    phongban: false,
               },
               staff: [
                    {
                         id: 1, name: 'Lê Chí Cường', canhan: false
                    },
                    {
                         id: 2, name: 'Lê Ngọc Phụng', canhan: false
                    },
                    {
                         id: 3, name: 'Trần Lê Hòa', canhan: false
                    }
               ],
               open: false,
               ngaybatdau: '13/04/2024',
               ngayhethan: '19/04/2024'
          },
          {
               id: 5,
               name: 'Ủy ban Kiểm tra Tỉnh ủy',
               xulychinh: {
                    phongban: true,
               },
               phoihop: {
                    phongban: true,
               },
               theodoi: {
                    phongban: false,
               },
               staff: [
                    {
                         id: 1, name: 'Lê Chí Cường', canhan: false
                    },
                    {
                         id: 2, name: 'Lê Ngọc Phụng', canhan: false
                    },
                    {
                         id: 3, name: 'Trần Lê Hòa', canhan: false
                    }
               ],
               open: false,
               ngaybatdau: '13/04/2024',
               ngayhethan: '19/04/2024'
          },
          {
               id: 6,
               name: 'Tỉnh đoàn',
               xulychinh: {
                    phongban: true,
               },
               phoihop: {
                    phongban: true,
               },
               theodoi: {
                    phongban: false,
               },
               staff: [
                    {
                         id: 1, name: 'Lê Chí Cường', canhan: false
                    },
                    {
                         id: 2, name: 'Lê Ngọc Phụng', canhan: false
                    },
                    {
                         id: 3, name: 'Trần Lê Hòa', canhan: false
                    }
               ],
               open: false,
               ngaybatdau: '13/04/2024',
               ngayhethan: '19/04/2024'
          },
     ])

     const openCollapse = (e, ele) => {
          var value = e.target.value

          const arrFilter = [...data]

          arrFilter.map(element => {
               if (ele.id === element.id) {
                    element.open = !element.open
               }
          })
          setData(arrFilter)
     }




     return (
          <Box width={'100%'} padding={3} display={'flex'} justifyContent={'center'} flexDirection={'column'}>

               <Box width={'100%'} padding={2}>
                    <Typography fontSize={22} fontWeight={'bold'}> Thông tin công việc</Typography>
                    <Divider sx={{ borderBottom: '1px solid gray' }} />
               </Box>
               <Box width={'100%'} padding={2} display={'flex'} justifyContent={'space-between'}>
                    <Box width={'49%'} display={'flex'} flexDirection={'column'}>
                         <Box width={'100%'} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Lãnh đạo giao việc: *</Typography>

                              <Select
                                   defaultValue={3} sx={{ flex: 2.5 }} size='small'
                              >
                                   <MenuItem value={1}>
                                        Trương Văn Xuân
                                   </MenuItem>
                                   <MenuItem value={2}>
                                        Lê Hùng Ngọc
                                   </MenuItem>
                                   <MenuItem value={3}>
                                        Nguyễn Trịnh Công
                                   </MenuItem>
                              </Select>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Nhiệm vụ: *</Typography>
                              <Select
                                   defaultValue={3} sx={{ flex: 2.5 }} size='small'
                              >

                                   {datawork && datawork.length ? datawork.map(ele => {
                                        return (
                                             <MenuItem value={ele.id}>
                                                  {ele.name}
                                             </MenuItem>
                                        )
                                   }) : ''}

                              </Select>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Tên công việc: *</Typography>
                              <TextField sx={{ flex: 2.5 }} size='small'></TextField>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} >
                              <Typography flex={1}>Nội dung công việc: *</Typography>
                              <TextField sx={{ flex: 2.5 }} multiline rows={2} size='small'></TextField>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography >Nhắc việc cho người giao việc</Typography>
                              <Checkbox></Checkbox>
                              <Button size={'small'} variant='outlined' startIcon={<SettingsIcon />}>Nhắc việc định kỳ</Button>
                         </Box>
                    </Box>
                    <Box width={'49%'} >

                         <Box width={'100%'} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Độ phức tạp: *</Typography>
                              <Select
                                   defaultValue={3} sx={{ flex: 2.5 }} size='small'
                              >
                                   <MenuItem value={1}>
                                        1
                                   </MenuItem>
                                   <MenuItem value={2}>
                                        2
                                   </MenuItem>
                                   <MenuItem value={3}>
                                        3
                                   </MenuItem>
                                   <MenuItem value={4}>
                                        4
                                   </MenuItem>
                                   <MenuItem value={5}>
                                        5
                                   </MenuItem>

                              </Select>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Mức độ công việc:
                              </Typography>
                              <Select
                                   defaultValue={1} sx={{ flex: 2.5 }} size='small'
                              >
                                   <MenuItem value={1}>
                                        Thường
                                   </MenuItem>
                                   <MenuItem value={2}>
                                        Khẩn cấp
                                   </MenuItem>
                              </Select>
                         </Box>
                         <Box width={'100%'} display={'flex'}>
                              <Box width={'50%'} marginTop={1} display={'flex'} alignItems={'center'}>
                                   <Typography flex={0.57}>Số ngày thực hiện: *</Typography>
                                   <TextField sx={{ flex: 0.3 }} type='number' defaultValue={14} size='small'></TextField>
                              </Box>
                              <Box width={'50%'} marginTop={1} display={'flex'} alignItems={'center'}>
                                   <Typography flex={1}>Ngày hết hạn: *</Typography>
                                   <TextField sx={{ flex: 1 }} type='date' size='small'></TextField>
                              </Box>

                         </Box>

                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={0.56}>Văn bản liên quan</Typography>
                              <label htmlFor='form' className='cssLabel'>+ Chọn văn bản</label>
                              <Typography marginLeft={1} fontSize={12}>vanban_hanhchinh.docs, dung lượng 500kb</Typography>
                              <TextField type='file' sx={{ flex: 2.5 }} size='small' hidden id='form' />
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={0.47}>File đính kèm:</Typography>
                              <label htmlFor='form' className='cssLabel2'>Tải tệp lên</label>
                              <Typography marginLeft={1} fontSize={12}>anh_minhhoa.png, dung lượng 300mb</Typography>
                              <TextField type='file' sx={{ flex: 2.5 }} size='small' hidden id='form' />
                         </Box>

                    </Box>

               </Box>
               <Box width={'100%'} padding={2} display={'flex'} flexDirection={'column'}>
                    <Box>
                         <Typography fontSize={22} fontWeight={'bold'}>Phân công thực hiện</Typography>
                         <Divider sx={{ borderBottom: '1px solid gray' }} />
                    </Box>
                    <Box display={'flex'} alignItems={'center'} marginTop={2} width={400} >
                         <TextField size={'small'} sx={{ flex: 2 }} placeholder='Nhập từ khóa tìm kiếm...'
                              InputProps={{
                                   startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                              }} />
                         <Button sx={{ marginLeft: 1 }} variant='outlined' >Tìm kiếm</Button>
                    </Box>
                    <Box>
                         <TableContainer sx={{ marginTop: 2, marginBottom: 5 }}>
                              <Table size='small'>
                                   <TableHead>
                                        <TableRow>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'5%'} rowSpan={2}>STT</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'25%'} rowSpan={2}>Phòng ban</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'} colSpan={2}>Xử lý chính</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'} colSpan={2}>Phối hợp</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'} colSpan={2}>Theo dõi</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'9%'} rowSpan={2}>Ngày bắt đầu</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'13%'} rowSpan={2}>Ngày hết hạn</StyledTableCell>
                                        </TableRow>
                                        <TableRow>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>Phòng ban</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>Cá nhân</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>Phòng ban</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>Cá nhân</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>Phòng ban</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>Cá nhân</StyledTableCell>
                                        </TableRow>
                                   </TableHead>
                                   <TableBody>
                                        {data && data.length > 0 ? data.map((ele, index) => {
                                             return (
                                                  <>
                                                       <TableRow >
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2', borderLeft: '1px solid #f2f2f2' }} width={'8.9%'}>{ele.id}</StyledTableCell>
                                                            <StyledTableCell sx={{ borderRight: '1px solid #f2f2f2', cursor: 'pointer' }} width={'8.9%'} onClick={(e) => { openCollapse(e, ele) }}>
                                                                 <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                                                      <Typography variant='p' >{ele.name}</Typography>
                                                                      {ele.open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                                                                 </Box>
                                                            </StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}></StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}> </StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}> </StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}>{ele.ngaybatdau}</StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}>{ele.ngayhethan}</StyledTableCell>
                                                       </TableRow>
                                                       {ele.staff && ele.staff.length > 0 ? ele.staff.map((element, index2) => {
                                                            return (
                                                                 <TableRow sx={!ele.open ? { display: 'none' } : ""}>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2', borderLeft: '1px solid #f2f2f2' }} width={'8.9%'}>
                                                                           {(index + 1) + "." + (index2 + 1)}
                                                                      </StyledTableCell>
                                                                      <StyledTableCell sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}>
                                                                           {element.name}
                                                                      </StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}></StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}></StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}> <Checkbox /></StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}></StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}> <Checkbox /></StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}>{ele.ngaybatdau}</StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}>{ele.ngayhethan}</StyledTableCell>
                                                                 </TableRow>
                                                            )
                                                       }) : ""}


                                                  </>
                                             )
                                        }) : ""}

                                   </TableBody>
                              </Table>
                         </TableContainer>
                    </Box>
                    <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                         <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65' }}>Lưu phân công</Button>
                         <Button size={'small'} variant='outlined' sx={{ marginLeft: 2 }}>Hủy</Button>
                    </Box>


               </Box>
          </Box>

     )
}

export default AssignJob