import { connect } from 'react-redux';
import React from 'react';
import { loginUser, clearSessionErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';



import LogInForm from './log_in_form';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.session
    };
};


const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
