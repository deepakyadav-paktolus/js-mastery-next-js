import { NextRequest, NextResponse } from "next/server";

 export async function POST(req:NextRequest) {
    try {
        
    } catch (error) {
        console.log('error')
        return NextResponse.json({Message :'Event Creation Failed' , error: error instanceof Error ? error.message : 'Unknown error' , e: error  }, { status: 500 });
    }
 }

 