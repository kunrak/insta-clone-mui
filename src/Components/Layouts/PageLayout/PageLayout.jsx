import { Box, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

function PageLayout({ children }) {
    const { pathname } = useLocation();
    return (
        <Stack direction="row" spacing={0} sx={{ height: '100vh' }}>
            {/* Sidebar on the left */}
            {pathname !== "/auth" ? (
                <Box sx={{ width: { xs: '70px', md: '240px' } }}>
                    <Sidebar />
                </Box>
            ) : null}
            {/* Page content on the right */}
            <Box sx={{ flex: 1, width: { xs: 'calc(100% - 70px)', md: 'calc(100% - 240px)' } }}>
                {children}
            </Box>
        </Stack>
    );
}

export default PageLayout;