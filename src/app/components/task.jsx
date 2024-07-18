
export default function task({ id, title, completed }) {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
            {title}
        </span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
    </div>
  )
}
