import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/register', body)
  },
  LoginAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  },
  LogoutAccount() {
    return http.post('/logout')
  }
}

export default authApi
