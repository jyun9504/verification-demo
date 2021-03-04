import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.white,
    textAlign: 'right',
    fontWeight: 300,
  },
  headingPrimary: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
    },
  },
}))

const PageTitle = (props) => {
  const classes = useStyles()
  const { pageName } = props;
  return (
    <div className={classes.heading}>
      <Typography className={classes.headingPrimary} component="h1" variant="h4">
        {pageName}
      </Typography>
    </div>
  )
}

PageTitle.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default PageTitle
