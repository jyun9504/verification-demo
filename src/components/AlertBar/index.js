import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  errorText: {
    textAlign: 'center',
  },
  multipleLineChip: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 200,
    maxWidth: 350,
    margin: '15px 0',
    paddingLeft: 10,
    borderRadius: 100,
  }
}))

const AlertBar = (props) => {
  const classes = useStyles()
  const { errorText, isAlertOpen, setIsAlertOpen } = props

  return (
    <Collapse in={isAlertOpen}>
      <div className={classes.multipleLineChip}>
        <Chip
          label={errorText}
          onDelete={() => setIsAlertOpen(false)}
          color="secondary"
        />
      </div>
    </Collapse>
  )
}

AlertBar.propTypes = {
  errorText: PropTypes.string.isRequired,
  isAlertOpen: PropTypes.bool.isRequired,
  setIsAlertOpen: PropTypes.func.isRequired,
}

export default AlertBar
