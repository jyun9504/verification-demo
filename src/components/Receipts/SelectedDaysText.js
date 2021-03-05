import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  daysText: {
    color: theme.palette.primary.main,
    margin: '20px 0 0 8px',
  },
}))

const SelectedDaysText = (props) => {
  const classes = useStyles()
  const { selectedDays, isFilter } = props

  return (
    <div className={classes.root}>
      {selectedDays.length === 7 && isFilter ? (
        <Typography className={classes.daysText} variant="body1">
          {moment(selectedDays[0]).format('YYYY')}{' / '}
          {moment(selectedDays[0]).format('MM')}{' / '}
          {moment(selectedDays[0]).format('DD')}
          {' ~ '}
          {moment(selectedDays[6]).format('YYYY')}{' / '}
          {moment(selectedDays[6]).format('MM')}{' / '}
          {moment(selectedDays[6]).format('DD')}
        </Typography>)
      : (
        <Typography className={classes.daysText} variant="body1">
          {moment(new Date()).format('YYYY')}
          {' / '}
          {moment(new Date()).format('MM')}
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