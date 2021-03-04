import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "../../components/Grid/GridItem"
import GridContainer from "../../components/Grid/GridContainer"
import Card from "../../components/Card/Card"
import CardHeader from "../../components/Card/CardHeader"
import CardBody from "../../components/Card/CardBody"
import ConflictList from '../../components/Conflict/ConflictList'

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"
const useStyles = makeStyles(styles)

export default function ConflictContainer () {
  const classes = useStyles()

  const firstTableData = [
    [1, 'AA銀行', '77815838', '123456878', '0x77815838123456878', '2021-03-01 12:00', 'a20210304']
  ]
  const tableData = [
    [2, 'AA銀行', '77815838', '123456878', '0x77815838123456878', '2021-03-02 12:00', 'a20210304'],
    [3, 'AA銀行', '77815838', '123456878', '0x77815838123456878', '2021-03-03 12:00', 'a20210304'],
    [4, 'AA銀行', '77815838', '123456878', '0x77815838123456878', '2021-03-04 12:00', 'a20210304'],
  ]

	return (
		<React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={12}>
					<Card>
            <CardHeader color="warning">
              <h2 className={classes.cardTitleWhite}>衝突發票瀏覽</h2>
            </CardHeader>
            <CardBody>
              <ConflictList
                title="首筆上傳發票"
                tableData={firstTableData}
              />
              <ConflictList
                title="衝突發票"
                tableData={tableData}
              />
            </CardBody>
          </Card>
				</GridItem>
			</GridContainer>
		</React.Fragment>
	)
}
