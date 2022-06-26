import React from 'react';
import {NavLink} from "react-router-dom";
import {Card} from "antd";

const NoPage = () => {
    return (
        <div className="no-page">
            <Card>
                <h1>404 PAGE</h1>
                <small className="m-0 text-center">
                    <NavLink to='/' >GO HOME</NavLink>
                </small>
            </Card>
        </div>
    );
};

export default NoPage;