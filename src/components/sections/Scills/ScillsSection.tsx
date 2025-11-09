import { Box, Container, Grid, Typography } from "@mui/material";
import ScillCard from "../../ui/ScillCard/ScillCard";
import { NextIcon } from "../../icons/NextIcon";
import { ReactIcon } from "../../icons/ReactIcon";
import { NestIcon } from "../../icons/NestIcon";
import { TypeScriptIcon } from "../../icons/TypeScriptIcon";
import { MaterialIcon } from "../../icons/MaterialIcon";
import { NodeIcon } from "../../icons/NodeIcon";

export default function ScillsSection() {
    return (
        <Container>
            <Typography variant="h4" align="left" gutterBottom>
                Навыки
            </Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    md: '1fr 1fr 1fr',
                    sm: '1fr 1fr',
                    xs: '1fr',
                },
                gap: '20px',
            }}>
                <Box >
                    <ScillCard
                        icon={<NextIcon />}
                        title="Next.js"
                        description="SSR, SEO, полный цикл разработки"
                    />
                </Box>
                <Box >
                    <ScillCard
                        icon={<ReactIcon />}
                        title="React"
                        description="Хуки, компоненты, управление состоянием"
                    />
                </Box>
                <Box >
                    <ScillCard
                        icon={<NestIcon />}
                        title="Nest.js"
                        description="Модульная архитектура, REST API, GraphQL"
                    />
                </Box>
                <Box >
                    <ScillCard
                        icon={<TypeScriptIcon />}
                        title="TypeScript"
                        description="Статическая типизация"
                    />
                </Box>
                <Box >
                    <ScillCard
                        icon={<MaterialIcon />}
                        title="Material UI"
                        description="Компоненты, темы, стилизация"
                    />
                </Box>
                <Box >
                    <ScillCard
                        icon={<NodeIcon />}
                        title="Node.js"
                        description="Express, работа с файлами и базами данных"
                    />
                </Box>
            </Box>
        </Container>
    );
}