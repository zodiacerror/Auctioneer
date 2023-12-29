import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
    return (
        <Box sx={{ width: '100%', height: '80vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ p: 10, backgroundColor: 'lightblue' }}>
                <Typography variant='5' >Registration</Typography>
                <Box>
                    <Stack spacing={3} sx={{ mt: 3 }} direction="row">
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </Stack>
                    <Stack spacing={3} sx={{ mt: 3 }} direction="row">
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Stack>
                    <Stack spacing={3} sx={{ mt: 3 }} direction="row">
                        <TextField id="outlined-basic" label="Address" variant="outlined" />
                    </Stack>
                </Box>
                <Box>
                    <Stack spacing={3} sx={{ ml: 8, mt:5 }} direction="row">
                        <Button  variant="outlined">Submit</Button>
                    </Stack>
                </Box>
            </Card>
        </Box>
    )
}

export default Registration