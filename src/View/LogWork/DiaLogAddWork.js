import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
function DiaLogAddWork(props) {

     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
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


     return (
          <React.Fragment>
               <Button size={'small'} variant='outlined' sx={{ border: '1px solid #052c65', marginRight: 2, color: '#052c65', padding: 0.5 }} onClick={handleClickOpen}>
                    + Thêm báo cáo
               </Button>
               <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={600}
               >
                    <DialogTitle id="alert-dialog-title">
                         {"Chọn công việc"}
                    </DialogTitle>
                    <DialogContent>
                         <Box width={600}>
                              <TableContainer>
                                   <Table size='small'>
                                        <StyledTableRow >
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >STT</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Tên công việc</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Thao tác</StyledTableCell>
                                        </StyledTableRow >
                                        <TableBody>
                                             {props.data && props.data.length > 0 ? props.data.map(ele => {
                                                  return (
                                                       <TableRow>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >{ele.id}</StyledTableCell>
                                                            <StyledTableCell sx={{ borderRight: '1px solid white' }} >{ele.name}</StyledTableCell>
                                                            <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >
                                                                 <Button onClick={() => {
                                                                      props.handleAdd(ele)
                                                                      handleClose()
                                                                 }} variant='outlined' size='small' sx={{ fontSize: 11, border: '1px solid #052c65', color: '#052c65' }} >
                                                                      + Chọn
                                                                 </Button>
                                                            </StyledTableCell>
                                                       </TableRow >
                                                  )
                                             }) : ""}

                                        </TableBody>
                                   </Table>
                              </TableContainer>
                         </Box>
                    </DialogContent>
                    <DialogActions>
                         <Button onClick={handleClose} variant='outlined' size='small' sx={{ fontSize: 11, border: '1px solid #052c65', color: '#052c65' }}>Quay lại</Button>
                    </DialogActions>
               </Dialog>
          </React.Fragment>
     )
}

export default DiaLogAddWork