export default function TableHead() {
  return (
    <thead>
      <tr className="grid grid-cols-5 gap-8 mb-6">
        <th className="text-left">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded text-[#00C875] checked:text-[#00C875] checked:border-[#00C875] focus:ring-0"
            />
            <span className="text-sm font-medium">Modüller</span>
          </div>
        </th>
        <th className="text-left">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded text-[#00C875] checked:text-[#00C875] checked:border-[#00C875] focus:ring-0"
            />
            <span className="text-sm font-medium">Görebilir</span>
          </div>
        </th>
        <th className="text-left">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded text-[#00C875] checked:text-[#00C875] checked:border-[#00C875] focus:ring-0"
            />
            <span className="text-sm font-medium">Oluşturabilir</span>
          </div>
        </th>
        <th className="text-left">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded text-[#00C875] checked:text-[#00C875] checked:border-[#00C875] focus:ring-0"
            />
            <span className="text-sm font-medium">Düzenleyebilir</span>
          </div>
        </th>
        <th className="text-left">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded text-[#00C875] checked:text-[#00C875] checked:border-[#00C875] focus:ring-0"
            />
            <span className="text-sm font-medium">Silebilir</span>
          </div>
        </th>
      </tr>
    </thead>
  );
}
