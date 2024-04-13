import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Checkbox, MenuItem, Select, Typography } from '@mui/material';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
function MissionTable(props) {


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

     const onchange = (e, ele) => {
          var value = e.target.value
          var name = e.target.name
          const update = [...data]
          var a;
          update.map(element => {
               if (Number(element.id) === Number(ele.id)) {
                    a = element
               }
          })
          if (a) {
               a[name] = !a[name]
               setData(update)
          }
     }

     return (
          <Box marginTop={2}>
               <TableContainer>
                    <Table size='small'>
                         <TableHead >
                              <TableRow >
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'5%'}>STT</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'15%'}>Tên nhiệm vụ</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'33%'}>Mô tả</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'13%'}>Lãnh đạo quản lý</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} width={'15%'}>Chuyên môn, nghiệp vụ</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderRight: '1px solid white' }} >Hỗ trợ phục vụ</StyledTableCell>
                                   <StyledTableCell align='center' sx={{ borderLeft: '1px solid white' }} width={'8%'}>Thao tác</StyledTableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {data && data.length > 0 ? data.map(ele => {
                                   return (
                                        <TableRow>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >{ele.id}</StyledTableCell>
                                             <StyledTableCell sx={{ borderRight: '1px solid #f0f0f0' }} >{ele.name}</StyledTableCell>
                                             <StyledTableCell sx={{ borderRight: '1px solid #f0f0f0' }} >{ele.describe}</StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                  <Checkbox checked={ele.leader} onChange={(e) => { onchange(e, ele) }} name='leader' />
                                             </StyledTableCell>
                                             <StyledTableCell align='center' onChange={(e) => { onchange(e, ele) }} sx={{ borderRight: '1px solid #f0f0f0' }}  >
                                                  <Checkbox checked={ele.specialize} name='specialize' />
                                             </StyledTableCell>
                                             <StyledTableCell align='center' onChange={(e) => { onchange(e, ele) }} sx={{ borderRight: '1px solid #f0f0f0' }}  >
                                                  <Checkbox checked={ele.support} name='support' />
                                             </StyledTableCell>
                                             <StyledTableCell align='center' sx={{ borderRight: '1px solid #f0f0f0' }} >
                                                  <EditNoteOutlinedIcon sx={{ color: '#052c65', marginRight: 0.4 }} className='cursor' onClick={() => { props.handleOpenEdit(ele) }} />
                                                  <DeleteOutlineOutlinedIcon sx={{ color: '#052c65' }} className='cursor' onClick={props.handleOpenDelete} />
                                             </StyledTableCell>
                                        </TableRow>
                                   )
                              })
                                   : "Không có dữ liệu"}

                         </TableBody>
                    </Table>
                    <Box width={'100%'} marginTop={2} display={'flex'} alignItems={'center'}
                    >
                         <Typography fontSize={12} color="gray">Tổng cộng : {data.length} nhiệm vụ</Typography>
                         <Select size='small' value={10} sx={{ marginLeft: 2, fontSize: 10 }}>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={10}>10</MenuItem>
                              <MenuItem value={15}>15</MenuItem>
                              <MenuItem value={20}>20</MenuItem>
                         </Select>
                         <Box marginLeft={2} sx={{ cursor: 'pointer' }} width={23} fontSize={12} height={23} backgroundColor={'#e3e3e3'} borderRadius={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                              {"<"}
                         </Box>
                         <Box marginLeft={2} sx={{ cursor: 'pointer' }} width={23} fontSize={12} height={23} backgroundColor={'#e3e3e3'} borderRadius={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                              1
                         </Box>
                         <Box marginLeft={2} sx={{ cursor: 'pointer' }} width={23} fontSize={12} height={23} backgroundColor={'#e3e3e3'} borderRadius={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                              2
                         </Box>
                         <Box marginLeft={2} sx={{ cursor: 'pointer' }} width={23} fontSize={12} height={23} backgroundColor={'#e3e3e3'} borderRadius={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                              3
                         </Box>
                         <Box marginLeft={2} sx={{ cursor: 'pointer' }} width={23} fontSize={12} height={23} backgroundColor={'#e3e3e3'} borderRadius={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                              4
                         </Box>
                         <Box marginLeft={2} sx={{ cursor: 'pointer' }} width={23} fontSize={12} height={23} backgroundColor={'#e3e3e3'} borderRadius={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                              5
                         </Box>
                         <Box marginLeft={2} sx={{ cursor: 'pointer' }} width={23} fontSize={12} height={23} backgroundColor={'#e3e3e3'} borderRadius={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                              {">"}
                         </Box>
                    </Box>
               </TableContainer>
          </Box>
     )
}

export default MissionTable