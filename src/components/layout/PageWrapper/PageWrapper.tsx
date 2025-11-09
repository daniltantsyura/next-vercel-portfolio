import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function PageWrapper({ children }: PropsWithChildren) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                gap: '30px',
                mt: {
                    xs: '10px',
                    tablet: '20px',
                    lg: '0px'
                },
            }}
        >
            {children}
        </Box>
    );
}