// 1. Wrap your search engine startup tasks cleanly with a safety catch block
async function initSearch() {
    const postSearch = document.getElementById("PostSearch");
    
    // Safety exit if layout doesn't feature a search bar
    if (!postSearch) return; 

    try {
        const searchData = await fetchSearchData();
        
        // Bind search behaviors safely
        postSearch.addEventListener("keyup", debounce(handlePostSearch(searchData), 500), false);
        
        if (typeof gaClickSearch === "function") {
            postSearch.addEventListener("click", gaClickSearch, false);
        }

        const menuCheckbox = document.getElementById("menu-checkbox");
        if (menuCheckbox && typeof toggleMainMenu === "function") {
            menuCheckbox.addEventListener("pointerdown", toggleMainMenu);
        }
        
        if (typeof articleProgressBar === "function") articleProgressBar();
        if (typeof headerLinking === "function") headerLinking();
        
        console.log("Search tracking module active and Fuse engine bound successfully!");
    } catch (err) {
        // FIXED: Added the required catch block to fix the syntax crash
        console.error("Search engine initialization crashed: ", err);
    }
}

// 2. Fire startup sequence cleanly matching DOM ready states
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearch, false);
} else {
    initSearch();
}

// --- YOUR ORIGINAL REST OF THE FILE FUNCTIONS (fetchSearchData, debounce, etc.) START HERE ---



// 2. Wrap your search engine startup tasks
async function initSearch() {
    const postSearch = document.getElementById("PostSearch");
    
    // Safety exit if layout doesn't feature a search bar
    if (!postSearch) return; 

    // Wait explicitly up to 3 seconds for the Fuse network script to initialize
    let attempts = 0;
    while (typeof Fuse === 'undefined' && attempts < 30) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
    }

    if (typeof Fuse === 'undefined') {
        console.error("CRITICAL: Fuse.js CDN timed out over the network.");
        return;
    }

    try {
        const searchData = await fetchSearchData();
        
        // Bind search behaviors safely
        postSearch.addEventListener("keyup", debounce(handlePostSearch(searchData), 500), false);
        
        if (typeof gaClickSearch === "function") {
            postSearch.addEventListener("click", gaClickSearch, false);
        }

        const menuCheckbox = document.getElementById("menu-checkbox");
        if (menuCheckbox && typeof toggleMainMenu === "function") {
            menuCheckbox.addEventListener("pointerdown", toggleMainMenu);
        }
        
        if (typeof articleProgressBar === "function") articleProgressBar();
        if (typeof headerLinking === "function") headerLinking();
        
        console.log("Search tracking module active and Fuse engine bound successfully!");
    } catch (err) {
        console.error("Search engine initialization crashed: ", err);
    }
}

// 3. Fire startup sequence cleanly
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearch, false);
} else {
    initSearch();
}

// --- ALL BROKEN WRAPPERS REMOVED. YOUR ORIGINAL FUNCTIONS START IMMEDIATELY BELOW ---


function gaClickSearch(){
  typeof gtag !== 'undefined' && gtag('event', "click", {
    "event_category":"SearchInput" 
  });
}

function gaSearchText(input){
  typeof gtag !== 'undefined' && gtag('event', "input", { 
    "event_category":"SearchInput", 
    "event_label": input
  });
}

function headerLinking(){
  var postContent = document.getElementById("postContent");
  if(postContent){
    var headings = postContent.querySelectorAll("h1, h2, h3, h4");
    for(var h of headings) {
      var link = headerLink('#' + h.id);
      h.insertAdjacentElement('afterbegin', link);
    }
  }
}

function headerLink(href){
  var a = document.createElement('a');
  a.textContent = "#";
  a.href = href;
  a.classList.add('heading-link');
  return a;
}

function toggleMainMenu(e) {
  const rkNav = document.getElementById("rk-nav");
  rkNav.classList.toggle("open");
}

function handlePostSearch(searchData) {
  return function (e) {
    const text = e.target.value;
    if (text) {
      gaSearchText(text);
      const results = search(text.trim(), searchData);
      const mainContentArea = mainContentElement("Search: " + text);
      updateList(mainContentArea, results.map((result) => ({
        url: result.item.url,
        title: result.item.title,
        excerpt: result.item.excerpt
      })));
    } else {
      const mainContentArea = mainContentElement("");
      updateList(mainContentArea, searchData.posts.slice(0, 10));
    }
  };
}

function updateList(mainContentArea, results) {
  for (let result of results) {
    const article = articleElement([
      titleElement(
        linkElement({ url: result.url, text: result.title })
      ),
      excerptElement({ excerpt: result.excerpt }),
    ]);
    mainContentArea.appendChild(article);
  }
}

function mainContentElement(text){
  const mainContentArea = document.getElementById("MainContentArea");
  mainContentArea.innerHTML = "";
  if(text){
    mainContentArea.appendChild(
      articleElement([titleElement(text)])
    );
  }

  return mainContentArea;
}

function articleElement(elementList) {
  const article = document.createElement("article");
  article.classList.add("listing");
  for (let el of elementList) {
    article.appendChild(el);
  }
  return article;
}

function titleElement(textElement) {
  const title = document.createElement("h2");
  if (typeof textElement === "string") {
    title.textContent = textElement;
  } else {
    title.appendChild(textElement);
  }
  return title;
}

function linkElement({ url, text }) {
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.textContent = text;
  return link;
}

function excerptElement({ excerpt }) {
  const p = document.createElement("p");
  p.textContent = excerpt;
  return p;
}

function search(text, searchData) {
  const options = {
    tokenize: true,
    matchAllTokens: true,
    threshold: 0,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    includeMatches: true,
    keys: ["title", "excerpt", "tags"],
  };
  const fuse = new Fuse(searchData.posts, options);
  return fuse.search(text);
}

async function fetchSearchData() {
  const response = await fetch("/article-data.json");
  return response.json();
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function articleProgressBar() {
  var getMax = function () {
    var windowHeight = window.innerHeight;
    var docHeight = document.body.clientHeight;
    return docHeight - windowHeight;
  };

  var scrollProgress = function () {
    return window.pageYOffset;
  };

  if ("max" in document.createElement("progress")) {
    var progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.setAttribute("max", getMax());
      progressBar.setAttribute("value", scrollProgress());

      document.addEventListener("scroll", function () {
        progressBar.setAttribute("value", scrollProgress());
      });

      window.addEventListener("resize", function () {
        progressBar.setAttribute("max", getMax());
        progressBar.setAttribute("value", scrollProgress());
      });
    }
  } else {
    var progressBar = document.getElementById("progressBarBackup"),
      max = getMax(),
      value,
      width;
    if (progressBar) {
      var getWidth = function () {
        value = scrollProgress();
        width = (value / max) * 100;
        width = width + "%";
        return width;
      };

      var setWidth = function () {
        progressBar.style.width = getWidth();
      };

      document.addEventListener("scroll", setWidth);
      window.addEventListener("resize", function () {
        max = getMax();
        setWidth();
      });
    }
  }
}
