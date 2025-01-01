// components/TodoList.js
import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div className="space-y-3 text-black">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
