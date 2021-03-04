import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';

const ValidationTextField = withStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '& input:valid + fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
    '& input:valid:hover + fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: theme.palette.secondary.main,
      borderWidth: 1,
    },
    '& input:invalid:hover + fieldset': {
      borderColor: theme.palette.secondary.main,
      borderWidth: 1,
    },
    '& input:invalid:focus + fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
      borderColor: theme.palette.primary.main,
      borderLeftWidth: 6,
      padding: '4px !important',
    },
  },
}))(TextField)

const useStyles = makeStyles((theme) => ({
  input: {
    margin: 15,
  }
}))

const ValidationInput = (props) => {
  const { label, type, value, onChangeInput } = props
  const classes = useStyles()

  return (
    <React.Fragment>
      <ValidationTextField
        className={classes.input}
        label={label}
        value={value}
        onChange={(e) => { onChangeInput(e.target.value) }}
        type={type}
        size="small"
        variant="outlined"
        required
      />
    </React.Fragment>
  )
}

ValidationInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
}

export default ValidationInput
