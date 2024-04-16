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
               sogio: 2,
               tiendo: 10,
               ngay: '13/04/2024',
               ketqua: 'Đã hoàn thành',
               file: 'gopy_v1.docx',
               link: 'Góp ý điều chỉnh tài liệu tập huấn',
               nhanxet: 'Không có'
          },
          {
               id: 2,
               name: 'Chuẩn bị tài liệu phục vụ cuộc họp Thường trực tuần 14/2024',
               content: 'Chỉnh sửa tài liệu cho cuộc họp',
               sogio: 4,
               tiendo: 5,
               ngay: '14/04/2024',
               ketqua: '',
               file: 'noidungcuochop_v1.pdf',
               link: 'Góp ý điều chỉnh tài liệu tập huấn',
               nhanxet: '',
          },
          {
               id: 3,
               name: 'Chủ trì dự thảo tập huấn',
               content: 'Tham gia điều phối cuộc họp',
               sogio: 6,
               tiendo: 8,
               ngay: '15/04/2024',
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
                         <Box width={1200}>
                              <TableContainer component={Paper}>
                                   <Table size='small'>
                                        <TableHead >
                                             <TableRow>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'5%'} >STT</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'40%'} >Nội dung thực hiện</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'9%'} >Thời gian (giờ)</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8%'} >Ngày</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'8%'} >Tiến độ</StyledTableCell>
                                                  <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'30%'} >Kết quả</StyledTableCell>
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
                                                                      {ele.sogio}
                                                                 </StyledTableCell>
                                                                 <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                                      {ele.ngay}
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
                                                                                <br />
                                                                                <a href="#">
                                                                                     {ele.link}
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