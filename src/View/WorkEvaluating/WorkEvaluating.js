import { Box, Checkbox, Divider, Paper, TextField, Typography } from '@mui/material'
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


function WorkEvaluating() {
     const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
               backgroundColor: '#000080',
               color: 'white',
          },
          [`&.${tableCellClasses.body}`]: {
               fontSize: 13,
          },
     }));

     const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
               backgroundColor: '#000080',
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
               giohoanthanh: '24',
               ketqua: 'Biên bản dự thảo văn bản góp ý',
               dophuctap: 1,
               xacdinhmucdophuctapcuacongviec: 2,
               danhgiathoigianhoanthanhcongviec: 10,
               danhgiaxeploaicongviec: 85,
               tailieu: 'Góp ý điều chỉnh tài liệu tập huấn',
               file: 'gopy_v1.docx',
               ghichu: ''
          }, {
               id: 2,
               name: 'Chuẩn bị tài liệu phục vụ cuộc họp Thường trực tuần 14/2024',
               ngaygiao: '15/04/2024',
               hanhoanthanh: '2024-04-18',
               ngayhoanthanh: '2024-04-17',
               giohoanthanh: '24',
               ketqua: 'Đã hoàn thành tài liệu cho cuộc họp thường trực tuần 14/2024',
               dophuctap: 3,
               xacdinhmucdophuctapcuacongviec: 4,
               danhgiathoigianhoanthanhcongviec: 10,
               danhgiaxeploaicongviec: 90,
               tailieu: 'Tài liệu về nội dung cuộc họp',
               file: 'noidungcuochop_v1.pdf',
               ghichu: ''
          }

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
                         <Typography variant={'p'} >
                              Đơn vị: *
                         </Typography>
                         <Select defaultValue={1} size='sm' sx={{ marginLeft: 2 }}>
                              {listDeparment.map(ele => {
                                   return (
                                        <Option value={ele.id}>
                                             {ele.name}
                                        </Option>
                                   )
                              })}
                         </Select>
                         <Typography variant={'p'} marginLeft={2}>
                              Nhân viên: *
                         </Typography>
                         <Select defaultValue={1} size='sm' sx={{ marginLeft: 2 }}>
                              {listStaff.map(ele => {
                                   return (
                                        <Option value={ele.id}>
                                             {ele.name}
                                        </Option>
                                   )
                              })}
                         </Select>

                         <Typography variant={'p'} marginLeft={2}>
                              Từ ngày:
                         </Typography>
                         <Input size='sm' type='date' sx={{ marginLeft: 2 }} />

                         <Typography variant={'p'} marginLeft={2}>
                              Đến ngày:
                         </Typography>
                         <Input size='sm' type='date' sx={{ marginLeft: 2 }} />

                         <Button variant='contained' size='sm' sx={{ marginLeft: 2.5, backgroundColor: '#000080', color: 'white' }} >
                              Tìm kiếm
                         </Button>
                    </Box>

                    <Button color="success" size='sm' sx={{ marginLeft: 1, marginTop: 1, position: 'fixed', right: 0, top: 105 }} >
                         Lưu đánh giá
                    </Button>
               </Box>
               <Box>
                    <TableContainer component={Paper} sx={{ marginTop: 2, borderRadius: 2 }}>
                         <Table size='sm' sx={{ border: '1px solid #e8e8e8', borderRadius: 1 }}>
                              <TableHead >
                                   <TableRow>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}>STT</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}>Tên công việc</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} colSpan={6} rowSpan={2}>Chi tiết</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} colSpan={3}>Người trực tiếp quản lý đánh giá</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}>Ghi chú</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}><Checkbox sx={{ color: 'white' }} /></StyledTableCell>
                                   </TableRow >
                                   <TableRow >
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'8%'} >Mức độ phức tạp</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'9%'}>Thời gian hoàn thành (Giờ)</StyledTableCell>
                                        <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'8%'}>Mức độ hoàn thành (%)</StyledTableCell>
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
                                                       <Divider sx={{ borderBottom: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
                                                       <Typography variant='p' sx={checkDate(ele.hanhoanthanh, ele.ngayhoanthanh) ? { color: 'red' } : { color: 'green' }}>
                                                            <b>Ngày hoàn thành thực tế:</b> {dayjs(ele.ngayhoanthanh).format('DD-MM-YYYY')} <br />
                                                       </Typography>

                                                       <Divider sx={{ borderBottom: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
                                                       <b>Thời gian thực hiện:</b> {ele.giohoanthanh} giờ <br />
                                                       <b>Độ phức tạp: </b> {ele.dophuctap} <br />
                                                       <b>Mức độ hoàn thành: </b> {ele.danhgiaxeploaicongviec}% <br />
                                                       <Divider sx={{ borderBottom: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
                                                       <b>Kết quả:</b> {ele.ketqua} <br />
                                                       <Typography color={'blue'} variant='p'>{ele.tailieu}</Typography><br />
                                                       <a id="downloadLink" href="#" download="custom_content.txt">{ele.file}</a>
                                                       <Divider sx={{ borderBottom: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
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

               </Box >
               <DiaLogTableDetailHourse open={openDetail} nameJob={name} handleClose={handleCloseDetail} />

          </Box >
     )
}

export default WorkEvaluating