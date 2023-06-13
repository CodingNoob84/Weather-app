export async function POST(request) {
  const apiKey = process.env.API_KEY;
  const res = await request.json();
  const city = res.city;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return Response.json(data);
}
