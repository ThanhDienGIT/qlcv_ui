import { Box, Button, Checkbox, Divider, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material'
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

     const [data, setData] = useState([
          {
               id: 1,
               name: 'Phòng công tác sinh viên',
               xulychinh: {
                    phongban: true,
                    canhan: 'Lý Ngư'
               },
               phoihop: {
                    phongban: true,
                    canhan: 'Châu Thâm'
               },
               theodoi: {
                    phongban: false,
                    canhan: ''
               },
               ngaybatdau: '13/04/2024',
               ngayhethan: '19/04/2024'
          },
          {
               id: 2,
               name: 'Phòng phát triển nông thôn',
               xulychinh: {
                    phongban: true,
                    canhan: ''
               },
               phoihop: {
                    phongban: false,
                    canhan: ''
               },
               theodoi: {
                    phongban: true,
                    canhan: ''
               },
               ngaybatdau: '15/04/2024',
               ngayhethan: '22/04/2024'
          }, {
               id: 3,
               name: 'Phòng công nghệ phòng không',
               xulychinh: {
                    phongban: false,
                    canhan: ''
               },
               phoihop: {
                    phongban: true,
                    canhan: ''
               },
               theodoi: {
                    phongban: true,
                    canhan: ''
               },
               ngaybatdau: '21/04/2024',
               ngayhethan: '25/04/2024'
          }
     ])



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
                                   value={3} sx={{ flex: 2.5 }} size='small'
                              >
                                   <MenuItem value={1}>
                                        Nguyễn Trần Thanh Điền
                                   </MenuItem>
                                   <MenuItem value={2}>
                                        Văn Nguyễn Duy Tân
                                   </MenuItem>
                                   <MenuItem value={3}>
                                        Bùi Việt Anh
                                   </MenuItem>
                                   <MenuItem value={4}>
                                        Nguyễn Danh Hưng
                                   </MenuItem>
                              </Select>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Nhiệm vụ: *</Typography>
                              <Select
                                   value={3} sx={{ flex: 2.5 }} size='small'
                              >
                                   <MenuItem value={1}>
                                        Nhiệm vụ 1
                                   </MenuItem>
                                   <MenuItem value={2}>
                                        Nhiệm vụ 2
                                   </MenuItem>
                                   <MenuItem value={3}>
                                        Nhiệm vụ 3
                                   </MenuItem>
                                   <MenuItem value={4}>
                                        Nhiệm vụ 4
                                   </MenuItem>
                              </Select>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Tên công việc: *</Typography>
                              <TextField defaultValue={'Thiết kế bao bì sản phẩm trà xanh không độ'} sx={{ flex: 2.5 }} size='small'></TextField>
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
                                   value={3} sx={{ flex: 2.5 }} size='small'
                              >
                                   <MenuItem value={1}>
                                        Kém
                                   </MenuItem>
                                   <MenuItem value={2}>
                                        Thấp
                                   </MenuItem>
                                   <MenuItem value={3}>
                                        Trung Bình
                                   </MenuItem>
                                   <MenuItem value={4}>
                                        Khá
                                   </MenuItem>
                                   <MenuItem value={5}>
                                        Tốt
                                   </MenuItem>

                              </Select>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Mức độ công việc:
                              </Typography>
                              <Select
                                   value={1} sx={{ flex: 2.5 }} size='small'
                              >
                                   <MenuItem value={1}>
                                        Thường
                                   </MenuItem>
                                   <MenuItem value={2}>
                                        Trung Bình
                                   </MenuItem>
                                   <MenuItem value={3}>
                                        Khó
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
                              <Typography flex={0.8}>Văn bản liên quan</Typography>
                              <label htmlFor='form' className='cssLabel'>+ Chọn văn bản</label>
                              <Typography marginLeft={1} fontSize={12}>vanban_hanhchinh.docs, dung lượng 500kb</Typography>
                              <TextField type='file' sx={{ flex: 2.5 }} size='small' hidden id='form' />
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={0.59}>File đính kèm:</Typography>
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
                                   <TableHead >
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
                                        {data && data.length > 0 ? data.map(ele => {
                                             return (
                                                  <TableRow>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>{ele.id}</StyledTableCell>
                                                       <StyledTableCell sx={{ borderRight: '1px solid white' }} width={'8.9%'}>{ele.name}</StyledTableCell>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>{ele.xulychinh.canhan}</StyledTableCell>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}> {ele.phoihop.canhan}</StyledTableCell>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>{ele.theodoi.canhan} </StyledTableCell>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>{ele.ngaybatdau}</StyledTableCell>
                                                       <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8.9%'}>{ele.ngayhethan}</StyledTableCell>
                                                  </TableRow>
                                             )
                                        }) : ""}

                                   </TableBody>
                              </Table>
                         </TableContainer>
                    </Box>
                    <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                         <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65' }}>Lưu thay đổi và tạo công việc</Button>
                         <Button size={'small'} variant='outlined' sx={{ marginLeft: 2 }}>Hủy</Button>
                    </Box>


               </Box>
          </Box>

     )
}

export default AssignJob