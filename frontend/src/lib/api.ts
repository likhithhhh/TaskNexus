const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface ApiOptions extends RequestInit {
  requiresAuth?: boolean;
}

class ApiClient {
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private async request<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
    const { requiresAuth = true, ...fetchOptions } = options;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (requiresAuth) {
      const token = this.getToken();
      if (token) {
        (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
      }
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...fetchOptions,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  // Auth endpoints
  async login(email: string, password: string) {
    return this.request<{ token: string; user: User }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      requiresAuth: false,
    });
  }

  async register(username: string, email: string, password: string) {
    return this.request<{ message: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      requiresAuth: false,
    });
  }

  async getProfile() {
    return this.request<User>('/auth/profile');
  }

  // Task endpoints
  async getTasks() {
    return this.request<Task[]>('/tasks');
  }

  async createTask(data: CreateTaskData) {
    return this.request<Task>('/tasks', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTask(id: string, data: Partial<Task>) {
    return this.request<Task>(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteTask(id: string) {
    return this.request<{ message: string }>(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }
}

export const api = new ApiClient();

// Types
export interface User {
  _id: string;
  id?: string;
  username: string;
  email: string;
}

export interface Task {
  _id: string;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  createdAt: string;
  user: string;
}

export interface CreateTaskData {
  title: string;
  status?: 'Pending' | 'In Progress' | 'Completed';
}
