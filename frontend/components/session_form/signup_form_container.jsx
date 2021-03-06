import { connect } from 'react-redux';
import React from 'react';
import { signupUser, clearSessionErrors, loginUser } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

import SignUpForm from './sign_up_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'an Artist Account',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupUser: (user) => dispatch(signupUser(user)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        loginUser: (user) => dispatch(loginUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
