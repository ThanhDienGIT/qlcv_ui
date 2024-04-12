import { Box, Button, Checkbox, Divider, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function WorkEvaluating() {
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
               name: 'Công việc 1',
               ngaygiao: '13/04/2024',
               hanhoanthanh: '15/04/2024',
               ngayhoanthanh: '15/04/2024',
               giohoanthanh: '24',
               ketqua: 'Đã kí hợp đồng và tiến đến thỏa thuận',
               dophuctap: 1,
               xacdinhmucdophuctapcuacongviec: 2,
               danhgiathoigianhoanthanhcongviec: 10,
               danhgiaxeploaicongviec: 5,
               ghichu: ''
          }, {
               id: 2,
               name: 'Công việc 2',
               ngaygiao: '15/04/2024',
               hanhoanthanh: '18/04/2024',
               ngayhoanthanh: '18/04/2024',
               giohoanthanh: '24',
               ketqua: 'Đã kí hợp đồng và tiến đến thỏa thuận',
               dophuctap: 3,
               xacdinhmucdophuctapcuacongviec: 4,
               danhgiathoigianhoanthanhcongviec: 10,
               danhgiaxeploaicongviec: 9,
               ghichu: ''
          }

     ])



     return (
          <Box width={'100%'} padding={2} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
               <Box>
                    <Typography fontSize={25} sx={{ fontWeight: 'bold' }}>Đánh giá công việc</Typography>
                    <Divider sx={{ borderTop: '1px solid black' }} />
               </Box>
               <Box display={'flex'} alignItems={'center'} marginTop={2} flexWrap={'wrap'} >
                    <Typography sx={{ marginLeft: 2.6 }}>
                         Phòng ban: *
                    </Typography>
                    <Select value={1} size='small' sx={{ marginLeft: 2 }}>
                         <MenuItem value={1}>
                              Phòng kế hoạch
                         </MenuItem>
                         <MenuItem value={2}>
                              Phòng triển khai
                         </MenuItem>
                         <MenuItem value={3}>
                              Phòng kế toán
                         </MenuItem>
                    </Select>
                    <Typography marginLeft={2}>
                         Chọn cá nhân: *
                    </Typography>
                    <Select value={1} size='small' sx={{ marginLeft: 2 }}>
                         <MenuItem value={1}>
                              Văn Nguyễn Duy Tân
                         </MenuItem>
                         <MenuItem value={2}>
                              Nguyễn Trần Thanh Điền
                         </MenuItem>
                         <MenuItem value={3}>
                              Nguyễn Danh Hưng
                         </MenuItem>
                         <MenuItem value={4}>
                              Bùi Việt Anh
                         </MenuItem>
                    </Select>

                    <Typography marginLeft={2}>
                         Từ ngày
                    </Typography>
                    <TextField size='small' type='date' sx={{ marginLeft: 2 }} />
                    <Typography marginLeft={2}>
                         Đến ngày
                    </Typography>
                    <TextField size='small' type='date' sx={{ marginLeft: 2 }} />

                    <Button variant='contained' size='small' sx={{ marginLeft: 2.5, marginTop: 1, backgroundColor: '#052c65' }} >
                         Tổng hợp
                    </Button>
                    <Button variant='outlined' size='small' sx={{ marginLeft: 2.5, marginTop: 1 }}>
                         Xem báo cáo ngày
                    </Button>
               </Box>
               <Box>
                    <Table size='small' sx={{ marginTop: 3 }}>
                         <TableHead >
                              <TableRow >
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} ><Checkbox sx={{ color: 'white' }} /></StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >STT</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Tên công việc</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Ngày giao</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Hạn hoàn thành</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} > Ngày hoàn thành</StyledTableCell >
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Giờ hoàn thành</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >Kết quả</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >Độ phức tạp</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >Xác định mức độ phức tạp của công việc</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >Đánh giá thời gian hoàn thành công việc (giờ)</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >Đánh giá xếp loại công việc</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >Ghi chú</StyledTableCell>
                              </TableRow >
                         </TableHead >
                         <TableBody>
                              {data && data.length > 0 ? data.map(ele => {
                                   return (
                                        <TableRow >
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} ><Checkbox /></StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.id}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.name}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.ngaygiao}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.hanhoanthanh}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} > {ele.ngayhoanthanh}</StyledTableCell >
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.giohoanthanh}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >{ele.ketqua}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >{ele.dophuctap}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >
                                                  <TextField size='small' type='number' defaultValue={ele.xacdinhmucdophuctapcuacongviec} />
                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >
                                                  <TextField size='small' type='number' defaultValue={ele.danhgiathoigianhoanthanhcongviec} />
                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >
                                                  <Select defaultValue={Number(ele.danhgiaxeploaicongviec)} size={'small'}>
                                                       <MenuItem value="1">
                                                            10%
                                                       </MenuItem>
                                                       <MenuItem value="2">
                                                            20%
                                                       </MenuItem>
                                                       <MenuItem value="3">
                                                            30%
                                                       </MenuItem>
                                                       <MenuItem value="4">
                                                            40%
                                                       </MenuItem>
                                                       <MenuItem value="5">
                                                            50%
                                                       </MenuItem>
                                                       <MenuItem value="6">
                                                            60%
                                                       </MenuItem>
                                                       <MenuItem value="7">
                                                            70%
                                                       </MenuItem>
                                                       <MenuItem value="8">
                                                            80%
                                                       </MenuItem>
                                                       <MenuItem value="9">
                                                            90%
                                                       </MenuItem>
                                                       <MenuItem value="10">
                                                            100%
                                                       </MenuItem>\
                                                  </Select>

                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >
                                                  <TextField size='small' defaultValue={ele.ghichu} />
                                             </StyledTableCell>
                                        </TableRow >
                                   )
                              }) : ""}

                         </TableBody>
                    </Table >
               </Box >
               <Box width={'100%'} marginTop={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }}>
                         Lưu kết quả đánh giá
                    </Button>
                    <Button size={'small'} variant='outlined' sx={{ marginRight: 2 }}>
                         Hủy
                    </Button>
               </Box>
          </Box >
     )
}

export default WorkEvaluating