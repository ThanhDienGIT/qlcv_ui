import { Box, Button, Card, Checkbox, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
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
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BackupIcon from '@mui/icons-material/Backup';
import RefreshIcon from '@mui/icons-material/Refresh';
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
          {
               id: 7,
               name: 'Dự thảo văn bản góp ý Đề án Vị trí việc làm',
               describe: 'Tham gia khóa học về soạn thảo, bố cục nghị quyết',
               leader: false,
               specialize: true,
               support: true,
          },
     ])


     const [listMissionPrivate, setListMissionPrivate] = React.useState([
          {
               id: 1,
               name: 'Chủ trì cuộc họp dự án',
               describe: 'Soạn thảo nghị quyết trình lãnh đạo',
               leader: true,
               specialize: true,
               support: false,
          },
          {
               id: 2,
               name: 'Tham gia lớp tập huấn',
               describe: 'Đã tham gia',
               leader: true,
               specialize: true,
               support: true,
          },
          {
               id: 3,
               name: 'Tham dự tập huấn về ý thức làm việc cán bộ',
               describe: 'Tham dự tập huấn về quy trình công tác dành cho cán bộ',
               leader: true,
               specialize: false,
               support: false,
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

     const [selectedIndex, setSelectedIndex] = React.useState(1);

     const handleListItemClick = (event, index) => {
          setSelectedIndex(index);
     };
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
                         name: 'Chủ trì dự thảo tài liệu tập huấn',
                         content: 'Chỉnh sửa tài liệu dự thảo tập huấn',
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
                         name: 'Họp chi bộ',
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
     const [dateRender, setDateRender] = useState(dayjs().format('DD/MM/YYYY'))
     const today = () => {
          setDate(dayjs().format('YYYY-MM-DD'))
          setDateRender(dayjs().format('DD-MM-YYYY'))
     }

     const yesterday = () => {
          setDate(dayjs().subtract(1, 'day').format('YYYY-MM-DD'))
          setDateRender(dayjs().subtract(1, 'day').format('DD-MM-YYYY'))
     }


     const targetRef = useRef(null);


     const scrollToTarget = () => {
          // Kiểm tra xem ref có tồn tại không
          if (targetRef.current) {
               // Di chuyển đến phần tử đã đánh dấu
               targetRef.current.scrollIntoView({ behavior: "smooth" });
          }
     };

     const [form, setForm] = useState({
          id: 0,
          idcongviec: 0,
          content: '',
          start: dayjs(dayjs().format('YYYY-MM-DD') + "T00:00"),
          end: dayjs(dayjs().format('YYYY-MM-DD') + "T00:00"),
          sum: '',
          progress: '',
          document: '',
          file: '',
          resultcontent: '',
     })

     const clearForm = () => {
          setForm({
               id: 0,
               idcongviec: 0,
               content: '',
               start: dayjs(dayjs().format('YYYY-MM-DD') + "T00:00"),
               end: dayjs(dayjs().format('YYYY-MM-DD') + "T00:00"),
               sum: '',
               progress: '',
               document: '',
               file: '',
               resultcontent: '',
          })
     }

     const handleOnChange = (e) => {
          var name = e.target.name
          var value = e.target.value
          setForm(rev => ({ ...rev, [name]: value }))
     }
     const handleOnChangeDate = (e, namechange) => {
          console.log(namechange)
          console.log(dayjs(e.$d).format('YYYY-MM-DDTHH:mm'))
          setForm(rev => ({ ...rev, [namechange]: dayjs(dayjs(e.$d).format('YYYY-MM-DDTHH:mm')) }))
     }


     const addScroll = () => {
          scrollToTarget()
     }

     const editScroll = () => {
          scrollToTarget()
     }

     const submit = () => {
          console.log(form)
     }

     const chooseWork = (ele) => {
          setForm(rev => ({ ...rev, idcongviec: ele.id }))
     }

     return (
          <Box width={'100%'} padding={2} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
               <Box ref={targetRef}>
                    <Box width={'100%'} padding={1}>
                         <Typography fontSize={22} fontWeight={'bold'} > Báo cáo công việc</Typography>
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



               <Box padding={2} width={'100%'} sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }} borderRadius={1} display={'flex'} justifyContent={'space-between'}>
                    <Box width={'30%'} display={'flex'} flexDirection={'column'}>
                         <List component="nav" aria-label="main mailbox folders" sx={{ backgroundColor: 'white', borderRadius: 1, flexWrap: 'wrap', marginTop: 1, paddingTop: 0, paddingBottom: 0, border: '1px solid gray' }}>
                              <ListItem sx={{ backgroundColor: '#052c65', borderBottom: '1px solid gray', height: 35 }}>
                                   <ListItemIcon sx={{ color: 'white' }}>
                                        Danh sách công việc
                                   </ListItemIcon>
                              </ListItem>
                              {Number(value) === 1 ? listMission.map(ele => {
                                   return (
                                        <ListItemButton
                                             sx={{ borderBottom: '1px solid gray', height: 35 }}
                                             selected={selectedIndex === ele.id}
                                             onClick={(event) => {
                                                  handleListItemClick(event, ele.id)
                                                  chooseWork(ele)
                                             }}

                                        >
                                             <ListItemIcon>
                                                  {ele.name}
                                             </ListItemIcon>
                                        </ListItemButton>
                                   )
                              }) : listMissionPrivate.map(ele => {
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
                              })}

                         </List>
                    </Box>

                    <Box width={'69%'} padding={1} paddingLeft={3} borderRadius={1} sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
                         <Box width={'100%'} marginTop={1} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
                              <Box width={'49%'}>
                                   <Box width={'100%'} display={'flex'} marginBottom={2} flexWrap={'wrap'}>
                                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                                             <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'}>
                                                  <Button size={'small'} variant='outlined' sx={{ border: '1px solid #052c65', color: '#052c65' }} onClick={yesterday}>
                                                       hôm qua
                                                  </Button>
                                                  <Button size={'small'} variant='outlined' sx={{ border: '1px solid #052c65', color: '#052c65', marginLeft: 1, marginRight: 1 }} onClick={today}>
                                                       hôm nay
                                                  </Button>
                                                  <Input type='date' size={'sm'} defaultValue={dateRender} value={date} onChange={(e) => {
                                                       setDate(dayjs(e.target.value).format('YYYY-MM-DD'))
                                                       setDateRender(dayjs(e.target.value).format('DD-MM-YYYY'))
                                                  }} />
                                             </Box>
                                        </Box>
                                   </Box>

                                   <FormControl>
                                        <FormLabel>Nội dung thực hiện</FormLabel>
                                        <Textarea name='content' onChange={handleOnChange} value={form.content} placeholder="Nội dung thực hiện..." minRows={2} />
                                   </FormControl>
                                   <Box marginTop={1} marginBottom={1} display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
                                        <FormControl>
                                             <FormLabel>Bắt đầu</FormLabel>
                                             <TimeField onChange={(e) => { handleOnChangeDate(e, 'start') }} value={form.start} ampm={false} size='small' sx={{ width: 90 }} />
                                        </FormControl>

                                        <FormControl sx={{ marginLeft: 1 }}>
                                             <FormLabel>Kết thúc</FormLabel>
                                             <TimeField onChange={(e) => { handleOnChangeDate(e, 'end') }} value={form.end} ampm={false} size='small' sx={{ width: 90 }} />
                                        </FormControl>

                                        <FormControl sx={{ marginLeft: 1 }}>
                                             <FormLabel>Thời gian</FormLabel>
                                             <Input name='sum' onChange={handleOnChange} value={Number(form.sum)} size={'lg'} type='number' sx={{ width: 85 }} />
                                        </FormControl>
                                        <FormControl sx={{ marginLeft: 1 }}>
                                             <FormLabel>Tiến độ</FormLabel>
                                             <Input name='progress' onChange={handleOnChange} value={Number(form.progress)} size={'lg'} type='number' sx={{ width: 85 }} />
                                        </FormControl>
                                   </Box>
                              </Box>
                              <Box width={'49%'}>
                                   <Card sx={{ padding: 3 }}>
                                        <Typography>Sản phẩm</Typography>
                                        <Divider sx={{ borderTop: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
                                        <FormControl>
                                             <Textarea name='resultcontent' onChange={handleOnChange} value={form.resultcontent} placeholder="Sản phẩm hoàn thành..." minRows={2} />
                                        </FormControl>
                                        <FormControl sx={{ marginTop: 1, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                             Văn bản liên quan:
                                             <label htmlFor='form' className='cssButton2'>+ Thêm</label>
                                             <TextField type='file' size='sm' hidden id='form' />
                                        </FormControl>
                                        <FormControl sx={{ marginTop: 1, display: 'flex', alignItems: 'flex-start' }}>
                                             <label htmlFor='form' className='cssButton'> Tải tệp tin  <BackupIcon sx={{ marginLeft: 1 }} /></label>
                                             <TextField type='file' size='sm' hidden id='form' />
                                        </FormControl>
                                   </Card>

                              </Box>
                         </Box>
                         <Box sx={{ width: '100%' }} marginTop={2} marginBottom={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                              <Button variant='contained' sx={{ backgroundColor: '#052c65', width: 120 }} onClick={submit}>
                                   Lưu
                              </Button>
                              <Button variant='outlined' sx={{ border: '1px solid #052c65', color: '#052c65', marginLeft: 2, width: 120 }} startIcon={<RefreshIcon />} onClick={clearForm}>
                                   Làm mới
                              </Button>
                         </Box>
                    </Box>

               </Box>


               <Divider sx={{ borderBottom: '1px solid gray', marginTop: 2 }} />

               <Box>
                    <Box display={'flex'} justifyContent={'space-between'} marginTop={2} alignItems={'center'}>
                         <Typography marginTop={2} color={'gray'} fontWeight={'bold'} >Báo cáo hôm nay: {dateRender ? dateRender : ""}</Typography>

                         {value === '1' ?
                              ""
                              :
                              <DiaLogWork />
                         }
                         {/* <DiaLogAddWork data={data ? data : []} handleAdd={handleAddLogWork} /> */}
                    </Box>

                    <Table size='small' sx={{ marginTop: 1 }}>
                         <TableHead>
                              <TableRow>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>STT</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'18%'} rowSpan={2}>Tên công việc</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'20%'} rowSpan={2}>Nội dung thực hiện</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'} colSpan={2}>Thời gian</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8%'} rowSpan={2}>Thời gian (Giờ)</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} rowSpan={2}>Tiến độ</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'26%'} rowSpan={2}>Kết quả</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'15%'} rowSpan={2}>Thao tác</StyledTableCell>
                                   {/* <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'5%'}><Checkbox sx={{ marginTop: 1 }} checked={selectAll} onChange={handleSelectAll} /></StyledTableCell> */}
                              </TableRow>
                              <TableRow>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'} >Bắt đầu </StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8%'}>Kết thúc</StyledTableCell>
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
                                                       {ele.content}
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                       {ele.start.slice(11)}
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                       {ele.end.slice(11)}
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                       {Number((ele.endnumber - ele.startnumber)) / 100}
                                                  </StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderLeft: '1px solid #f0f0f0' }} >
                                                       {ele.tiendo * 10}%
                                                  </StyledTableCell>
                                                  <StyledTableCell sx={{ borderLeft: '1px solid #f0f0f0' }}>
                                                       <Box display={'flex'} flexDirection={'column'}>
                                                            {ele.ketqua} <br></br>
                                                            {ele.tiendo === 10 ? <a href='#' download={''}>van_ban_du_thao.pdf</a> : ""}
                                                       </Box>
                                                  </StyledTableCell>
                                                  <StyledTableCell sx={{ borderLeft: '1px solid #f0f0f0' }}>
                                                       <IconButton>
                                                            <EditIcon color={'warning'} onClick={() => { editScroll(ele) }} />
                                                       </IconButton>
                                                       <IconButton>
                                                            <DeleteIcon color={'error'} />
                                                       </IconButton>
                                                  </StyledTableCell>
                                                  {/* <StyledTableCell align='center' sx={{ border: '1px solid #f0f0f0' }} width={'5%'}><Checkbox checked={ele.select} onChange={(e) => { handleSelectsingle(e, ele) }} /></StyledTableCell> */}
                                             </TableRow>
                                        )

                                   }) : ""}
                         </TableBody>
                    </Table>
               </Box>




               {/* <Box>
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
               </Box> */}

          </Box>
     )
}

export default LogWork