import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline, Layout } from 'antd';

const { Content } = Layout;

export const Dashboard: React.FC = () => {
  return (
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Timeline mode="alternate">
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color="green">
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color="red">
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
          >
            Technical testing 2015-09-01
          </Timeline.Item>
        </Timeline>
      </div>
    </Content>
  );
};
