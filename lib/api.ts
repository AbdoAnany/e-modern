const API_URL = 'https://fakestoreapi.com';

export async function getProducts(limit?: number, sort?: 'asc' | 'desc') {
  const params = new URLSearchParams();
  if (limit) params.append('limit', limit.toString());
  if (sort) params.append('sort', sort);
  
  const response = await fetch(`${API_URL}/products?${params.toString()}`);
  return response.json();
}

export async function getProduct(id: number) {
  const response = await fetch(`${API_URL}/products/${id}`);
  return response.json();
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/products/categories`);
  return response.json();
}

export async function getProductsByCategory(category: string) {
  const response = await fetch(`${API_URL}/products/category/${category}`);
  return response.json();
}

export async function login(credentials: { username: string; password: string }) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}