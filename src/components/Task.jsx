function Task({ title, onDelete, completed, onToggle  })
{
    return (
        <li style={{ display:"flex",justifyContent:"space-between",
            margin:"5px 0"

        }}>
            <span 
            style={{textDecoration: completed ? "Line-through":"none", cursor:"pointer"}}
            onClick={onToggle} 
            >
                {title}
            </span>
            <button onClick={onDelete} style={{marginLeft:"10px"}}>Delete</button>
        </li>
    );
}
export default Task;