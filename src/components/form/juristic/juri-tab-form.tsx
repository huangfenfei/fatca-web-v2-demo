import React from "react";
import { Button, Col, Form, Row, Space } from "antd";
import JuristicCustomerInfoForm from "./juri-customer-info-form";


const JuristicTabForm = () => {
    return (
        <div>
            <Form
                name="wrap"
                labelCol={{ flex: '200px' }}
                labelAlign="left"
                labelWrap
            >
                <JuristicCustomerInfoForm />

                <Space style={{ marginTop: 20, marginBottom: 30, width: "100%", justifyContent: "right" }}>
                    <Row gutter={24} style={{ gap: 15 }}>
                        <Col span={24}>
                            <Button type="primary" htmlType="submit" style={{ width: 100, justifyContent: "center", marginRight:15 }}>Save</Button>
                            <Button type="default" style={{ width: 100, justifyContent: "center" }}>Cancel</Button>
                        </Col>
                    </Row>
                </Space>
            </Form>

        </div>
    );

}

export default JuristicTabForm;