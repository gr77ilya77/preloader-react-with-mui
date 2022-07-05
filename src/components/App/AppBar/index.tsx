import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container, createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme({
    spacing: 8,
    typography: {
        subtitle1: {
            fontSize: 28,
            fontWeight: 700,
        },
    },
});


export default function AppBarCustom({title = 'Приложения', children = null}: { title: string; children: any }) {
    return (
        <Container fixed>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* component какой тег указан,  variant="h1" какой размер  */}
            <Box sx={{
                // pt: 40,
                ml: 1,
                mr: 'auto',
                // p: 1,
                width: 0,

            }}>
                <ThemeProvider theme={theme}>
                    <Typography variant="subtitle1" component="h1">{title}</Typography>
                </ThemeProvider>
            </Box>

            <Box
                sx={{
                    // mx: 'auto',
                    width: 200,
                    p: 1,
                    // m: 10,
                    // mr: 105,
                    ml: 10,
                    mr: 'auto',
                    // mr: 'right',
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                }}
            >
                {children}
            </Box>
            <div>
            </div>
        </Container>
    );
}