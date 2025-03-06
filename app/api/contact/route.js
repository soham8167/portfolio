


import { NextResponse } from "next/server";
import connectDb from "@/app/database/db";
import Contact from "@/app/models/contact";

export async function POST(request) {
  try {
    // Connect to the database
    await connectDb();
    
    // Parse the request body
    const body = await request.json();
    const { fullname, email, subject, message } = body;
    
    // Validate the input
    const errors = [];
    
    if (!fullname) errors.push("Name is required");
    if (!email) errors.push("Email is required");
    if (!message) errors.push("Message is required");
    
    if (errors.length > 0) {
      return NextResponse.json({ success: false, msg: errors }, { status: 400 });
    }
    
    // Create a new contact document
    const newContact = await Contact.create({
      fullname,
      email,
      subject,
      message
    });
    
    return NextResponse.json({ 
      success: true, 
      msg: ["Message sent successfully!"],
      contact: newContact 
    }, { status: 201 });
    
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json({ 
      success: false, 
      msg: ["Server error, please try again later"] 
    }, { status: 500 });
  }
}