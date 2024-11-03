import { useState } from 'react';
import { CalendarDays, ChevronDown, Edit, Plus, Search } from 'lucide-react';

export default function Header() {
  const [selectedGroup, setSelectedGroup] = useState('Satış Grubu');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#F5F5FF] p-4 space-y-4 md:space-y-0">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-gray-900">Grup Yetkileri</h1>

        <div className="relative flex items-center rounded-full bg-white shadow-sm border border-gray-300">
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-l-full focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedGroup}
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </button>

          <button className="px-3 py-2 text-white bg-[#8751DC] rounded-r-full hover:bg-[#6e41b5] transition duration-150 focus:outline-none">
            <Plus className="h-5 w-5" />
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-32 w-full rounded-md bg-white shadow-lg border border-gray-200">
              <div className="py-1">
                {['Satış Grubu', 'Destek Grubu'].map((group) => (
                  <button
                    key={group}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    onClick={() => {
                      setSelectedGroup(group);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-full md:w-64">
          <Search className="h-5 w-5 text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow focus:outline-none"
          />
          <button className="ml-2">
            <CalendarDays className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#8751DC] shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-150">
            <span>Düzenle</span>
            <Edit className="h-4 w-4" />
          </button>

          <button className="rounded-full bg-[#8751DC] px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#6e41b5] transition duration-150">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}
