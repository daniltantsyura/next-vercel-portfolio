import { GitHub } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import portfolioScreen from '../../../assets/images/portfolioScreen.png'
import medcalcsScreen from '../../../assets/images/medcalcsScreen.jpeg';
import gkcrbScreen from '../../../assets/images/gkcrbScreen.jpeg';

const projectsData = [
    {
        id: 1,
        title: 'Портфолио сайт',
        description: 'Современное портфолио на Next.js с Material UI. Адаптивный дизайн, SSR, оптимизация.',
        technologies: ['Next.js', 'TypeScript', 'Material UI', 'Vercel'],
        imageUrl: portfolioScreen.src,
        githubUrl: 'https://github.com/daniltantsyura/next-vercel-portfolio',
        featured: true
    },
    {
        id: 2,
        title: 'Medcalcs',
        description: 'Конструктор медицинских калькуляторов с админ панелью',
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'JWT'],
        imageUrl: medcalcsScreen.src,
        featured: false
    },
    {
        id: 3,
        title: 'Сайт больницы',
        description: 'Сайт больницы с интеграцией hh.ru, админ панелью и другими возможностями',
        technologies: ['Next.js', 'Nest.js', 'Material UI', 'REST API', 'JWT', 'Postgres' ],
        imageUrl: gkcrbScreen.src,
        featured: true
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