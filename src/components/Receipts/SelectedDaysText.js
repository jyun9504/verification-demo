import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  daysText: {
    color: theme.palette.secondary.main,
    margin: 10,
  },
}))

const SelectedDaysText = (props) => {
  const classes = useStyles()
  const { selectedDays, isFilter } = props

  return (
    <div className={classes.root}>
      {selectedDays.length === 7 && isFilter ? (
        <Typography className={classes.daysText} variant="body1">
          {moment(selectedDays[0]).format('YYYY-MM-DD')}
          {' to '}
          {moment(selectedDays[6]).format('YYYY-MM-DD')}
        </Typography>)
      : (
        <Typography className={classes.daysText} variant="body1">
          {moment(new Date()).format('YYYY-MM')}
        </Typography>
      )}
    </div>
  )
}

SelectedDaysText.propTypes = {
  selectedDays: PropTypes.array.isRequired,
  isFilter: PropTypes.bool.isRequired,
}

export default SelectedDaysText