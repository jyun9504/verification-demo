import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 135,
    borderRadius: 0,
    margin: '35px 0',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardContent: {
    padding: 10,
  },
  title: {
    width: '100%',
    color: theme.palette.grey.dark,
    textAlign: 'right',
  },
  headingBox: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    margin: '10px 0',
  },
  content: {
    color: theme.palette.grey.dark,
    textAlign: 'right',
  },
}));

const InfoCard = (props) => {
  const classes = useStyles();
  const { title, icon, content } = props;
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
        <Typography className={classes.content} variant="h5">
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoCard