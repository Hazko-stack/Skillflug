
export default function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-3 bg-gray-100 rounded-md shadow">
      <span className="text-center sm:text-left mb-2 sm:mb-0">{todo.text}</span>
      <button
        className="btn btn-error btn-xs sm:btn-sm"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
