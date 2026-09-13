const i18n =
        {
        pt: {
        subtitle: "Bem-vindo ao GlowStone!",
        searchPlaceholder: "Pesquise na Web...",
        searchBtn: "Buscar",
        channels: "CANAIS INTERNET",
        chNews: "📰 Notícias",
        chMail: "📧 Webmail",
        chVideos: "📺 Vídeos e Lazer",
        chDev: "💻 Programação",
        chWiki: "📚 Enciclopédia",
        chGames: "🎮 Jogos Flash",
        shortcuts: "SEUS ATALHOS MAIS VISITADOS",
        weatherTitle: "🌤️ CLIMA EM TEMPO REAL",
        weatherDesc: "Ensolarado com brisa marítima",
        sysStatus: "ℹ️ STATUS DO SISTEMA",
        lblSpeed: "Status:",
        valSpeed: "Sem Lentidão",
        valOnline: "● Conectado com Segurança",
        footer: "GlowStone StartPage Studio. Feito pra ser mais rápido"
        },
        en: {
        subtitle: "Welcome to GlowStone!",
        searchPlaceholder: "Search the Web...",
        searchBtn: "Search",
        channels: "WEB CHANNELS",
        chNews: "📰 News",
        chMail: "📧 Webmail",
        chVideos: "📺 Videos & Media",
        chDev: "💻 Programming",
        chWiki: "📚 Encyclopedia",
        chGames: "🎮 Flash Games",
        shortcuts: "MOST VISITED SHORTCUTS",
        techNews: "TECHNOLOGY HIGHLIGHTS",
        weatherTitle: "🌤️ LIVE WEATHER",
        weatherDesc: "Sunny with a ocean breeze",
        sysStatus: "ℹ️ SYSTEM STATUS",
        lblSpeed: "Status:",
        valSpeed: "Zero Lag",
        valOnline: "● Securely Connected",
        footer: "GlowStone StartPage Studio. Made to be better"
        },
        es: {
        subtitle: "Bienvenido a GlowStone",
        searchPlaceholder: "Buscar en la Web...",
        searchBtn: "Buscar",
        channels: "CANALES DE INTERNET",
        chNews: "📰 Noticias",
        chMail: "📧 Correo",
        chVideos: "📺 Videos y Ocio",
        chDev: "💻 Programación",
        chWiki: "📚 Enciclopedia",
        chGames: "🎮 Juegos Flash",
        shortcuts: "MIS ATATAJOS MÁS VISITADOS",
        techNews: "LO DESTACADO EN TECNOLOGÍA",
        weatherTitle: "🌤️ CLIMA EN TIEMPO REAL",
        weatherDesc: "Soleado con brisa marina",
        sysStatus: "ℹ️ ESTADO DEL SISTEMA",
        lblSpeed: "Estado:",
        valSpeed: "Sin Lag",
        valOnline: "● Conectado con Seguridad",
        footer: "GlowStone StartPage Studio. Creado pra ser mejor"
        }
        };

        function setLanguage(lang)
        {
        const t = i18n[lang] || i18n['en'];

        document.getElementById('sub-title').innerText = t.subtitle;
        document.getElementById('search-input').placeholder = t.searchPlaceholder;
        document.getElementById('search-btn').innerText = t.searchBtn;
        document.getElementById('lbl-channels').innerText = t.channels;
        document.getElementById('ch-news').innerText = t.chNews;
        document.getElementById('ch-mail').innerText = t.chMail;
        document.getElementById('ch-videos').innerText = t.chVideos;
        document.getElementById('ch-dev').innerText = t.chDev;
        document.getElementById('ch-wiki').innerText = t.chWiki;
        document.getElementById('ch-games').innerText = t.chGames;
        document.getElementById('lbl-shortcuts').innerText = t.shortcuts;
        document.getElementById('weather-desc').innerText = t.weatherDesc;
        document.getElementById('lbl-sys-status').innerText = t.sysStatus;
        document.getElementById('lbl-speed').innerText = t.lblSpeed;
        document.getElementById('val-speed').innerText = t.valSpeed;
        document.getElementById('val-online').innerText = t.valOnline;
        document.getElementById('lbl-footer').innerText = t.footer;

        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`btn-${lang}`).classList.add('active');
        }

        window.addEventListener('DOMContentLoaded', () => {
        const sysLang = navigator.language.slice(0, 2).toLowerCase();
        if (i18n[sysLang]) {
        setLanguage(sysLang);
        } else {
        setLanguage('en');
        }
        });