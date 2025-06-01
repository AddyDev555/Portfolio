import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const SelectDropdown = ({
    options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    placeholder = "Select an option",
    value,
    onChange,
    disabled = false,
    error = false,
    className = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        setSelectedValue(option.value);
        setIsOpen(false);
        if (onChange) {
            onChange(option);
        }
    };

    const selectedOption = options.find(opt => opt.value === selectedValue);

    return (
        <div className={`relative w-full ${className}`} ref={dropdownRef}>
            {/* Dropdown Trigger */}
            <button
                type="button"
                className={`
          w-full flex items-center justify-between px-4 py-3 text-left
          border rounded-lg transition-all duration-200 outline-none
          ${disabled
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }
          ${error
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-300'
                    }
          ${isOpen ? 'border-blue-500 ring-2 ring-blue-200' : ''}
        `}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
            >
                <span className={`truncate ${selectedOption ? 'text-gray-900' : 'text-gray-500'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 
            ${isOpen ? 'rotate-180' : ''} 
            ${disabled ? 'opacity-50' : ''}
          `}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && !disabled && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {options.length === 0 ? (
                        <div className="px-4 py-3 text-gray-500 text-center">
                            No options available
                        </div>
                    ) : (
                        options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                className={`
                  w-full flex items-center justify-between px-4 py-3 text-left
                  hover:bg-blue-50 transition-colors duration-150
                  ${selectedValue === option.value
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-900'
                                    }
                  ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
                                onClick={() => !option.disabled && handleSelect(option)}
                                disabled={option.disabled}
                            >
                                <span className="truncate">{option.label}</span>
                                {selectedValue === option.value && (
                                    <Check className="h-4 w-4 text-blue-700 ml-2 flex-shrink-0" />
                                )}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};