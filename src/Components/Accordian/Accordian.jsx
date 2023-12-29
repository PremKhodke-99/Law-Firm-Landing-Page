import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import styles from './Accordian.module.css';
import { ReactComponent as PlusIcon } from '../../Assets/plus.svg'

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor: 'var(--color-black)', color: 'var(--color-white)', borderBottom: '1px solid var(--color-fadedWhite)'}}>
                <AccordionSummary
                    expandIcon={
                        expanded ? <></> : <PlusIcon />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant={'h6'} >
                        Do I need personal injury report?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  >
                        Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequatduis
                        enim velit mollit Exer. Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  sx={{backgroundColor: 'var(--color-black)', color: 'var(--color-white)', borderBottom: '1px solid var(--color-fadedWhite)'}}>
                <AccordionSummary
                    expandIcon={<PlusIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography variant={'h6'}>How much is my case worth?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  >
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  sx={{backgroundColor: 'var(--color-black)', color: 'var(--color-white)', borderBottom: '1px solid var(--color-fadedWhite)'}}>
                <AccordionSummary
                    expandIcon={<PlusIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography variant={'h6'} >
                        What should I do right after car accident?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  >
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}  sx={{backgroundColor: 'var(--color-black)', color: 'var(--color-white)', borderBottom: '1px solid var(--color-fadedWhite)'}}>
                <AccordionSummary
                    expandIcon={<PlusIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography variant={'h6'}>How much is my case worth?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  >
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
