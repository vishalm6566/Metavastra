import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const Rough = () => {
    return (
        <>
            <Accordion allowZeroExpanded className='acc'>
                <AccordionItem >
                    <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor : "transparent", color : "white", padding : "23px", margin : "10px 0px ", border : "1px solid white", borderLeft:"none", borderRight:"none"}}>
                        <span id='heading'> heading</span>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae, distinctio animi repellat tempora numquam pariatur sunt, architecto laborum dolore ex temporibus amet nulla aliquam sit facilis qui ea aspernatur.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className='acc'>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{backgroundColor : "transparent", color : "white", padding : "23px", margin : "10px 0px ",border : "1px solid white",  borderLeft:"none", borderRight:"none"}}>
                            heading
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae, distinctio animi repellat tempora numquam pariatur sunt, architecto laborum dolore ex temporibus amet nulla aliquam sit facilis qui ea aspernatur.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className='acc'>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton style={{backgroundColor : "transparent", color : "white", padding : "23px", margin : "10px 0px ", border : "1px solid white",  borderLeft:"none", borderRight:"none"}}>
                            heading
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae, distinctio animi repellat tempora numquam pariatur sunt, architecto laborum dolore ex temporibus amet nulla aliquam sit facilis qui ea aspernatur.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

        </>
    );
};

export default Rough;
