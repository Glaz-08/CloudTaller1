import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

interface InfoResponse {
  nombre: string;
  apellido: string;
}

interface NumberResponse {
  resultado: number;
}

interface ProcessResponse {
  frase: string;
  calculo: number;
}

function App() {
  const [info, setInfo] = useState<InfoResponse | null>(null);
  const [number, setNumber] = useState<string>('10');
  const [numberResult, setNumberResult] = useState<NumberResponse | null>(null);
  const [formData, setFormData] = useState({ nombre: '', edad: '', n: '' });
  const [processResult, setProcessResult] = useState<ProcessResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<InfoResponse>(`${API_URL}/`);
      setInfo(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al obtener la información');
    } finally {
      setLoading(false);
    }
  };

  const calculateNumber = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<NumberResponse>(`${API_URL}/${number}`);
      setNumberResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al calcular el número');
    } finally {
      setLoading(false);
    }
  };

  const processInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<ProcessResponse>(`${API_URL}/`, {
        nombre: formData.nombre,
        edad: parseInt(formData.edad),
        n: parseFloat(formData.n),
      });
      setProcessResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al procesar la información');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-2">
          CloudTaller API Test
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Prueba los 3 endpoints disponibles
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Endpoint 1: GET / */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Endpoint 1: GET /
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Retorna tu nombre y apellido
            </p>
            <button
              onClick={getInfo}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              {loading ? 'Cargando...' : 'Obtener Información'}
            </button>
            {info && (
              <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                <p className="text-sm">
                  <strong>Nombre:</strong> {info.nombre}
                </p>
                <p className="text-sm">
                  <strong>Apellido:</strong> {info.apellido}
                </p>
              </div>
            )}
          </div>

          {/* Endpoint 2: GET /:number */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Endpoint 2: GET /:number
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Calcula (número + 5) * 2
            </p>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Ingresa un número"
              className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:border-indigo-600"
            />
            <button
              onClick={calculateNumber}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              {loading ? 'Cargando...' : 'Calcular'}
            </button>
            {numberResult && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm">
                  <strong>Resultado:</strong> {numberResult.resultado}
                </p>
              </div>
            )}
          </div>

          {/* Endpoint 3: POST / */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Endpoint 3: POST /
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Procesa nombre, edad y número
            </p>
            <form onSubmit={processInfo}>
              <input
                type="text"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:border-indigo-600"
                required
              />
              <input
                type="number"
                placeholder="Edad"
                value={formData.edad}
                onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:border-indigo-600"
                required
              />
              <input
                type="number"
                placeholder="N (divisor)"
                value={formData.n}
                onChange={(e) => setFormData({ ...formData, n: e.target.value })}
                step="0.1"
                className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:border-indigo-600"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                {loading ? 'Cargando...' : 'Procesar'}
              </button>
            </form>
            {processResult && (
              <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm mb-2">
                  <strong>Frase:</strong> {processResult.frase}
                </p>
                <p className="text-sm">
                  <strong>Cálculo:</strong> {processResult.calculo.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* API Info */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-indigo-900 mb-3">
            Información de la API
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-700 font-mono">
              API URL: {API_URL}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Asegúrate de que el servidor backend esté corriendo en{' '}
              <code className="bg-gray-200 px-2 py-1 rounded">
                {API_URL}
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
