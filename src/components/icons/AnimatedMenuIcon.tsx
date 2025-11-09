import { IconButton, styled, SxProps, Theme } from "@mui/material";

type Props = { 
  open: boolean; 
  onClick: () => void ;
  sx: SxProps<Theme> | undefined
};

const MenuIcon = styled('div')<{ open: boolean }>(({ open, theme }) => ({
  width: 24,
  height: 24,
  position: 'relative',
  cursor: 'pointer',
  
  '& span': {
    display: 'block',
    position: 'absolute',
    height: 2,
    width: '100%',
    background: theme.palette.text.secondary,
    borderRadius: 2,
    opacity: 1,
    left: 0,
    transform: 'rotate(0deg)',
    transition: 'all 0.3s ease-in-out',
  },

  '&:hover span': {
    background: theme.palette.primary.light
  },
  
  '& span:nth-of-type(1)': {
    top: open ? '11px' : '4px',
    transform: open ? 'rotate(135deg)' : 'rotate(0deg)',
  },
  
  '& span:nth-of-type(2)': {
    top: '11px',
    opacity: open ? 0 : 1,
    transform: open ? 'translateX(-20px)' : 'translateX(0)',
  },
  
  '& span:nth-of-type(3)': {
    top: open ? '11px' : '18px',
    transform: open ? 'rotate(-135deg)' : 'rotate(0deg)',
  }
}));

export function AnimatedMenuIcon({ open, onClick, sx }: Props) {
  return (
    <IconButton onClick={onClick} color="inherit" sx={sx}>
      <MenuIcon open={open}>
        <span />
        <span />
        <span />
      </MenuIcon>
    </IconButton>
  );
}