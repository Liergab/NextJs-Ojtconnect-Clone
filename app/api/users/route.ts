import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export const POST = async(req:Request) => {

    try {
        const {firstname, lastname, password, role, email} = await req.json();

    const existingEmail = await db.user.findUnique({
        where:{
            email,
        }
    })

    if(existingEmail){
        return NextResponse.json(
            {   
                data:null,
                message:'Email Already used!'

            },{status:409}
        )
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const user = await db.user.create({
        data:{
            password:hashPassword,
            role,
            email,
            name:`${firstname} ${lastname}`
        }
    })

    return NextResponse.json(
        {
            data:user,
            message:'successfully created'
        },{status:201}
    )

        
    } catch (error) {
        console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Server Error: Something went wrong",
      },
      { status: 500 }
    );
        
    }

}

