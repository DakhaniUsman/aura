
'use server';   // if using server components; otherwise omit

import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// —– Nodemailer setup —–
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// —– Google Sheets setup —–
const sheetsAuth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_SHEETS_CREDS,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

export async function POST(request) {
  try {
    const { name, number, date, problem } = await request.json();

    // 1) Send email
    await transporter.sendMail({
      from: `"AURA's Clinic" <${process.env.SMTP_USER}>`,
      to: 'dakhaniusman@gmail.com',
      subject: 'New Booking Request',
      html: `
        <h3>New Booking Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Appointment Date:</strong> ${date}</p>
        <p><strong>Problem:</strong> ${problem}</p>
        <p><strong>Enquiry done on:</strong>  ${new Date().toLocaleString()},
      `
    });

    // 2) Append to Google Sheet
    const client = await sheetsAuth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[ name, number, date, problem, new Date().toLocaleString() ]]
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}