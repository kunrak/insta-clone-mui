import { Box } from "@mui/material"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

function FeedPost() {
    return (
        <Box mx={4.4}>
            <PostHeader />
            <Box>
                <img src="/public/img1.png" alt="user profile pic" style={{ width: '100%' }} />
            </Box>
            <PostFooter />
        </Box>
    )
}

export default FeedPost