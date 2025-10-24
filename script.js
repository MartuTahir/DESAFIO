// Contenido de las diferentes páginas
const pageContent = {
    inicio: `
        <!-- Carrusel de Imágenes -->
        <section id="inicio" class="mt-5">
            <div id="carouselCachorros" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCachorros" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#carouselCachorros" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselCachorros" data-bs-slide-to="2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://media.gettyimages.com/id/145779744/photo/miniature-schnauzer-sitting-on-a-bed.jpg?s=612x612&w=0&k=20&c=HaA5VV-U_l1uvg70aqpST7CCJNtJ5j0Dl5cgTwWr9ww=" class="d-block w-100 carousel-img" alt="Cachorro Schnauzer">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Cachorros Adorables</h5>
                            <p>Descubre el mundo mágico de los cachorros más tiernos</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop" class="d-block w-100 carousel-img" alt="Cachorro Labrador">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Compañeros Fieles</h5>
                            <p>Los mejores amigos que puedas tener</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200&h=600&fit=crop" class="d-block w-100 carousel-img" alt="Cachorros jugando">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Alegría Pura</h5>
                            <p>La felicidad en su forma más pura</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselCachorros" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselCachorros" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>

        <!-- Hero Section -->
        <section class="py-5 bg-light">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h1 class="display-4 fw-bold text-primary">Bienvenido al Mundo de los Cachorros</h1>
                        <p class="lead">Descubre todo sobre nuestros amigos de cuatro patas más adorables. Aquí encontrarás información, consejos y mucho amor perruno.</p>
                        <button class="btn btn-primary btn-lg" onclick="navigateTo('descripcion')">Conocer Más</button>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=400&fit=crop" class="img-fluid rounded-circle shadow-lg" alt="Cachorro feliz">
                    </div>
                </div>
            </div>
        </section>
    `,
    
    descripcion: `
        <!-- Sección de Descripción -->
        <section class="py-5 bg-light">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-4 mb-4">
                            <i class="fas fa-heart text-danger me-3"></i>¿Por qué amamos a los cachorros?
                        </h2>
                        <p class="lead mb-4">
                            Los cachorros son mucho más que simples mascotas; son compañeros de vida que llenan nuestros hogares de alegría, amor incondicional y momentos inolvidables.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body text-center">
                                <i class="fas fa-smile fa-3x text-warning mb-3"></i>
                                <h5 class="card-title">Alegría Infinita</h5>
                                <p class="card-text">Los cachorros tienen la capacidad única de alegrarnos el día con solo una mirada o un movimiento de cola.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body text-center">
                                <i class="fas fa-handshake fa-3x text-info mb-3"></i>
                                <h5 class="card-title">Lealtad Eterna</h5>
                                <p class="card-text">No existe un amor más puro y leal que el de un cachorro hacia su familia humana.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body text-center">
                                <i class="fas fa-gamepad fa-3x text-success mb-3"></i>
                                <h5 class="card-title">Diversión Garantizada</h5>
                                <p class="card-text">Cada día con un cachorro es una nueva aventura llena de juegos, travesuras y momentos divertidos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sección de Cuidados -->
        <section class="py-5">
            <div class="container">
                <h2 class="text-center mb-5">Cuidados Esenciales</h2>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="card border-primary">
                            <div class="card-header bg-primary text-white">
                                <h5 class="mb-0"><i class="fas fa-utensils me-2"></i>Alimentación</h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled">
                                    <li><i class="fas fa-check text-success me-2"></i>Comida específica para cachorros</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Horarios regulares de alimentación</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Agua fresca siempre disponible</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Evitar alimentos tóxicos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="card border-success">
                            <div class="card-header bg-success text-white">
                                <h5 class="mb-0"><i class="fas fa-heartbeat me-2"></i>Salud</h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled">
                                    <li><i class="fas fa-check text-success me-2"></i>Vacunación completa</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Desparasitación regular</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Revisiones veterinarias</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Higiene dental</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    galeria: `
        <!-- Galería de Imágenes -->
        <section class="py-5">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="display-4">
                            <i class="fas fa-images text-primary me-3"></i>Galería de Cachorros
                        </h2>
                        <p class="lead">Conoce diferentes razas y sus adorables cachorros</p>
                    </div>
                </div>
                <div id="gallery-content" class="row g-4">
                    <!-- El contenido se carga dinámicamente según la página -->
                </div>
            </div>
        </section>

        <!-- Paginación -->
        <section class="py-4 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="Navegación de páginas de galería">
                            <ul class="pagination justify-content-center" id="gallery-pagination">
                                <!-- La paginación se genera dinámicamente -->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    contacto: `
        <!-- Página de Contacto -->
        <section class="py-5">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="display-4">
                            <i class="fas fa-envelope text-primary me-3"></i>Contáctanos
                        </h2>
                        <p class="lead">¿Tenés preguntas sobre cachorros? ¡Estamos aquí para ayudarte!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="card shadow-lg">
                            <div class="card-body p-5">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="nombre" class="form-label">Nombre</label>
                                            <input type="text" class="form-control" id="nombre" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email" required>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="asunto" class="form-label">Asunto</label>
                                        <select class="form-select" id="asunto">
                                            <option selected>Selecciona un tema</option>
                                            <option value="cuidados">Cuidados de cachorros</option>
                                            <option value="adopcion">Adopción</option>
                                            <option value="alimentacion">Alimentación</option>
                                            <option value="entrenamiento">Entrenamiento</option>
                                            <option value="salud">Salud</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>
                                    <div class="mb-4">
                                        <label for="mensaje" class="form-label">Mensaje</label>
                                        <textarea class="form-control" id="mensaje" rows="5" required></textarea>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary btn-lg">
                                            <i class="fas fa-paper-plane me-2"></i>Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-4 text-center mb-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <i class="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
                                <h5>Ubicación</h5>
                                <p class="text-muted">Calle de los Cachorros 123<br>Ciudad Perruna, CP 12345</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center mb-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <i class="fas fa-phone fa-3x text-success mb-3"></i>
                                <h5>Teléfono</h5>
                                <p class="text-muted">+34 123 456 789<br>Lun - Vie: 9:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center mb-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <i class="fas fa-envelope fa-3x text-info mb-3"></i>
                                <h5>Email</h5>
                                <p class="text-muted">info@mundocachorros.com<br>soporte@mundocachorros.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Datos de la galería de cada página
const galleryData = {
    1: [
        { img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop", title: "Golden Retriever", desc: "Conocidos por su temperamento amigable y su hermoso pelaje dorado." },
        { img: "https://media.gettyimages.com/id/530330473/photo/labrador-retriever-dog-smiles-on-bench-outdoors.jpg?s=612x612&w=0&k=20&c=4eh-qB0g6ysq4WJ3ikXoQZvlmqei3uoENtuP2CB6X-I=", title: "Labrador", desc: "Inteligentes, leales y perfectos para familias con niños." },
        { img: "https://media.gettyimages.com/id/2181741173/photo/close-up-of-siberian-husky-on-field.jpg?s=612x612&w=0&k=20&c=ywyOHcaSyeAAiycoVY5j0WpCeo8LRlQGbm6Vg0y1KqU=", title: "Husky Siberiano", desc: "Enérgicos y aventureros, con unos ojos azules impresionantes." },
        { img: "https://media.gettyimages.com/id/1306749705/photo/close-up-of-beagle-looking-away-while-standing-on-rock-poland.jpg?s=612x612&w=0&k=20&c=0a1ytS7WQv0qV8luJ_xWN0RToZ14Q-AVrK5oPhO5ad4=", title: "Beagle", desc: "Pequeños, curiosos y con un olfato extraordinario." },
        { img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop", title: "Bulldog Francés", desc: "Compactos, cariñosos y perfectos para apartamentos." },
        { img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop", title: "Pastor Alemán", desc: "Inteligentes, protectores y extremadamente leales." }
    ],
    2: [
        { img: "https://media.gettyimages.com/id/1280555640/photo/portrait-of-dog-on-field-poland.jpg?s=612x612&w=0&k=20&c=T79o0N9bGRHHcfq7pQUCL9qqXOQiqYTVeTWkQgCXA04=", title: "Border Collie", desc: "Los más inteligentes del reino canino, perfectos para actividades." },
        { img: "https://media.gettyimages.com/id/1465997070/photo/portrait-of-white-pomeranian-on-field-indirapuram-india.jpg?s=612x612&w=0&k=20&c=wSXa71MVxjo5P1Yyt-KsPv_fyBNubZ6s8zIh7WraTxs=", title: "Pomerania", desc: "Pequeños y esponjosos, llenos de personalidad en un cuerpo diminuto." },
        { img: "https://media.gettyimages.com/id/1139766827/photo/rottweiler-watching-out-for-his-owner.jpg?s=612x612&w=0&k=20&c=JalRc_K2NTN6NQhpLYss-tXwiph7Kt7fxORXEhJ5NbM=", title: "Rottweiler", desc: "Fuertes y leales, excelentes guardianes de la familia." },
        { img: "https://media.gettyimages.com/id/2162705183/photo/cute-chihuahua-dog.jpg?s=612x612&w=0&k=20&c=QHvbid5gyOO6RfBihoxN0a-_Nurn5qGtSz6wTPrmSR8=", title: "Chihuahua", desc: "La raza más pequeña del mundo, pero con un gran corazón." },
        { img: "https://media.gettyimages.com/id/154415192/photo/dalmata.jpg?s=612x612&w=0&k=20&c=B9F7zHwpuGiXe-mhGnc0cyN9yrhcQ-B1tiTZ9oeH2p8=", title: "Dálmata", desc: "Famosos por sus manchas únicas y su energía inagotable." },
        { img: "https://media.gettyimages.com/id/518347209/photo/portrait-of-german-boxer-lying-on-a-meadow.jpg?s=612x612&w=0&k=20&c=Ln8izslCGWitOsVRs9fcKCB9Y8Oa9awziTCkrl_nMiA=", title: "Boxer", desc: "Juguetones y protectores, perfectos compañeros familiares." }
    ],
    3: [
        { img: "https://media.gettyimages.com/id/1815092037/photo/english-cocker-spaniel-in-the-garden.jpg?s=612x612&w=0&k=20&c=1D65RDlm3w3q2zZZNos_-m2N7fGd1ZJS5qFvWF7VPA0=", title: "Cocker Spaniel", desc: "Cariñosos y gentiles, con unas orejas largas adorables." },
        { img: "https://media.gettyimages.com/id/1131594586/photo/beautiful-yorkshire-terrier-playing-with-a-ball-on-a-grass.jpg?s=612x612&w=0&k=20&c=dqK9ESPOP0O7i6ohFyrcIktU3oALJNA14YK5NgQFn38=", title: "Yorkshire Terrier", desc: "Pequeños terriers llenos de valentía y carácter." },
        { img: "https://media.gettyimages.com/id/1170243723/photo/walking-shih-tzu.jpg?s=612x612&w=0&k=20&c=VDUBe7iG5E5rOM7Nou6r7EXGl343JJGCaRQzDis5KgY=", title: "Shih Tzu", desc: "Nobles y elegantes, perfectos perros de compañía." },
        { img: "https://media.gettyimages.com/id/1307728913/photo/adorable-basset-hound-puppy-sits-with-cute-expression-in-pretty-light.jpg?s=612x612&w=0&k=20&c=8UnhZfFiPQE6hPDH0YWRS_GPboM4VgyrA40xRuXJ1jw=", title: "Basset Hound", desc: "Con orejas largas y personalidad relajada, muy cariñosos." },
        { img: "https://media.gettyimages.com/id/1326977230/photo/perro-san-bernardo-ba%C3%B1%C3%A1ndose-en-el-r%C3%ADo.jpg?s=612x612&w=0&k=20&c=o5G0BKfcFe1XJolJNGw4_FpVJNcPjCW2Y2jngyretJM=", title: "San Bernardo", desc: "Gigantes gentiles, famosos por su naturaleza tranquila y amorosa." },
        { img: "https://media.gettyimages.com/id/1517434124/photo/medium-sized-gray-dog-in-the-grass-schnauze.jpg?s=612x612&w=0&k=20&c=sCwhWLqRiRSsDH6DuLXvifjmgn9xFHfzhMLrOsEQdYU=", title: "Schnauzer", desc: "Inteligentes y alertas, con su característica barba distintiva." }
    ]
};

let currentGalleryPage = 1;
const totalGalleryPages = Object.keys(galleryData).length;

// Función para cargar una página específica de la galería
function loadGalleryPage(page) {
    const galleryContent = document.getElementById('gallery-content');
    const paginationElement = document.getElementById('gallery-pagination');
    
    if (!galleryContent || !paginationElement) return;
    
    currentGalleryPage = page;
    const photos = galleryData[page] || [];
    
    // Generar HTML de las fotos
    let photosHTML = '';
    photos.forEach(photo => {
        photosHTML += `
            <div class="col-lg-4 col-md-6">
                <div class="card gallery-card">
                    <img src="${photo.img}" class="card-img-top" alt="${photo.title}">
                    <div class="card-body">
                        <h5 class="card-title">${photo.title}</h5>
                        <p class="card-text">${photo.desc}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    galleryContent.innerHTML = photosHTML;
    
    // Generar paginación
    let paginationHTML = '';
    
    // Botón Anterior
    const prevDisabled = currentGalleryPage === 1 ? 'disabled' : '';
    paginationHTML += `
        <li class="page-item ${prevDisabled}">
            <a class="page-link" href="#" onclick="event.preventDefault(); changeGalleryPage(${currentGalleryPage - 1})" tabindex="-1">Anterior</a>
        </li>
    `;
    
    // Números de página
    for (let i = 1; i <= totalGalleryPages; i++) {
        const activeClass = i === currentGalleryPage ? 'active' : '';
        paginationHTML += `
            <li class="page-item ${activeClass}">
                <a class="page-link" href="#" onclick="event.preventDefault(); changeGalleryPage(${i})">${i}</a>
            </li>
        `;
    }
    
    // Botón Siguiente
    const nextDisabled = currentGalleryPage === totalGalleryPages ? 'disabled' : '';
    paginationHTML += `
        <li class="page-item ${nextDisabled}">
            <a class="page-link" href="#" onclick="event.preventDefault(); changeGalleryPage(${currentGalleryPage + 1})">Siguiente</a>
        </li>
    `;
    
    paginationElement.innerHTML = paginationHTML;
}

