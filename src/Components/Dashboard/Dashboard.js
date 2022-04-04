import { stringify } from 'postcss';
import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const data = [
        {
            "name": "Goast-bike",
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "name": "Goast-bike",
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "name": "Goast-bike",
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "name": "Goast-bike",
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "name": "Goast-bike",
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "name": "Goast-bike",
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]   

    return (
        <div className='flex w-100 grid items-center grid-cols-1 mx-auto lg:grid-cols-2 mt-5' >
           
         <div>
         <h2 className="text-blue-500 text-xl ml-5 mb-5">Investment vs Revenue</h2>
         <PieChart width={600} height={250}>
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Legend />
                <Tooltip />
            </PieChart>
         </div>
            <div>
            <h2 className="text-orange-500 text-xl ml-5 mb-5">Month vs Sell</h2>
                <BarChart width={600} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="month" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;