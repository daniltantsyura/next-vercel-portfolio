import { AppBar, Container, Link, Typography } from "@mui/material";

export default function HeaderTop() {
    return (
        <AppBar
            position="relative"
            sx={{
                bgcolor: 'primary.main',
                zIndex: 10,
                backgroundImage: 'linear-gradient(140deg, rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0))'
            }}
        >
            <Container
                sx={{
                    minHeight: 30,
                    display: {
                        sm: "flex",
                        xs: "grid"
                    },
                    alignItems: 'center',
                    gap: '5px',
                    justifyContent: 'space-between',
                    height: '100%',
                    fontSize: '14px',
                    color: 'primary.contrastText'
                }}
            >
                <Typography variant="body2" sx={{ pointerEvents: 'none', userSelect: 'none' }}>
                    {'ГБУЗ "Горячеключевская центральная районная больница" МЗ КК'}
                </Typography>

                <Link
                    href={'tel:+78615934762'}
                    color="inherit"
                    variant='body2'
                    sx={{
                        justifySelf: 'end'
                    }}
                >
                    8 (86159) 3-47-62
                </Link>
            </Container>
        </AppBar>
    );
}