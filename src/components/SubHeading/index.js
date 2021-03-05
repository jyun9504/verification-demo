import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.primary.main,
    margin: 20,
  }
}))

const SubHeading = (props) => {
  const classes = useStyles()
  const { heading } = props

  return (
    <Typography className={classes.heading} variant="h6">
      {heading}
    </Typography>
  )
}

SubHeading.propTypes = {
  location: PropTypes.object,
}

export default SubHeading
