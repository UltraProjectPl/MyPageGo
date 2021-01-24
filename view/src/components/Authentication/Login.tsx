import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { LoginSchema } from '../../store/authentication/types';
import { useDispatch } from '../../hooks/useDispatch';
import { AuthenticationActions } from '../../store/authentication/actions';

export const Login: React.FC = () => {
    const [login, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();
    const { t } = useTranslation();

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
                    <label htmlFor="login">{t('security.login')}</label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        placeholder={t('security.login') + '...'}
                        onChange={formik.handleChange}
                        value={formik.values.login}
                    />
                    {formik.errors.login}
                </div>
                <div>
                    <label htmlFor="password">{t('security.password')}</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder={t('security.password') + '...'}
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