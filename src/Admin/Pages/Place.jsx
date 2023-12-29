import React from 'react'
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { Typography } from '@mui/material';

const Place = () => {
    return (
        <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ p: 10, backgroundColor: 'lightcyan' }}>
                <Typography variant='h5'>Place</Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Stack direction='column'>

                        <FormControl variant="standard" sx={{mt:1}}>
                            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>   
                                             <TextField  sx={{mt:1}} id="standard-basic" label="Place" variant="standard" />
                    </Stack>
                    <Box>

                        <Button sx={{ px: 4, ml: 3 }} variant="outlined">SAVE</Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default Place