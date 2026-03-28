import {Link} from "react-router-dom";

function DashboardLayout({children})
{
    return (
        <div style={{ display:"flex", height:"100vh"}}>
            {/* Sidebar */}
            <aside style={{width:"200px",
                background:"#1e293b",
                color:"white",
                padding:"20px"
            }}>
                <h3>Dashboard</h3>
                <nav style={{display:"flex",flexDirection:"column",
                    gap:"10px"}}>
                    <Link to="/" style={{color:"white"}}>Home</Link>
                    <Link to="/tasks" style={{color:"white"}}>Tasks</Link>
                    <Link to="/about" style={{color:"white"}}>About</Link>
                </nav>
            </aside>
            
            {/* Main Content */}
            <main style={{flex:1,padding:"20px"}}>
                {children}
            </main>
        </div>
    );
}
export default DashboardLayout;