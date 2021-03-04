import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import { TiThMenuOutline } from 'react-icons/ti'
import Banner from '../Banner'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    pointerEvents: 'none',
  },
  drawer: {
    width: '100%',
    height: '100%',
    boxShadow: '-1px 2px 8px rgba(0, 0, 0, .2)',
    pointerEvents: 'auto',
    overflow: 'hidden',
  },
  drawerOpen: {
    marginLeft: 180,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    [theme.breakpoints.down('xs')]: {
      marginLeft: '95%',
    },
  },
  drawerClose: {
    marginLeft: 56, 
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  content: {
    position: 'relative',
    minWidth: 260,
    height: 'calc(100% - 110px)',
    padding: 15,
    overflowY: 'scroll',

    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 110px)',
    },
  },
  iconButton: {
    pointerEvents: 'auto',
    position: 'absolute',
    overflow: 'hidden',
    width: 30,
    height: 30,
    margin: 13,
    fontWeight: 400
  },
  logo: {
    width: 26,
  },
  linkIcon: {
    width: 24,
    height: 24,
    color: theme.palette.secondary.main,
  },
}))

const ContentDrawer = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  return (
    <main className={classes.root}>
      <IconButton
        size="small"
        className={classes.iconButton}
        onClick={handleDrawerOpen}
      >
        { <TiThMenuOutline className={classes.linkIcon} /> }
      </IconButton>
      <Paper
        className={
          clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
      >
        <Banner />
        <div className={clsx(classes.content, {[classes.drawerCloseContent]: open})}>
          {props.children}
        </div>
      </Paper>
    </main>
  )
}

export default ContentDrawer
