function TaskTable({tasks})
{
    return (
        <table border="1" cellPadding="10" style={{marginTop:"20px"}}>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task,index) => (
                    <tr key={index}>
                        <td>{task.title}</td>
                        <td>{task.completed ? "Completed":"Pending"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default TaskTable;