import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID del film mancante' });
  }

  try {
   
    const apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/${id}`;
    
    const response = await fetch(apiUrl, {
      headers: {
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
        "x-rapidapi-key": process.env.MOVIE_API_KEY || '',
      },
    });

    if (!response.ok) {
      throw new Error('Errore nel recuperare i dati da RapidAPI');
    }

    const data = await response.json();

   
    res.status(200).json({ movie: data.results });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Errore interno del server' });
  }
}