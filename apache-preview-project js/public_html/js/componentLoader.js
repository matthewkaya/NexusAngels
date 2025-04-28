// Bileşenleri yüklemek için kullanılan fonksiyon
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Bileşen yüklenemedi: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Bileşen yüklenirken hata oluştu: ${error.message}`);
    }
}

// Tüm bileşenleri yükle
async function loadAllComponents() {
    // Bileşen eşleştirmeleri - ID ve dosya yolları
    const components = [
        { id: 'navbar-component', path: 'components/navbar.html' },
        { id: 'home-component', path: 'components/home.html' },
        { id: 'about-component', path: 'components/about.html' },
        { id: 'portfolio-component', path: 'components/portfolio.html' },
        { id: 'process-component', path: 'components/process.html' },
        { id: 'team-component', path: 'components/team.html' },
        { id: 'contact-component', path: 'components/contact.html' },
        { id: 'footer-component', path: 'components/footer.html' }
    ];
    
    // Tüm bileşenleri paralel olarak yükle
    const loadPromises = components.map(component => 
        loadComponent(component.id, component.path)
    );
    
    await Promise.all(loadPromises);
    
    // Bileşenler yüklendikten sonra sayfa içi navigasyon ve mobil menü işlevselliğini aktif et
    initNavigation();
    initMobileMenu();
}

// Sayfa içi navigasyon işlevselliği
function initNavigation() {
    const pageLinks = document.querySelectorAll('.page-link');
    const pageLinksMobile = document.querySelectorAll('.page-link-mobile');
    
    // Sayfa içi linklere tıklama davranışı ekle
    [...pageLinks, ...pageLinksMobile].forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aktif link stilini güncelle
            pageLinks.forEach(l => l.classList.remove('active-page'));
            pageLinksMobile.forEach(l => l.classList.remove('active-page'));
            this.classList.add('active-page');
            
            // İlgili desktopveya mobil link'i de aktif yap
            const targetId = this.getAttribute('href').substring(1);
            const siblingLink = this.classList.contains('page-link') 
                ? document.querySelector(`.page-link-mobile[href="#${targetId}"]`)
                : document.querySelector(`.page-link[href="#${targetId}"]`);
                
            if (siblingLink) {
                siblingLink.classList.add('active-page');
            }
            
            // Mobil menüyü kapat
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
            
            // Sayfaya geç
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobil menü işlevselliği
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Sayfa yüklendiğinde bileşenleri yükle
document.addEventListener('DOMContentLoaded', loadAllComponents);