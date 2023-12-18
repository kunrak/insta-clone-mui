import { Avatar, Box, Stack, Typography } from "@mui/material"

function PostHeader() {
    return (
        <Box display="flex" direction="row" py={1} justifyContent={"space-between"}
            alignItems={"center"}>
            <Stack direction="row">
                <Avatar src="/public/img1.png" sx={{ width: 32, height: 32 }} />
                <Box display="flex" alignItems={"center"} justifyContent="center">
                    <Typography fontSize={12} ml={1}>
                        Rakesh
                    </Typography>
                    <Typography fontSize={12} color="text.secondary" ml={1}>
                        • 1w ago
                    </Typography>
                </Box>
            </Stack>
            <Box sx={{ cursor: "pointer" }}>
                <Typography
                    fontSize={12}
                    color="lightblue"
                    fontWeight={"bold"}
                    sx={{
                        "&:hover": {
                            color: "white", // Change this to your desired hover effect
                        },
                    }}
                >
                    Unfollow
                </Typography>
            </Box>
        </Box >
    )
}

export default PostHeader