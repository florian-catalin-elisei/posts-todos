import "./PostsTodos.css";

export const PostsTodos = ({ titles, fetchPostsTodos }) => {
  return (
    <div className="PostsTodos">
      <button className="PostsTodos-button" onClick={() => fetchPostsTodos("posts")}>
        Posts
      </button>

      <button className="PostsTodos-button" onClick={() => fetchPostsTodos("todos")}>
        Todos
      </button>

      <div className="PostsTodos-list">
        <h3 className="PostsTodos-heading">Data</h3>

        <ol>
          {titles.map(({ title }, id) => (
            <li className="PostsTodos-item" key={id}>
              {title}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
