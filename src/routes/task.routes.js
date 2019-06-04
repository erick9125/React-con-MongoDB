const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//metodo para obtener todas las tareas
router.get('/', async(req, res) => {
    const tasks =  await Task.find();
   console.log(tasks);
   res.json(tasks);
});

//metodo para obtener solo una tarea
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

//metodo para enviar o guardar los datos
router.post('/', async (req, res) => {
    const { titulo , descripcion} =req.body;
    const task = new Task({titulo, descripcion});
    await task.save();
    res.json({status: 'Tarea Guardada'});
});

//metodo para actualizar
router.put('/:id', async (req, res) => {
    const { titulo, descripcion} = req.body;
    const newTask = { titulo,descripcion};
    await Task.findByIdAndUpdate(req.params.id, newTask)
    
    res.json({status:'Tarea Actualizada'});
})

//metodo para eliminar datos
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'Tarea eliminada'});
});

module.exports = router;