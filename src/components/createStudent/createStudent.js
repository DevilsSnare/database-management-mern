import { React, useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function CreateStudent() {
    const [student, setStudent] = useState({
        regNo: 0,
        studentName: '',
        grade: '',
        section: '',
    });

    const addStudent = () => {
        axios.post('http://localhost:5000/students', student).then(() => {
            window.location.reload(false);
        })
    }
    return (
        <>
            <h2>Create Student</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Registration Number" variant="standard" value={student.regNo} onChange={(event) => { setStudent({ ...student, regNo: event.target.value }) }} />
                <TextField id="standard-basic" label="Name" variant="standard" value={student.studentName} onChange={(event) => { setStudent({ ...student, studentName: event.target.value }) }} />
                <TextField id="standard-basic" label="Grade" variant="standard" value={student.grade} onChange={(event) => { setStudent({ ...student, grade: event.target.value }) }} />
                <TextField id="standard-basic" label="Section" variant="standard" value={student.section} onChange={(event) => { setStudent({ ...student, section: event.target.value }) }} />
                <Button variant="contained" onClick={() => addStudent()}>Add Student</Button>
            </Box>
        </>
    );
}
