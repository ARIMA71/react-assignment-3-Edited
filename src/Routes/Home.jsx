import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/ROO.png';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            position: 'relative',
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff'
        }}>
            {/* Overlay warna biru laut */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 119, 182, 0.5)', // biru laut dengan saturasi 50%
                zIndex: 1
            }}></div>

            {/* Konten */}
            <div style={{ 
                position: 'relative', 
                zIndex: 2, 
                textAlign: 'center' 
            }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Welcome To Student Portal</h1>
                <button 
                    data-testid="student-btn" 
                    onClick={() => navigate('/student')}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        color: '#fff',
                        backgroundColor: 'rgba(0, 123, 255, 0.8)',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    All Student
                </button>
            </div>
        </div>
    )
};

export default Home;
