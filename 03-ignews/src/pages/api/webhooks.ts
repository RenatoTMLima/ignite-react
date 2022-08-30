import { NextApiRequest, NextApiResponse } from "next";

const webhooks = async (req: NextApiRequest, res: NextApiResponse) => {

  res.status(200).json({ ok: true })
}

export default webhooks