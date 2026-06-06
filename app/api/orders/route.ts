import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import clientPromise from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, country, bookId, bookTitle, price, paymentId } = data;

    if (!name || !email || !country || !bookId) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'localhost',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const paymentStatus = paymentId ? `Paid via Razorpay (ID: ${paymentId})` : 'Pending (Manual Payment)';
      const actionText = paymentId 
        ? 'Please deliver the PDF to the customer as they have already paid via Razorpay.'
        : 'Please contact the customer to arrange payment and deliver the PDF.';

      // 1. Send notification email to owner
      await transporter.sendMail({
        from: `"Store System" <${process.env.SMTP_USER || 'no-reply@store.com'}>`,
        to: process.env.OWNER_EMAIL,
        subject: `New Order: ${bookTitle} [${paymentId ? 'PAID' : 'PENDING'}]`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 3px solid #2d2d2d; padding: 0; background-color: #fffaf0;">
            <div style="background-color: #ff4d4d; color: white; padding: 20px; text-align: center; border-bottom: 3px solid #2d2d2d;">
              <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">🚨 New Order Received!</h1>
            </div>
            <div style="padding: 30px;">
              <div style="background-color: white; border: 2px dashed #2d2d2d; padding: 20px; margin-bottom: 20px;">
                <h2 style="margin-top: 0; color: #2d2d2d; border-bottom: 2px solid #eee; padding-bottom: 10px;">Customer Details</h2>
                <p style="margin: 8px 0; font-size: 16px;"><strong>👤 Name:</strong> ${name}</p>
                <p style="margin: 8px 0; font-size: 16px;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #2d5da1; text-decoration: none;">${email}</a></p>
                <p style="margin: 8px 0; font-size: 16px;"><strong>📱 Phone:</strong> ${phone || 'N/A'}</p>
                <p style="margin: 8px 0; font-size: 16px;"><strong>🌍 Country:</strong> ${country}</p>
              </div>
              
              <div style="background-color: white; border: 2px dashed #2d2d2d; padding: 20px;">
                <h2 style="margin-top: 0; color: #2d2d2d; border-bottom: 2px solid #eee; padding-bottom: 10px;">Order Details</h2>
                <p style="margin: 8px 0; font-size: 16px;"><strong>📖 Book:</strong> ${bookTitle}</p>
                <p style="margin: 8px 0; font-size: 16px;"><strong>💰 Price:</strong> <span style="background-color: #dcfce7; padding: 2px 8px; border: 1px solid #2d2d2d; border-radius: 12px; font-weight: bold; color: #166534;">${price}</span></p>
                <p style="margin: 8px 0; font-size: 16px;"><strong>💳 Status:</strong> ${paymentStatus}</p>
                <div style="margin-top: 20px; padding: 15px; background-color: #fef08a; border: 2px solid #2d2d2d; font-weight: bold; color: #854d0e; font-size: 15px; line-height: 1.5;">
                  📌 <strong>Action:</strong> ${actionText}
                </div>
              </div>
            </div>
            <div style="text-align: center; padding: 15px; border-top: 3px solid #2d2d2d; background-color: #f9f9f9; font-size: 12px; color: #666;">
              System generated notification from ${process.env.NEXT_PUBLIC_SITE_NAME || 'Book Store'}
            </div>
          </div>
        `,
      });

      const customerText = paymentId
        ? `<p>We have successfully received your payment via Razorpay.</p><p>The author will send you the PDF manually within 24 hours.</p>`
        : `<p>We have received your order request. Because we process payments manually, the author will send you an email shortly with payment instructions.</p><p>Once payment is confirmed, your PDF will be delivered within 24 hours.</p>`;

      // 2. Send confirmation email to customer
      await transporter.sendMail({
        from: `"${process.env.NEXT_PUBLIC_SITE_NAME || 'Book Store'}" <${process.env.SMTP_USER || 'no-reply@store.com'}>`,
        to: email,
        subject: `Order Received - ${bookTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 3px solid #2d2d2d; padding: 0; background-color: #fffaf0;">
            <div style="background-color: #2d5da1; color: white; padding: 30px 20px; text-align: center; border-bottom: 3px solid #2d2d2d;">
              <h1 style="margin: 0; font-size: 28px;">Thank You for Your Order! 🎉</h1>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #2d2d2d; margin-top: 0; font-size: 22px;">Hi ${name},</h2>
              <p style="font-size: 16px; line-height: 1.6; color: #444;">
                We're thrilled to confirm your order for <strong>"${bookTitle}"</strong>.
              </p>
              
              <div style="background-color: white; border: 2px solid #2d2d2d; border-left: 6px solid #ff4d4d; padding: 20px; margin: 25px 0;">
                <h3 style="margin-top: 0; color: #ff4d4d; font-size: 18px;">What happens next?</h3>
                <div style="font-size: 15px; line-height: 1.6; color: #333;">
                  ${customerText}
                </div>
              </div>
              
              <div style="background-color: #f8fafc; border: 2px dashed #cbd5e1; padding: 20px; text-align: center; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                  If you have any questions or need immediate assistance, simply reply to this email. We're here to help!
                </p>
              </div>
              
              <p style="font-size: 16px; color: #444; margin-top: 30px; line-height: 1.6;">
                Best regards,<br/>
                <strong>The ${process.env.NEXT_PUBLIC_SITE_NAME || 'Store'} Team</strong>
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.warn('Email sending failed (SMTP might not be configured):', emailError);
      // We log the error but DO NOT throw it, so the Razorpay checkout succeeds and redirects to Thank You page!
    }

    // 3. Save order to MongoDB
    const orderId = `ORD-${Date.now()}`;
    const newOrder = {
      id: orderId,
      name,
      email,
      phone: phone || 'N/A',
      country,
      bookId,
      bookTitle,
      price,
      paymentId: paymentId || 'Manual',
      status: paymentId ? 'Paid' : 'Pending',
      date: new Date().toISOString()
    };

    try {
      const client = await clientPromise;
      const db = client.db('bookstore'); // Creates db if it doesn't exist
      const collection = db.collection('orders');
      await collection.insertOne(newOrder);
    } catch (dbError) {
      console.error('MongoDB Error:', dbError);
      // Even if DB fails, if payment succeeded we should probably still return success, but maybe we should fail?
      // Since it's paid, we return success but owner will have to rely on email. 
      // Ideally we log it properly.
    }

    return NextResponse.json({ success: true, orderId }, { status: 200 });
  } catch (error) {
    console.error('Order API Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to process order' }, { status: 500 });
  }
}
