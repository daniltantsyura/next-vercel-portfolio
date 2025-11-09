'use client'

import { Accordion, AccordionDetails, AccordionSummary, AppBar, Backdrop, Box, Container, Divider, Drawer, IconButton, Paper, Toolbar } from "@mui/material";
import { HeaderMenu } from "./HeaderMenu";
import ThemeSwitch from "@/src/components/ui/ThemeSwitch/ThemeSwitch";
import { AnimatedMenuIcon } from "@/src/components/icons/AnimatedMenuIcon";
import Logo from "@/src/components/ui/Logo/Logo";

type Props = {
    isMenuOpen: boolean;
    setMenuOpen: (value: boolean) => void;
}

export default function HeaderTools({ isMenuOpen, setMenuOpen }: Props) {
    return (
        <>
            <AppBar
                position='sticky'
                component={'div'}
                sx={{
                    bgcolor: 'background.default',
                    boxShadow: 'none',
                    top: '0',
                    pb: '3px'
                }}
            >

                <Toolbar
                    variant='dense'
                    sx={{
                        height: '56px',
                        padding: 0
                    }}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '20px'
                        }}
                    >
                        <Logo />
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '20px',
                                flexGrow: '1',
                                justifyContent: 'end'
                            }}
                        >



                            <ThemeSwitch
                                sx={{
                                    display: {
                                        xs: 'flex',
                                    },
                                    alignSelf: 'center',
                                }}
                            />
                            <AnimatedMenuIcon
                                open={isMenuOpen}
                                onClick={() => { setMenuOpen(!isMenuOpen) }}
                                sx={{
                                    display: {
                                        sm: 'none',
                                        xs: 'none'
                                    }
                                }}
                            />

                        </Box>
                    </Container>
                </Toolbar>

                <Accordion
                    defaultExpanded={false}
                    expanded={isMenuOpen}
                    sx={{
                        boxShadow: 'none',
                        maxWidth: '100%',
                    }}
                    slotProps={{
                        root: {
                            component: 'div', sx: {
                                '::before': { display: 'none' },
                                boxShadow: 'none',
                                marginTop: '0 !important',
                                position: 'absolute',
                                width: '100%',
                                top: '99%',
                                ':last-of-type': {
                                    borderBottomLeftRadius: '20px',
                                    borderBottomRightRadius: '20px',
                                },
                                backgroundColor: 'inherit',
                                backgroundImage: 'inherit'
                            }
                        }
                    }}
                >
                    <AccordionSummary
                        onClick={() => { }}
                        sx={{
                            display: 'none',
                        }}
                    />
                    <AccordionDetails
                        sx={{
                            padding: '0'
                        }}
                    >
                        <HeaderMenu />
                    </AccordionDetails>
                </Accordion>

            </AppBar>
            <Box
                position="relative"
                sx={{
                    bgcolor: 'background.default',
                    boxShadow: 'none',
                    top: '0',
                    pt: '5px',
                    display: {
                        xs: 'none',
                        sm: 'block'
                    }
                }}
            >
                <HeaderMenu />
            </Box>

        </>
    );
}