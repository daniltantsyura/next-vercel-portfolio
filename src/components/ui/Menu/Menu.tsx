'use client';

import { Accordion, AccordionDetails, AccordionSummary, Link, MenuItem, MenuList, useMediaQuery, useTheme } from "@mui/material";
import { TMenuData } from "@/utils/types/types";
import { ExpandMore } from "@mui/icons-material";
import { PropsWithChildren, useEffect, useState } from "react";

type Props = TMenuData & { isHeader: boolean } & PropsWithChildren;

export default function Menu({ items, heading, isHeader, children }: Props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isExpanded, setExpanded] = useState(true);

    useEffect(() => {
        setTimeout(() => setExpanded(false));
    }, []);

    const menuListNode = <MenuList
        key='menuList'
        sx={{
            borderRadius: '20px',
            display: isHeader ? {
                xs: 'grid',
                sm: 'flex'
            } : 'grid',
            flexWrap: 'wrap',
            justifyContent: isHeader ? { sm: 'center' } : 'baseline',
            alignItems: 'center',
            gap: '4px',
        }}
    >
        {items.map((item, index) => (
            <div key={index}>
                <MenuItem
                    sx={{
                        minHeight: '35px',
                        height: 'fit-content',

                    }}
                >
                    <Link
                        href={item.link}
                        sx={{
                            display: 'block',
                            width: '100%',
                            height: 'fit-content',
                            textWrap: 'wrap',
                        }}
                    >
                        {item.text}
                    </Link>
                </MenuItem>

            </div>
        ))}
        {children}
    </MenuList>;

    const headingNode = heading ? <Link
        key='heading'
        href={heading.link}
        variant='h4'
        sx={{
            fontSize: {
                xs: '20px',
                sm: '25px'
            }
        }}
    >
        {heading.text}
    </Link> : null;

    return (
        <>
            {heading && isMobile ?
                <Accordion
                    sx={{
                        width: '100%',
                        borderBottomRightRadius: '20px',
                        borderBottomLeftRadius: '20px',
                        background: 'transparent',
                        boxShadow: 'none',
                        padding: 0,
                    }}

                    disableGutters
                    defaultExpanded
                    expanded={isExpanded}
                    onChange={() => setExpanded(!isExpanded)}
                >
                    <AccordionSummary
                        sx={{
                            px: '0',
                            margin: 0,
                        }}
                        slotProps={{
                            content: {
                                sx: {
                                    margin: 0
                                }
                            },
                        }}
                        expandIcon={<ExpandMore sx={{ color: 'primary.contrastText' }} />}
                    >
                        {headingNode}
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: '0'
                        }}
                    >
                        {menuListNode}
                    </AccordionDetails>
                </Accordion>
                : headingNode ?
                    [headingNode, menuListNode]
                    :
                    menuListNode
            }
        </>

    );
}