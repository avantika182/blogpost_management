import React from 'react';
import{

}from'recharts';

import Navbar from '../Componants/Navbar';
import './Analytics.css';
import { BiBarChart } from 'react-icons/bi';

const Analytics = () => {

    const chartData=[
        {name: 'Admin',posts:5},
        {name: 'User',posts:3},
        {name: 'Test',posts:4},
        {name: 'Demo',posts:2}
    ];

    const COLORS = ['#0088FE','#00c49F','#FFBB28','#FF8042'];

  return (
    <div className='analytics-page'>
        <Navbar />
        <main className='analytics-main'>
            <header className='analytics-header'>
                <h1>Blog Analytics</h1>
                <p>Insights into your blog's performance and activity</p>
            </header>

            <div className='charts-container'>

                <div className='chart-card'>
                    <h3>Posts per Author</h3>
                    <div className='chart-wrapper'>
                        <ResponseiveContainer width="100%" height={300}>
                            <BarChart onLoadedData={chartData}>
                                <cartesianGrid strokeDasharray="3 3"/>
                                <XAxia dataKey="name"/>
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar 
                                    dataKey="posts"
                                    fill="#8884d8"
                                    name="Number of Posts"
                                    />
                            </BarChart>
                        </ResponseiveContainer>
                    </div>
                </div>

                <div className='chart-card'>
                    <h3>Discription</h3>
                    <div className='chart-wrapper'>
                        <ResponseiveContainer width="100%" height={300}/>
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRedius={80}
                                fill="#8884d8"
                                dataKey="posts"
                                label
                                >
                                    {chartData.map((entry,index)=>(
                                        <Cell
                                            Key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                            />
                                    ))}
                                </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>

            <div className='posts-table-section'>
                <h3>All Posts</h3>
                <div className='table-wrapper'>
                    <table className='analytics-table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Date</th>
                            </tr>
                        </thead> 
                        <tbody>
                        <tr>
                                <th>1</th>
                                <th>React Basis</th>
                                <th>Admin</th>
                                <th>10/02/2026</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>Understanding Hooks</th>
                                <th>User</th>
                                <th>15/02/2026</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>sjkssjk</th>
                                <th>Test</th>
                                <th>14/02/2026</th>
                            </tr>
                            </tbody>
                    </table>
                </div>

                <div className='pagination'>
                    <button className='page-btn'>Previous</button>
                    <button className='page-btn'>1</button>
                    <button className='page-btn'>2</button>
                    <button className='page-btn'>3</button>
                    <button className='page-btn'>Next</button>
                </div>
            </div>
        </main>
      
    </div>
  )
}

export default Analytics
