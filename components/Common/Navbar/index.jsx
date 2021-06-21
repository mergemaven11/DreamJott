import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Concert One, cursive',
  },
  custom: {
    backgroundColor: '#14012E',
    color: '#28A7E5',
  },
  logo: {
    // marginTop: -22,
    width: '-20em',
    height: '-3em',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.custom} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <h1> DreamJott </h1>
        </Typography>

        <Link href="/dreamboard">
          <Button color="inherit">DreamBoard</Button>
        </Link>
        <Link href="/about">
          <Button color="inherit">About Us</Button>
        </Link>
        <Link href="/api/auth/signin">
          <Button color="inherit">Signup</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
