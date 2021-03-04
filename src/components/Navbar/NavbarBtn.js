import PropTypes from 'prop-types'
import { useRouteMatch } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import MuiListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.grey.dark,
  },
  linkIcon: {
    color: theme.palette.grey.dark,
    minWidth: 0,
    marginRight: 16,
  },
  linkIconActive: {
    color: theme.palette.primary.main,
  },
}))

const ListItem = withStyles((theme) => ({
  root: {
    fontSize: 14,
    color: theme.palette.grey.main,

    '&$selected': {
      color: theme.palette.grey.dark,
      fontWeight: '500',
    },
  },
  selected: {
  }
}))(MuiListItem)

const NavbarBtn = (props) => {
  const classes = useStyles()
  const { onClickBtn } = props

  const match = useRouteMatch({
    path: props.to,
    exact: props.activeOnlyWhenExact
  })
  
  return (
    <ListItem
      button
      key={props.label}
      selected={!!match}
      onClick={onClickBtn}
    >
      <ListItemIcon className={clsx(classes.linkIcon, {
          [classes.linkIconActive]: !!match,
        })}>
        {props.children}
      </ListItemIcon>
      {props.label}
    </ListItem>
  )
}

NavbarBtn.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
}

export default NavbarBtn