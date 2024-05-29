document.addEventListener("DOMContentLoaded", function(){
    fetch(`/js/productos.json`)
        .then(response => response.json())
        .then(data => {

        const tableHTML = `

        <table class="table table table-hover">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descargas</th>
                <th>Categoria</th>
                <th>Descripción</th>
                <th>Año</th>
                <th>Empresa Desarrolladora</th>
                <th>Imagen</th>
                <th>    </th>
            </tr>

            ${data.productos.map(perfil => `
                <tr> 
                    <td>${perfil.id}</td>
                    <td>${perfil.nombre}</td>
                    <td>${perfil.precio}</td>
                    <td>${perfil.descargas}</td>
                    <td>${perfil.categoria}</td>
                    <td>${perfil.descripcion}</td>
                    <td>${perfil.año}</td>
                    <td>${perfil.empresa_desarrolladora}</td>
                    
                    <td>  <img class="img-fluid" width="100" src="${perfil.imagen}"></td>
                    <td> <button class="btn btn-dark"> Comprar  </button> </td>
                </tr> 
                `).join('')}
        </table>
        `;

        document.getElementById('info').innerHTML = tableHTML

        })
    .catch(error => console.error('Error', error))
});