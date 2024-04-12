import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../../CSS/Mission.css'
import MissionTable from './MissionTable'
import DiaLogMission from './DiaLogMission'
import DiaLogEditMission from './DiaLogEditMission'
import DiaLogConfirm from '../../Components/DiaLogConfirm'
function Mission() {


     const [openEdit, setOpenEdit] = useState(false)
     const [valueEdit, setValueEdit] = useState()
     const [openDelete, setOpenDelete] = useState(false)
     const handleOpenEdit = (value) => {
          setOpenEdit(true)
          setValueEdit(value)
     }

     const handleCloseEdit = () => {
          setOpenEdit(false)
          setValueEdit()
     }

     const handleOpenDelete = (value) => {
          setOpenDelete(true)

     }

     const handleCloseDelete = () => {
          setOpenDelete(false)
     }




     return (
          <Box width={'100%'} borderBottom={'1px solid gray'} display={'flex'} justifyContent={'center'} flexDirection={'column'} >
               <Box className='display-auto' borderBottom={'1px solid gray'} padding={3} >
                    <Typography fontSize={14}>
                         Tên nhiệm vụ:
                    </Typography>
                    <TextField sx={{ marginLeft: 2 }} size='small' />
                    <Button variant='contained' size={'small'} sx={{ marginLeft: 2, backgroundColor: '#052c65' }}>Tìm kiếm</Button>
                    <Button variant='outlined' size={'small'} sx={{ marginLeft: 1, color: 'black', border: '1px solid gray' }} >Bỏ lọc</Button>
               </Box>
               <Box padding={2}>
                    <DiaLogMission />
                    <DiaLogConfirm open={openDelete} handleClose={handleCloseDelete} />
                    <DiaLogEditMission open={openEdit} value={valueEdit} handleCloseEdit={handleCloseEdit} />
                    <MissionTable openEdit={openEdit} handleOpenEdit={handleOpenEdit} handleCloseEdit={handleCloseEdit} handleOpenDelete={handleOpenDelete} />
               </Box>
          </Box>
     )
}

export default Mission