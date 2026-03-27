import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Courses() {
    const navigate = useNavigate();
    
    // 1. Initial Data aur State
    const [courses, setCourses] = useState([
        { title: "Mobile Application", instructor: "Sir Adeel", progress: 50 },
        { title: "Digital Marketing", instructor: "Omer Junaid", progress: 20 },
        { title: "UI/UX Design", instructor: "Ayesha Ahmed", progress: 0 },
        { title: "Data Science", instructor: "Dr. Zain", progress: 0 },
        { title: "Graphic Designing", instructor: "Sarah Khan", progress: 80 },
        { title: "Web Development", instructor: "Sir Faisal", progress: 50 }
    ]);

    const [newCourse, setNewCourse] = useState({ title: '', instructor: '', progress: 0 });

    // 2. Course Add karne ka function
    const handleAddCourse = () => {
        if (newCourse.title && newCourse.instructor) {
            setCourses([...courses, { ...newCourse, progress: 0 }]);
            setNewCourse({ title: '', instructor: '', progress: 0 }); // Form khali karne ke liye
        }
    };

    return (
        <div style={{ padding: '30px', backgroundColor: '#f4f7f6', minHeight: '100vh', textAlign: 'left' }}>
            
            {/* BACK BUTTON */}
            <button 
                onClick={() => navigate('/dashboard')} 
                style={{ padding: '10px 20px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '20px' }}
            >
                ⬅️ Back to Dashboard
            </button>

            {/* ADD NEW COURSE SECTION (Smart UI) */}
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ marginTop: 0, color: '#2c3e50' }}>➕ Add New Course</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <input 
                        type="text" 
                        placeholder="Course Name" 
                        value={newCourse.title}
                        onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', flex: 1 }}
                    />
                    <input 
                        type="text" 
                        placeholder="Instructor Name" 
                        value={newCourse.instructor}
                        onChange={(e) => setNewCourse({...newCourse, instructor: e.target.value})}
                        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', flex: 1 }}
                    />
                    <button 
                        onClick={handleAddCourse}
                        style={{ padding: '12px 25px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Add Course
                    </button>
                </div>
            </div>

            <h2 style={{ color: '#2c3e50', marginBottom: '20px', fontWeight: 'bold' }}>My Enrolled Courses</h2>
            
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {courses.map((course, index) => (
                    <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderLeft: '6px solid #27ae60' }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{course.title}</h3>
                        <p style={{ color: '#7f8c8d', fontSize: '14px', marginBottom: '15px' }}>Instructor: {course.instructor}</p>
                        
                        <div style={{ background: '#ecf0f1', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
                            <div style={{ background: '#2ecc71', width: `${course.progress}%`, height: '100%' }}></div>
                        </div>
                        <p style={{ fontSize: '12px', marginTop: '8px', color: '#27ae60', fontWeight: 'bold' }}>
                            {course.progress}% Completed
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;