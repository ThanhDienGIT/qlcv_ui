import { Box, Button, Checkbox, Divider, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DiaLogWork from './DiaLogWork';
import DiaLogAddWork from './DiaLogAddWork';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Textarea from '@mui/joy/Textarea';
import { TimePicker } from '@mui/x-date-pickers';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import dayjs from 'dayjs';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

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
               select: false,
               name: 'Dự thảo văn bản góp ý Đề án Vị trí việc làm',
               content: 'Tham gia dự thảo',
               start: '2022-04-17T07:30',
               end: '2022-04-17T11:30',
               startnumber: 730,
               endnumber: 1130,
               tiendo: 10,
               ketqua: 'Đã hoàn thành',
               nhanxet: 'Không có'
          },
          {
               id: 2,
               select: false,
               name: 'Chuẩn bị tài liệu phục vụ cuộc họp Thường trực tuần 14/2024',
               content: 'Chỉnh sửa và in tài liệu phục vụ cuộc họp Thường trực tuần 14/2024',
               start: '2022-04-17T13:20',
               end: '2022-04-17T14:30',
               startnumber: 1320,
               endnumber: 1430,
               tiendo: 40,
               ketqua: '',
               nhanxet: '',
          },
          {
               id: 3,
               select: false,
               name: 'Họp Chi bộ tháng 04/2024 (Ngày 01/04/2024)',
               content: 'Họp Chi bộ tháng ',
               start: '2022-04-17T16:30',
               end: '2022-04-17T17:30',
               startnumber: 1630,
               endnumber: 1730,
               tiendo: 30,
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


     useEffect(() => {
          if (Number(value) === 1) {
               setDataRender([
                    {
                         id: 1,
                         name: 'Dự thảo văn bản góp ý Đề án Vị trí việc làm',
                         content: 'Ghi chú lại những góp ý trong cuộc họp',
                         start: `${dayjs().format('YYYY-MM-DD')}T07:30`,
                         end: `${dayjs().format('YYYY-MM-DD')}T11:30`,
                         startnumber: 730,
                         endnumber: 1130,
                         tiendo: 10,
                         ketqua: 'Đã hoàn thành',
                         nhanxet: 'Không có'
                    },
                    {
                         id: 2,
                         name: 'Chuẩn bị tài liệu phục vụ cuộc họp Thường trực tuần 14/2024',
                         content: 'Chỉnh sửa tài liệu',
                         start: `${dayjs().format('YYYY-MM-DD')}T13:20`,
                         end: `${dayjs().format('YYYY-MM-DD')}T14:30`,
                         startnumber: 1320,
                         endnumber: 1430,
                         tiendo: 5,
                         ketqua: '',
                         nhanxet: '',
                    },
                    {
                         id: 3,
                         name: 'Họp Chi bộ tháng 04/2024 (Ngày 01/04/2024)',
                         content: 'Tham gia họp',
                         start: `${dayjs().format('YYYY-MM-DD')}T16:30`,
                         end: `${dayjs().format('YYYY-MM-DD')}T17:30`,
                         startnumber: 1630,
                         endnumber: 1730,
                         tiendo: 8,
                         ketqua: '',
                         nhanxet: ''
                    },
               ])
          } else {
               setDataRender([])
          }
     }, [value])

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

     const [selectAll, setSelectAll] = useState(false)


     const handleSelectAll = () => {

          if (Number(value) === 1) {
               const arr = [...data]
               setSelectAll(!selectAll)
               arr.map(ele => {
                    ele.select = !selectAll
               })
               setDataRender(arr);
          } else {
               const arr = [...dataRender]
               setSelectAll(!selectAll)
               arr.map(ele => {
                    ele.select = !selectAll
               })
               setDataRender(arr);
          }

     }

     const handleSelectsingle = (e, ele) => {

          if (Number(value) === 1) {
               const arr = [...data]
               arr.map(element => {
                    if (ele.id === element.id) {
                         element.select = !element.select
                    }
               })
               if (arr.some(x => x.select === false)) {
                    setSelectAll(false)
               } else {
                    setSelectAll(true)
               }

               setDataRender(arr);
          } else {
               const arr = [...dataRender]
               arr.map(element => {
                    if (ele.id === element.id) {
                         element.select = !element.select
                    }
               })
               if (arr.some(x => x.select === false)) {
                    setSelectAll(false)
               } else {
                    setSelectAll(true)
               }

               setDataRender(arr);
          }

     }


     const [date, setDate] = useState(dayjs().format('DD/MM/YYYY'))

     const today = () => {
          setDate(dayjs().format('DD/MM/YYYY'))
     }

     const yesterday = () => {
          setDate(dayjs().subtract(1, 'day').format('DD/MM/YYYY'))
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
                         aria-label="Disabled tabs" defaultValue={0}>
                         <TabList>
                              <Tab value="1" label="Công việc được giao">Công việc được giao</Tab>
                              <Tab value="2" label="Công việc cá nhân" >Công việc cá nhân</Tab>
                         </TabList>
                    </Tabs>



                    <Divider sx={{ borderBottom: '1px solid gray', marginTop: 2 }} />
               </Box>

               {value === '1' ?
                    <Box marginTop={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                         <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }} onClick={yesterday}>
                                   Hôm qua
                              </Button>
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }} onClick={today}>
                                   Hôm nay
                              </Button>
                              <Typography>Chọn ngày: </Typography>
                              <TextField type='date' onChange={(e) => { setDate(dayjs(e.target.value).format('DD/MM/YYYY')) }} size={'small'} sx={{ marginLeft: 2 }} />
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
                                   hôm qua
                              </Button>
                              <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }}>
                                   hôm nay
                              </Button>
                              <Typography>Chọn ngày: </Typography>
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
                    <Typography marginTop={2} color={'gray'} fontWeight={'bold'} >Báo cáo hôm nay: {date ? date : ""}</Typography>
                    <Table size='small' sx={{ marginTop: 1 }}>
                         <TableHead >
                              <TableRow >
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }}>STT</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'18%'}>Tên công việc</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'20%'}>Nội dung thực hiện</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'22%'} colSpan={2}>Thời gian</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Tổng giờ</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }}>Tiến độ</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'30%'}>Kết quả</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'5%'}><Checkbox sx={{ marginTop: 1 }} checked={selectAll} onChange={handleSelectAll} /></StyledTableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>

                              {dataRender && dataRender.length > 0 ?

                                   dataRender.map(ele => {
                                        return (
                                             <TableRow>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }}>{ele.id}</StyledTableCell>
                                                  <StyledTableCell sx={{ borderRight: '1px solid #f0f0f0' }} >{ele.name}</StyledTableCell>
                                                  <StyledTableCell sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                       <Textarea size={'sm'} defaultValue={ele.content} minRows={4} />
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                       <TimeField defaultValue={dayjs(ele.start)} ampm={false} size='small' sx={{ minWidth: 69 }} />
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                       <TimeField defaultValue={dayjs(ele.end)} ampm={false} size='small' sx={{ minWidth: 69 }} />
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                       <Input size='sm' type='number' defaultValue={Number(ele.endnumber) !== 0 ? Number((ele.endnumber - ele.startnumber)) / 100 : 0} sx={{ width: '65px' }} />
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderLeft: '1px solid #f0f0f0' }} >
                                                       <Select defaultValue={ele.tiendo} size='sm' >
                                                            <Option value={10}>10%</Option>
                                                            <Option value={20}>20%</Option>
                                                            <Option value={30}>30%</Option>
                                                            <Option value={40}>40%</Option>
                                                            <Option value={50}>50%</Option>
                                                            <Option value={60}>60%</Option>
                                                            <Option value={70}>70%</Option>
                                                            <Option value={80}>80%</Option>
                                                            <Option value={90}>90%</Option>
                                                            <Option value={100}>100%</Option>
                                                       </Select>
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderLeft: '1px solid #f0f0f0' }}>
                                                       <Box display={'flex'} flexDirection={'column'}>
                                                            <Textarea size={'sm'} placeholder='Nhập kết quả' minRows={3} />
                                                            <Box display={'flex'} marginTop={1}>
                                                                 <label htmlFor='form' className='cssLabel3'>+ Chọn văn bản</label>
                                                                 <TextField type='file' size='small' hidden id='form' />
                                                                 <label htmlFor='form' className='cssLabel4'>Tải tệp lên</label>
                                                                 <TextField type='file' size='small' hidden id='form' />
                                                            </Box>
                                                       </Box>
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ border: '1px solid #f0f0f0' }} width={'5%'}><Checkbox checked={ele.select} onChange={(e) => { handleSelectsingle(e, ele) }} /></StyledTableCell>
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