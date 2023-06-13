export async function POST(request) {
  const apiKey = process.env.API_KEY;
  const res = await request.json();
  const city = res.city;
  const url = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return Response.json(data);
}
