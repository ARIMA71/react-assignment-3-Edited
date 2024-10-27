import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
const url = 'http://localhost:3001/student';

const Student = () => {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const [filter, setFilter] = useState("All");

    const fetchData = () => {
        setLoading(true);
        fetch(`${url}`)
        .then((response) => response.json())
        .then((data) => {
            setStudents(data);
            setLoading(false); 
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
            setLoading(false); 
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteStudent = (id) => {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(() => fetchData());
    }

    const filterStudents = students.filter((student) => {
        return filter === "All" ? students : student.faculty === filter;
    });

    return (
        <>
            <NavBar />
            <div style={{ padding: '20px', backgroundColor: '#f0f4f8' }}>
                <select 
                    data-testid="filter" 
                    onChange={(e) => setFilter(e.target.value)} 
                    style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
                >
                    <option value="All">All</option>
                    <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                    <option value="Fakultas Teknik">Fakultas Teknik</option>
                    <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                    <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
                </select>
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    <table id="table-student" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#0077b6', color: '#fff' }}>
                                <th>No</th>
                                <th>Full Name</th>
                                <th>Birth Date</th>
                                <th>Gender</th>
                                <th>Faculty</th>
                                <th>Program Study</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterStudents.map((student, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                                    <td>{index + 1}</td>
                                    <td><Link to={`/student/${student.id}`}>{student.fullname}</Link></td>
                                    <td>{student.birthDate}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.faculty}</td>
                                    <td>{student.programStudy}</td>
                                    <td>
                                        <button
                                            type="button"
                                            style={{ backgroundColor: '#e63946', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '3px' }}
                                            data-testid={`delete-${student.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                deleteStudent(student.id)
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Student;
