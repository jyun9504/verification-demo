import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import NavbarLink from './NavbarLink'
import NavbarBtn from './NavbarBtn'
import {
  Home,
  Receipt,
  Search,
  Share,
} from '@material-ui/icons'
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    height: '100%',
    position: 'absolute',
  },
  heading: {
    margin: '15px auto 15px 56px',
  },
  headingText: {
    color: theme.palette.secondary.main,
  },
  linkIcon: {
    width: 25,
    height: 25,
  },
}))

const Navbar = (props) => {
  const classes = useStyles()
  const {
    isAuth,
    onClickLogout,
  } = props

  const linkArr = [
    { to: '/verification', label: '發票實證' },
    { to: '/receipts', label: '發票管理' },
    { to: '/blockchain', label: '節點狀態' },
  ]

  const getLinkIcon = (label) => {
    switch (label) {
      case '發票管理': return (<Receipt className={classes.linkIcon} />)
      case '發票實證': return (<Search className={classes.linkIcon} />)
      case '節點狀態': return (<Share className={classes.linkIcon} />)
      case '登出': return (<BiLogOutCircle className={classes.linkIcon} />)
      default: return (<Home className={classes.linkIcon} />)
    }
  }

  return (
    <nav className={classes.root}>
      <div className={classes.heading}>
        <Typography className={classes.headingText} component="h1" variant="body1">
          實證區塊鏈後台
        </Typography>
      </div>
      <Divider />
      <List>
        {
          !isAuth &&
            <NavbarLink
              activeOnlyWhenExact={true}
              to="/"
              label="登入"
            >
              <BiLogInCircle className={classes.linkIcon} />
            </NavbarLink>
        }
        {
          isAuth &&
          linkArr.map((el) => {
              return (
                <NavbarLink
                  activeOnlyWhenExact={true}
                  to={el.to}
                  label={el.label}
                  key={el.label}
                >
                  {getLinkIcon(el.label)}
                </NavbarLink>
              )
            })
        }
        {
          isAuth &&
          <NavbarBtn
            activeOnlyWhenExact={true}
            label="登出"
            onClickBtn={onClickLogout}
          >
              {getLinkIcon('登出')}
          </NavbarBtn>
        }
      </List>
    </nav>
  )
}

Navbar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onClickLogout: PropTypes.func.isRequired,
}

export default Navbar
