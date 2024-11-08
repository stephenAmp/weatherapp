import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import avatar from '../assets/avatar.png'


export default function Header(){
    
    return(
        <>
            <div className="header-container">
                <div className='search-bar'>
                    <i class="bi bi-search"></i>
                    <input type='text' placeholder='Search for location' style={{border:'none',outline:'none', flex:1}}
                    />
                </div>
                <div className='profile'>
                    <i className="bi bi-bell notification-icon me-3"></i>
                    <img className='profile-img' src={avatar} alt="Profile" />
                </div>
            </div>
        </>
    )
}