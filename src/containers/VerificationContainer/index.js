import React, { useState } from 'react'
import { connect } from 'react-redux'
import { verifiReceipt } from '../../actions/receipts'
import { useHistory } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "../../components/Grid/GridItem"
import GridContainer from "../../components/Grid/GridContainer"
import Card from "../../components/Card/Card"
import CardHeader from "../../components/Card/CardHeader"
import CardBody from "../../components/Card/CardBody"
import VerificatoinSearch from '../../components/Verification/VerificationSearch'
import AlertBar from '../../components/AlertBar'

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"
const useStyles = makeStyles(styles)

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    verifiReceipt: (payload) => dispatch(verifiReceipt(payload)),
  }
}

function VerificationContainer (props) {
  const classes = useStyles()
  const history = useHistory()
  const { verifiReceipt } = props
  const [taxIDNum, setTaxIDNum] = useState('77815838')
  const [receiptNum, setReceiptNum] = useState('12345678')
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const onVerification = (e) => {
    e.preventDefault()
    const payload = {
      taxIDNum: taxIDNum,
      receiptNum: receiptNum,
    }
    verifiReceipt(payload)
      .then(() => {
        history.push('/conflict/0x77815838')
      })
      .catch(() => {
        setIsAlertOpen(true)
      })
  }

	return (
		<React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
					<Card>
            <CardHeader color="warning">
              <h2 className={classes.cardTitleWhite}>發票實證查詢</h2>
            </CardHeader>
            <CardBody>
              <VerificatoinSearch
                onSubmit={onVerification}
                taxIDNum={taxIDNum}
                setTaxIDNum={setTaxIDNum}
                receiptNum={receiptNum}
                setReceiptNum={setReceiptNum}
              />
              <AlertBar
                errorText="查無衝突發票"
                isAlertOpen={isAlertOpen}
                setIsAlertOpen={setIsAlertOpen}
              />
            </CardBody>
          </Card>
				</GridItem>
			</GridContainer>
		</React.Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationContainer)
