import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Divider, MenuItem, Select, TextField, Typography } from '@mui/material';
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





     return (
          <React.Fragment>
               <Button size={'small'} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }} onClick={handleClickOpen}>
                    + Thêm công việc
               </Button>
               <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={600}
               >
                    <DialogTitle id="alert-dialog-title">
                         {"Tạo công việc"}
                    </DialogTitle>
                    <Divider sx={{ borderBottom: '1px solid gray' }} />
                    <DialogContent>
                         <DialogContentText id="alert-dialog-description">
                              <Box width={700} display={'flex'} flexDirection={'column'} >
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
                              </Box>
                         </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ paddingBottom: 2 }}>

                         <Button size={'small'} onClick={handleClose} variant='contained' sx={{ backgroundColor: '#052c65', marginRight: 2 }}>
                              Lưu thay đổi
                         </Button>
                         <Button size={'small'} onClick={handleClose} variant='outlined' sx={{ marginRight: 2 }}>
                              Hủy
                         </Button>
                    </DialogActions>
               </Dialog>
          </React.Fragment>
     )
}

export default DiaLogWork