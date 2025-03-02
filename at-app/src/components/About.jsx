const About = () => {
    return (
      <div className="about">
        <h1>ABOUT</h1>
        <p><strong>STUDENT ATTENDANCE MANAGEMENT SYSTEM.</strong>This system allows teachers or administrators to efficiently track student attendance in real-time. The application consists of multiple components, including <strong>Home, StudentList, Attendance, AttendanceRecord, and About.</strong>
  In the Attendance component, a list of students is displayed with options to mark each student as "Present" or "Absent". Once a selection is made, the data is updated dynamically and reflected in the AttendanceRecord component, 
  which provides a clear summary of <strong>students' attendance statuses.</strong> The system ensures seamless interaction between components by managing state efficiently using React hooks.
  This project is designed to enhance accuracy, efficiency, and ease of attendance tracking, reducing manual errors and saving time for educators.</p>
      </div>
    )
  }
  export default About