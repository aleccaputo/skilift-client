import React, {Fragment} from 'react';
import {connect} from 'react-redux';

const IsNotAuthed = ({auth, children}) => {
    return !auth.isAuthed ?  <Fragment>{children}</Fragment> : null
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(IsNotAuthed);