import clientPromise from '@/lib/mongodb';
import { Package, User, Mail, DollarSign, Calendar, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Admin Dashboard | Orders',
};

// Next.js config to not cache this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function login(formData: FormData) {
  'use server'
  const password = formData.get('password');
  if (password === process.env.ADMIN_PASSWORD) {
    (await cookies()).set('admin_token', password as string, { secure: true, httpOnly: true, maxAge: 60 * 60 * 24 });
    redirect('/admin/orders');
  }
}

export default async function AdminOrdersPage() {
  const token = (await cookies()).get('admin_token')?.value;

  if (token !== process.env.ADMIN_PASSWORD) {
    return (
      <div className="min-h-screen bg-[var(--color-paper)] flex items-center justify-center p-6 font-sans">
        <form action={login} className="bg-white border-[4px] border-[#2d2d2d] p-10 max-w-md w-full wobbly hard-shadow-lg rotate-1 text-center">
          <h1 className="text-3xl font-heading font-extrabold text-[#2d2d2d] mb-6">Admin Login</h1>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter Admin Password" 
            className="w-full px-4 py-3 bg-white border-[3px] border-[#2d2d2d] wobbly-sm text-xl mb-6 text-[#2d2d2d] focus:outline-none focus:border-[#ff4d4d] focus:ring-0"
          />
          <button type="submit" className="w-full py-3 bg-[#ff4d4d] text-white font-bold text-xl border-[3px] border-[#2d2d2d] wobbly hover:translate-y-1 hover:translate-x-1 hover:hard-shadow-none hard-shadow-sm transition-all">
            Login
          </button>
        </form>
      </div>
    );
  }

  let orders: any[] = [];
  
  try {
    const client = await clientPromise;
    const db = client.db('bookstore');
    orders = await db.collection('orders').find({}).sort({ date: -1 }).toArray();
  } catch (e) {
    console.error('Failed to fetch from MongoDB:', e);
    orders = [];
  }

  const totalSales = orders.filter((o: any) => o.status === 'Paid').length;
  const totalRevenue = orders.filter((o: any) => o.status === 'Paid').reduce((acc: number, order: any) => {
    const priceMatch = order.price.match(/\d+/);
    return acc + (priceMatch ? parseInt(priceMatch[0]) : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-[var(--color-paper)] p-6 sm:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-4xl font-heading font-extrabold text-[#2d2d2d]">
            📦 Orders Dashboard
          </h1>
          <Link href="/" className="px-6 py-2 bg-white border-[3px] border-[#2d2d2d] wobbly font-bold hover:bg-[var(--color-brand-50)] transition-colors">
            Back to Site
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border-[3px] border-[#2d2d2d] p-6 wobbly-sm hard-shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 bg-[#dcfce7] rounded-full border-[3px] border-[#2d2d2d] flex items-center justify-center shrink-0">
              <Package size={32} className="text-[#2d2d2d]" />
            </div>
            <div>
              <p className="text-lg font-bold opacity-70">Total Orders</p>
              <p className="text-3xl font-heading font-extrabold">{orders.length}</p>
            </div>
          </div>
          <div className="bg-white border-[3px] border-[#2d2d2d] p-6 wobbly-sm hard-shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 bg-[var(--color-pastel-blue)] rounded-full border-[3px] border-[#2d2d2d] flex items-center justify-center shrink-0">
              <CheckCircle2 size={32} className="text-[#2d2d2d]" />
            </div>
            <div>
              <p className="text-lg font-bold opacity-70">Paid Orders</p>
              <p className="text-3xl font-heading font-extrabold">{totalSales}</p>
            </div>
          </div>
          <div className="bg-white border-[3px] border-[#2d2d2d] p-6 wobbly-sm hard-shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 bg-[#fef08a] rounded-full border-[3px] border-[#2d2d2d] flex items-center justify-center shrink-0">
              <DollarSign size={32} className="text-[#2d2d2d]" />
            </div>
            <div>
              <p className="text-lg font-bold opacity-70">Est. Revenue</p>
              <p className="text-3xl font-heading font-extrabold">{totalRevenue}+</p>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white border-[4px] border-[#2d2d2d] hard-shadow-lg overflow-hidden wobbly-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[var(--color-brand-100)] border-b-[4px] border-[#2d2d2d]">
                  <th className="p-4 font-bold text-xl border-r-[3px] border-dashed border-[#2d2d2d]">Order ID</th>
                  <th className="p-4 font-bold text-xl border-r-[3px] border-dashed border-[#2d2d2d]">Customer</th>
                  <th className="p-4 font-bold text-xl border-r-[3px] border-dashed border-[#2d2d2d]">Book</th>
                  <th className="p-4 font-bold text-xl border-r-[3px] border-dashed border-[#2d2d2d]">Price</th>
                  <th className="p-4 font-bold text-xl border-r-[3px] border-dashed border-[#2d2d2d]">Status</th>
                  <th className="p-4 font-bold text-xl">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-xl font-bold opacity-60">
                      No orders yet. They will appear here!
                    </td>
                  </tr>
                ) : (
                  orders.map((order: any, idx: number) => (
                    <tr key={order.id} className={`border-b-[3px] border-dashed border-[#2d2d2d] hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="p-4 border-r-[3px] border-dashed border-[#2d2d2d]">
                        <span className="font-heading font-bold text-[#ff4d4d]">{order.id}</span>
                        <div className="text-sm opacity-60 mt-1 break-all">PID: {order.paymentId}</div>
                      </td>
                      <td className="p-4 border-r-[3px] border-dashed border-[#2d2d2d]">
                        <div className="font-bold flex items-center gap-2">
                          <User size={16} /> {order.name}
                        </div>
                        <div className="flex items-center gap-2 opacity-80 mt-1">
                          <Mail size={16} /> {order.email}
                        </div>
                        <div className="text-sm opacity-60 mt-1">{order.country} | {order.phone}</div>
                      </td>
                      <td className="p-4 border-r-[3px] border-dashed border-[#2d2d2d] font-bold">
                        {order.bookTitle}
                      </td>
                      <td className="p-4 border-r-[3px] border-dashed border-[#2d2d2d] font-bold text-[#ff4d4d]">
                        {order.price}
                      </td>
                      <td className="p-4 border-r-[3px] border-dashed border-[#2d2d2d]">
                        {order.status === 'Paid' ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#dcfce7] text-green-800 border-[2px] border-[#2d2d2d] font-bold rounded-full text-sm">
                            <CheckCircle2 size={14} /> Paid
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#fef08a] text-yellow-800 border-[2px] border-[#2d2d2d] font-bold rounded-full text-sm">
                            <Clock size={14} /> Pending
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 opacity-80">
                          <Calendar size={16} />
                          {new Date(order.date).toLocaleDateString()}
                        </div>
                        <div className="text-sm opacity-60 mt-1">
                          {new Date(order.date).toLocaleTimeString()}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
