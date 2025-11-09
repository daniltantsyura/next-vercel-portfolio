import { GitHub } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";

const projectsData = [
    {
        id: 1,
        title: 'Портфолио сайт',
        description: 'Современное портфолио на Next.js с Material UI. Адаптивный дизайн, SSR, оптимизация.',
        technologies: ['Next.js', 'TypeScript', 'Material UI', 'Vercel'],
        imageUrl: '/images/portfolio-project.jpg', // Заглушка
        liveDemo: 'https://your-portfolio.vercel.app',
        githubUrl: 'https://github.com/yourname/portfolio',
        featured: true
    },
    {
        id: 2,
        title: 'REST API Сервис',
        description: 'Бэкенд сервис на Nest.js с аутентификацией, базой данных и документацией API.',
        technologies: ['Nest.js', 'TypeScript', 'PostgreSQL', 'JWT'],
        imageUrl: '/images/api-project.jpg',
        githubUrl: 'https://github.com/yourname/api-service',
        featured: true
    },
    {
        id: 3,
        title: 'Админ панель',
        description: 'Интерфейс администратора с дашбордом, таблицами данных и управлением контентом.',
        technologies: ['React', 'Material UI', 'REST API', 'Chart.js'],
        imageUrl: '/images/admin-project.jpg',
        githubUrl: 'https://github.com/yourname/admin-panel',
        featured: false
    }
];

export default function ProjectSection() {
    return (
        <Box component="section" py={8} bgcolor="background.default">
            <Container maxWidth="lg">
                {/* Заголовок секции */}
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 2 }}
                >
                    Мои проекты
                </Typography>

                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
                >
                    Реализованные проекты с использованием современного стека технологий
                </Typography>

                {/* Сетка проектов */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        lg: '1fr 1fr 1fr',
                        md: '1fr 1fr',
                        xs: '1fr',
                    },
                    gap: '20px'
                }}>
                    {projectsData.map((project, index) => (
                        <Box key={project.id}>
                            <ProjectCard project={project} />
                        </Box>
                    ))}
                </Box>

                {/* Кнопка для большего количества проектов */}
                <Box textAlign="center" mt={6}>
                    <Button
                        variant="outlined"
                        size="large"
                        href="https://github.com/yourname"
                        target="_blank"
                        endIcon={<GitHub />}
                    >
                        Больше проектов на GitHub
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}