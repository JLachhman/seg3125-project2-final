import './Sidebar.css';
import logo from './logo.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>     FitSmart</h1>
                </div>
                <i 
                    className="fa fa-times" 
                    id="sidebarIcon" 
                    onClick={() => closeSidebar()}
                    aria-hidden="true">
                </i>
            </div>

                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <i className="fas fa-home"></i>
                        <a href="#">Home</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fas fa-utensils" aria-hidden="true"></i>
                        <a href="#">Nutrition</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fas fa-dumbbell"></i>
                        <a href="#">Exercise</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fas fa-heartbeat"></i>
                        <a href="#">Wellness</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fas fa-user-graduate"></i>
                        <a href="#">Education</a>
                    </div>
                    <div className="sidebar__logout">
                        <i className="fas fa-power-off"></i>
                        <a href="#">Log out</a>
                    </div>
                </div>
        </div>
    );
};

export default Sidebar;