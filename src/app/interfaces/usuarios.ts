export interface Usuario {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    date_joined: Date;
    groups: number[];
    user_permissions: number[];
    preferencias_de_busca: {
      [key: string]: string;
      additionalProp1: string;
      additionalProp2: string;
      additionalProp3: string;
    };
    informacoes_de_contato: string;
}

export interface UsuarioCriarContaDTO {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_joined: Date;
  informacoes_de_contato: string;
}