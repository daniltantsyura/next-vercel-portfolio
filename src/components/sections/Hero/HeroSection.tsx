'use client'

import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import avatar from '../../../assets/images/avatar.jpg';
import avatarLight from '../../../assets/images/avatarLight.jpg';
import { useTheme } from "@/src/providers/ThemeProvider/ThemeProvider";

export default function HeroSection() {
    const theme = useTheme();

    return (
        <Container
            sx={{
                display: 'grid',
                alignContent: 'base-line',
                gridAutoRows: 'min-content',
                justifyItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: {
                        laptop: 'flex',
                        xs: 'grid'
                    },
                    justifyContent: 'space-around',
                    justifyItems: 'center',
                    alignItems: 'center',
                    width: '100%',
                    gap: {
                        sm: '20px'
                    },
                    minHeight: {
                        xs: '86vh',
                        mobile: '90vh',
                    }
                }}
            >
                <Box
                    sx={{
                        height: 'fit-content',
                        display: 'flex',
                        justifyContent: 'center',
                        width: {
                            xs: '100%',
                            md: 'auto'
                        }
                    }}
                >
                    <Avatar
                        alt="Danil Tantsyura"
                        src={theme.isDark ? avatar.src : avatarLight.src}
                        sx={{
                            width: {
                                xs: '70vw',
                                sm: 400
                            },
                            height: {
                                xs: '70vw',
                                sm: 400
                            },

                        }}
                    />
                </Box>
                <Box textAlign="left" py={{ xs: 0, sm: 10 }}
                    sx={{
                        display: 'grid',
                        alignSelf: {
                            xs: 'start',
                            laptop: 'center'
                        },
                        gap: {
                            xs: '10px',
                            sm: '20px'
                        }
                    }}
                >
                    <Typography variant="h2" gutterBottom
                        sx={{
                            fontSize: {
                                xs: '35px',
                                mobile: '50px'
                            },

                        }}
                    >
                        Данил Танцюра
                    </Typography>
                    <Typography variant="h5" color="text.secondary" gutterBottom
                        sx={{
                            fontSize: {
                                xs: '20px',
                                mobile: '35px',
                            }
                        }}
                    >
                        Full-stack разработчик
                    </Typography>
                    <Typography variant="body1" fontSize={{ xs: '14px', mobile: '16px' }}>
                        Создаю современные веб-приложения на Next.js и Nest.js
                    </Typography>
                    <Button variant="contained" size="large"
                        sx={{
                            mt: {
                                xs: '5px',
                                mobile: '20px'
                            },
                            justifySelf: {
                                xs: 'center'
                            },
                            height: 'fit-content',
                        }}
                    >
                        Смотреть работы
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}