import { Box, Container, Typography, Stack } from '@mui/material';
import AuthForm from '../../Components/AuthForm/AuthForm';

function AuthPage() {
    return (
        // <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', px: 4 }}>
        //     <Container maxWidth="md" disableGutters>
        //         <Grid container spacing={10} alignItems="center" justifyContent="center">
        //             <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        //                 <Box component="img" src="/auth.png" alt="phone image" sx={{ height: 680 }} />
        //             </Grid>
        //             <Grid item xs={12} md={6}>
        //                 <Stack spacing={4} alignItems="stretch">
        //                     <AuthForm />
        //                     <Typography textAlign="center">Get the app.</Typography>
        //                     <Box sx={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
        //                         <Paper component="img" src="/playstore.png" alt="play store" sx={{ height: 40 }} />
        //                         <Paper component="img" src="/microsoft.png" alt="microsoft store" sx={{ height: 40 }} />
        //                     </Box>
        //                 </Stack>
        //             </Grid>
        //         </Grid>
        //     </Container>
        // </Box>
        <Box minHeight="100vh" justifyContent="center" alignItems="center" paddingX={4}>
            <Container maxWidth="md" disableGutters>
                <Stack direction="row" spacing={10} alignItems="center" justifyContent="center">
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <img src="/auth.png" alt="phone image" style={{ height: 620 }} />
                    </Box>
                    <Stack spacing={2} alignItems="stretch">
                        <AuthForm />
                        <Typography textAlign="center">Get the app.</Typography>
                        <Stack direction="row" gap={2} justifyContent="center">
                            <img src="/playstore.png" alt="play store" style={{ height: 40 }} />
                            <img src="/microsoft.png" alt="microsoft store" style={{ height: 40 }} />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default AuthPage;