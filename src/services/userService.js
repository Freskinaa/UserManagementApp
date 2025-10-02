export const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  } else {
    return response.json();
  }
};

export const getUserDetails = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user details");
  } else {
    return response.json();
  }
};
