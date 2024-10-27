import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
const url = 'http://localhost:3001/student';

const AddStudent = () => {
    const [fullname, setFullname] = useState("");
    const [profPict, setProfpict] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("Male");
    const [programstudy, setProgramstudy] = useState("Ekonomi");
    const navigate = useNavigate();

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

    const addStudents = (newStudent) => {
        fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        })
        .then((data) => {
            if (data.error){
                console.log(data.error)
                return
            }
            navigate('/student')
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudents({
          fullname: fullname,
          profilePicture: profPict,
          address: address,
          phoneNumber: number,
          birthDate: birthDate,
          gender: gender,
          programStudy: programstudy,
          faculty: faculties[programstudy],
        });
    }

    return (
        <>
            <NavBar />
            <div style={{ padding: '20px', backgroundColor: '#f0f4f8' }}>
                <form id="form-student" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label htmlFor="input-name">Fullname</label>
                    <input 
                        type="text" 
                        id="input-name"
                        data-testid="name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="profilePicture">Link Profile Picture</label>
                    <input 
                        type="text" 
                        id="profilePicture"
                        data-testid="profilePicture"
                        value={profPict}
                        onChange={(e) => setProfpict(e.target.value)}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        id="address"
                        data-testid="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="text" 
                        id="phoneNumber"
                        data-testid="phoneNumber"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="input-date">Birth Date</label>
                    <input 
                        type="date" 
                        id="input-date" 
                        data-testid="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

                    <label htmlFor="input-gender">Gender</label>
                    <select 
                        id="input-gender"
                        data-testid="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label htmlFor="input-prody">Program Study</label>
                    <select 
                        id="input-prody"
                        data-testid="prody"
                        value={programstudy}
                        onChange={(e) => setProgramstudy(e.target.value)}
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
                        Add Student
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddStudent;
