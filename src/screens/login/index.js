import React, {useState, useEffect, Fragment} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {login} from "./actions";
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlined from '@material-ui/icons/LockOutlined'
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
    paper: {
        padding: '20px 30px 30px',
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 400,
        height: 400
    },
    button: {
        marginTop: 50
    },
    input: {
        width: 350,
        marginTop: 30,
    },
    error: {
        color: 'darkred'
    }
});

const Login = ({dispatch, auth}) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        setLoading(true);
        try {
            const res = await login(username, password, dispatch);
            if(!res) {
                setLoading(false);
            }
        }
        catch {
            setLoading(false);
        }
    };
    return (
        auth.token === null
            ?
            <Fragment>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={8}
                >
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Grid item={true}>
                            <TextField
                                label={'Username'}
                                value={username}
                                id={'username'}
                                className={classes.input}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item={true}>
                            <TextField
                                label={'Password'}
                                type={'password'}
                                value={password}
                                id={'password'}
                                className={classes.input}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item={true}>
                            <Button disabled={loading} size={'large'} className={classes.button} variant={'contained'} color={'primary'}
                                    onClick={() => handleLogin()}
                            >
                                Login
                            </Button>
                        </Grid>
                        {
                            auth.error ? <p className={classes.error}>{'Invalid login, please try again'}</p> : null
                        }
                    </Paper>
                </Grid>
            </Fragment>
            :
            <p>{'You are already logged in'}</p>
    )
};
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Login);