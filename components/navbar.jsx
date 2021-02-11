import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ButtonGroup } from '@material-ui/core';
import Content from './navbar-style';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  custom: {
    backgroundColor: '#00e0ff',
    color: '#002651',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.custom} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <a href="/"> Dream Jott</a>
        </Typography>

        <Link href="/dreams">
          <Button color="inherit">DreamBoard</Button>
        </Link>
        <Link href="/about">
          <Button color="inherit">About</Button>
        </Link>
        <Link href="/api/auth/signin">
          <Button color="inherit">Signup</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
