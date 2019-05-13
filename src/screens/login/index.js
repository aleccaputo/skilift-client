import React, {useState, useEffect, Fragment} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {login} from "./actions";
import {connect} from 'react-redux';

const Login = ({dispatch, auth}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        auth.token === null
            ?
        <Fragment>
            <TextField
                label={'Username'}
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField
                label={'Password'}
                type={'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {
                auth.error ? <p>{'Invalid login, please try again'}</p> : null
            }
            <Button variant={'contained'} color={'primary'} onClick={() => login(username, password, dispatch)}>Login</Button>
        </Fragment>
            :
            <p>{'You are already logged in'}</p>
    )
};
const mapStateToProps = (state) => ({
   auth: state.auth
});
export default connect(mapStateToProps)(Login);