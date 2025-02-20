import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 left-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-slate-100 font-bold text-center">
            Detalhes de Tarefas
          </h1>
        </div>
        <div className="bg-slate-200 rounded-md p-4">
          <h2 className="text-white font-bold text-xl text-slate-600">
            {title}
          </h2>
          <p className="text-white text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
