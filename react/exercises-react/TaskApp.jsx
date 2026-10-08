/**
 * Descripción del Problema:
 * En aplicaciones web modernas, la gestión de tareas o flujos de trabajo suele
 * sufrir de interfaces lentas o poco reactivas si se maneja el estado mediante 
 * manipulación directa del DOM (Vanilla JS). Además, los usuarios necesitan 
 * visualizar métricas en tiempo real (progreso, tareas pendientes) sin realizar 
 * recargas de página o sincronizaciones manuales.
 * 
 * En español:
 * Necesitamos construir un "Gestor de Tareas Interactivo" donde el usuario pueda
 * crear, marcar como completadas y eliminar tareas de forma dinámica. La interfaz 
 * debe reaccionar instantáneamente a los cambios de estado (actualizando tanto la 
 * lista como el contador de progreso) manteniendo la inmutabilidad de los datos.
 * 
 * Solución Óptima en React (Usando Hooks y Estado Declarativo):
 * 1. Manejo de Estado (`useState`): Centralizamos la lista de tareas en una variable
 *    de estado inmutable (`tasks`). Cada acción (agregar, modificar, eliminar) crea 
 *    una nueva referencia del arreglo, permitiendo a React re-renderizar eficientemente.
 * 2. Reactividad en Métricas: Calculamos las métricas (como `completedCount`) de manera
 *    derivada durante el renderizado, evitando guardar estados duplicados o redundantes.
 * 3. Renderizado Condicional y Mapeo: Usamos `.map()` con claves únicas (`key`) para 
 *    renderizar solo los elementos que cambian, optimizando el rendimiento del Virtual DOM.
 * 
 * Complejidad de Operaciones en Frontend:
 * - Agregar Tarea: O(1) tiempo / O(n) espacio -> Copia del arreglo con operador spread (`...`).
 * - Alternar / Eliminar Tarea: O(n) tiempo / O(n) espacio -> Recorrido del arreglo mediante `.map()` o `.filter()`.
 * - Renderizado Virtual DOM: O(n) en el peor de los casos al re-renderizar la lista.
 */

import React, { useState } from 'react';

export default function TaskApp() {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Aprender hooks de React', completed: true },
    { id: 2, title: 'Configurar entorno con Vite', completed: false }
  ]);

  // Estado para controlar el input del formulario
  const [taskText, setTaskText] = useState('');

  // 1. Agregar Tarea (Garantizando inmutabilidad)
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  // 2. Alternar Estado (Check/Uncheck)
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 3. Eliminar Tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Cálculo derivado en tiempo de ejecución
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <div className="card shadow-sm border-0 p-4">
        <h3 className="text-center mb-3">Gestor de Tareas</h3>

        {/* Indicador de métricas en tiempo real */}
        <div className="alert alert-info text-center py-2 mb-3">
          Completadas: <strong>{completedCount}</strong> / {tasks.length}
        </div>

        {/* Formulario */}
        <form onSubmit={handleAddTask} className="d-flex gap-2 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nueva tarea..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>

        {/* Lista de Tareas */}
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  className="form-check-input mt-0"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#888' : '#000'
                  }}
                >
                  {task.title}
                </span>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteTask(task.id)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>

        {/* Mensaje de estado vacío */}
        {tasks.length === 0 && (
          <p className="text-center text-muted mt-3 mb-0">
            No tienes tareas pendientes.
          </p>
        )}
      </div>
    </div>
  );
}