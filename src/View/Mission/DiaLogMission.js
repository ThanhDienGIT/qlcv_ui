import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Divider, Paper, TableContainer, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Input } from '@mui/joy';
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

     const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
               backgroundColor: '#000080',
               color: 'white',
          },
          [`&.${tableCellClasses.body}`]: {
               fontSize: 13,
          },
     }));

     const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
               backgroundColor: '#ededed',
               color: 'white',
          },
          // hide last border
          '&:last-child td, &:last-child th': {
               border: 0,
          },
     }));

     const [data, setData] = React.useState([
          { id: 1, mucdo: 1, songay: 2, sudung: true },
          { id: 2, mucdo: 2, songay: 3, sudung: true },
          { id: 3, mucdo: 3, songay: 5, sudung: true },
          { id: 4, mucdo: 4, songay: 7, sudung: true },
          { id: 5, mucdo: 5, songay: 10, sudung: true },
     ])


     return (
          <React.Fragment>
               <Button variant='contained' size={'small'} sx={{ backgroundColor: '#000080' }} onClick={handleClickOpen}>
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
                         <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} sx={{ marginTop: 1 }}>
                              <TableContainer component={Paper} sx={{ padding: 1 }}>
                                   <Table size='small'>
                                        <TableHead >
                                             <TableRow >
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >STT</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Mức độ</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Số ngày</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Sử dụng</StyledTableCell>
                                             </TableRow>
                                        </TableHead>
                                        <TableBody>
                                             {
                                                  data.map(ele => {
                                                       return (
                                                            <StyledTableRow >
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'}>{ele.id}</StyledTableCell>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'20%'}>{ele.mucdo}</StyledTableCell>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'5%'}>
                                                                      <Input type='number' defaultValue={ele.songay} />
                                                                 </StyledTableCell>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'10%'}>
                                                                      {ele.sudung}
                                                                      <Checkbox defaultChecked={ele.sudung} />
                                                                 </StyledTableCell>
                                                            </StyledTableRow>
                                                       )
                                                  })
                                             }
                                        </TableBody>
                                   </Table>
                              </TableContainer>
                         </Box>
                    </DialogContent>
                    <DialogActions>
                         <Button size='small' onClick={handleClose} sx={{ backgroundColor: '#000080' }} variant='contained'>Cập nhật</Button>
                         <Button size='small' onClick={handleClose} sx={{ border: '1px solid #000080', color: '#000080' }} variant='outlined'>Quay lại</Button>
                    </DialogActions>
               </Dialog>
          </React.Fragment >
     )
}

export default DiaLogMission