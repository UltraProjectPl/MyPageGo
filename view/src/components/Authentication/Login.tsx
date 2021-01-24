import React, { useState } from 'react';
import { useFormik } from 'formik';
import { LoginSchema } from '../../store/authentication/types';
import { useDispatch } from '../../hooks/useDispatch';
import { AuthenticationActions } from '../../store/authentication/actions';

export const Login: React.FC = () => {
    const [login, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            login,
            password
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            dispatch(AuthenticationActions.login(values));
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        placeholder="Login"
                        onChange={formik.handleChange}
                        value={formik.values.login}
                    />
                    {formik.errors.login}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}