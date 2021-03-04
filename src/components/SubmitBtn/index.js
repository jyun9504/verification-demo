import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  btn: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    height: 35,
    margin: 15,
  },
}))

const SubmitBtn = (props) => {
  const classes = useStyles()
  const { label, isLoading } = props

  return (
    <Button
      className={classes.btn}
      variant="outlined"
      type="submit"
    >
      {
        isLoading ?
          <CircularProgress className={classes.loadingCircle} size={20}/>
        : label
      }
      
      
    </Button>
  )
}

SubmitBtn.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default SubmitBtn
