function StatCard({title, value})
{
    return (
        <div style={{background:"#f1f5f9",
            padding:"20px",
            borderRadius:"8px",
            width:"200px",
        }}>
            <h4>{title}</h4>
            <p style={{ fontSize:"24px", fontWeight:"bold"}}>{value}</p>
        </div>
    );
}
export default StatCard;