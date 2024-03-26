import { useState } from 'react'
import Header from './layout/Header'
import AromeForm from './components/AromeForm';
import { Accordion, AccordionSummary, AccordionDetails, AccordionGroup, Avatar, Sheet } from '@mui/joy';
import InfoIcon from '@mui/icons-material/Info';

function App() {

  return (
    <>
      <Header />
      <main className="container">
        <AccordionGroup sx={{ my: 4 }} >
          <Accordion>
            <AccordionSummary>
              <Avatar color="primary">
                <InfoIcon />
              </Avatar>
              Calculateur pour E-Liquide
            </AccordionSummary>
            <AccordionDetails>
              Ce calculateur permet de calculer le dosage d'arôme pour un e-liquide. <br /><br />
              Il suffit de renseigner la contenance de votre flacon, le dosage d'arôme recommandé sur le flacon et la contenance total souhaité. <br /><br />
              Dans le cas ou tu ne spécifie pas la contenance souhaité, le simulateur calculera le maximum possible de faire avec la quantité d'arôme disponible et le dosage spécifié.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
        <AromeForm />
      </main>
    </>
  )
}

export default App
