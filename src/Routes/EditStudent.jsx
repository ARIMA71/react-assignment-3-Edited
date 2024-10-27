import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
const url = 'http://localhost:3001/student';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState({
        fullname: "",
        profilePicture: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        gender: "Male",
        programStudy: "Ekonomi",
        faculty: ""
    });

    useEffect(() => {
        fetch(`${url}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setStudentData(data);
            })
            .catch((error) => console.error('Error fetching student data:', error));
    }, [id]);

    const faculties = {
        'Ekonomi': "Fakultas Ekonomi",
        'Manajemen': "Fakultas Ekonomi",
        'Akuntansi': "Fakultas Ekonomi",
        'Administrasi Publik': "Fakultas Ilmu Sosial dan Politik",
        'Administrasi Bisnis': "Fakultas Ilmu Sosial dan Politik",
        'Hubungan Internasional': "Fakultas Ilmu Sosial dan Politik",
        'Teknik Sipil': "Fakultas Teknik",
        'Arsitektur': "Fakultas Teknik",
        'Matematika': "Fakultas Teknologi Informasi dan Sains",
        'Fisika': "Fakultas Teknologi Informasi dan Sains",
        'Informatika': "Fakultas Teknologi Informasi dan Sains",
    };

    const updateStudent = (student) => {
        fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        })
        .then(() => {
            navigate('/student');
        })
        .catch((error) => console.error('Error updating student:', error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value,
            faculty: faculties[studentData.programStudy] // Update faculty based on program study
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(studentData);
    };

    return (
        <>
            <NavBar />
            <div style={{ padding: '20px', backgroundColor: '#f0f4f8' }}>
                <form id="form-student" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label htmlFor="input-name">Fullname</label>
                    <input 
                        type="text" 
                        id="input-name" 
                        name="fullname" 
                        value={studentData.fullname}
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="profilePicture">Link Profile Picture</label>
                    <input 
                        type="text" 
                        id="profilePicture" 
                        name="profilePicture" 
                        value={studentData.profilePicture}
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        value={studentData.address}
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="text" 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        value={studentData.phoneNumber}
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="input-date">Birth Date</label>
                    <input 
                        type="date" 
                        id="input-date" 
                        name="birthDate"
                        value={studentData.birthDate}
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="input-gender">Gender</label>
                    <select 
                        id="input-gender" 
                        name="gender" 
                        value={studentData.gender}
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label htmlFor="input-prody">Program Study</label>
                    <select 
                        id="input-prody" 
                        name="programStudy" 
                        value={studentData.programStudy}
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    >
                        <option value="Ekonomi">Ekonomi</option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Administrasi Publik">Administrasi Publik</option>
                        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                        <option value="Hubungan Internasional">Hubungan Internasional</option>
                        <option value="Teknik Sipil">Teknik Sipil</option>
                        <option value="Arsitektur">Arsitektur</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Fisika">Fisika</option>
                        <option value="Informatika">Informatika</option>
                    </select>

                    <button 
                        type="submit" 
                        style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#0077b6', color: '#fff', fontSize: '16px' }}
                    >
                        Edit Student
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditStudent;
