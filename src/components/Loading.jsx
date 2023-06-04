import { Space, Spin } from 'antd';

const Loading = () => (
    <div className='loading'>
        <Space size="middle" color='#034528' >
            <Spin size="large" style={{ color: "red" }} />
        </Space>
    </div>
);

export default Loading;