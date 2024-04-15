import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Button, Paper, Table, TableContainer } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

export default function DiaLogTableDetailHourse(props) {

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

     const [data, setData] = React.useState([
          {
               id: 1,
               name: 'Dự thảo văn bản góp ý Đề án Vị trí việc làm',
               content: 'Tham gia dự thảo',
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
               name: 'Chuẩn bị tài liệu phục vụ cuộc họp Thường trực tuần 14/2024',
               content: 'Chỉnh sửa tài liệu cho cuộc họp',
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
               name: 'Chủ trì dự thảo tập huấn',
               content: 'Tham gia điều phối cuộc họp',
               start: '16:30',
               end: '17:30',
               startnumber: 1630,
               endnumber: 1730,
               tiendo: 8,
               ketqua: '',
               nhanxet: ''
          },
     ])


     return (
          <React.Fragment>
               <Dialog
                    open={props.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={900}
               >
                    <DialogTitle id="alert-dialog-title">
                         {"Chi tiết nhật ký công việc "}
                         <b>"{props.nameJob}"</b>
                    </DialogTitle>
                    <DialogContent>
                         <Box width={1300}>
                              <TableContainer component={Paper}>
                                   <Table size='small'>
                                        <TableHead >
                                             <TableRow>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'5%'} rowSpan={2}>STT</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'40%'} rowSpan={2}>Nội dung thực hiện</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'13%'} colSpan={2}>Thời gian</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'9%'} rowSpan={2}>Thời gian (giờ)</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8%'} rowSpan={2}>Tiến độ</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'30%'} rowSpan={2}>Kết quả</StyledTableCell>
                                             </TableRow>
                                             <TableRow>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Bắt đầu</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Kết thúc</StyledTableCell>
                                             </TableRow>
                                        </TableHead>
                                        <TableBody>
                                             {data && data.length > 0 ?

                                                  data.map(ele => {
                                                       return (
                                                            <TableRow>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }}>{ele.id}</StyledTableCell>
                                                                 <StyledTableCell sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                                      {ele.content}
                                                                 </StyledTableCell>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                                      {ele.start}
                                                                 </StyledTableCell>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                                      {ele.end}
                                                                 </StyledTableCell>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                                      {Number((ele.endnumber - ele.startnumber)) / 100}
                                                                 </StyledTableCell>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                                      {ele.tiendo * 10}%
                                                                 </StyledTableCell>

                                                                 <StyledTableCell sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                                      {ele.ketqua} <br></br>
                                                                      {Number(ele.id) === 1 ?
                                                                           <>
                                                                                <a href="#" download={''}>
                                                                                     {ele.file}
                                                                                </a>
                                                                                <a href="#">
                                                                                     {ele.vanban}

                                                                                </a>
                                                                           </>
                                                                           : " "}

                                                                 </StyledTableCell>


                                                            </TableRow>
                                                       )

                                                  }) : ""}

                                        </TableBody>
                                   </Table>
                              </TableContainer>
                         </Box>
                    </DialogContent>
                    <DialogActions>
                         <Button variant='outlined' size={'small'} onClick={props.handleClose}>Quay lại</Button>
                    </DialogActions>
               </Dialog>
          </React.Fragment>
     );
}