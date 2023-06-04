import { Alert, Space } from 'antd';
const Error = ({ error }) => (
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
    >
        <Alert message="Error" type="error" showIcon />

        <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
        />
    </Space>
);
export default Error;