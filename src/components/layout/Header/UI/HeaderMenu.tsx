
import { Box, Container, Divider } from "@mui/material";
import Menu from "@/src/components/ui/Menu/Menu";
import ThemeSwitch from "@/src/components/ui/ThemeSwitch/ThemeSwitch";

export function HeaderMenu() {

    return (
        <Container
            sx={{
                width: '100%',
                boxShadow: 'none',
                borderBottomRightRadius: '20px',
                borderBottomLeftRadius: '20px',
                overflow: 'auto',
                maxHeight: '70vh'
            }}
        >
            <Box
                sx={{
                    display: {
                        xs: 'grid',
                        sm: 'flex'
                    },
                    alignItems: 'end',
                    flexWrap: 'wrap',
                    justifyContent: {
                        sm: 'center'
                    },
                    px: 2,

                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '20px',
                        mr: '-7px'
                    }}
                >
                    <ThemeSwitch sx={{
                        display: {
                            sm: 'none'
                        }
                    }} />

                </Box>
                <Menu
                    isHeader
                    items={[]}
                >
                </Menu>
            </Box>
        </Container>
    );
}