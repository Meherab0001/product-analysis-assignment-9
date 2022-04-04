import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Line, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const data = 'data.json'
    return (
        <div>
            <div>
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey={'sell'}></XAxis>
                    <YAxis dataKey={'investment'}></YAxis>
                    <Tooltip></Tooltip>
                    <CartesianGrid stroke="#f5f5f5"></CartesianGrid>
               
                   
                  
                   
                </ComposedChart>
            </div>
            <div>
                <PieChart>
                    <Pie dataKey={'sell'} nameKey={'investment'} cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;