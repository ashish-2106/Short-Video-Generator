import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";


export async function POST(req){
    const formdata =await req.json();

    const result = await inngest.send({
        name:'generate-video-data',
        data:{
            ...formdata
        }
    });
    return NextResponse.json({result:result})
}