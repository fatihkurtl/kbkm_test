
export default function Status() {
  return (
    <div className="mt-4 flex items-center gap-8 justify-end">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-[#E31E24]" />
        <span className="text-sm">Göremez</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-[#FDAB3D]" />
        <span className="text-sm">Görebilir</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-[#00C875]" />
        <span className="text-sm">Düzenleyebilir</span>
      </div>
    </div>
  );
}
