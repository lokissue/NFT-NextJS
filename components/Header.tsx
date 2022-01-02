import React from 'react'
import AppLink from './AppLink'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div>
            <header>
                <AppLink href="/" label="Home" />
            </header>
        </div>
    )
}

export default Header
 