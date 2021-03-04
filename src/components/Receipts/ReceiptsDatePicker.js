import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import DatePicker from '../../components/DatePicker'
import Button from '@material-ui/core/Button'
import PopOver from '../PopOver'

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
  },
  popOverContainer: {
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
  },
}))

const ReceiptsDatePicker = (props) => {
  const classes = useStyles()
  const {
    selectedDays,
    handleSelectedDays,
    filterDate,
    anchorEl,
    setAnchorEl,
  } = props

  return (
    <div className={classes.root}>
      <PopOver btnText="篩選時間" setAnchorEl={setAnchorEl} anchorEl={anchorEl}>
        <div className={classes.popOverContainer}>
          <DatePicker
            handleSelectedDays={handleSelectedDays}
            selectedDays={selectedDays}
          />
          <Button
            className={classes.filterBtn}
            variant="outlined"
            color="secondary"
            onClick={filterDate}
          >篩選</Button>
        </div>
      </PopOver>
    </div>
  )
}

ReceiptsDatePicker.propTypes = {
  selectedDays: PropTypes.array.isRequired,
  isFilter: PropTypes.bool.isRequired,
  handleSelectedDays: PropTypes.func.isRequired,
  filterDate: PropTypes.func.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
}

export default ReceiptsDatePicker