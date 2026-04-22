import { useState } from "react";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type AddExerciseFormProps = {
  onAdd: (exercise: {
    name: string;
    sets: string;
    reps: string;
    notes: string;
  }) => void;
};

export function AddExerciseForm({ onAdd }: AddExerciseFormProps) {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;

    onAdd({
      name,
      sets,
      reps,
      notes,
    });

    setName("");
    setSets("");
    setReps("");
    setNotes("");
  };

  return (
    <div className="space-y-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
      <Input
        placeholder="Название упражнения"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          placeholder="Подходы"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />

        <Input
          placeholder="Повторения"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>

      <Textarea
        placeholder="Заметки"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700"
      >
        <Plus className="h-4 w-4" />
        Добавить упражнение
      </button>
    </div>
  );
}