import { Database, Table, Key, Box, ShoppingCart, CreditCard } from 'lucide-react';

export default function SqlSchemaPanel() {
    return (
        <div className="w-[340px] bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col h-full overflow-hidden shrink-0">
            <div className="bg-slate-800 p-3 text-white flex items-center justify-between border-b border-slate-700 shrink-0">
                <div className="flex items-center gap-2 font-bold text-sm">
                    <Database size={16} className="text-blue-400" />
                    <span>Database Schema</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-700 px-2 py-0.5 rounded">E-Commerce</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6 text-sm">

                {/* 1. Users */}
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2 border-b pb-1">
                        <span className="bg-blue-100 text-blue-700 p-1 rounded"><Table size={14} /></span>
                        Users
                    </h3>
                    <div className="font-mono text-xs bg-gray-50 p-2 rounded border border-gray-100 space-y-1">
                        <div className="flex justify-between items-center"><span className="text-blue-600 font-semibold flex items-center gap-1"><Key size={12} /> user_id</span> <span className="text-gray-500">INT (PK)</span></div>
                        <div className="flex justify-between"><span>full_name</span> <span className="text-gray-500">VARCHAR(100)</span></div>
                        <div className="flex justify-between"><span>email</span> <span className="text-gray-500">VARCHAR(100) UQ</span></div>
                        <div className="flex justify-between"><span>country</span> <span className="text-gray-500">VARCHAR(50)</span></div>
                        <div className="flex justify-between"><span>created_at</span> <span className="text-gray-500">TIMESTAMP</span></div>
                    </div>
                </div>

                {/* 2. Products */}
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2 border-b pb-1">
                        <span className="bg-purple-100 text-purple-700 p-1 rounded"><Box size={14} /></span>
                        Products
                    </h3>
                    <div className="font-mono text-xs bg-gray-50 p-2 rounded border border-gray-100 space-y-1">
                        <div className="flex justify-between items-center"><span className="text-blue-600 font-semibold flex items-center gap-1"><Key size={12} /> product_id</span> <span className="text-gray-500">INT (PK)</span></div>
                        <div className="flex justify-between"><span>product_name</span> <span className="text-gray-500">VARCHAR(100)</span></div>
                        <div className="flex justify-between"><span>category</span> <span className="text-gray-500">VARCHAR(50)</span></div>
                        <div className="flex justify-between"><span>price</span> <span className="text-gray-500">DECIMAL(10,2)</span></div>
                        <div className="flex justify-between"><span>stock</span> <span className="text-gray-500">INT</span></div>
                        <div className="flex justify-between"><span>created_at</span> <span className="text-gray-500">TIMESTAMP</span></div>
                    </div>
                </div>

                {/* 3. Orders */}
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2 border-b pb-1">
                        <span className="bg-orange-100 text-orange-700 p-1 rounded"><ShoppingCart size={14} /></span>
                        Orders
                    </h3>
                    <div className="font-mono text-xs bg-gray-50 p-2 rounded border border-gray-100 space-y-1">
                        <div className="flex justify-between items-center"><span className="text-blue-600 font-semibold flex items-center gap-1"><Key size={12} /> order_id</span> <span className="text-gray-500">INT (PK)</span></div>
                        <div className="flex justify-between items-center"><span className="text-amber-600 flex items-center gap-1"><Key size={12} className="opacity-50" /> user_id</span> <span className="text-gray-500">INT (FK)</span></div>
                        <div className="flex justify-between"><span>order_date</span> <span className="text-gray-500">DATE</span></div>
                        <div className="flex justify-between"><span>status</span> <span className="text-gray-500">VARCHAR(30)</span></div>
                    </div>
                </div>

                {/* 4. Order Items */}
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2 border-b pb-1">
                        <span className="bg-teal-100 text-teal-700 p-1 rounded"><ShoppingCart size={14} /></span>
                        Order Items
                    </h3>
                    <div className="font-mono text-xs bg-gray-50 p-2 rounded border border-gray-100 space-y-1">
                        <div className="flex justify-between items-center"><span className="text-blue-600 font-semibold flex items-center gap-1"><Key size={12} /> order_item_id</span> <span className="text-gray-500">INT (PK)</span></div>
                        <div className="flex justify-between items-center"><span className="text-amber-600 flex items-center gap-1"><Key size={12} className="opacity-50" /> order_id</span> <span className="text-gray-500">INT (FK)</span></div>
                        <div className="flex justify-between items-center"><span className="text-amber-600 flex items-center gap-1"><Key size={12} className="opacity-50" /> product_id</span> <span className="text-gray-500">INT (FK)</span></div>
                        <div className="flex justify-between"><span>quantity</span> <span className="text-gray-500">INT</span></div>
                        <div className="flex justify-between"><span>unit_price</span> <span className="text-gray-500">DECIMAL(10,2)</span></div>
                    </div>
                </div>

                {/* 5. Payments */}
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2 border-b pb-1">
                        <span className="bg-emerald-100 text-emerald-700 p-1 rounded"><CreditCard size={14} /></span>
                        Payments
                    </h3>
                    <div className="font-mono text-xs bg-gray-50 p-2 rounded border border-gray-100 space-y-1">
                        <div className="flex justify-between items-center"><span className="text-blue-600 font-semibold flex items-center gap-1"><Key size={12} /> payment_id</span> <span className="text-gray-500">INT (PK)</span></div>
                        <div className="flex justify-between items-center"><span className="text-amber-600 flex items-center gap-1"><Key size={12} className="opacity-50" /> order_id</span> <span className="text-gray-500">INT (FK)</span></div>
                        <div className="flex justify-between"><span>amount</span> <span className="text-gray-500">DECIMAL(10,2)</span></div>
                        <div className="flex justify-between"><span>payment_method</span> <span className="text-gray-500">VARCHAR(50)</span></div>
                        <div className="flex justify-between"><span>payment_status</span> <span className="text-gray-500">VARCHAR(30)</span></div>
                        <div className="flex justify-between"><span>payment_date</span> <span className="text-gray-500">DATE</span></div>
                    </div>
                </div>

                <div className="mt-6 p-3 bg-blue-50/50 border border-blue-100 rounded-lg">
                    <h4 className="font-bold text-blue-900 text-xs uppercase mb-2 tracking-wide">Sample Data Inserted</h4>
                    <ul className="text-xs text-blue-800 list-disc list-inside space-y-1">
                        <li>4 Users (Smith, Garcia, Lee, Ivanova)</li>
                        <li>4 Products (Laptop, Phone, Headphones, Chair)</li>
                        <li>4 Orders w/ Items</li>
                        <li>3 Payments (2 success, 1 failed)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
