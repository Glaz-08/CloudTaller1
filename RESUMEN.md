# 🎯 CloudTaller API - Resumen de Entrega

## ✅ COMPLETADO

Se ha creado una API REST completa con backend NestJS y frontend React lista para despliegue en Railway.

---

## 🌍 URLs EN EJECUCIÓN (LOCAL)

### Backend API
```
http://localhost:3000
```

### Frontend Web
```
http://localhost:5173
```

---

## 📡 ENDPOINTS DISPONIBLES

### 1. GET / 
**Obtiene información personal**
```
http://localhost:3000/
```
Respuesta:
```json
{
  "nombre": "Manuel",
  "apellido": "García"
}
```

---

### 2. GET /:number
**Calcula (número + 5) * 2**

Ejemplos:
- `http://localhost:3000/5` → `{"resultado": 20}`
- `http://localhost:3000/10` → `{"resultado": 30}`
- `http://localhost:3000/15` → `{"resultado": 40}`

Fórmula: `(n + 5) * 2`

---

### 3. POST /
**Procesa nombre, edad y número**

```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "edad": 25, "n": 5}'
```

Respuesta:
```json
{
  "frase": "Juan tiene 25 años, y 25 dividido por 5 es 5.00",
  "calculo": 5
}
```

Parámetros requeridos:
- `nombre` (string)
- `edad` (número ≥ 0)
- `n` (número > 0)

---

## ✅ VALIDACIÓN

### Sin errores 500 ✓
Todos los errores de validación devuelven **400 Bad Request**

Ejemplo:
```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "edad": "invalid", "n": 5}'
```

Respuesta:
```json
{
  "message": [
    "edad must be a number conforming to the specified constraints"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

---

## 🎨 FRONTEND

Acceso en: **http://localhost:5173**

### Características:
- ✅ Interfaz moderna con Tailwind CSS
- ✅ Prueba interactiva de los 3 endpoints
- ✅ Validación en tiempo real
- ✅ Manejo de errores
- ✅ Respuestas visuales

---

## 📦 TECNOLOGÍAS

### Backend
- **Framework:** NestJS 11
- **Lenguaje:** TypeScript
- **Validación:** class-validator
- **Runtime:** Node.js

### Frontend
- **Framework:** React 18
- **Build:** Vite
- **Estilos:** Tailwind CSS
- **HTTP Client:** Axios

---

## 🚀 DESPLIEGUE EN RAILWAY

### Paso 1: Instalar Railway CLI
```bash
npm install -g railway
```

### Paso 2: Conectar Proyecto
```bash
cd c:\Users\manue\OneDrive\Documentos\repo1\CloudTaller1
railway link
```

### Paso 3: Desplegar
```bash
railway up
```

### Configuración automática:
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Puerto: Automático (variable PORT)
- Dockerfile: Incluido ✓

### URL después del despliegue:
```
https://cloudtaller1-production.up.railway.app
```

---

## 📁 ARCHIVOS CREADOS

### Backend
```
src/
├── main.ts                 # Punto de entrada con validación global
├── app.module.ts          # Módulo NestJS
├── app.controller.ts      # 3 endpoints REST
├── app.service.ts         # Lógica de negocios
└── info.dto.ts           # DTO con validaciones

dist/                      # Código compilado

Dockerfile                 # Para Railway
tsconfig.json             # Configuración TypeScript
package.json              # Dependencias
```

### Frontend
```
frontend/
├── src/
│   ├── App.tsx           # Componente React principal
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Tailwind CSS
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── package.json

.env                      # Variables de entorno
```

### Documentación
```
README.md                  # Documentación completa
TESTING.md                # Guía de pruebas detallada
railway.json              # Configuración Railway
.gitignore               # Archivos ignorados en git
```

---

## 🧪 COMANDOS PARA PRUEBAS RÁPIDAS

### En PowerShell (Windows)

```powershell
# GET /
Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing

# GET /10
Invoke-WebRequest -Uri "http://localhost:3000/10" -UseBasicParsing

# POST /
$body = @{ nombre = "Juan"; edad = 25; n = 5 } | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:3000/" `
  -Method POST `
  -Body $body `
  -ContentType "application/json" `
  -UseBasicParsing
```

### En Bash/Git Bash

```bash
# GET /
curl http://localhost:3000/

# GET /10
curl http://localhost:3000/10

# POST /
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "edad": 25, "n": 5}'
```

---

## 📊 ESTADO ACTUAL

| Componente | Estado | Puerto |
|-----------|--------|--------|
| Backend API | ✅ En ejecución | 3000 |
| Frontend Web | ✅ En ejecución | 5173 |
| Compilación | ✅ Exitosa | - |
| Validación | ✅ Funcional | - |
| CORS | ✅ Habilitado | - |

---

## 📝 PRÓXIMOS PASOS

1. **Probar los endpoints** en `http://localhost:5173`
2. **Desplegar en Railway** con `railway up`
3. **Actualizar frontend .env** con URL de Railway después del despliegue

---

## 📞 SOPORTE

Si necesitas cambios:
- Nombre/apellido: Modificar en `src/app.service.ts`
- Validaciones: Ajustar en `src/info.dto.ts`
- Estilos: Editar `frontend/src/App.tsx`

---

**Proyecto completado para CloudTaller 2026** ✅
