const fs = require('fs')

module.exports = {
  input: ['src/**/*.{js,jsx,ts,tsx}'], // Adjust based on your file types
  output: './public/locales',
  options: {
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    lngs: ['en', 'zh', 'ko'],
    defaultLng: 'en',
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2
    },
    defaultValue: '__STRING_NOT_TRANSLATED__',
    interpolation: {
      escapeValue: false
    }
  },
  transform: function (file, enc, done) {
    const content = fs.readFileSync(file.path, enc)
    const regExp = />([^<]+)<\/[\w]+>/g
    const parser = this.parser

    let match
    while ((match = regExp.exec(content)) !== null) {
      const key = match[1].trim()
      parser.set(key, key)
    }

    done()
  }
}
