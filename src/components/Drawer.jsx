import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home';
import Room from '@material-ui/icons/Room';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    item: {
        textDecoration: 'none',
        color: "black",
    }
});

export default function TemporaryDrawer(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };
    function handleClick() {
        setOpen(!open);
    }
    function logout() {
        localStorage.setItem("token", "");
        window.location.href = "/";
    }
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={props.closeDrawer}
            onKeyDown={props.closeDrawer}
        >
            <List>
                <Link to="/" className={classes.item} >
                    <ListItem button>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>
                <Divider/>
                <Link to="/perfil" className={classes.item}>
                    <ListItem button>
                        <ListItemIcon><AccountCircle /></ListItemIcon>
                        <ListItemText>Perfil</ListItemText>
                    </ListItem>
                </Link>
                <Divider/>
                <Link to="/pontos-de-coleta" className={classes.item}>
                    <ListItem button>
                        <ListItemIcon><Room /></ListItemIcon>
                        <ListItemText>Pontos de coleta</ListItemText>
                    </ListItem>
                </Link>
                <Divider/>
                <ListItem button onClick={logout}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText>Sair da conta</ListItemText>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Drawer open={props.open} onClose={props.closeDrawer}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}
