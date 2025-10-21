// Configurações da API
const API_BASE_URL = import.meta.env.VITE_API_URL || (
  import.meta.env.MODE === 'production' 
    ? 'https://techassist-landing-api.vercel.app/api' 
    : '/api'
);

// Interface para dados do contato
export interface ContactData {
  name: string;
  phone: string;
  email: string;
}


// Interface para resposta da API
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

// Classe para gerenciar requisições da API
class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // Método genérico para fazer requisições
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const finalOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, finalOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Erro HTTP: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

  // Submeter formulário de contato
  async submitContact(contactData: ContactData): Promise<ApiResponse> {
    return this.request('/contacts', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  // Verificar se a API está funcionando
  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health');
  }

  // Listar contatos (para uso administrativo)
  async getContacts(page: number = 1, limit: number = 10): Promise<ApiResponse> {
    return this.request(`/contacts?page=${page}&limit=${limit}`);
  }

  // Buscar contato por ID
  async getContact(id: string): Promise<ApiResponse> {
    return this.request(`/contacts/${id}`);
  }

  // Atualizar status do contato
  async updateContactStatus(id: string, status: string): Promise<ApiResponse> {
    return this.request(`/contacts/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }
}

// Instância singleton do serviço
export const apiService = new ApiService();

// Função helper para tratar erros da API
export const handleApiError = (error: any): string => {
  if (error.message) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'Erro inesperado. Tente novamente.';
};

export default apiService;
