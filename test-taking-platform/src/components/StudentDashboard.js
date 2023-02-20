import React from 'react'
import {useNavigate} from 'react-router-dom'

function StudentDashboard() {
  const navigate = useNavigate();
  const divert = () => navigate('/online-test-platform');
  return (
    <div>
        <h3>Welcome to Student Dashboard</h3>
        <button type = "button" onClick={divert}>Take me to test</button>
    </div>
  )
}

export default StudentDashboard