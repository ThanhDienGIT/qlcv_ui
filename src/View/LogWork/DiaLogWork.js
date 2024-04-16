import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Card, Divider, MenuItem, Select, TextField, Typography, Button } from '@mui/material';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BackupIcon from '@mui/icons-material/Backup';
import RefreshIcon from '@mui/icons-material/Refresh'
import dayjs from 'dayjs';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import AddIcon from '@mui/icons-material/Add';
function DiaLogWork() {
     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };


     const [data, setData] = React.useState([
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

     const [date, setDate] = React.useState(dayjs().format('DD/MM/YYYY'))
     const [dateRender, setDateRender] = React.useState(dayjs().format('DD/MM/YYYY'))
     const [count, setCount] = React.useState(0)
     const today = () => {
          setCount(count - 1)
     }

     const yesterday = () => {
          setCount(count + 1)
     }

     React.useEffect(() => {

          setDate(dayjs().subtract(count, 'day').format('YYYY-MM-DD'))
          setDateRender(dayjs().subtract(count, 'day').format('DD-MM-YYYY'))

     }, [count])


     const targetRef = React.useRef(null);


     const scrollToTarget = () => {
          // Kiểm tra xem ref có tồn tại không
          if (targetRef.current) {
               // Di chuyển đến phần tử đã đánh dấu
               targetRef.current.scrollIntoView({ behavior: "smooth" });
          }
     };

     const [form, setForm] = React.useState({
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
          <React.Fragment>
               <Button size={'small'} variant='contained' sx={{ backgroundColor: '#21436b', width: 190, marginLeft: 1 }} startIcon={<AddIcon />} onClick={handleClickOpen}>
                    Thêm công việc
               </Button>
               <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={600}
               >
                    <DialogTitle id="alert-dialog-title">
                         {"Thêm công việc"}
                    </DialogTitle>
                    <Divider sx={{ borderBottom: '1px solid gray' }} />
                    <DialogContent>
                         <DialogContentText id="alert-dialog-description">
                              <Box width={900} display={'flex'} flexDirection={'column'} >
                                   <Card sx={{ padding: 2 }}>
                                        <Box display={'flex'} alignItems={'center'}>
                                             <Typography flex={1}>
                                                  Nhiệm vụ: *
                                             </Typography>
                                             <Select
                                                  defaultValue={2}
                                                  size={'small'} sx={{ flex: 3 }}
                                             >
                                                  {data && data.length > 0 ? data.map(ele => {
                                                       return (
                                                            <MenuItem value={ele.id}>
                                                                 {ele.name}
                                                            </MenuItem>
                                                       )
                                                  }) : ""}

                                             </Select>

                                        </Box>
                                        <Box display={'flex'} alignItems={'center'} marginTop={2}>
                                             <Typography flex={1}>
                                                  Tên công việc: *
                                             </Typography>
                                             <TextField size={'small'} placeholder='Nhập tên công việc' sx={{ flex: 3 }} />
                                        </Box>
                                        <Box display={'flex'} alignItems={'center'} marginTop={2}>
                                             <Typography flex={1}>
                                                  Người thẩm định: *
                                             </Typography>
                                             <Select
                                                  defaultValue={2}
                                                  size={'small'} sx={{ flex: 3 }}
                                             >
                                                  <MenuItem value={1}>
                                                       Lê Quốc Huy
                                                  </MenuItem>
                                                  <MenuItem value={2}>
                                                       La Phi Phàm
                                                  </MenuItem>
                                                  <MenuItem value={3}>
                                                       Trần Xuân Hoa
                                                  </MenuItem>
                                                  <MenuItem value={4}>
                                                       Lê Văn Long
                                                  </MenuItem>
                                             </Select>
                                        </Box>
                                        <Box display={'flex'} marginTop={2}>
                                             <Typography flex={1}>
                                                  Nội dung công việc: *
                                             </Typography>
                                             <TextField size={'small'} placeholder={'Nội dung công việc'} multiline rows={2} sx={{ flex: 3 }} />
                                        </Box>
                                        <Box display={'flex'} marginTop={2} justifyContent={'space-between'}>
                                             <Box width={'50%'} display={'flex'} alignItems={'center'}>
                                                  <Typography flex={0.8} >
                                                       Hạn hoàn thành: *
                                                  </Typography>
                                                  <TextField size='small' type='date' />
                                             </Box>
                                             <Box width={'50%'} display={'flex'} alignItems={'center'}>
                                                  <Typography flex={0.5}>
                                                       Độ phức tạp: *
                                                  </Typography>

                                                  <Select
                                                       defaultValue={2}
                                                       size={'small'} sx={{ flex: 1 }}
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
                                                       <MenuItem value={4}>
                                                            5
                                                       </MenuItem>
                                                  </Select>
                                             </Box>

                                        </Box>
                                   </Card>
                                   <Box display={'flex'} marginTop={2}>
                                        <Box width={'100%'} padding={2} paddingLeft={3} borderRadius={1} sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
                                             <Typography>Nhật ký công việc</Typography>
                                             <Box width={'100%'} marginTop={1} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
                                                  <Box width={'100%'}>
                                                       <Box display={'flex'} marginBottom={2} flexWrap={'wrap'}>
                                                            <Box width={'100%'} display={'flex'} alignItems={'center'}  >
                                                                 <Button size={'small'} variant='outlined' sx={{ border: '1px solid #21436b', color: '#21436b' }} onClick={yesterday}>
                                                                      {"<"}
                                                                 </Button>
                                                                 <Input type='date' sx={{ width: 150, marginLeft: 2, marginRight: 2 }} size='sm' defaultValue={dateRender} value={date} onChange={(e) => {
                                                                      setDate(dayjs(e.target.value).format('YYYY-MM-DD'))
                                                                      setDateRender(dayjs(e.target.value).format('DD-MM-YYYY'))
                                                                 }} />
                                                                 <Button size={'small'} variant='outlined' sx={{ border: '1px solid #21436b', color: '#21436b' }} onClick={today}>
                                                                      {">"}
                                                                 </Button>

                                                            </Box>
                                                       </Box>

                                                       <FormControl>
                                                            <FormLabel>Sản phẩm hoàn thành</FormLabel>
                                                            <TextField name='resultcontent' onChange={handleOnChange} value={form.resultcontent} placeholder="Sản phẩm hoàn thành" multiline rows={2} />
                                                       </FormControl>
                                                       <Box marginTop={1} marginBottom={1} display={'flex'} alignItems={'center'} >
                                                            <FormControl sx={{ width: '48%' }}>
                                                                 <FormLabel>Số giờ</FormLabel>
                                                                 <TextField name='sum' onChange={handleOnChange} value={Number(form.sum)} size={'small'} type='number' fullWidth />
                                                            </FormControl>
                                                            <FormControl sx={{ marginLeft: 1, width: '48%' }}>
                                                                 <FormLabel>Mức độ hoàn thành %</FormLabel>
                                                                 <Select size='small' defaultValue={40}>
                                                                      <MenuItem value={20}>
                                                                           20
                                                                      </MenuItem>
                                                                      <MenuItem value={40}>
                                                                           40
                                                                      </MenuItem>
                                                                      <MenuItem value={60}>
                                                                           60
                                                                      </MenuItem>
                                                                      <MenuItem value={80}>
                                                                           80
                                                                      </MenuItem>
                                                                      <MenuItem value={100}>
                                                                           100
                                                                      </MenuItem>
                                                                 </Select>

                                                            </FormControl>
                                                       </Box>
                                                       <Box display={'flex'} marginTop={2} alignItems={'center'}>
                                                            <FormControl sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                                                 <Typography variant='p'> Văn bản liên quan:</Typography>

                                                                 <label htmlFor='form' className='cssButton2'>+ Thêm</label>
                                                                 <TextField type='file' size='sm' hidden id='form' />
                                                            </FormControl>
                                                            <Box display={'flex'} alignItems={'center'} marginLeft={2}>
                                                                 <Typography variant='p'>Đính kèm tệp:</Typography>
                                                                 <FormControl sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                                                      <label htmlFor='form' className='cssButton'> Tải tệp tin  <BackupIcon sx={{ marginLeft: 0.5 }} /></label>
                                                                      <TextField type='file' size='sm' hidden id='form' />
                                                                 </FormControl>
                                                            </Box>
                                                       </Box>


                                                  </Box>
                                             </Box>

                                        </Box>
                                   </Box>


                              </Box>

                         </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ paddingBottom: 2 }}>

                         <Button size={'small'} onClick={handleClose} variant='contained' sx={{ backgroundColor: '#21436b', marginRight: 2 }}>
                              Cập nhật
                         </Button>
                         <Button size={'small'} onClick={handleClose} variant='outlined' sx={{ marginRight: 2, border: '1px solid #21436b', color: '#21436b' }}>
                              Quay lại
                         </Button>
                    </DialogActions>
               </Dialog>
          </React.Fragment>
     )
}

export default DiaLogWork