import  logo  from  '../assets/logo1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Sidebar(){

    return(
        <>
            <div className="sidebar-container">
                <div className="sidebar-item">
                    <img src={logo} alt='logo' height={70} width={70}/>
                </div>
                <div className="sidebar-item">
                    <i class="bi bi-speedometer2 fs-4 sidebar-icons"></i>
                </div>
                <div className="sidebar-item">
                    <i class="bi bi-geo-alt fs-4 sidebar-icons"></i>
                </div>
                <div className="sidebar-item">
                    <i class="bi bi-gear fs-4 sidebar-icons"></i>
                </div>
            </div>
        </>
    )
}