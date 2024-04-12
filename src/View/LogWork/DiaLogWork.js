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
                                             value={2}
                                             size={'small'} sx={{ flex: 3 }}
                                        >
                                             <MenuItem value={1}>
                                                  Nhiệm vụ 1
                                             </MenuItem>
                                             <MenuItem value={2}>
                                                  Nhiệm vụ 2
                                             </MenuItem>
                                             <MenuItem value={3}>
                                                  Nhiệm vụ 3
                                             </MenuItem>
                                             <MenuItem value={4}>
                                                  Nhiệm vụ 4
                                             </MenuItem>
                                        </Select>

                                   </Box>
                                   <Box display={'flex'} alignItems={'center'} marginTop={2}>
                                        <Typography flex={1}>
                                             Tên công việc: *
                                        </Typography>
                                        <TextField size={'small'} defaultValue={'Công việc 1'} sx={{ flex: 3 }} />
                                   </Box>
                                   <Box display={'flex'} alignItems={'center'} marginTop={2}>
                                        <Typography flex={1}>
                                             Người thẩm định: *
                                        </Typography>
                                        <Select
                                             value={2}
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
                                        <TextField size={'small'} defaultValue={'Nội dung công việc'} multiline rows={2} sx={{ flex: 3 }} />
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