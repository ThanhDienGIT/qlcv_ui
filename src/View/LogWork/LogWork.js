import { Box, Button, Divider, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DiaLogWork from './DiaLogWork';
import DiaLogAddWork from './DiaLogAddWork';
function LogWork() {
     const [value, setValue] = React.useState('1');

     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

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

     const [dataRender, setDataRender] = useState([
          {
               id: 1,
               name: 'Công việc 1',
               content: 'Nội dung công việc 1',
               start: '07:30',
               end: '11:30',
               startnumber: 730,
               endnumber: 1130,
               tiendo: 10,
               ketqua: 'Đã hoàn thành',
               nhanxet: 'Không có'
          },
          {
               id: 2,
               name: 'Công việc 2',
               content: 'Nội dung công việc 2',
               start: '13:20',
               end: '14:30',
               startnumber: 1320,
               endnumber: 1430,
               tiendo: 5,
               ketqua: '',
               nhanxet: '',
          },
          {
               id: 3,
               name: 'Công việc 3',
               content: 'Nội dung công việc 3',
               start: '16:30',
               end: '17:30',
               startnumber: 1630,
               endnumber: 1730,
               tiendo: 8,
               ketqua: '',
               nhanxet: ''
          },
     ])

     const [data, setData] = useState([
          {
               id: 1,
               name: 'Công việc 1',
               content: 'Nội dung công việc 1',
               start: '07:30',
               end: '11:30',
               startnumber: 730,
               endnumber: 1130,
               tiendo: 10,
               ketqua: 'Đã hoàn thành',
               nhanxet: 'Không có'
          },
          {
               id: 2,
               name: 'Công việc 2',
               content: 'Nội dung công việc 2',
               start: '13:20',
               end: '14:30',
               startnumber: 1320,
               endnumber: 1430,
               tiendo: 5,
               ketqua: '',
               nhanxet: '',
          },
          {
               id: 3,
               name: 'Công việc 3',
               content: 'Nội dung công việc 3',
               start: '16:30',
               end: '17:30',
               startnumber: 1630,
               endnumber: 1730,
               tiendo: 8,
               ketqua: '',
               nhanxet: ''
          },
     ])


     const handleAddLogWork = (value) => {
          console.log(value)
          const object = {
               id: data.length + 1,
               name: value.name,
               content: '',
               start: '',
               end: '',
               startnumber: 0,
               endnumber: 0,
               tiendo: 0,
               ketqua: '',
               nhanxet: ''
          }
          setDataRender(rev => ([...rev, object]))
     }



     return (
          <Box width={'100%'} padding={2} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
               <Box>
                    <Box width={'100%'} padding={1}>
                         <Typography fontSize={22} fontWeight={'bold'}> Báo cáo công việc</Typography>
                         <Divider sx={{ borderBottom: '1px solid gray' }} />
                    </Box>
               </Box>
               <Box>
                    <Tabs
                         value={value}
                         onChange={handleChange}
                         aria-label="wrapped label tabs example"
                         sx={{ width: 392, border: '1px solid black', borderRadius: 1, marginTop: 1 }}
                    >
                         <Tab value="1" label="Công việc được giao" />
                         <Tab value="2" label="Công việc cá nhân" sx={{ borderLeft: '1px solid black' }} />
                    </Tabs>
                    <Divider sx={{ borderBottom: '1px solid gray', marginTop: 2 }} />
               </Box>

               {value === '1' ?
                    <Box marginTop={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                         <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }}>
                                   Báo cáo cho hôm qua
                              </Button>
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }}>
                                   Báo cáo cho hôm nay
                              </Button>
                              <Typography>Chọn ngày báo cáo: </Typography>
                              <TextField type='date' size={'small'} sx={{ marginLeft: 2 }} />
                         </Box>
                         <Box>
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65' }} >
                                   Lưu báo cáo
                              </Button>
                         </Box>

                    </Box>
                    :
                    <Box marginTop={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                         <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }}>
                                   Báo cáo cho hôm qua
                              </Button>
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }}>
                                   Báo cáo cho hôm nay
                              </Button>
                              <Typography>Chọn ngày báo cáo: </Typography>
                              <TextField type='date' size={'small'} sx={{ marginLeft: 2 }} />
                         </Box>
                         <Box>

                              <DiaLogWork />
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65' }} >
                                   Lưu báo cáo
                              </Button>
                         </Box>

                    </Box>
               }

               <Divider sx={{ borderBottom: '1px solid gray', marginTop: 2 }} />
               <Box>
                    <Typography marginTop={2} color={'gray'} fontWeight={'bold'} >Báo cáo hôm nay: 13/04/2024</Typography>
                    <Table size='small'>
                         <TableHead >
                              <TableRow >
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }}>STT</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'12%'}>Tên công việc</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'15%'}>Nội dung thực hiện</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8%'}>bắt đầu</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8%'}>kết thúc</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8%'}>Tổng giờ</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'8%'}>Tiến độ</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'10%'}>Kết quả</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'20%'}>Nhận xét</StyledTableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {dataRender && dataRender.length > 0 ? dataRender.map(ele => {
                                   return (
                                        <TableRow>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }}>{ele.id}</StyledTableCell>
                                             <StyledTableCell sx={{ borderRight: '1px solid #f0f0f0' }} width={'12%'}>{ele.name}</StyledTableCell>
                                             <StyledTableCell sx={{ borderRight: '1px solid #f0f0f0' }} width={'8%'}> <TextField size={'small'} defaultValue={ele.content} fullWidth /></StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} width={'8%'}>
                                                  <TextField fullWidth size='small' value={ele.start} type={'time'} />
                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} width={'8%'}>
                                                  <TextField size='small' value={ele.end} type={'time'} />
                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} width={'8%'}>
                                                  <TextField size='small' type='number' value={Number(ele.endnumber) !== 0 ? Number((ele.endnumber - ele.startnumber)) / 100 : 0} sx={{ width: '70px' }} />
                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid #f0f0f0' }} width={'8%'}>
                                                  <Select value={ele.tiendo} sx={{ width: '90px' }} size='small' >
                                                       <MenuItem value={1}>
                                                            10%
                                                       </MenuItem>
                                                       <MenuItem value={2}>
                                                            20%
                                                       </MenuItem>
                                                       <MenuItem value={3}>
                                                            30%
                                                       </MenuItem>
                                                       <MenuItem value={4}>
                                                            40%
                                                       </MenuItem>
                                                       <MenuItem value={5}>
                                                            50%
                                                       </MenuItem>
                                                       <MenuItem value={6}>
                                                            60%
                                                       </MenuItem>
                                                       <MenuItem value={7}>
                                                            70%
                                                       </MenuItem>
                                                       <MenuItem value={8}>
                                                            80%
                                                       </MenuItem>
                                                       <MenuItem value={9}>
                                                            90%
                                                       </MenuItem>
                                                       <MenuItem value={10}>
                                                            100%
                                                       </MenuItem>
                                                  </Select>
                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid #f0f0f0' }} width={'20%'}>
                                                  <Box display={'flex'} flexDirection={'column'}>
                                                       <TextField size={'small'} placeholder='Nhập kết quả' multiline />
                                                       <Box display={'flex'} marginTop={1}>
                                                            <label htmlFor='form' className='cssLabel3'>+ Chọn văn bản</label>
                                                            <TextField type='file' size='small' hidden id='form' />
                                                            <label htmlFor='form' className='cssLabel4'>Tải tệp lên</label>
                                                            <TextField type='file' size='small' hidden id='form' />
                                                       </Box>

                                                  </Box>

                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'20%'}>
                                                  <TextField fullWidth placeholder='Nhận xét' sx={{ flex: 0.2 }} size='small' multiline rows={2.5} />
                                             </StyledTableCell>
                                        </TableRow>
                                   )

                              }) : ""}
                         </TableBody>
                    </Table>
               </Box>
               <Box width={'100%'} marginTop={3} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                    <DiaLogAddWork data={data ? data : []} handleAdd={handleAddLogWork} />
               </Box>

          </Box>
     )
}

export default LogWork