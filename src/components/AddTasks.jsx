import { useState } from "react";
import Input from "./Input";
function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button
        className="bg-slate-500 text-white rounded-md font-medium"
        onClick={() => {
          if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, preencha todos os campos");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
