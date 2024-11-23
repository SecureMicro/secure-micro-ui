import React from 'react'
import { Modal, Box, Typography, Button } from '@mui/material'

interface UserModalProps {
    open: boolean
    onClose: () => void
}

const UserModal: React.FC<UserModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" component="h2">
                    User Profile
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Here you can manage your profile settings or log in.
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                    Login
                </Button>
            </Box>
        </Modal>
    )
}

export default UserModal
