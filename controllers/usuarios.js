const { response, request } = require('express');

const usuariosGet = (req = request, res = response ) => {

  const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }

const usuariosPut = (req, res = response) => {

  const { id } = req.params;

    res.json({
        msg: 'Put API - usuariosPut',
        id
    });
  }

const usuariosPost = (req, res = response) => {

const {nombre, edad } = req.body;
    res.status(201).json({
        msg: 'Post API - usuariosPost',
        nombre,
        edad
    });
  }

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - usuariosDelete'
    });
  }

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - usuariosPatch'
    });
  }


  /*
  usuariosPost
  usuariosPut
  usuariosPatch
  usuariosDelete
  */

  module.exports = {

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

  }