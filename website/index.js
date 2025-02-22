import html from 'html-template-tag'
import Docute from '../src'
import prismLanguages from '../src/utils/prismLanguages'
import ColorBox from './components/ColorBox.vue'

// Custom Font
const style = document.createElement('style')
style.textContent = `
                  @font-face {
                    font-family: Sahel;
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.eot');
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.eot?#iefix') format('embedded-opentype'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.woff') format('woff'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.ttf') format('truetype');
                    font-weight: normal;
                  }
                  
                  @font-face {
                    font-family: Sahel;
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Bold.eot');
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Bold.woff') format('woff'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Bold.ttf') format('truetype');
                    font-weight: bold;
                  }
                  
                  @font-face {
                    font-family: Sahel;
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Black.eot');
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Black.eot?#iefix') format('embedded-opentype'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Black.woff') format('woff'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Black.ttf') format('truetype');
                    font-weight: 900;
                  }
                  body{
                         font: 16px/1.7 Sahel,-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif!important;
                  }
            `
document.head.appendChild(style)
//

new Docute({
  target: 'app',
  title: 'مستندات شبیه‌ساز دوبعدی فوتبال',
  highlight: ['c', 'cpp', 'bash', 'json', 'markdown'],
  plugins: [process.env.NODE_ENV === 'production'].filter(Boolean),
  editLinkBase: 'https://github.com/egoist/docute/tree/master/website/docs',
  editLinkText: 'این صفحه را در گیتهاب ویرایش کنید.',
  router: {
    mode: 'history'
  },
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  sourcePath: '/',
  componentMixins: [
    {
      data() {
        return {
          builtinLanguages: prismLanguages.builtin,
          deps: __DEPS__
        }
      },
      methods: {
        insertCustomFontsCSS() {
          const ID = 'custom-fonts-css'
          const existing = document.getElementById(ID)
          if (existing) {
            existing.parentNode.removeChild(existing)
          } else {
            const style = document.createElement('style')
            style.id = ID
            style.textContent = `
                  @font-face {
                    font-family: Sahel;
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.eot');
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.eot?#iefix') format('embedded-opentype'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.woff') format('woff'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel.ttf') format('truetype');
                    font-weight: normal;
                  }
                  
                  @font-face {
                    font-family: Sahel;
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Bold.eot');
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Bold.woff') format('woff'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Bold.ttf') format('truetype');
                    font-weight: bold;
                  }
                  
                  @font-face {
                    font-family: Sahel;
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Black.eot');
                    src: url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Black.eot?#iefix') format('embedded-opentype'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Black.woff') format('woff'),
                         url('https://cdn.fontcdn.ir/Font/Persian/Sahel/Sahel-Black.ttf') format('truetype');
                    font-weight: 900;
                  }
                  body{
                         font: 16px/1.7 Sahel,-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif!important;
                  }
            `
            document.head.appendChild(style)
          }
        }
      },
      components: {
        ColorBox
      }
    }
  ],
  versions: {
    Agent2D: {
      link: '/'
    },
    Librcsc: {
      link: 'https://v3.docute.org'
    }
  },
  nav: [
    {
      title: 'مستندات',
      link: '/'
    },
    {
      title: 'نوشته‌ها',
      link: 'https://github.com/egoist/docute'
    }
  ],
  sidebar: [
    {
      title: 'پایه‌ای',
      children: [
        {
          title: 'شبیه‌ساز دوبعدی فوتبال ؟',
          link: '/'
        }
      ]
    },
    {
      title: 'پیشرفته',
      children: []
    },
    {
      title: 'منابع',
      link: '/resources'
    },
    {
      title: 'پس گفتار',
      link: '/credits'
    }
  ],
  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()}.
   ساخته شده با ❤️ در 
   <a href="https://kn2c.ir" target="_blank">
   KN2C Robotics Lab.</a>
    
    برگرفته از 
    <a href="https://docute.org/">DOCUTE</a>
     </div>
  `,
  banner: {
    template: html`
      <div class="docute-banner">
        <note :label="false">
          ما را حمایت کنید
          <a href="" target="_blank">
            از این طریق
            <ExternalLinkIcon /> </a
          >.
        </note>

      </div>
    `,
    components: {}
  }
})

Vue.component('ReverseText', {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: html`
    <div class="reverse-text">
      {{ reversedText }}
      <v-style>
        .reverse-text { border: 1px solid var(--border-color); padding: 20px;
        font-weight: bold; border-radius: 4px; }
      </v-style>
    </div>
  `,
  computed: {
    reversedText() {
      return this.text
        .split('')
        .reverse()
        .join('')
    }
  }
})

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
