import React from 'react';
import './NavBar.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    grow: {
        textDecoration: 'none',
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        fontFamily: 'Cookie',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: '13px',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '12ch',
            },
        },
    },

}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileRouteOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <div style={{backgroundColor: 'black', opacity:0.9}}>
                <Link to={'/rine_store/'}><MenuItem>
                    <p>ACASA</p>
                </MenuItem></Link>
                <Link to={'/rine_store/aranjamente'}><MenuItem>
                    <p>ARANJAMENTE FLORALE</p>
                </MenuItem></Link>
                <Link to={'/rine_store/bratari'}><MenuItem>
                    <p>BRATARI</p>
                </MenuItem></Link>
                <Link to={'/rine_store/ochelari'}><MenuItem>
                    <p>OCHELARI</p>
                </MenuItem></Link>
                <Link to={'/rine_store/ceasuriB'}><MenuItem>
                    <p>CEASURI BARBATESTI</p>
                </MenuItem></Link>
                <Link to={'/rine_store/ceasuriF'}><MenuItem>
                    <p>CEASURI DAMA</p>
                </MenuItem></Link>
                <Link to={'/rine_store/costumeBaie'}><MenuItem>
                    <p>COSTUME DE BAIE</p>
                </MenuItem></Link>
            </div>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{backgroundColor : "#000000", opacity: 0.9}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        id={menuId}
                        className={classes.menuButton}
                        onClick={handleMobileRouteOpen}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <h3 style={{color:"white"}}>Rine<span style={{color:"#d16a6a"}}> Store</span></h3>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                    {/*    <div className={classes.searchIcon}>*/}
                    {/*        <SearchIcon />*/}
                    {/*    </div>*/}
                    {/*    <InputBase*/}
                    {/*        placeholder="Cautare…"*/}
                    {/*        classes={{*/}
                    {/*            root: classes.inputRoot,*/}
                    {/*            input: classes.inputInput,*/}
                    {/*        }}*/}
                    {/*        inputProps={{ 'aria-label': 'search' }}*/}
                    {/*    />*/}
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}
