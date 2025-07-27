import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  try {
    const res = NextResponse.next()

    // Rotas públicas que não precisam de autenticação
    const publicRoutes = ["/", "/login", "/registro", "/esqueci-senha", "/redefinir-senha", "/auth/callback", "/api"]

    const isPublicRoute = publicRoutes.some(
      (route) => req.nextUrl.pathname === route || req.nextUrl.pathname.startsWith(route + "/"),
    )

    // Se for rota pública, permitir acesso
    if (isPublicRoute) {
      return res
    }

    // Para rotas protegidas, verificar autenticação
    const supabase = createMiddlewareClient({ req, res })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Se não estiver autenticado, redirecionar para login
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    return res
  } catch (error) {
    console.error("Erro no middleware:", error)
    // Em caso de erro, permitir acesso para não quebrar a aplicação
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.png (logo file)
     */
    "/((?!_next/static|_next/image|favicon.ico|logo.png).*)",
  ],
}
