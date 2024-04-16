import { Box, Button, Card, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, MenuItem, Paper, TextField, Tooltip, Typography } from '@mui/material'
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
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Opacity } from '@mui/icons-material';
import Checkbox from '@mui/joy/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
function LogWork() {


     const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
               backgroundColor: '#000080',
               color: 'white',
          },
          [`&.${tableCellClasses.body}`]: {
               fontSize: 13,
               cursor: 'pointer',
               border: '1px solid #d9d9d9',
               opacity: 0.9
          },
     }));

     const StyledTableRow = styled(TableRow)(({ theme }) => ({
          // hide last border
          '&:last-child td, &:last-child th': {
               border: 0,
          },
          '&:hover': {
               backgroundColor: '#ccccff',
          }
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

     const [listMissionRender, setListMissionRender] = useState([
          {
               id: 6,
               name: 'Công việc cá nhân',
               hanhoanthanh: '2024-04-17',
               childs: [
                    {
                         id: 1,
                         name: 'Chuẩn bị điều phối cuộc họp',
                         hanhoanthanh: '2024-04-16'
                    },
                    {
                         id: 2,
                         name: 'Họp chi bộ',
                         hanhoanthanh: '2024-04-17'
                    },
                    {
                         id: 3,
                         name: 'Tham gia học nghị quyết',
                         hanhoanthanh: '2024-04-17'
                    },
                    {
                         id: 4,
                         name: 'Tổ chức cuộc họp nghị quyết',
                         hanhoanthanh: '2024-04-18'
                    },
                    {
                         id: 5,
                         name: 'Thiết kế banner cho cuộc hợp',
                         hanhoanthanh: '2024-04-19'
                    },
               ]
          }
          , {
               id: 1,
               name: 'Công việc được giao',
               hanhoanthanh: '2024-04-17',
               childs: [
                    {
                         id: 6,
                         name: 'Soạn thảo nghị quyết',
                         hanhoanthanh: '2024-04-20'
                    },
                    {
                         id: 7,
                         name: 'Soạn thảo công văn trình lãnh đạo',
                         hanhoanthanh: '2024-04-23'
                    },
                    {
                         id: 8,
                         name: 'Tham dự tập huấn cán bộ',
                         hanhoanthanh: '2024-04-25'
                    },
                    {
                         id: 9,
                         name: 'Chủ trì dự thảo tập huấn',
                         hanhoanthanh: '2024-04-25'
                    },
                    {
                         id: 10,
                         name: 'Tổ chức ngày hội thể thao',
                         hanhoanthanh: '2024-04-26'
                    },

               ]
          },
     ])

     const [data, setData] = useState([
          {
               id: 1,
               name: 'Chuẩn bị điều phối cuộc họp',
               content: 'Đã điều phối',
               ngayduocgiao: '13/04/2024',
               hanhoanthanh: '14/04/2024',
               ngayhoanthanh: '14/04/2024',
               mucdophuctapcanhan: 2,
               thoigianhoanthanhcanhan: 8,
               mucdohoanthanhcanhan: 100,
               mucdophuctapdanhgia: 3,
               thoigiandanhgia: 10,
               mucdohoanthanh: 90,
               ketquadanhgia: '',
               ketqua: 'Đã điều phối cuộc họp',
               ghichu: ''
          },
          {
               id: 2,
               name: 'Tham dự tập huấn cán bộ',
               content: 'Đã tham dự',
               ngayduocgiao: '14/04/2024',
               hanhoanthanh: '15/04/2024',
               ngayhoanthanh: '15/04/2024',
               mucdophuctapcanhan: 2,
               thoigianhoanthanhcanhan: 4,
               mucdohoanthanhcanhan: 50,
               mucdophuctapdanhgia: '',
               thoigiandanhgia: '',
               mucdohoanthanh: '',
               ketquadanhgia: '',
               ketqua: '',
               ghichu: ''
          },
          {
               id: 3,
               name: 'Chủ trì dự thảo tập huấn',
               content: 'Đã chủ trì',
               ngayduocgiao: '13/04/2024',
               hanhoanthanh: '14/04/2024',
               ngayhoanthanh: '14/04/2024',
               mucdophuctapcanhan: 3,
               thoigianhoanthanhcanhan: 8,
               mucdohoanthanhcanhan: 40,
               mucdophuctapdanhgia: '',
               thoigiandanhgia: '',
               mucdohoanthanh: '',
               ketquadanhgia: '',
               ketqua: '',
               ghichu: ''
          },
     ])

     const [selectedIndex, setSelectedIndex] = React.useState(1);

     const handleListItemClick = (event, index) => {
          setSelectedIndex(index);
     };


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

          const arr = [...data]
          setSelectAll(!selectAll)
          arr.map(ele => {
               ele.select = !selectAll
          })
          setDataRender(arr);

     }

     const handleSelectsingle = (e, ele) => {
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
     }


     const [date, setDate] = useState(dayjs().format('DD/MM/YYYY'))
     const [dateRender, setDateRender] = useState(dayjs().format('DD/MM/YYYY'))
     const [count, setCount] = useState(0)
     const today = () => {
          setCount(count - 1)
     }

     const yesterday = () => {
          setCount(count + 1)
     }

     useEffect(() => {

          setDate(dayjs().subtract(count, 'day').format('YYYY-MM-DD'))
          setDateRender(dayjs().subtract(count, 'day').format('DD-MM-YYYY'))

     }, [count])


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
                         <Typography fontSize={22} fontWeight={'bold'} > Nhật ký công việc</Typography>
                         <Divider sx={{ borderBottom: '1px solid gray' }} />
                    </Box>
               </Box>

               <Box padding={2} width={'100%'} sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }} borderRadius={1} display={'flex'} justifyContent={'space-between'}>
                    <Box width={'55%'} display={'flex'} flexDirection={'column'}>
                         <DiaLogWork />
                         <TableContainer component={Paper} sx={{ marginTop: 1, padding: 1, height: 400 }}>
                              <Table stickyHeader size='small'>
                                   <TableHead >
                                        <TableRow>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'5%'} >STT</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'40%'} >Tên công việc</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'20%'} >Hạn hoàn thành</StyledTableCell>
                                        </TableRow>
                                   </TableHead>
                                   <TableBody>
                                        {listMissionRender.map(ele => {
                                             return (
                                                  <>
                                                       <TableRow sx={{ backgroundColor: '#e1e1e3' }}>
                                                            <StyledTableCell align='left' sx={{ borderRight: '1px solid white' }} colSpan={3}> {ele.name}</StyledTableCell>
                                                       </TableRow>
                                                       {ele.childs.map(element => {
                                                            return (
                                                                 <StyledTableRow onClick={() => { setSelectedIndex(element.id) }} sx={element.id === selectedIndex ? { backgroundColor: '#ccccff', opacity: 0.9 } : ""} >
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'5%'} >{element.id}</StyledTableCell>
                                                                      <StyledTableCell sx={{ borderRight: '1px solid white' }} width={'40%'} >{element.name}</StyledTableCell>
                                                                      <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'20%'} >{dayjs(element.hanhoanthanh).format('DD/MM/YYYY')}</StyledTableCell>
                                                                 </StyledTableRow>
                                                            )
                                                       })}

                                                  </>
                                             )
                                        })}

                                   </TableBody>
                              </Table>
                         </TableContainer>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} width={'44%'} padding={1} paddingLeft={3} borderRadius={1} sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
                         <Box width={'100%'} marginTop={1} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
                              <Box width={'100%'}>
                                   <Box display={'flex'} marginBottom={2} flexWrap={'wrap'}>
                                        <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                                             <Button size={'small'} variant='outlined' fullWidth sx={{ border: '1px solid #000080', color: '#000080' }} onClick={yesterday}>
                                                  {"<"}
                                             </Button>
                                             <Input type='date' size={'sm'} sx={{ width: 350, marginLeft: 4, marginRight: 4 }} defaultValue={dateRender} value={date} onChange={(e) => {
                                                  setDate(dayjs(e.target.value).format('YYYY-MM-DD'))
                                                  setDateRender(dayjs(e.target.value).format('DD-MM-YYYY'))
                                             }} />
                                             <Button size={'small'} variant='outlined' fullWidth sx={{ border: '1px solid #000080', color: '#000080' }} onClick={today}>
                                                  {">"}
                                             </Button>

                                        </Box>
                                   </Box>
                                   <Card sx={{ padding: 2 }}>
                                        <FormControl>
                                             <FormLabel>Sản phẩm hoàn thành...</FormLabel>
                                             <Textarea name='resultcontent' onChange={handleOnChange} value={form.resultcontent} placeholder="Sản phẩm hoàn thành" minRows={3} />
                                        </FormControl>
                                        <Box marginTop={1} marginBottom={1} display={'flex'} alignItems={'center'} >
                                             <FormControl sx={{ width: '48%' }}>
                                                  <FormLabel>Số giờ</FormLabel>
                                                  <Input name='sum' onChange={handleOnChange} value={Number(form.sum)} size={'sm'} type='number' fullWidth />
                                             </FormControl>
                                             <FormControl sx={{ marginLeft: 1, width: '48%' }}>
                                                  <FormLabel>Mức độ hoàn thành %</FormLabel>
                                                  <Input name='progress' onChange={handleOnChange} value={Number(form.progress)} size={'sm'} type='number' fullWidth />
                                             </FormControl>
                                        </Box>
                                        <Box >
                                             <FormControl sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                                  <Typography flex={0.37} variant='p'> Văn bản liên quan:</Typography>

                                                  <label htmlFor='form' className='cssButton2'><AddIcon sx={{ marginRight: 0.5 }} /> Thêm</label>
                                                  <TextField type='file' size='sm' hidden id='form' />
                                             </FormControl>
                                             <Box display={'flex'} alignItems={'center'} marginTop={1}>
                                                  <Typography flex={0.362} variant='p'>Đính kèm tệp:</Typography>
                                                  <FormControl sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                                       <label htmlFor='form' className='cssButton'> Tải tệp tin  <BackupIcon sx={{ marginLeft: 1 }} /></label>
                                                       <TextField type='file' size='sm' hidden id='form' />
                                                  </FormControl>
                                             </Box>
                                        </Box>
                                   </Card>

                              </Box>
                         </Box>
                         <Box sx={{ width: '100%', marginBottom: 1 }} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                              <Button variant='contained' size='small' sx={{ backgroundColor: '#000080' }} startIcon={<SaveIcon />} onClick={submit}>
                                   Cập nhật
                              </Button>
                              <Button variant='outlined' size='small' sx={{ border: '1px solid #000080', color: '#000080', marginLeft: 2 }} startIcon={<RefreshIcon />} onClick={clearForm}>
                                   Làm mới
                              </Button>
                              <Tooltip title={'Xác nhận hoàn thành công việc'}>
                                   <Checkbox label="hoàn thành" defaultChecked sx={{ marginLeft: 2 }} color='success' />
                              </Tooltip>

                         </Box>
                    </Box>

               </Box>

               <Divider sx={{ borderBottom: '1px solid gray', marginTop: 2 }} />

               <Box>
                    <Box display={'flex'} justifyContent={'space-between'} marginTop={2} alignItems={'center'}>
                         <Typography marginTop={2} color={'gray'} fontWeight={'bold'} >Nhật ký công việc ngày {dateRender ? dateRender.replace("-", '/').replace("-", '/') : ""}</Typography>
                         <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                              <Typography sx={{ marginRight: 1 }}>
                                   Tổng thời gian: 7 giờ
                              </Typography>
                         </Box>
                         {/* <DiaLogAddWork data={data ? data : []} handleAdd={handleAddLogWork} /> */}
                    </Box>

                    <Table size='small' sx={{ marginTop: 1 }}>
                         <TableHead>
                              <TableRow>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Stt</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Tên nhiệm vụ hoặc công việc</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Ngày, tháng, năm được giao</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Ngày, tháng, năm phải hoàn thành</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Ngày, tháng, năm hoàn thành thực tế</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Sản phẩm đầu ra</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} colSpan={3}>Cá nhân tự đánh giá</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} colSpan={3}>Người trực tiếp quản lý đánh giá</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Kết quả đánh giá đạt được KPI</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Ghi chú</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} rowSpan={2}>Thao tác</StyledTableCell>
                                   {/* <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'5%'}><Checkbox sx={{ marginTop: 1 }} checked={selectAll} onChange={handleSelectAll} /></StyledTableCell> */}
                              </TableRow>
                              <TableRow>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }}>Mức độ phức tạp</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }}>Thời gian hoàn thành sản phẩm (Giờ)</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }}>Mức độ hoàn thành (%)</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }}>Mức độ phức tạp</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }}>Thời gian hoàn thành sản phẩm (Giờ)</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }}>Mức độ hoàn thành (%)</StyledTableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {
                                   data.map(ele => {
                                        return (
                                             <TableRow sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""}>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.id}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} width={'9%'}>{ele.name}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.ngayduocgiao}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.hanhoanthanh}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.ngayhoanthanh}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} width={'9%'}>{ele.ketqua}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.mucdophuctapcanhan}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.thoigianhoanthanhcanhan}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.mucdohoanthanhcanhan}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center' width={'3%'}>{ele.mucdophuctapdanhgia}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.thoigiandanhgia}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} align='center'>{ele.mucdohoanthanh}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} width={'9%'}>{ele.ketquadanhgia}</StyledTableCell>
                                                  <StyledTableCell sx={Number(ele.mucdohoanthanhcanhan) === 100 ? { color: 'green' } : ""} width={'9%'}>{ele.ghichu}</StyledTableCell>
                                                  <StyledTableCell sx={{ borderLeft: '1px solid #f0f0f0' }} width={'7%'}>

                                                       <EditIcon color={'warning'} onClick={() => { editScroll(ele) }} />


                                                       <DeleteIcon color={'error'} />

                                                  </StyledTableCell>
                                             </TableRow>
                                        )
                                   })
                              }
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

          </Box >
     )
}

export default LogWork