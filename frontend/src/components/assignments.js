import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Assignments() {
    const navigate = useNavigate();

    // Assignments Data State
    const [assignments, setAssignments] = useState([
        { id: 1, title: "React Basics Quiz", course: "Web Dev", dueDate: "2024-03-25", marks: "10", desc: "Complete all MCQ questions.", status: "Pending" },
        { id: 2, title: "UI Design Case Study", course: "UI/UX", dueDate: "2024-03-28", marks: "50", desc: "Create a mobile app flow.", status: "Pending" }
    ]);

    const [newAssign, setNewAssign] = useState({ title: '', course: '', dueDate: '', marks: '', desc: '' });

    const handleAddAssignment = () => {
        if (newAssign.title && newAssign.course && newAssign.dueDate) {
            setAssignments([...assignments, { id: assignments.length + 1, ...newAssign, status: "Pending" }]);
            setNewAssign({ title: '', course: '', dueDate: '', marks: '', desc: '' });
        } else {
            alert("Please fill Title, Course and Due Date!");
        }
    };

    return (
        <div style={{ padding: '30px', backgroundColor: '#f4f7f6', minHeight: '100vh', textAlign: 'left' }}>
            <button onClick={() => navigate('/dashboard')} style={{ padding: '10px 20px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '20px' }}>
                ⬅️ Back to Dashboard
            </button>

            <div style={{ background: 'white', padding: '25px', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <h3 style={{ marginTop: 0 }}>➕ Create New Assignment</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    <input placeholder="Title" value={newAssign.title} onChange={(e) => setNewAssign({...newAssign, title: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <input placeholder="Course" value={newAssign.course} onChange={(e) => setNewAssign({...newAssign, course: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <input type="date" value={newAssign.dueDate} onChange={(e) => setNewAssign({...newAssign, dueDate: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <input placeholder="Marks" value={newAssign.marks} onChange={(e) => setNewAssign({...newAssign, marks: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <textarea placeholder="Instructions" value={newAssign.desc} onChange={(e) => setNewAssign({...newAssign, desc: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', width: '100%', marginTop: '15px', height: '60px' }} />
                <button onClick={handleAddAssignment} style={{ marginTop: '15px', padding: '12px 30px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Post</button>
            </div>

            <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Active Assignments</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {assignments.map((task) => (
                    <div key={task.id} style={{ background: 'white', padding: '20px', borderRadius: '15px', borderLeft: '6px solid #e67e22', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ margin: '0' }}>{task.title}</h3>
                        <p style={{ color: '#7f8c8d', fontSize: '13px' }}>{task.course} | {task.marks} Marks</p>
                        <p style={{ fontSize: '14px' }}>{task.desc}</p>
                        <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>📅 Due: {task.dueDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Assignments;