// Sorting.jsx

import React from 'react';
import 'tailwindcss/tailwind.css';

function Sorting({ handleSortSelect }) {
    return (
        <div className="mt-4 flex items-center">
            <h1 className="mr-4"><b>Sort by:</b></h1>
            <div className="flex items-center space-x-2">
                <button
                    className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 py-2 px-4 rounded-full"
                    onClick={() => handleSortSelect("Price (Low to High)")}>
                    Price (Low to High)
                </button>
                <button
                    className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 py-2 px-4 rounded-full"
                    onClick={() => handleSortSelect("Price (High to Low)")}>
                    Price (High to Low)
                </button>
                <button
                    className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 py-2 px-4 rounded-full"
                    onClick={() => handleSortSelect("Customer Ratings (High to Low)")}>
                    Customer Ratings (High to Low)
                </button>
                <button
                    className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 py-2 px-4 rounded-full"
                    onClick={() => handleSortSelect("Customer Ratings (Low to High)")}>
                    Customer Ratings (Low to High)
                </button>
            </div>
        </div>
    );
}

export default Sorting;
