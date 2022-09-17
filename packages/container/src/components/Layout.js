import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  })
);

const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Progress />}>
        <Outlet />
      </Suspense>
    </>
  );
};
