import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "../../components/Grid/GridItem"
import GridContainer from "../../components/Grid/GridContainer"
import Card from "../../components/Card/Card"
import CardHeader from "../../components/Card/CardHeader"
import CardBody from "../../components/Card/CardBody"
import VerificatoinSearch from '../../components/Verification/VerificationSearch'

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"
const useStyles = makeStyles(styles)

export default function VerificationContainer () {
  const classes = useStyles()
  const history = useHistory()
  const [taxIDNum, setTaxIDNum] = useState('77815839')
  const [receiptNum, setReceiptNum] = useState('12345678')

  const onVerification = (e) => {
    e.preventDefault()
    history.push('/conflict/0x77815838123456878')
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
            </CardBody>
          </Card>
				</GridItem>
			</GridContainer>
		</React.Fragment>
	)
}
