import React from 'react'
import { Typography, Grid } from "@mui/joy";

export default function Result({ result }) {
    const base = Math.round(result.content)
    const arome = Math.round(result.arome)
    const total = base + arome

    return (
        <Grid container spacing={2} flexDirection="column" sx={{ my: 3 }}>
            <Grid xs="6">
                <Typography >Base : <Typography variant="outlined" color="primary">{base} ml</Typography></Typography>
            </Grid>
            <Grid xs="6">
                <Typography >Arôme : <Typography variant="outlined" color="primary">{arome} ml</Typography></Typography>
            </Grid>
            <Grid xs="6">
                <Typography color="primary" fontWeight={"bold"}>Total : <Typography>{total} ml</Typography></Typography>
            </Grid>
        </Grid >
    )
}