// Función para cambiar de página en la galería
function changeGalleryPage(page) {
    if (page < 1 || page > totalGalleryPages) return;
    loadGalleryPage(page);
    // Scroll suave a la galería
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para navegar entre páginas
function navigateTo(page) {
    const contentDiv = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Actualizar contenido
    contentDiv.innerHTML = pageContent[page] || pageContent.inicio;
    
    // Actualizar estado activo del navbar
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + page) {
            link.classList.add('active');
        }
    });
    
    // Reinicializar componentes específicos según la página
    if (page === 'inicio') {
        // Reinicializar carrusel
        setTimeout(() => {
            const carouselElement = document.getElementById('carouselCachorros');
            if (carouselElement) {
                new bootstrap.Carousel(carouselElement);
            }
        }, 100);
    } else if (page === 'galeria') {
        // Cargar la primera página de la galería
        setTimeout(() => {
            loadGalleryPage(1);
        }, 100);
    }
    
    // Scroll al top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Actualizar URL sin recargar
    history.pushState({ page: page }, '', '#' + page);
}

// Hacer las funciones disponibles globalmente
window.changeGalleryPage = changeGalleryPage;
window.loadGalleryPage = loadGalleryPage;
window.navigateTo = navigateTo;

// Event listeners para los enlaces del navbar
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href').substring(1);
            navigateTo(page);
        });
    });
    
    // Manejar botón atrás del navegador
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.page) {
            navigateTo(e.state.page);
        } else {
            navigateTo('inicio');
        }
    });
    
    // Cargar página inicial
    const currentHash = window.location.hash.substring(1);
    navigateTo(currentHash || 'inicio');
});