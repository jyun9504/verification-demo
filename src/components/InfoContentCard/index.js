import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 135,
    borderRadius: 0,
    marginBottom: 20,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardContent: {
    padding: 10,
  },
  title: {
    width: '100%',
    color: theme.palette.primary.main,
    textAlign: 'right',
  },
  headingBox: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    margin: '10px 0',
  },
}))

const InfoContentCard = (props) => {
  const classes = useStyles()
  const { title, icon } = props

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.cardContent}>
        <div className={classes.headingBox}>
          {icon}
          <Typography className={classes.title} variant="overline">
            {title}
          </Typography>
        </div>
        <Divider className={classes.divider} />
        {props.children}
      </CardContent>
    </Card>
  )
}

export default InfoContentCard