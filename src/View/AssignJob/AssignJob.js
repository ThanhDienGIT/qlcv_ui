import { Box, Collapse, Divider, FormControl, InputAdornment, Radio, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import dayjs from 'dayjs'
import Checkbox from '@mui/joy/Checkbox';
import BackupIcon from '@mui/icons-material/Backup';
import SaveIcon from '@mui/icons-material/Save';
import RefreshIcon from '@mui/icons-material/Refresh';
function AssignJob() {

     const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
               backgroundColor: '#21436b',
               color: 'white',
               fontWeight: 'bold'
          },
          [`&.${tableCellClasses.body}`]: {
               fontSize: 13,
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

     const [defaultDate, setDefaultDate] = useState(dayjs().format('YYYY-MM-DD'))

     const [formNhacViec, setFormNhacViec] = useState(false)


     const [listHours, setListHours] = useState([
          { id: 1, name: '8h' },
          { id: 1, name: '9h' },
          { id: 1, name: '10h' },
          { id: 1, name: '11h' },
          { id: 1, name: '12h' },
          { id: 1, name: '13h' },
          { id: 1, name: '14h' },
          { id: 1, name: '15h' },
          { id: 1, name: '16h' },
          { id: 1, name: '17h' },
     ])


     const [listday, setDay] = useState([
          { id: 1, name: 'Thứ 2' },
          { id: 1, name: 'Thứ 3' },
          { id: 1, name: 'Thứ 4' },
          { id: 1, name: 'Thứ 5' },
          { id: 1, name: 'Thứ 6' },
          { id: 1, name: 'Thứ 7' },
          { id: 1, name: 'Chủ nhật' },
     ])

     const [listdayonMonth, setListdayonMonth] = useState([
          { id: 1, name: '1' },
          { id: 1, name: '2' },
          { id: 1, name: '3' },
          { id: 1, name: '4' },
          { id: 1, name: '5' },
          { id: 1, name: '6' },
          { id: 1, name: '7' },
          { id: 1, name: '8' },
          { id: 1, name: '9' },
          { id: 1, name: '10' },
          { id: 1, name: '11' },
          { id: 1, name: '12' },
          { id: 1, name: '13' },
          { id: 1, name: '14' },
          { id: 1, name: '15' },
          { id: 1, name: '16' },
          { id: 1, name: '17' },
          { id: 1, name: '18' },
          { id: 1, name: '19' },
          { id: 1, name: '20' },
          { id: 1, name: '21' },
          { id: 1, name: '22' },
          { id: 1, name: '23' },
          { id: 1, name: '24' },
          { id: 1, name: '25' },
          { id: 1, name: '26' },
          { id: 1, name: '27' },
          { id: 1, name: '28' },
          { id: 1, name: '29' },
          { id: 1, name: '30' },
          { id: 1, name: '31' },

     ])

     const [listMonthonYear, setlistMonthonYear] = useState([
          { id: 1, name: '1' },
          { id: 2, name: '2' },
          { id: 3, name: '3' },
          { id: 4, name: '4' },
          { id: 5, name: '5' },
          { id: 6, name: '6' },
          { id: 7, name: '7' },
          { id: 8, name: '8' },
          { id: 9, name: '9' },
          { id: 10, name: '10' },
          { id: 11, name: '11' },
          { id: 12, name: '12' },
     ])

     const openCloseCollapse = () => {
          setFormNhacViec(!formNhacViec)
     }

     const [phuctap, setPhuctap] = useState(3)
     const [hour, setHour] = useState(0)

     const handleChangePhucTap = () => {
          if (phuctap === 1) {
               setHour(4)
          }
          if (phuctap === 2) {
               setDefaultDate(dayjs().add(1, 'day').format('YYYY-MM-DD'))
               setHour(8)
          }
          if (phuctap === 3) {
               setDefaultDate(dayjs().add(2, 'day').format('YYYY-MM-DD'))
               setHour(16)
          }
          if (phuctap === 4) {
               setDefaultDate(dayjs().add(3, 'day').format('YYYY-MM-DD'))
               setHour(24)
          }
          if (phuctap === 5) {
               setDefaultDate(dayjs().add(4, 'day').format('YYYY-MM-DD'))
               setHour(32)
          }
     }

     useEffect(() => {
          handleChangePhucTap()
     }, [phuctap])

     const handleChange = (event, newValue) => {
          setPhuctap(newValue)
     };

     return (
          <Box width={'100%'} padding={3} display={'flex'} justifyContent={'center'} flexDirection={'column'}>

               <Box width={'100%'} padding={2}>
                    <Box display={'flex'}>
                         <Typography fontSize={22} fontWeight={'bold'}> Thông tin công việc</Typography>
                         <Box marginLeft={2} display={'flex'} alignItems={'center'}>
                              <Typography >Lãnh đạo giao việc:</Typography>
                              <Select
                                   defaultValue={3} sx={{ marginLeft: 2 }} size='sm' disabled
                              >
                                   <Option value={1}>
                                        Trương Văn Xuân
                                   </Option>
                                   <Option value={2}>
                                        Lê Hùng Ngọc
                                   </Option>
                                   <Option value={3}>
                                        Nguyễn Trịnh Công
                                   </Option>
                              </Select>
                         </Box>
                    </Box>

                    <Divider sx={{ borderBottom: '1px solid gray' }} />

               </Box>
               <Box width={'100%'} padding={2} display={'flex'} justifyContent={'space-between'}>
                    <Box width={'49%'} display={'flex'} flexDirection={'column'}>
                         {/* <Box width={'100%'} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Lãnh đạo giao việc: *</Typography>
                              <Select
                                   defaultValue={3} sx={{ flex: 2.4 }} size='sm'
                              >
                                   <Option value={1}>
                                        Trương Văn Xuân
                                   </Option>
                                   <Option value={2}>
                                        Lê Hùng Ngọc
                                   </Option>
                                   <Option value={3}>
                                        Nguyễn Trịnh Công
                                   </Option>
                              </Select>
                         </Box> */}
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Nhiệm vụ: *</Typography>
                              <Select
                                   defaultValue={3} sx={{ flex: 2.4 }} size='sm'
                              >

                                   {datawork && datawork.length ? datawork.map(ele => {
                                        return (
                                             <Option value={ele.id}>
                                                  {ele.name}
                                             </Option>
                                        )
                                   }) : ''}

                              </Select>
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Tên công việc: *</Typography>
                              <Input sx={{ flex: 2.4 }} size='sm' />
                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Typography flex={1}>Nội dung: *</Typography>
                              <Textarea sx={{ flex: 2.4 }} size='sm' minRows={2} />
                         </Box>

                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Button size={'sm'} sx={{ border: '1px solid #21436b', color: '#21436b' }} onClick={openCloseCollapse} variant='outlined' startDecorator={<SettingsIcon />}>Nhắc việc định kỳ</Button>
                         </Box>

                    </Box>
                    <Box width={'49%'}>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>
                              <Box width={'51%'} display={'flex'} alignItems={'center'}>
                                   <Typography flex={0.95}>Độ phức tạp: *</Typography>
                                   <Select
                                        sx={{ marginLeft: 1, width: 140 }} size='sm'
                                        value={phuctap}
                                        onChange={handleChange}
                                   >
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
                              </Box>
                              <Box width={'49%'} display={'flex'} alignItems={'center'}>
                                   <Typography flex={0.7}>Số giờ: *</Typography>
                                   <Input size='sm' type='number' value={hour} />
                              </Box>


                         </Box>
                         <Box width={'100%'} marginTop={1} display={'flex'} alignItems={'center'}>

                              <Typography flex={0.41}>Hạn hoàn thành: *</Typography>
                              <Input type='date' value={defaultDate} sx={{ marginLeft: 2, width: 240 }} onChange={(e) => { setDefaultDate(dayjs(e.target.value).format('YYYY-MM-DD')) }} size='sm' />

                         </Box>
                         <FormControl sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: 1 }}>
                              <Typography variant='p' flex={0.32}> Văn bản liên quan:</Typography>
                              <label htmlFor='form' className='cssButton2'>+ Thêm</label>
                              <TextField type='file' size='sm' hidden id='form' />
                         </FormControl>
                         <Box display={'flex'} alignItems={'center'} marginTop={1}>
                              <Typography variant='p' flex={0.31}>Đính kèm tệp:</Typography>
                              <FormControl sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                   <label htmlFor='form' className='cssButton'> Tải tệp tin  <BackupIcon sx={{ marginLeft: 1 }} /></label>
                                   <TextField type='file' size='sm' hidden id='form' />
                              </FormControl>
                         </Box>
                    </Box>
               </Box>
               <Collapse in={formNhacViec}>
                    <Box width={'100%'} display={'flex'} flexDirection={'column'} border={'1px solid gray'} borderRadius={2} padding={3}>
                         <Box display={'flex'} width={'100%'} paddingLeft={2} >
                              <Box width={'20%'}>
                                   Hình thức nhắc việc
                              </Box>
                              <Box display={'flex'} width={'80%'}>
                                   <Box display={'flex'} alignItems={'center'} borderLeft={'1px solid gray'}>
                                        <Checkbox label="Notification" sx={{ marginLeft: 2 }} />
                                   </Box>
                                   <Box display={'flex'} alignItems={'center'}>
                                        <Checkbox label="Email" sx={{ marginLeft: 2 }} />
                                   </Box>
                                   <Box display={'flex'} alignItems={'center'}>
                                        <Checkbox label="SMS" sx={{ marginLeft: 2 }} />
                                   </Box>
                              </Box>
                         </Box>
                         <Divider sx={{ borderBottom: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
                         <Box display={'flex'} width={'100%'} paddingLeft={2} marginTop={3}>
                              <Box width={'20%'}>
                                   Giờ nhắc
                              </Box>
                              <Box display={'flex'} width={'80%'}>
                                   <Box display={'flex'} alignItems={'center'} borderLeft={'1px solid gray'}>
                                        {listHours.map(ele => {
                                             return (
                                                  <Checkbox label={ele.name} sx={{ marginLeft: 2 }} />
                                             )
                                        })}
                                   </Box>
                              </Box>
                         </Box>
                         <Divider sx={{ borderBottom: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
                         <Box display={'flex'} width={'100%'} paddingLeft={2} marginTop={3}>
                              <Box width={'20%'}>
                                   Theo ngày trong tuần
                              </Box>
                              <Box display={'flex'} width={'80%'}>
                                   <Box display={'flex'} alignItems={'center'} borderLeft={'1px solid gray'}>
                                        {listday.map(ele => {
                                             return (
                                                  < Checkbox label={ele.name} sx={{ marginLeft: 2 }} />
                                             )
                                        })}
                                   </Box>
                              </Box>
                         </Box>
                         <Divider sx={{ borderBottom: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
                         <Box display={'flex'} width={'100%'} paddingLeft={2} marginTop={3}>
                              <Box width={'20%'}>
                                   Theo ngày trong tháng
                              </Box>
                              <Box display={'flex'} width={'80%'}>
                                   <Box display={'flex'} alignItems={'center'} borderLeft={'1px solid gray'}>
                                        {listHours.map(ele => {
                                             return (
                                                  < Checkbox label={ele.name} sx={{ marginLeft: 2 }} />
                                             )
                                        })}
                                   </Box>
                              </Box>
                         </Box>
                         <Divider sx={{ borderBottom: '1px solid gray', marginTop: 1, marginBottom: 1 }} />
                         <Box display={'flex'} width={'100%'} paddingLeft={2} marginTop={3}>
                              <Box width={'20%'}>
                                   Theo tháng trong năm
                              </Box>
                              <Box display={'flex'} width={'80%'}>
                                   <Box display={'flex'} alignItems={'center'} borderLeft={'1px solid gray'} >
                                        {listMonthonYear.map(ele => {
                                             return (
                                                  < Checkbox label={ele.name} sx={{ marginLeft: 2 }} />
                                             )
                                        })}
                                   </Box>
                              </Box>
                         </Box>
                    </Box>
               </Collapse>


               <Box width={'100%'} padding={2} display={'flex'} flexDirection={'column'}>

                    <Box display={'flex'} alignItems={'center'} width={400} >
                         <Input size={'sm'} sx={{ flex: 2 }} placeholder='Nhập từ khóa tìm kiếm...'
                              startDecorator={<SearchIcon />}
                         />
                         <Button variant='contained' size='sm' sx={{
                              backgroundColor: '#21436b', color: 'white', marginLeft: 1
                         }}>
                              Tìm kiếm
                         </Button>
                    </Box>
                    <Box>
                         <TableContainer sx={{ marginTop: 2, marginBottom: 5 }}>
                              <Table size='small'>
                                   <TableHead>
                                        <TableRow>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'5%'} rowSpan={2}>Stt</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'25%'} rowSpan={2}>Phòng ban</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'} colSpan={2}>Xử lý chính</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'} colSpan={2}>Phối hợp</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'} colSpan={2}>Theo dõi</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'9%'} rowSpan={2}>Hạn hoàn thành</StyledTableCell>
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
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}><Radio size='small' /></StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}></StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}> </StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}><Checkbox /></StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}> </StyledTableCell>
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
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid #f2f2f2' }} width={'8.9%'}><Radio size='small' /></StyledTableCell>
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
                         <Button variant='contained' startDecorator={<SaveIcon />} sx={{
                              backgroundColor: '#21436b', color: 'white'
                         }}>
                              Cập nhật
                         </Button>
                         <Button variant='contained' startDecorator={<RefreshIcon />} sx={{ marginLeft: 2, backgroundColor: '#21436b', color: 'white' }}>Làm mới</Button>
                    </Box>


               </Box>
          </Box >

     )
}

export default AssignJob