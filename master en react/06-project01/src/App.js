
function App() {
  return (
    <div className="layout">
    {/* Cabecera */}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>Mis Pelis</h1>
    </header>

    {/* Barra de navegación */}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/* Contenido principal */}

    <section className="content">
        {/* aca van las pelis */}
        <article className="peli-item">
            <h3 className="title"> Fuego en el cielo</h3>
            <p className="description"> El cielo tiene fuego </p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article> 
    </section>

    {/* barra lateral */}
    <aside className="lateral">
        <div className="search"></div>
        <h3 className="title">Buscador</h3>
        <form>
            <input type="text" />
            <button> Buscar </button>
        </form>

        <div className="add">
            <h3 className="title"> Añadir Pelicula</h3>
            <form>
                <input type="text" aria-placeholder="Titulo" />
                <textarea placeholder="Descripción"></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    </aside>

    {/* pie de pagina */}
    <footer className="footer">
        <h3>pie de pagina</h3>
    </footer>

</div>
  );
}

export default App;
