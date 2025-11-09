'use client';

import { Card, CardContent, Typography, SvgIcon, CardActionArea } from '@mui/material';

interface SkillCardProps {
    icon: React.ReactElement;
    title: string;
    description: string;
}

export default function ScillCard({ icon, title, description }: SkillCardProps) {
    return (
        <Card elevation={2} sx={{ height: '100%' }}>
            <CardActionArea sx={{ textAlign: 'center', p: '20px' }}>
                <SvgIcon component={() => icon} fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardActionArea>
        </Card>
    );
}
