import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Social = () => {
return (
    <div className='flex items-center justify-center gap-4 pb-6 '>
        <SocialIcon url="https://github.com/MontaserReq" />
        <SocialIcon url="https://www.facebook.com/profile.php?id=100068232188077" />
        <SocialIcon url="https://www.linkedin.com/in/montaser-alreqeb-712a91253/" />
    </div>
)
}

export default Social