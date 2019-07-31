import qs from "querystring";

const API_URL = "/api";

export function getBookings({ limit, offset, filters }) {
  const query = qs.stringify({ limit, offset, ...filters });
  return fetch(`${API_URL}/getBookings?${query}`).then(res => res.json());
}

export function createBooking(data) {
  return fetch(`${API_URL}/createBooking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
