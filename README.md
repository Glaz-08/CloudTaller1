# CloudTaller API

API simple
video en youtube: https://youtu.be/lHnYUbFzbMQ 


## Endpoints

### 1. GET `/` - Obtener Información Personal
Devuelve el nombre y apellido.

```bash
curl http://localhost:3000/
```

**Respuesta:**
```json
{
  "nombre": "Manuel",
  "apellido": "García"
}
```

### 2. GET `/:number` - Calcular Número
Recibe un parámetro numérico y devuelve: `(número + 5) * 2`

```bash
curl http://localhost:3000/10
```

**Respuesta:**
```json
{
  "resultado": 30
}
```

**Fórmula:** (10 + 5) * 2 = 30

### 3. POST `/` - Procesar Información
Recibe un JSON con nombre, edad y número N, y devuelve una frase y el cálculo.

```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "edad": 25, "n": 5}'
```

**Respuesta:**
```json
{
  "frase": "Juan tiene 25 años, y 25 dividido por 5 es 5.00",
  "calculo": 5
}
## Instalación y Ejecución

### Requisitos
- Node.js >= 18
- npm o yarn

### Backend

```bash
# Instalar dependencias (si no está hecho)
npm install

# Compilar TypeScript
npm run build

# Ejecutar servidor en desarrollo
npm run dev

# O ejecutar servidor compilado
npm start
```

El servidor estará disponible en: **http://localhost:3000**

### Frontend

```bash
# Navegar a la carpeta frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar en desarrollo (puerto 5173)
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

El frontend estará disponible en: **http://localhost:5173**

## Validación

El backend implementa validación automática con `class-validator`:

- **nombre:** Debe ser un string (requerido)
- **edad:** Debe ser un número mayor o igual a 0
- **n:** Debe ser un número mayor a 0.001

Cualquier error de validación retornará un error 400 con detalles.

## Despliegue en Railway

### Preparar para Railway

1. **Asegurar que el puerto se lee desde variables de entorno:**
   - El backend ya está configurado para usar `process.env.PORT || 3000`

2. **Crear archivos de configuración para Railway:**

```bash
# En la raíz del proyecto
railway link  # Conectar con Railway
railway up    # Desplegar
```

3. **Configurar el comando de inicio en Railway:**
   - **Build:** `npm install && npm run build`
   - **Start:** `npm start`

4. **Para el frontend (opcional, desplegar como sitio estático):**
   - Usar Vercel, Netlify o Railway con contenedor Docker

## URLs de Prueba (Local)

- **API Base:** http://localhost:3000
- **GET /:** http://localhost:3000/
- **GET /10:** http://localhost:3000/10
- **POST /:** http://localhost:3000/ (con body JSON)
- **Frontend:** http://localhost:5173

## Errores Esperados

El servidor **NO** devuelve errores 500 para validación. Todos los errores están manejados:

- **400 Bad Request:** Validación fallida
- **200 OK:** Éxito en todas las operaciones

## Tecnologías

- **Backend:** NestJS, Express, TypeScript
- **Validación:** class-validator, class-transformer
- **Frontend:** React 18, TypeScript, Vite
- **Estilos:** Tailwind CSS
- **HTTP:** Axios

## Autor

Creado para CloudTaller 2026




----------
railway

# Instalar CLI
npm install -g railway

# Conectar proyecto
railway link

# Desplegar
railway up