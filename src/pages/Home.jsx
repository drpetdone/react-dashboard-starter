import StatCard from "../components/StatCard";

function Home()
{
    return (
        <div>
            <h2>Dashboard</h2>
            <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
                <StatCard title="Total Tasks" value="12" />
                <StatCard title="Completed" value="8" />
                <StatCard title="Pending" value="4" />
            </div>
        </div>
    );
}
export default Home;