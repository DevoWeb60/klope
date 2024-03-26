import React from 'react'
import { Typography, Grid } from "@mui/joy";

export default function Result({ result }) {
    return (
        <Grid container spacing={2} flexDirection="column" sx={{ my: 3 }}>
            <Grid xs="6">
                <Typography >Base : <Typography variant="outlined" color="primary">{result.content} ml</Typography></Typography>
            </Grid>
            <Grid xs="6">
                <Typography >Arôme : <Typography variant="outlined" color="primary">{result.arome} ml</Typography></Typography>
            </Grid>
        </Grid >
    )
}
