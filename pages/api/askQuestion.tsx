// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session} = req.body;

    if(!prompt){
        res.status(400).json({answer:"Please Provide a prompt! "});
        return;
    }

    if (!chatId){
        res.status(400).json({answer: "please provide a valid chat ID! "});
        return;
    }

    // ChatGPT Query
    const response = await query(prompt, chatId, model)

    const message: Message ={
        text: response || "ChatGPT was unable to find an answer got that!",
        
    }

  res.status(200).json({ name: 'John Doe' });
}
