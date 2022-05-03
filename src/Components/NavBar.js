import React from "react";

import './NavBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

class NavBar extends React.Component {

    render() {
        return (
            <div className="nav-bar-container">
                <div className="nav-bar-wrapper">
                    <div className="left-container">
                        <div className="language">EN</div>
                        <div className="search-container">
                            <input placeholder="Search" />
                            <SearchIcon className="search-icon" fontSize="small" />
                        </div>
                    </div>
                    <div className="center-container">
                        <form action="/">
                            <div><button>COLBY.</button></div>
                        </form>
                    </div>
                    <div className="right-container">
                        <button>REGISTER</button>
                        <form action="/login">
                            <button type="submit">SIGN IN</button>
                        </form>
                        <form action="/cart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={2} color="secondary">
                                    <button><ShoppingCartIcon /></button>
                                </StyledBadge>
                            </IconButton>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;