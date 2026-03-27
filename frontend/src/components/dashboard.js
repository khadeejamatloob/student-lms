import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const stats = [
        { title: "Total Courses", value: "07", color: "#27ae60", icon: "📚" },
        { title: "Assignments", value: "03 Pending", color: "#e67e22", icon: "📝" },
        { title: "Attendance", value: "92%", color: "#2980b9", icon: "📊" }
    ];

    return (
        <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
            
          
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                backgroundColor: 'white', 
                padding: '15px 30px', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                marginBottom: '20px'
            }}>
                <h2 style={{ margin: 0, color: '#27ae60', fontWeight: 'bold' }}>🎓 LMS Dashboard</h2>
                <button 
    onClick={() => navigate('/login')} 
    style={{ 
        padding: '8px 20px', 
        backgroundColor: '#e74c3c', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' 
    }}
>
    Logout 🚪
</button>
                
            </div>

            
            <div style={{ padding: '0 30px 30px 30px' }}>
                
                
                <div style={{ textAlign: 'left', marginBottom: '30px' }}>
                    <h1 style={{ color: '#2c3e50', margin: 0 }}>Welcome Back, Student! 👋</h1>
                    <p style={{ color: '#7f8c8d' }}>Ye aapka main control panel hai.</p>
                </div>

              
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                    gap: '20px',
                    marginBottom: '40px'
                }}>
                    {stats.map((item, index) => (
                        <div key={index} style={{
                            background: 'white',
                            padding: '25px',
                            borderRadius: '15px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            borderLeft: `8px solid ${item.color}`,
                            textAlign: 'left'
                        }}>
                            <div style={{ fontSize: '30px', marginBottom: '10px' }}>{item.icon}</div>
                            <h3 style={{ margin: '0', color: '#7f8c8d', fontSize: '16px' }}>{item.title}</h3>
                            <p style={{ margin: '5px 0 0 0', fontSize: '28px', fontWeight: 'bold', color: '#2c3e50' }}>
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                
                <div style={{ textAlign: 'left' }}>
                    <h3 style={{ color: '#2c3e50' }}>Quick Actions</h3>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <button 
                            onClick={() => navigate('/courses')}
                            style={{ padding: '12px 25px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                        >
                            Open Courses
                        </button>
                        <button 
                            onClick={() => navigate('/assignments')}
                            style={{ padding: '12px 25px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                        >
                            Open Assignments
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;