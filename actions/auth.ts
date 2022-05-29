import { api } from "../utils/api";

type LoginResponse = {
  access: string;
  refresh: string;
};

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  const response = await api.request<LoginResponse>("/login/", {
    requiresAuthentication: false,
    method: "POST",
    body: { email, password },
  });

  await api.setToken({
    token: {
      accessToken: response.data.access,
      refreshToken: response.data.refresh,
    },
  });

  return response.data;
}

type RegisterResponse = {
  access: string;
  refresh: string;
};

export async function register(
  email: string,
  password: string,
  confirm_password: string
): Promise<RegisterResponse> {
  const response = await api.request<RegisterResponse>("/register/", {
    requiresAuthentication: false,
    method: "POST",
    body: { email, password, confirm_password },
  });
  return response.data;
}

type Biodata = {
  gender: "Male" | "Female" | "Others";
  level: "100" | "200" | "300" | "400" | "500";
  part: "Tenor" | "Alto" | "Soprano" | "HOD";
  department: string;
  reg_no?: number;
  matric_no: string;
};

export async function fillBiodata(
  inputData: Biodata
): Promise<Biodata> {
  const response = await api.request<Biodata>("/auth/biodata/", {
    requiresAuthentication: true,
    method: "PUT",
    body: inputData,
  });
  return response.data;
}
