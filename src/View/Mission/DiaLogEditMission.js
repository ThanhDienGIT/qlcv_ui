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
function DiaLogEditMission(props) {

     const [valuefill, setValuefill] = React.useState()

     React.useEffect(() => {
          if (props.open) {
               setValuefill(props.value)
          } else {
               setValuefill()
          }
          console.log(props.value)

     }, [props.open])


     return (
          <React.Fragment>
               <Dialog
                    open={props.open}
                    keepMounted
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
                                        <TextField size='small' sx={{ flex: 3 }} value={valuefill && valuefill.name}></TextField>
                                   </Box>
                                   <Box display={'flex'} marginTop={2}>
                                        <Typography flex={1}>Mô tả nhiệm vụ: *</Typography>
                                        <TextField size='small' sx={{ flex: 3 }} multiline rows={2} value={valuefill && valuefill.describe}></TextField>
                                   </Box>
                                   <Box display={'flex'} alignItems={'center'} marginTop={2}>
                                        <Typography flex={1}>Đối tượng đảm nhiệm:</Typography>
                                        <Box flex={3} >

                                             <FormControlLabel
                                                  value={valuefill && valuefill.leader}
                                                  control={<Checkbox size='small' checked={valuefill && Boolean(valuefill.leader)} />}
                                                  label="Lãnh đạo, quản lý"
                                                  labelPlacement="end"
                                             />
                                             <FormControlLabel

                                                  control={<Checkbox size='small' checked={valuefill && valuefill.specialize} />}
                                                  label="Chuyên môn, nghiệp vụ"
                                                  labelPlacement="end"

                                             />
                                             <FormControlLabel

                                                  control={<Checkbox size='small' checked={valuefill && valuefill.support} />}
                                                  label="Hỗ trợ, phục vụ"
                                                  labelPlacement="end"

                                             />
                                        </Box>
                                   </Box>
                              </Box>
                         </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                         <Button size='small' variant='contained'>Lưu thay đổi</Button>
                         <Button size='small' onClick={props.handleCloseEdit} variant='outlined'>Hủy</Button>
                    </DialogActions>
               </Dialog>
          </React.Fragment >
     )
}

export default DiaLogEditMission