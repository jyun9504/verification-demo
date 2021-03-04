import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import SubmitBtn from '../SubmitBtn'

const useStyles = makeStyles((theme) => ({
  input: {
    minWidth: 200,
    margin: 15,
  },
}))

function VerificationSearch (props) {
  const classes = useStyles()
  const {
    onSubmit,
    taxIDNum,
    setTaxIDNum,
    receiptNum,
    setReceiptNum,
  } = props
  
  return (
    <Grid item xs={12} >
      <form onSubmit={onSubmit}>
        <FormGroup>
          <TextField
            value={taxIDNum}
            color="secondary"
            onChange={(e) => setTaxIDNum(e.target.value)}
            className={classes.input}
            label="顧客統編"
            required
          />
          <TextField
            value={receiptNum}
            color="secondary"
            onChange={(e) => setReceiptNum(e.target.value)}
            className={classes.input}
            label="發票號碼"
            required
          />
          <SubmitBtn label="查詢" isLoading={false} />
        </FormGroup>
      </form>
    </Grid>
  )
}

VerificationSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default VerificationSearch
