<?php
require_once "../model/ModellComentarios.php";
    if ($_POST["enviar"]) {
        $nombre = $_POST["nombre"];
        $comentarios = $_POST["comentario"];

        $v= new comentario;
        $v->comentarios("$nombre","$comentarios");
    }
?>