import React from 'react'
import { List, ListItem, ListItemButton, Sheet, Typography, ListItemContent, ListItemDecorator, IconButton } from "@mui/joy";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CalculateIcon from '@mui/icons-material/Calculate';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AROMES from "../data/aromes.json"

export default function PresetList({ contentMax, aromeMax, calc }) {
    return (
        <Sheet variant="soft" color="success" sx={{ my: 3, padding: 2, borderRadius: 10 }}>
            <Typography level="h4" startDecorator={<WaterDropIcon color="success" />} marginBottom={2}>Arômes</Typography>
            <List>
                {
                    AROMES.map((arome, index) => (
                        <ListItem key={index} endAction={
                            <>
                                <IconButton size="md" color="neutral" href={arome.link} component="a" target="_blank">
                                    <OpenInNewIcon />
                                </IconButton>
                            </>
                        }
                            startAction={
                                <IconButton size="md" color="success" onClick={() => calc(contentMax, arome.pourcent, aromeMax)}>
                                    <CalculateIcon />
                                </IconButton>
                            }

                        >
                            <ListItemDecorator>
                            </ListItemDecorator>
                            <ListItemContent>
                                <Typography level="title-sm">{arome.name}</Typography>
                                <Typography level="body-sm" noWrap>
                                    {arome.brand}
                                </Typography>
                            </ListItemContent>
                        </ListItem>
                    ))
                }
            </List>
        </Sheet>
    )
}
