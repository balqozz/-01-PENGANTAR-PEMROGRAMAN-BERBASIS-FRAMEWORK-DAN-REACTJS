export default async function handler(req, res) {
    const API_KEY = "5beaf4f7d51b70009a38c943d4a6ee11"; // Ganti dengan API Key asli
    const city = req.query.city || "Jakarta";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Gagal mengambil data cuaca" });
    }
  }
  