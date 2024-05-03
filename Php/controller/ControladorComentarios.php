<?php
require_once "../model/ModellComentarios.php";
    if ($_POST["enviar"]) {
        $correo = $_POST["correo"];
        $nombre = $_POST["nombre"];
        $comentarios = $_POST["comentario"];
        

        $v= new comentario;
        $v->comentarios("$correo","$nombre","$comentarios");
    }
?>