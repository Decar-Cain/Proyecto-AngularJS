var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
	$scope.nombre = "Carlos";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "Buen progreso",
			username: "Carlos"
		},
		{
			comentario: "Puedes mejorar",
			username: "Sergio"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});

