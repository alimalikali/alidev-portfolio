// API client for making requests to the backend
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

// Generic fetch function with error handling
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_URL}${endpoint}`
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include", // Include cookies for authentication
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "An error occurred")
  }

  return response.json()
}

// Projects API
export const projectsAPI = {
  getAll: () => fetchAPI<{ projects: any[] }>("/api/projects"),
  getFeatured: () => fetchAPI<{ projects: any[] }>("/api/projects?featured=true"),
  getById: (id: string) => fetchAPI<{ project: any }>(`/api/projects/${id}`),
  getBySlug: (slug: string) => fetchAPI<{ project: any }>(`/api/projects/${slug}`),
  create: (data: any) =>
    fetchAPI<{ project: any }>("/api/projects", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    fetchAPI<{ project: any }>(`/api/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    fetchAPI<{ message: string }>(`/api/projects/${id}`, {
      method: "DELETE",
    }),
}

// Testimonials API
export const testimonialsAPI = {
  getAll: () => fetchAPI<{ testimonials: any[] }>("/api/testimonials"),
  getById: (id: string) => fetchAPI<{ testimonial: any }>(`/api/testimonials/${id}`),
  create: (data: any) =>
    fetchAPI<{ testimonial: any }>("/api/testimonials", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    fetchAPI<{ testimonial: any }>(`/api/testimonials/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    fetchAPI<{ message: string }>(`/api/testimonials/${id}`, {
      method: "DELETE",
    }),
}

// Experience API
export const experienceAPI = {
  getAll: () => fetchAPI<{ experiences: any[] }>("/api/experience"),
  getById: (id: string) => fetchAPI<{ experience: any }>(`/api/experience/${id}`),
  create: (data: any) =>
    fetchAPI<{ experience: any }>("/api/experience", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    fetchAPI<{ experience: any }>(`/api/experience/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    fetchAPI<{ message: string }>(`/api/experience/${id}`, {
      method: "DELETE",
    }),
}

// Settings API
export const settingsAPI = {
  getAll: () => fetchAPI<{ settings: Record<string, any> }>("/api/settings"),
  update: (data: Record<string, any>) =>
    fetchAPI<{ message: string }>("/api/settings", {
      method: "POST",
      body: JSON.stringify(data),
    }),
}

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    fetchAPI<{ user: any }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  logout: () =>
    fetchAPI<{ message: string }>("/api/auth/logout", {
      method: "POST",
    }),
  getUser: () => fetchAPI<{ user: any }>("/api/auth/user"),
  register: (name: string, email: string, password: string) =>
    fetchAPI<{ user: any }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    }),
}

// Combined API object
const api = {
  projects: projectsAPI,
  testimonials: testimonialsAPI,
  experience: experienceAPI,
  settings: settingsAPI,
  auth: authAPI,
}

export default api
