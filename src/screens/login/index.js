import React, {useState, useEffect, Fragment} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {login} from "./actions";
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Login = ({dispatch, auth}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        auth.token === null
            ?
            <form>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item={true}>
                        <TextField
                            label={'Username'}
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Grid>
                    <Grid item={true}>
                        <TextField
                            label={'Password'}
                            type={'password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Grid>
                    {
                        auth.error ? <p>{'Invalid login, please try again'}</p> : null
                    }
                    <Grid item={true}>
                        <Button variant={'contained'} color={'primary'}
                                onClick={() => login(username, password, dispatch)}>Login</Button>
                    </Grid>
                </Grid>
            </form>
            :
            <p>{'You are already logged in'}</p>
    )
};
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Login);