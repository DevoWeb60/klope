import React, { useState } from 'react'
import { Input, Typography, Sheet } from "@mui/joy";
import { isEmpty } from '../utils/functions';
import Result from './Result';
import PresetList from './PresetList';
import CalculateIcon from '@mui/icons-material/Calculate';


export default function AromeForm() {
    const [contentMax, setContentMax] = useState(0)
    const [arome, setArome] = useState(0)
    const [aromeMax, setAromeMax] = useState(0)
    const [result, setResult] = useState({
        content: 0,
        arome: 0
    })

    const calc = (contentMax, arome, aromeMax) => {
        setContentMax(contentMax)
        setArome(arome)
        setAromeMax(aromeMax)

        if (isEmpty(arome)) return setResult({ content: contentMax, arome: 0 })

        const realPourcent = arome / 100

        if (!isEmpty(contentMax)) {
            const aromeCalc = (contentMax * realPourcent)
            const contentCalc = contentMax - aromeCalc

            return setResult({ content: contentCalc, arome: aromeCalc })
        }

        setResult({
            content: aromeMax / realPourcent - aromeMax,
            arome: aromeMax
        })
    }

    return (
        <>
            <Sheet variant="soft" color="primary" sx={{ padding: 2, borderRadius: 10 }}>
                <Typography level="h4" startDecorator={<CalculateIcon color="primary" />} marginBottom={4}>Calculateur</Typography>
                <Typography fontWeight={"bold"} level="body-sm">Arôme</Typography>
                <Input type="number" variant="soft" placeholder="30" endDecorator="ml" value={aromeMax || ""} onChange={(e) => calc(contentMax, arome, e.target.value)} />
                <br />
                <Typography fontWeight={"bold"} level="body-sm">Dosage arôme</Typography>
                <Input type="number" variant="soft" placeholder="5" endDecorator="%" value={arome || ""} onChange={(e) => calc(contentMax, e.target.value, aromeMax)} />
                <br />
                <Typography fontWeight={"bold"} level="body-sm">Contenance voulu</Typography>
                <Input type="number" variant="soft" placeholder="200" endDecorator="ml" value={contentMax || ""} onChange={(e) => calc(e.target.value, arome, aromeMax)} />
                <Result result={result} />
            </Sheet>
            <PresetList {...{ contentMax, aromeMax, calc }} />
        </>
    )
}
