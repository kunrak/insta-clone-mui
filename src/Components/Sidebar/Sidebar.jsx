import { Box, Stack, Link, Typography, Tooltip, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/Contacts';

function Sidebar() {
    return (
        <Box
            sx={{
                height: '100vh',
                borderRight: 1,
                borderColor: 'grey.300',
                py: 4,
                px: { xs: 3, md: 1 },
                position: 'sticky',
                top: 0,
                left: 0,
            }}
            position="sticky"
        >
            <Stack direction="column" spacing={2} sx={{ height: '100%', justifyContent: 'space-between' }}>
                <Box>
                    <Link component={RouterLink} to="/" sx={{ display: { xs: 'none', md: 'block' }, pl: 2 }}>
                        <InstagramLogo />
                    </Link>
                    <Link component={RouterLink} to="/" sx={{ display: { xs: 'block', md: 'none' }, m: 'auto', borderRadius: 6, '&:hover': { bgcolor: 'action.hover' } }}>
                        <InstagramMobileLogo />
                    </Link>
                    <Stack direction="column" spacing={2} mt={3.7}>
                        {[
                            { label: 'Home', icon: <AiFillHome size="24px" />, path: '/' },
                            { label: 'Search', icon: <SearchLogo />, path: '/search' },
                            { label: 'Notifications', icon: <NotificationsLogo />, path: '/notifications' },
                            { label: 'Create', icon: <CreatePostLogo />, path: '/create' },
                            { label: 'Profile', icon: <CgProfile size="24px" />, path: '/profile' },
                        ].map((item) => (
                            <Tooltip title={item.label} placement="right" arrow key={item.label}>
                                <Link
                                    component={RouterLink}
                                    to={item.path}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: { xs: 'center', md: 'flex-start' },
                                        gap: 1,
                                        m: 'auto',
                                        px: 1,
                                        pt: 0.5,
                                    }}
                                    underline="none"
                                    color="white"                                >
                                    <Avatar sx={{ bgcolor: "black", color: "white" }}>
                                        {item.icon}
                                    </Avatar>
                                    <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
                                        {item.label}
                                    </Typography>
                                </Link>
                            </Tooltip>
                        ))}
                    </Stack>
                </Box>
                <Tooltip title="Logout" placement="right" arrow >
                    <Link
                        component={RouterLink}
                        to="/logout"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            gap: 2,
                            m: 'auto',
                            px: 2,
                        }}
                        underline="none"
                        color="white"
                    >
                        <BiLogOut size="24px" />
                        <Typography variant="body1" sx={{ display: { xs: 'none', md: 'block' } }}>
                            Logout
                        </Typography>
                    </Link>
                </Tooltip>
            </Stack>
        </Box>
    );
}

export default Sidebar;
