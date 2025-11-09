import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import avatar from '../../../assets/images/avatar.jpg';

export default function HeroSection() {
    return (
        <Container
            sx={{
                display: 'grid',
                alignItems: 'center',
                justifyItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100%',
                    gap: '20px',
                    flexWrap: 'wrap'
                }}
            >
                <Box>
                    <Avatar
                        alt="Danil Tantsyura"
                        src={avatar.src}
                        sx={{ 
                            width: {
                                xs: 250,
                                sm: 400
                            }, 
                            height: {
                                xs: 250,
                                sm: 400
                            }, 
                        }}
                    />
                </Box>
                <Box textAlign="left" py={10}
                    sx={{
                        display: 'grid',
                        gap: '20px'
                    }}
                >
                    <Typography variant="h2" gutterBottom>
                        Данил Танцюра
                    </Typography>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        Full-stack разработчик
                    </Typography>
                    <Typography variant="body1">
                        Создаю современные веб-приложения на Next.js и Nest.js
                    </Typography>
                    <Button variant="contained" size="large"
                        sx={{
                            justifySelf: 'right'
                        }}
                    >
                        Смотреть работы
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}