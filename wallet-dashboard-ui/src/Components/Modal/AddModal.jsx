import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React from 'react'

function AddModal({openModal, setOpenModal, addWallet, setWalletDescription, walletDescription}) {


    const style = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        gap:3
      };

  return (
    <Modal
  open={openModal}
  onClose={()=>setOpenModal(!openModal)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center'>
      Set a wallet description:
    </Typography>
    <TextField style={{marginBottom:10}} onChange={(e)=>{setWalletDescription(e.target.value)}}></TextField>
    <Button variant='contained' color='success' onClick={()=>addWallet()} disabled={walletDescription == ""? true:false}>Add wallet!</Button>
  </Box>
</Modal>
  )
}

export default AddModal