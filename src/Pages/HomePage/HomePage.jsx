import { Box, Container, Grid, Paper } from '@mui/material';
import FeedPosts from '../../Components/FeedPosts/FeedPosts';

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={5}>
                <Grid item xs={12} md={8} lg={7}>
                    <Box py={10} mx="auto">
                        <FeedPosts />
                    </Box>
                </Grid>
                <Grid item md={4} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Paper elevation={0} sx={{ maxWidth: 300, mr: 5 }}>
                        Suggested
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;