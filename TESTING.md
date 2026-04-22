# Instrucciones de Prueba - CloudTaller API

## ✅ Estado Actual

### Backend (NestJS)
- **URL:** http://localhost:3000
- **Estado:** ✅ En ejecución
- **Puertos usados:** 3000

### Frontend (React + Tailwind)
- **URL:** http://localhost:5173
- **Estado:** ✅ En ejecución
- **Puertos usados:** 5173

---

## 🧪 Pruebas de Endpoints

### 1️⃣ GET / - Obtener Información Personal

**Descripción:** Devuelve nombre y apellido

**URL:** `http://localhost:3000/`

**Comando cURL:**
```bash
curl http://localhost:3000/
```

**Respuesta esperada:**
```json
{
  "nombre": "Manuel",
  "apellido": "García"
}
```

---

### 2️⃣ GET /:number - Calcular Número

**Descripción:** Calcula (número + 5) * 2

**URL:** `http://localhost:3000/10`

**Comando cURL:**
```bash
curl http://localhost:3000/10
```

**Respuesta esperada:**
```json
{
  "resultado": 30
}
```

**Cálculo:** (10 + 5) * 2 = 30

**Ejemplos adicionales:**
- `http://localhost:3000/5` → resultado: 20 (5+5)*2
- `http://localhost:3000/100` → resultado: 210 (100+5)*2
- `http://localhost:3000/0` → resultado: 10 (0+5)*2

---

### 3️⃣ POST / - Procesar Información

**Descripción:** Recibe nombre, edad y número N, devuelve frase y cálculo

**URL:** `http://localhost:3000/`

**Comando cURL:**
```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "edad": 25, "n": 5}'
```

**Respuesta esperada:**
```json
{
  "frase": "Juan tiene 25 años, y 25 dividido por 5 es 5.00",
  "calculo": 5
}
```

**Cálculo:** 25 / 5 = 5

**Ejemplos adicionales:**
```bash
# Ejemplo 2
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"nombre": "María", "edad": 30, "n": 2}'
# Resultado: 30 / 2 = 15.00

# Ejemplo 3
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Carlos", "edad": 100, "n": 4}'
# Resultado: 100 / 4 = 25.00
```

---

## ✅ Validación

El sistema implementa validación automática con **class-validator**. Todos los errores de validación devuelven **400 Bad Request**, NO 500.

### Prueba de Validación

```bash
# Datos inválidos - edad como string
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "edad": "veinticinco", "n": 5}'
```

**Respuesta (400 Bad Request):**
```json
{
  "message": [
    "edad must be a number conforming to the specified constraints"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

### Reglas de Validación

- **nombre:** String requerido
- **edad:** Número ≥ 0
- **n:** Número > 0.001

---

## 🌐 Frontend de Prueba

Abre tu navegador y ve a:

### **http://localhost:5173**

El frontend incluye:
- ✅ Interfaz bonita con Tailwind CSS
- ✅ Botón para probar GET /
- ✅ Input para probar GET /:number
- ✅ Formulario para probar POST /
- ✅ Visualización en tiempo real de respuestas
- ✅ Manejo de errores

---

## 📁 Estructura del Proyecto

```
CloudTaller1/
├── src/                           # Código backend NestJS
│   ├── main.ts                    # Punto de entrada
│   ├── app.module.ts              # Módulo principal
│   ├── app.controller.ts          # Controladores (rutas)
│   ├── app.service.ts             # Lógica de negocio
│   └── info.dto.ts                # DTO con validaciones
├── dist/                          # Código compilado
├── frontend/                      # Aplicación React
│   ├── src/
│   │   ├── App.tsx                # Componente principal
│   │   ├── main.tsx               # Punto de entrada React
│   │   └── index.css              # Estilos Tailwind
│   └── index.html                 # HTML base
├── Dockerfile                     # Para despliegue en Railway
├── package.json                   # Dependencias backend
├── tsconfig.json                  # Configuración TypeScript
└── README.md                      # Documentación completa
```

---

## 🚀 Despliegue en Railway

### Preparación

1. **Instala Railway CLI:**
   ```bash
   npm install -g railway
   ```

2. **Conecta tu proyecto:**
   ```bash
   cd c:\Users\manue\OneDrive\Documentos\repo1\CloudTaller1
   railway link
   ```

3. **Despliega:**
   ```bash
   railway up
   ```

4. **Configura variables de entorno en Railway:**
   - `PORT=3000` (automático)

5. **Railway ejecutará:**
   - Build: `npm install && npm run build`
   - Start: `npm start`

---

## 🔧 Comandos Útiles

### Backend

```bash
# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar en desarrollo (usa ts-node)
npm run dev

# Ejecutar servidor compilado
npm start
```

### Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

---

## 📊 Resumen de Cumplimiento

✅ **Requisito:** 3 Endpoints
- ✅ GET / (retorna nombre y apellido)
- ✅ GET /:number (calcula (n+5)*2)
- ✅ POST / (procesa nombre, edad, n)

✅ **Requisito:** Sin errores 500
- ✅ Validación implementada con class-validator
- ✅ Todos los errores son 400 Bad Request

✅ **Requisito:** Frontend opcional
- ✅ Frontend React con Tailwind CSS incluido
- ✅ Interfaz de prueba interactiva

✅ **Requisito:** Listo para Railway
- ✅ Dockerfile incluido
- ✅ Configuración para puerto dinámico
- ✅ Build y start scripts configurados

---

## ⚠️ Notas Importantes

1. Mantén ambos servidores corriendo para pruebas locales
2. El frontend se conecta a `http://localhost:3000` por defecto
3. CORS está habilitado en el backend
4. En Railway, ajusta VITE_API_URL en el frontend

---

Creado para CloudTaller 2026
