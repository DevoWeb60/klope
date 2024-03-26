import React from 'react'
import { List, ListItem, ListItemButton, Sheet, Typography, ListItemContent, ListItemDecorator, IconButton } from "@mui/joy";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CalculateIcon from '@mui/icons-material/Calculate';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function PresetList({ contentMax, aromeMax, calc }) {
    const aromes = [
        {
            name: "Ragnarock",
            brand: "A&L",
            pourcent: 5,
            link: "https://www.taklope.com/a-l/10766-concentre-ragnarok-sweet-edition.html?"
        },
        {
            name: "Heisenberg",
            brand: "Vampire Vape",
            pourcent: 15,
            link: "https://www.taklope.com/vampire-vape/1399-arome-heisenberg-vv.html"
        },
        {
            name: "Pastèque Melon",
            brand: "Punk Funk Hero",
            pourcent: 8,
            link: "https://www.taklope.com/punk-funk-hero/15693-concentre-pasteque-melon-30ml.html"
        },
        {
            name: "Pinkman",
            brand: "Vampire Vape",
            pourcent: 15,
            link: "https://www.taklope.com/vampire-vape/1407-arome-pinkman-vv.html"
        }
    ]

    return (
        <Sheet variant="soft" color="success" sx={{ my: 3, padding: 2, borderRadius: 10 }}>
            <Typography level="h4" startDecorator={<WaterDropIcon color="success" />} marginBottom={2}>Arômes</Typography>
            <List>
                {
                    aromes.map((arome, index) => (
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
