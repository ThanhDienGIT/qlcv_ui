import { Box, Checkbox, Divider, FormControl, FormLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import DiaLogTableDetailHourse from './DiaLogTableDetailHours';
import dayjs from 'dayjs';
import UploadIcon from '@mui/icons-material/Upload';

function WorkEvaluating() {
     const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
               backgroundColor: '#21436b',
               color: 'white',
               fontWeight: 'bold',
               fontFamily: 'Helvetica Neue'
          },
          [`&.${tableCellClasses.body}`]: {
               fontSize: 15,
               fontFamily: 'Helvetica Neue'
          },
     }));

     const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
               backgroundColor: '#21436b',
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
               name: 'Dự thảo văn bản góp ý Đề án Vị trí việc làm',
               ngaygiao: '13/04/2024',
               hanhoanthanh: '2024-04-15',
               ngayhoanthanh: '2024-04-16',
               giohoanthanh: '12',
               ketqua: 'Biên bản dự thảo văn bản góp ý',
               dophuctap: 1,
               xacdinhmucdophuctapcuacongviec: 2,
               danhgiathoigianhoanthanhcongviec: 10,
               danhgiaxeploaicongviec: 85,
               tailieu: 'Văn bản dự thảo',
               file: '',
               ghichu: ''
          }, {
               id: 2,
               name: 'Chuẩn bị tài liệu phục vụ cuộc họp Thường trực tuần 14/2024',
               ngaygiao: '15/04/2024',
               hanhoanthanh: '2024-04-18',
               ngayhoanthanh: '2024-04-17',
               giohoanthanh: '16',
               ketqua: 'Đã hoàn thành tài liệu cho cuộc họp',
               dophuctap: 3,
               xacdinhmucdophuctapcuacongviec: 4,
               danhgiathoigianhoanthanhcongviec: 10,
               danhgiaxeploaicongviec: 90,
               tailieu: '',
               file: 'noidungcuochop_v1.pdf',
               ghichu: ''
          }
     ])

     const addWorkUnDeadline = () => {
          if (data.some(x => Number(x.id) === 3)) {

          } else {
               setData(rev => ([...rev,
               {
                    id: 3,
                    name: 'Dự thảo văn bản góp ý Đề án Vị trí việc làm',
                    ngaygiao: '13/04/2024',
                    hanhoanthanh: '2024-04-14',
                    ngayhoanthanh: '',
                    giohoanthanh: '16',
                    ketqua: 'Đã hoàn thành tài liệu cho cuộc họp',
                    dophuctap: 3,
                    xacdinhmucdophuctapcuacongviec: 4,
                    danhgiathoigianhoanthanhcongviec: 10,
                    danhgiaxeploaicongviec: 80,
                    tailieu: '',
                    file: 'noidungcuochop_v1.pdf',
                    ghichu: ''
               }
               ]))
          }

     }


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

     const [listStaff, setListStaff] = useState([
          {
               id: 1,
               name: 'Lê Ngọc Trong'
          },
          {
               id: 2,
               name: 'Vũ Ngọc Dũng'
          },
          {
               id: 3,
               name: 'Nguyễn Thị Thanh Huyền'
          },
          {
               id: 4,
               name: 'Đào Thị Ngọc Yến'
          },
          {
               id: 5,
               name: 'Lưu Trọng Giáp'
          },
          {
               id: 6,
               name: 'Trần Thùy Dương'
          },

     ])

     const [openDetail, setOpenDetail] = useState(false)
     const [name, setName] = useState('')
     const handleOpenDetail = (value) => {
          setOpenDetail(true)
          setName(value)
     }

     const handleCloseDetail = () => {
          setOpenDetail(false)
          setName()
     }

     const checkDate = (hanhoanthanh, ngayhoanthanh) => {
          const startDate = dayjs(hanhoanthanh)
          const endDate = dayjs(ngayhoanthanh)
          var bool = false
          // quá hạn
          if (startDate.diff(endDate) > 0) {
               bool = false
          } else {
               bool = true
          }
          return bool
     }

     const [finishArray, setFinishArray] = useState([])
     const createDefaultValue = () => {
          const arr = []
          for (var i = 1; i <= 20; i++) {
               const value = i * 5;
               arr.push(value)
          }
          return arr
     }
     useEffect(() => {
          setFinishArray(createDefaultValue())
     }, [])


     return (
          <Box width={'100%'} padding={2} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
               <Box>
                    <Typography fontSize={25} sx={{ fontWeight: 'bold' }}>Đánh giá công việc</Typography>
                    <Divider sx={{ borderTop: '1px solid black' }} />
               </Box>
               <Box display={'flex'} alignItems={'center'} marginTop={2} justifyContent={'space-between'} flexWrap={'wrap'} >
                    <Box display={'flex'} alignItems={'center'} >
                         <FormControl>
                              <FormLabel> Đơn vị: *</FormLabel>
                              <Select defaultValue={1} size='sm' >
                                   {listDeparment.map(ele => {
                                        return (
                                             <Option value={ele.id}>
                                                  {ele.name}
                                             </Option>
                                        )
                                   })}
                              </Select>
                         </FormControl>

                         <FormControl sx={{ marginLeft: 2 }}>
                              <FormLabel> Nhân viên: *</FormLabel>
                              <Select defaultValue={1} size='sm' >
                                   {listStaff.map(ele => {
                                        return (
                                             <Option value={ele.id}>
                                                  {ele.name}
                                             </Option>
                                        )
                                   })}
                              </Select>
                         </FormControl>
                         <FormControl sx={{ marginLeft: 2 }}>
                              <FormLabel> Từ ngày: *</FormLabel>
                              <Input size='sm' type='date' />
                         </FormControl>
                         <FormControl sx={{ marginLeft: 2 }}>
                              <FormLabel> Đến ngày: *</FormLabel>
                              <Input size='sm' type='date' />
                         </FormControl>
                         <FormControl sx={{ marginLeft: 2 }}>
                              <FormLabel>
                                   Trạng thái: *</FormLabel>
                              <Select defaultValue={1} size='sm' >
                                   <Option value={2}>
                                        Đã đánh giá
                                   </Option>
                                   <Option value={1}>
                                        Chưa đánh giá
                                   </Option>
                              </Select>
                         </FormControl>
                         <Button variant='contained' size='sm' sx={{ marginLeft: 2.5, marginTop: 3, backgroundColor: '#21436b', color: 'white' }} >
                              Tìm kiếm
                         </Button>
                    </Box>

                    <Button color="success" size='sm' sx={{ marginTop: 3 }} >
                         Lưu đánh giá
                    </Button>
               </Box>
               <Box>
                    <TableContainer component={Paper} sx={{ marginTop: 2, borderRadius: 2 }}>
                         <Table size='sm' sx={{ border: '1px solid #e8e8e8', borderRadius: 1 }}>
                              <TableHead >
                                   <TableRow>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}>Stt</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}>Tên công việc</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} colSpan={6} rowSpan={2}>Chi tiết</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} colSpan={3}>Người trực tiếp quản lý đánh giá</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}>Ghi chú</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}><Checkbox sx={{ color: 'white' }} /></StyledTableCell>
                                   </TableRow >
                                   <TableRow >
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'8%'} >Mức độ phức tạp</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'9%'}>Thời gian hoàn thành (Giờ)</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'9%'}>Mức độ hoàn thành (%)</StyledTableCell>
                                   </TableRow >
                              </TableHead >
                              <TableBody>
                                   {data && data.length > 0 ? data.map(ele => {
                                        return (
                                             <TableRow >
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid #e8e8e8', borderLeft: '1px solid #e8e8e8' }}>{ele.id}</StyledTableCell>
                                                  <StyledTableCell sx={{ borderRight: '1px solid #e8e8e8' }} width={'20%'}>{ele.name}</StyledTableCell>
                                                  <StyledTableCell sx={{ borderRight: '1px solid #e8e8e8' }} colSpan={6} width={'35%'} >
                                                       <b>Ngày giao:</b> {ele.ngaygiao}, <b>Hạn hoàn thành:</b> {dayjs(ele.hanhoanthanh).format('DD-MM-YYYY')}<br />



                                                       {ele.ngayhoanthanh.length > 0 ?
                                                            <Typography variant='p' sx={checkDate(ele.hanhoanthanh, ele.ngayhoanthanh) ? { color: 'red' } : { color: 'green' }}>
                                                                 <b>Ngày hoàn thành thực tế:</b> {dayjs(ele.ngayhoanthanh).format('DD-MM-YYYY')} <br />
                                                            </Typography> :
                                                            <>  <Typography variant='p' sx={{ color: 'red' }}>
                                                                 Chưa hoàn thành
                                                            </Typography>
                                                                 <br />
                                                            </>

                                                       }



                                                       <b>Thời gian thực hiện:</b> {ele.giohoanthanh} giờ <br />
                                                       <b>Độ phức tạp: </b> {ele.dophuctap} <br />
                                                       <b>Mức độ hoàn thành: </b> {ele.danhgiaxeploaicongviec}% <br />

                                                       <b>Kết quả:</b> {ele.ketqua} <br />
                                                       {ele.tailieu.length > 0 ? <Typography color={'blue'} variant='p'>{ele.tailieu}</Typography> : ""}
                                                       {ele.file.length > 0 ? <a id="downloadLink" href="#" download="custom_content.txt">{ele.file}</a> : ""}



                                                       <Box marginTop={0.5} border={'1px solid black'} width={'50%'} borderRadius={1}
                                                            sx={{ cursor: 'pointer' }} display={'flex'} alignItems={'center'} justifyContent={'center'}
                                                            onClick={() => { handleOpenDetail(ele.name) }}
                                                       >
                                                            Nhật ký chi tiết
                                                       </Box>

                                                  </StyledTableCell>
                                                  {/* <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.ngaygiao}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.hanhoanthanh}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} > {ele.ngayhoanthanh}</StyledTableCell >
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.giohoanthanh}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >{ele.ketqua}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} >{ele.dophuctap}</StyledTableCell> */}
                                                  <StyledTableCell align='center' sx={{ borderLeft: '1px solid #e8e8e8' }} >
                                                       <Select fullWidth defaultValue={Number(ele.dophuctap)} size={'sm'}>
                                                            <Option value={1}>
                                                                 1
                                                            </Option>
                                                            <Option value={2}>
                                                                 2
                                                            </Option>
                                                            <Option value={3}>
                                                                 3
                                                            </Option>
                                                            <Option value={4}>
                                                                 4
                                                            </Option>
                                                            <Option value={5}>
                                                                 5
                                                            </Option>
                                                       </Select>
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderLeft: '1px solid #e8e8e8' }} >
                                                       <Input fullWidth sx={{ width: 70 }} size='sm' type='number' defaultValue={ele.danhgiathoigianhoanthanhcongviec} />
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderLeft: '1px solid #e8e8e8' }} >
                                                       <Select fullWidth defaultValue={Number(ele.danhgiaxeploaicongviec)} size={'sm'}>
                                                            {finishArray && finishArray.length > 0 ? finishArray.map(ele => {
                                                                 return (
                                                                      <Option value={ele}>
                                                                           {ele}
                                                                      </Option>
                                                                 )
                                                            }) : ""}
                                                       </Select>

                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderLeft: '1px solid #e8e8e8' }} width={'25%'} >
                                                       <TextField fullWidth size='sm' defaultValue={ele.ghichu} multiline rows={5} />
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderLeft: '1px solid #e8e8e8' }} ><Checkbox /></StyledTableCell>
                                             </TableRow >
                                        )
                                   }) : ""}

                              </TableBody>
                         </Table >
                    </TableContainer>
                    <Box width={'100%'} display={'flex'} marginTop={2} justifyContent={'flex-start'} alignItems={'center'}>

                         <Button variant='contained' sx={{ backgroundColor: '#21436b', color: "white" }} onClick={addWorkUnDeadline} startDecorator={<UploadIcon />} >
                              Tải danh sách công việc quá hạn chưa hoàn thành
                         </Button>
                    </Box>
               </Box >
               <DiaLogTableDetailHourse open={openDetail} nameJob={name} handleClose={handleCloseDetail} />

          </Box >
     )
}

export default WorkEvaluating