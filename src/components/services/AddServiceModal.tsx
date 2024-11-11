import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import { Box, Input, Modal, TextField, Typography } from '@mui/material'
import Button from '../common/Button'
import { addService } from '../../store/slices/serviceSlice'

interface AddServiceModalProps {
    open: boolean
    onClose: () => void
}

const AddServiceModal: React.FC<AddServiceModalProps> = ({ open, onClose }) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        version: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addService(formData))
        onClose()
    }

    if (!open) return null

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="flex items-center justify-center h-full">
                <Box className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <Box className="flex justify-between items-center mb-4">
                        <Typography variant="h6" className="font-bold">
                            Add New Service
                        </Typography>
                        <Button variant="ghost" size="icon" onClick={onClose}>
                            <X className="w-4 h-4" />
                        </Button>
                    </Box>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Box>
                            <label className="block text-sm font-medium mb-1">
                                Service Name
                            </label>
                            <Input
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                required
                                className="border rounded-md p-2 w-full"
                            />
                        </Box>

                        <Box>
                            <label className="block text-sm font-medium mb-1">
                                Description
                            </label>
                            <TextField
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                                required
                                className="border rounded-md p-2 w-full"
                                multiline
                                rows={4}
                            />
                        </Box>

                        <Box>
                            <label className="block text-sm font-medium mb-1">
                                Version
                            </label>
                            <Input
                                value={formData.version}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        version: e.target.value,
                                    })
                                }
                                required
                                className="border rounded-md p-2 w-full"
                            />
                        </Box>

                        <Box className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type="submit">Add Service</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Modal>
    )
}

export default AddServiceModal
