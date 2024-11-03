document.addEventListener("DOMContentLoaded", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    setBannerHeight()
  }, true);

  const continueBtn = document.querySelector('.ui-btn.continue')
  if(continueBtn) {
    continueBtn.addEventListener('click', () => {
      const radioBtn = document.querySelector('.ui-radio:checked')
      const link = radioBtn.dataset.link

      if(link) {
        window.open(link)
      }
    })
  }

  const searchParams = new URLSearchParams(window.location.search)
  const systemLang = navigator.language
  const urlLang = searchParams.get('lang')

  async function setLang(lang) {
    try {
      const res = await fetch(`../i18n/${lang}.json`)
      const data = await res.json()

      updateUI(data)
      setBannerHeight()
    } catch(e) {
      await loadDefaultLang()
    }
  }

  async function loadDefaultLang() {
    const res = await fetch('../i18n/en.json')
    const data = await res.json()

    updateUI(data)
    setBannerHeight()
  }

  function updateUI(data) {
    const allElements = document.querySelectorAll('.lang')

    allElements.forEach(el => {
      const key = el.dataset.key
      const price = el.dataset.price

      if(data[key].includes('{{price}}')) {
        data[key] = data[key].replace('{{price}}', price)
      }

      if(data[key]) {
        el.innerHTML = data[key]
      }
    })
  }

  if(urlLang || urlLang === systemLang) {
    setLang(urlLang)
  } else {
    setLang(systemLang)
  }

 function setBannerHeight() {
    const footer = document.querySelector('.footer')
    const banner = document.querySelector('.banner')

    const footerHeight = footer.getBoundingClientRect().height
    const bannerHeight = `calc(100vh - ${footerHeight}px)`

    banner.style.height = bannerHeight
  }
})