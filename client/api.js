const API_URL = 'http://localhost:3000/api/ai';

async function sendToAI(data) {
  const res = await fetch(`${API_URL}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data })
  });

  return res.json();
}
