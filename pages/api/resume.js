// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const RESUME_URL =
  "https://gist.githubusercontent.com/igor-mircic/8720f698af269b85174ec5986e696c59/raw/resume.json";

export default async (req, res) => {
  try {
    const url = req.query.url ? decodeURI(req.query.url) : RESUME_URL;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(400);
  }
};
