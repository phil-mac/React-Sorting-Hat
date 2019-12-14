import React from 'react';

import {PasswordForgetForm} from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';

const AccountPage = () => {
    return(
        <AuthUserContext.Consumer>
            {authUser => (
                <div>
                    <h1>Account: {authUser.email}</h1>
                    <h2>Password Forget</h2>
                    <PasswordForgetForm />
                    <h2>Password Change</h2>
                    <PasswordChangeForm />
                </div>
            )}
        </AuthUserContext.Consumer>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);