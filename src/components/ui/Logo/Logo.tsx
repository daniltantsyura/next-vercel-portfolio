import logo from '../../../assets/images/LogoMini.png';
import { Link, Typography } from '@mui/material';

export default function Logo() {
    return (
        <Link 
            href='/'
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                inlineSize: 'fit-content'
            }}
            variant='h1'
        >
            <img src={logo.src} width={40}>
            
            </img>
            <Typography
                color='primary.main'
            >
                Eternal JS
            </Typography>
        </Link>
    );
}