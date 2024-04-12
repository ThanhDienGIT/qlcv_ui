import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Divider, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function DiaLogMission(props) {
     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     React.useEffect(() => {
          console.log('Bật tắt')
     }, [open])


     return (
          <React.Fragment>
               <Button variant='contained' size={'small'} sx={{ backgroundColor: '#052c65' }} onClick={handleClickOpen}>
                    + Thêm nhiệm vụ
               </Button>
               <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    maxWidth={500}
               >
                    <DialogTitle>{"Thêm nhiệm vụ"}</DialogTitle>
                    <Box width={800} paddingLeft={3} paddingRight={3}>
                         <Divider sx={{ color: 'black', borderTop: '1px solid black' }} />

                    </Box>
                    <DialogContent>
                         <DialogContentText id="alert-dialog-slide-description">
                              <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                                   <Box display={'flex'} alignItems={'center'}>
                                        <Typography flex={1}>Tên nhiệm vụ: *</Typography>
                                        <TextField size='small' sx={{ flex: 3 }}></TextField>
                                   </Box>
                                   <Box display={'flex'} marginTop={2}>
                                        <Typography flex={1}>Mô tả nhiệm vụ: *</Typography>
                                        <TextField size='small' sx={{ flex: 3 }} multiline rows={2}></TextField>
                                   </Box>
                                   <Box display={'flex'} alignItems={'center'} marginTop={2}>
                                        <Typography flex={1}>Đối tượng đảm nhiệm:</Typography>
                                        <Box flex={3} >
                                             <FormControlLabel
                                                  value="end"
                                                  control={<Checkbox size='small' />}
                                                  label="Lãnh đạo, quản lý"
                                                  labelPlacement="end"

                                             />
                                             <FormControlLabel
                                                  value="end"
                                                  control={<Checkbox size='small' />}
                                                  label="Chuyên môn, nghiệp vụ"
                                                  labelPlacement="end"

                                             />
                                             <FormControlLabel
                                                  value="end"
                                                  control={<Checkbox size='small' />}
                                                  label="Hỗ trợ, phục vụ"
                                                  labelPlacement="end"

                                             />
                                        </Box>
                                   </Box>
                              </Box>
                         </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                         <Button size='small' onClick={handleClose} variant='contained'>Lưu thay đổi</Button>
                         <Button size='small' onClick={handleClose} variant='outlined'>Hủy</Button>
                    </DialogActions>
               </Dialog>
          </React.Fragment >
     )
}

export default DiaLogMission