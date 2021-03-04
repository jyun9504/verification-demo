import PropTypes from 'prop-types'
import { withRouter } from "react-router"
import { makeStyles } from '@material-ui/core/styles'
import PageTitle from './PageTitle'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    minWidth: 260,
    maxWidth: 320,
    padding: '7px 10px',
    background: `linear-gradient(left, ${theme.palette.primary.main} , ${theme.palette.primary.light})`,
    
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      maxWidth: '100%',
      padding: '10px 0px',
    },
  },
}))

const Banner = (props) => {
  const classes = useStyles()
  const { location } = props

  const handleTitle = (pathName) => {
    switch (pathName.split('/')[1]) {
      case 'blockchain': 
        return "節點管理"
      case 'receipts':
        return "發票管理"
      case 'verification':
        return "發票實證"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className={classes.root}>
     <PageTitle pageName={handleTitle(location.pathname)} />
    </div>
  )
}

Banner.propTypes = {
  location: PropTypes.object.isRequired,
}

export default  withRouter(Banner)
