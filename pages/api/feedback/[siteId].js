import { getAllFeedback } from "@/lib/db-admin";

export default async function handler(req, res) {
  const { feedback, error } = await getAllFeedback(req.query.siteId);
  if (error) {
    return res.status(500).json({ error });
  }
  // res.status(200).json({ feedback });
  res.status(500).json({ error });
}
