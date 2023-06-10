import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../features/authApiSlice';
import { setCredentials } from '../features/authSlice';

const Login = () => {

    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login] = useLoginMutation();

    console.log(user)
    const [loginInfo, setLoginInfo] = useState({
        userName: '',
        password: ''
    })

    const handleLogin = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    const location = useLocation();
    const submitHandler = async () => {
        try {
            const result = await login(loginInfo).unwrap();
            dispatch(setCredentials({ user, token: result?.accessToken }))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
            onFinish={submitHandler}
        >
            <Form.Item
                label="userName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input onChange={handleLogin} name="userName" />
            </Form.Item>

            <Form.Item
                label="Password"

                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password name="password" onChange={handleLogin} />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};
export default Login;