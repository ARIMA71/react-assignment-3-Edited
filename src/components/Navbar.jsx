import { Link } from 'react-router-dom';

const NavBar = () => {
    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1rem'
    };
    
    return (
        <nav style={{
            backgroundColor: '#0077b6',  
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Link data-testid="home-page" to={'/'} style={linkStyle}>Student Portal</Link>
            <Link data-testid="student-page" to={'/student'} style={linkStyle}>All Student</Link>
            <Link data-testid="add-page" to={'/add'} style={linkStyle}>Add Student</Link>
        </nav>
    );
};

export default NavBar;
