import { GitHub, OpenInNew } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveDemo?: string;
    githubUrl?: string;
    featured: boolean;
}

interface Props {
    project: Project;
}


export default function ProjectCard({ project }: Props) {
    return (
        <Card
            elevation={3}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                }
            }}
        >
            {/* Изображение проекта */}
            <CardMedia
                sx={{
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    backgroundImage: `url(${project.imageUrl})`
                }}
            >

                {/* Бейдж featured проекта */}
                {project.featured && (
                    <Chip
                        label="Featured"
                        color="primary"
                        size="small"
                        sx={{ position: 'absolute', top: 16, right: 16 }}
                    />
                )}
            </CardMedia>

            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Заголовок и описание */}
                <Typography variant="h5" gutterBottom fontWeight={600}>
                    {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                    {project.description}
                </Typography>

                {/* Технологии */}
                <Box mb={2}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.technologies.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                variant="outlined"
                            />
                        ))}
                    </Stack>
                </Box>

                {/* Кнопки действий */}
                <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                    {project.liveDemo && (
                        <Button
                            variant="contained"
                            size="small"
                            startIcon={<OpenInNew />}
                            href={project.liveDemo}
                            target="_blank"
                            sx={{ flex: 1 }}
                        >
                            Демо
                        </Button>
                    )}

                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHub />}
                        href={project.githubUrl ? project.githubUrl : ''}
                        disabled={!project.githubUrl}
                        target="_blank"
                        sx={{ flex: 1, display: 'flex', alignItems: 'center' }}
                    >
                        {project.githubUrl ? 'Код' : 'Проект в разработке'}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}