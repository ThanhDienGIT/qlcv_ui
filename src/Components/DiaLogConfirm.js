import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DiaLogConfirm(props) {

     return (
          <React.Fragment>
               <Dialog
                    open={props.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
               >
                    <DialogTitle id="alert-dialog-title">
                         {"Xóa dữ liệu"}
                    </DialogTitle>
                    <DialogContent>
                         <DialogContentText id="alert-dialog-description" sx={{ paddingTop: 2, paddingBottom: 2, fontSize: 19 }}>
                              Bạn có chắc chắn muốn xóa nhiệm vụ này ?
                         </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                         <Button onClick={props.handleClose} variant='outlined'>
                              Quay lại
                         </Button>
                         <Button onClick={props.handleClose} variant='contained' color={'error'} autoFocus>
                              Đồng ý
                         </Button>

                    </DialogActions>
               </Dialog>
          </React.Fragment>
     );
}