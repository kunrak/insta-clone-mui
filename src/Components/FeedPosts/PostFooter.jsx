import { Box } from "@mui/material"
import { useState } from "react"
import { NotificationsLogo, UnlikeLogo } from "../../assets/Contacts"

function PostFooter() {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(0)

    const handleClick = () => {
        if(liked) {
            setLiked(false)
            setLikes(likes - 1)
        } else {
            setLiked(true)
            setLikes(likes + 1)
        }
    }

    return (
        <>
            <Box display="flex" gap={4} mt={1}>
                <Box onClick={handleClick} fontSize={18} sx={{ cursor: "pointer" }}>
                    {liked ? <UnlikeLogo /> : <NotificationsLogo />}
                </Box>

            </Box>
        </>
    )
}

export default PostFooter