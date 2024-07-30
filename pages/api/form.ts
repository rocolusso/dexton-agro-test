// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {

    const res1 = await fetch(`https://dexton-agro-tg-sender.vercel.app/form`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(req.body)
    })

    console.log(res1)

    res.status(200).json({
        formSended:  req.body
    });

}
