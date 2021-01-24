import React, { useState } from 'react';
import { useFormik } from 'formik';
import { LoginSchema } from '../../store/authentication/types';

export const Login: React.FC = () => {
    const [login, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const formik = useFormik({
        initialValues: {
            login,
            password
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            console.log(values);
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