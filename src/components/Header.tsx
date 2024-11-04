import { useState, useRef, useEffect } from 'react'
import {
  CalendarDays,
  ChevronDown,
  CirclePlus,
  Edit,
  Filter,
  Search,
  SquareCheckBig,
} from 'lucide-react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { tr } from 'date-fns/locale'

const useDropdown = () => {
  const [options, setOptions] = useState(false)
  const optionsElement = useRef<HTMLDivElement>(null)

  const toggleDropdown = (): void => {
    setOptions(!options)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsElement.current &&
        !optionsElement.current.contains(event.target as Node)
      ) {
        setOptions(false)
      }
    }

    if (options) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [options])

  return { toggleDropdown, options, setOptions, optionsElement }
}

registerLocale('tr', tr)
setDefaultLocale('tr')

export default function Header() {
  const { toggleDropdown, options, setOptions, optionsElement } = useDropdown()

  const [selectedGroup, setSelectedGroup] = useState("Satış Grubu")
  const [searchQuery, setSearchQuery] = useState("")
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleGroupSelection = (group: string) => {
    setSelectedGroup(group)
    setOptions(false)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 space-y-4 md:space-y-0">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-gray-900">
            Grup Yetkileri
          </h1>

          <div ref={optionsElement} className="relative flex items-center rounded-l-full w-64">
            <button
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium focus:outline-none bg-white rounded-l-full"
              aria-expanded={options ? "true" : "false"}
              onClick={toggleDropdown}
            >
              <span>{selectedGroup}</span>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>

            <button className="px-3 py-2 text-[#8751DC] bg-[#E6E6FF] rounded-r-full hover:bg-[#6e41b5] hover:text-white transition duration-150 focus:outline-none">
              <CirclePlus className="h-5 w-5" />
            </button>

            {options && (
              <div className="absolute z-10 top-full left-0 mt-1 w-64 rounded-md bg-white shadow-lg border border-gray-200">
                <div className="py-1">
                  {["Satış Grubu", "Destek Grubu", "Müşteri Hizmetleri", "Teknik Ekip", "Yönetim", "İnsan Kaynakları"].map((group) => (
                    <button
                      key={group}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                      onClick={() => handleGroupSelection(group)}
                    >
                      {group}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-0">
          <button className="flex gap-2 px-4 py-2 items-center text-[#8751DC] bg-[#E6E6FF] rounded-l-full hover:bg-[#6e41b5] hover:text-white transition duration-150 focus:outline-none border border-gray-300 border-l-0">
            <Filter className="h-4 w-4" />
            Filtrele
          </button>
          <div className="flex items-center bg-white border border-gray-300 px-2 py-1 w-48 md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow h-8 border-none focus:outline-none focus:ring-0 focus:border-none"
            />
            <Search className="h-5 w-5 text-gray-400 ml-2" />
          </div>
          <button
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            className="px-4 py-2 text-[#8751DC] bg-[#E6E6FF] rounded-r-full hover:bg-[#6e41b5] hover:text-white transition duration-150 focus:outline-none border border-gray-300 border-l-0"
          >
            <CalendarDays className="h-6 w-5" />
          </button>

          {isDatePickerOpen && (
            <div className="absolute z-10 mt-72 ml-44">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date)
                  setIsDatePickerOpen(false)
                }}
                inline
                locale="tr"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 mr-4 justify-end">
        <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#8751DC] shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-150">
          <span>Düzenle</span>
          <Edit className="h-4 w-4 text-[#8751DC]" />
        </button>

        <button className="flex items-center gap-2 rounded-full bg-[#8751DC] px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#6e41b5] transition duration-150">
          Kaydet
          <SquareCheckBig className="h-4 w-4" />
        </button>
      </div>
    </>
  )
}